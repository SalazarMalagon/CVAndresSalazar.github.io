// Certificates gallery: filters, search and a full-size viewer with deep links (#certificate-id).
(function () {
    const certs = window.CERTIFICATES || [];
    const { formatDate } = window.CV;
    const base = "assets/certificates";

    const grid = document.getElementById("cert-grid");
    const empty = document.getElementById("empty");
    const filtersEl = document.getElementById("filters");
    const search = document.getElementById("search");

    let group = "All";
    let query = "";
    let visible = certs;

    // ----- Filters -----
    const groups = ["All", ...new Set(certs.map((c) => c.group))];
    filtersEl.innerHTML = groups.map((g) => {
        const count = g === "All" ? certs.length : certs.filter((c) => c.group === g).length;
        return `<button class="filter" type="button" data-group="${g}" aria-pressed="${g === group}">${g}<span class="count">${count}</span></button>`;
    }).join("");
    filtersEl.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter");
        if (!btn) return;
        group = btn.dataset.group;
        filtersEl.querySelectorAll(".filter").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
        render();
    });
    search.addEventListener("input", () => { query = search.value.trim().toLowerCase(); render(); });

    // ----- Grid -----
    function render() {
        visible = certs.filter((c) => {
            if (group !== "All" && c.group !== group) return false;
            if (!query) return true;
            return [c.title, c.subtitle, c.issuer, c.category].join(" ").toLowerCase().includes(query);
        });
        grid.innerHTML = visible.map((c) => `
            <button class="card cert-card" type="button" data-id="${c.id}">
                <div class="cert-thumb">
                    <img src="${base}/img/${c.docs[0].file}-thumb.jpg" alt="${c.title} certificate" loading="lazy">
                    <span class="zoom">View certificate</span>
                </div>
                <div class="cert-body">
                    <h3>${c.title}</h3>
                    <span class="issuer">${c.issuer}</span>
                    <div class="row">
                        <span class="chip">${c.category}</span>
                        <span class="date">${formatDate(c.date)}</span>
                    </div>
                </div>
            </button>`).join("");
        empty.hidden = visible.length > 0;
    }
    grid.addEventListener("click", (e) => {
        const card = e.target.closest(".cert-card");
        if (card) open(card.dataset.id);
    });
    render();

    // ----- Viewer -----
    const modal = document.getElementById("viewer");
    const el = (id) => document.getElementById(id);
    const title = el("viewer-title"), sub = el("viewer-sub"), tabs = el("viewer-tabs"), img = el("viewer-img");
    const certId = el("viewer-id"), verify = el("viewer-verify"), pdf = el("viewer-pdf"), download = el("viewer-download");
    let current = null, docIndex = 0, lastFocus = null;

    function show(cert, index) {
        current = cert;
        docIndex = index;
        const doc = cert.docs[index];
        title.textContent = cert.title;
        sub.textContent = [cert.subtitle, cert.issuer, formatDate(cert.date)].filter(Boolean).join(" · ");
        img.src = `${base}/img/${doc.file}.jpg`;
        img.alt = `${cert.title}: ${doc.label}`;
        pdf.href = download.href = `${base}/pdf/${doc.file}.pdf`;
        download.setAttribute("download", `${doc.file}.pdf`);
        certId.textContent = cert.certId ? `Cert ID: ${cert.certId}` : "";
        verify.hidden = !cert.verify;
        if (cert.verify) verify.href = cert.verify;

        tabs.hidden = cert.docs.length < 2;
        tabs.innerHTML = cert.docs.map((d, i) =>
            `<button class="filter" type="button" role="tab" data-index="${i}" aria-selected="${i === index}" aria-pressed="${i === index}">${d.label}</button>`
        ).join("");

        // Prev/next follow the currently filtered list
        const list = visible.some((c) => c.id === cert.id) ? visible : certs;
        el("viewer-prev").hidden = el("viewer-next").hidden = list.length < 2;
    }

    function open(id, { updateHash = true } = {}) {
        const cert = certs.find((c) => c.id === id);
        if (!cert) return;
        lastFocus = document.activeElement;
        show(cert, 0);
        modal.hidden = false;
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
        if (updateHash) history.replaceState(null, "", "#" + id);
        el("viewer-close").focus();
    }

    function close() {
        modal.classList.remove("open");
        modal.hidden = true;
        document.body.style.overflow = "";
        history.replaceState(null, "", location.pathname + location.search);
        if (lastFocus) lastFocus.focus();
    }

    function step(dir) {
        const list = visible.some((c) => c.id === current.id) ? visible : certs;
        const i = list.findIndex((c) => c.id === current.id);
        const next = list[(i + dir + list.length) % list.length];
        show(next, 0);
        history.replaceState(null, "", "#" + next.id);
    }

    tabs.addEventListener("click", (e) => {
        const tab = e.target.closest("[data-index]");
        if (tab) show(current, Number(tab.dataset.index));
    });
    el("viewer-close").addEventListener("click", close);
    el("viewer-prev").addEventListener("click", () => step(-1));
    el("viewer-next").addEventListener("click", () => step(1));
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); });

    document.addEventListener("keydown", (e) => {
        if (modal.hidden) return;
        if (e.key === "Escape") close();
        else if (e.key === "ArrowLeft") step(-1);
        else if (e.key === "ArrowRight") step(1);
        else if (e.key === "Tab") {
            // Keep focus inside the dialog
            const focusable = [...modal.querySelectorAll("button:not([hidden]), a[href]:not([hidden])")].filter((n) => n.offsetParent);
            const first = focusable[0], last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
    });

    // Deep link from the home page: certificates.html#cisco-ethical-hacker
    if (location.hash.length > 1) open(decodeURIComponent(location.hash.slice(1)), { updateHash: false });
})();
