// Shared behaviour for every page: theme, navigation, reveal animations, badges.
(function () {
    const root = document.documentElement;
    const store = {
        get(key) { try { return localStorage.getItem(key); } catch { return null; } },
        set(key, value) { try { localStorage.setItem(key, value); } catch { /* storage unavailable */ } },
    };

    // ----- Theme -----
    const saved = store.get("theme");
    if (saved === "light" || saved === "dark") root.dataset.theme = saved;
    else root.dataset.theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    document.querySelectorAll(".theme-toggle").forEach((btn) => {
        btn.addEventListener("click", () => {
            const next = root.dataset.theme === "dark" ? "light" : "dark";
            root.dataset.theme = next;
            store.set("theme", next);
        });
    });

    // ----- Navigation -----
    const nav = document.querySelector(".nav");
    const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const menuBtn = document.querySelector(".menu-toggle");
    const links = document.querySelector(".nav-links");
    if (menuBtn && links) {
        menuBtn.addEventListener("click", () => {
            const open = links.classList.toggle("open");
            menuBtn.setAttribute("aria-expanded", String(open));
        });
        links.addEventListener("click", (e) => {
            if (e.target.closest("a")) {
                links.classList.remove("open");
                menuBtn.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Highlight the nav link of the section in view
    const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    if (sectionLinks.length && "IntersectionObserver" in window) {
        const byId = new Map(sectionLinks.map((a) => [a.getAttribute("href").slice(1), a]));
        const spy = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                sectionLinks.forEach((a) => a.classList.remove("active"));
                const link = byId.get(entry.target.id);
                if (link) link.classList.add("active");
            });
        }, { rootMargin: "-45% 0px -50% 0px" });
        byId.forEach((_, id) => { const el = document.getElementById(id); if (el) spy.observe(el); });
    }

    // ----- Helpers shared with other scripts -----
    const fmt = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" });
    const formatDate = (iso) => fmt.format(new Date(iso + "T12:00:00"));

    let toastTimer;
    function toast(message) {
        let el = document.querySelector(".toast");
        if (!el) {
            el = document.createElement("div");
            el.className = "toast";
            el.setAttribute("role", "status");
            document.body.appendChild(el);
        }
        el.textContent = message;
        el.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
    }

    window.CV = { formatDate, toast };

    // ----- Copy email -----
    document.querySelectorAll("[data-copy]").forEach((btn) => {
        btn.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(btn.dataset.copy);
                toast("Email copied to clipboard");
            } catch {
                window.location.href = "mailto:" + btn.dataset.copy;
            }
        });
    });

    // ----- Expand / collapse long entries -----
    document.querySelectorAll(".toggle-more").forEach((btn) => {
        const target = document.getElementById(btn.getAttribute("aria-controls"));
        if (!target) return;
        btn.addEventListener("click", () => {
            const expanded = target.classList.toggle("expanded");
            btn.setAttribute("aria-expanded", String(expanded));
            btn.querySelector("span").textContent = expanded ? "Show less" : "Show more";
        });
    });

    // ----- Rotating role in the hero -----
    const typed = document.querySelector(".typed");
    if (typed && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const words = typed.dataset.words.split("|");
        let w = 0, i = words[0].length, deleting = true;
        const tick = () => {
            const word = words[w];
            i += deleting ? -1 : 1;
            typed.textContent = word.slice(0, i);
            let delay = deleting ? 45 : 85;
            if (!deleting && i === word.length) { deleting = true; delay = 2200; }
            else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 300; }
            setTimeout(tick, delay);
        };
        setTimeout(tick, 2500);
    }

    // ----- Credly badges -----
    const badgeGrid = document.getElementById("badge-grid");
    if (badgeGrid && window.BADGES) {
        badgeGrid.innerHTML = window.BADGES.map((b) => `
            <a class="card badge" href="https://www.credly.com/badges/${b.id}/public_url" target="_blank" rel="noopener">
                <img src="${b.img}" alt="" loading="lazy" width="96" height="96">
                <strong>${b.name}</strong>
                <small>Cisco · ${formatDate(b.date)}</small>
            </a>`).join("");
    }

    // ----- Featured certificates on the home page -----
    const strip = document.getElementById("cert-strip");
    if (strip && window.CERTIFICATES) {
        strip.innerHTML = window.CERTIFICATES.slice(0, 4).map((c) => `
            <a class="card cert-card" href="certificates.html#${c.id}">
                <div class="cert-thumb">
                    <img src="assets/certificates/img/${c.docs[0].file}-thumb.jpg" alt="${c.title} certificate" loading="lazy">
                    <span class="zoom">View certificate</span>
                </div>
                <div class="cert-body">
                    <h3>${c.title}</h3>
                    <span class="issuer">${c.issuer}</span>
                </div>
            </a>`).join("");
    }

    // ----- Reveal on scroll (runs last so injected content is included) -----
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        reveals.forEach((el) => io.observe(el));
    } else {
        reveals.forEach((el) => el.classList.add("revealed"));
    }

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
})();
