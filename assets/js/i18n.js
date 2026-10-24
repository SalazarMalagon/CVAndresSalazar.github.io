// Language switching (English / Spanish).
// English is written directly in the HTML; elements marked with data-i18n="key" get the
// Spanish text from ES below. data-i18n-attr="attr:key,attr2:key2" translates attributes.
// Scripts that render content listen for the "langchange" event and use I18N.t().
(function () {
    const ES = {
        // Page metadata
        "meta.home.title": "Andres Felipe Salazar Malagon · Ingeniero de Sistemas",
        "meta.home.desc": "Ingeniero de Sistemas, desarrollador full stack y cofundador de CareFlow. Experiencia en plataformas web, datos, IA y evaluación de LLMs.",
        "meta.certs.title": "Certificados · Andres Felipe Salazar Malagon",
        "meta.certs.desc": "Certificados e insignias verificadas de Andres Felipe Salazar Malagon: Cisco, Oracle y Universidad de Helsinki.",

        // Navigation
        "nav.skip": "Saltar al contenido",
        "nav.home": "Andres Salazar, inicio",
        "nav.about": "Sobre mí",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
        "nav.skills": "Habilidades",
        "nav.certs": "Certificados",
        "nav.contact": "Contacto",
        "nav.theme": "Cambiar modo oscuro",
        "nav.menu": "Abrir menú",
        "nav.lang": "Idioma",

        // Hero
        "hero.eyebrow": "Construyendo CareFlow · Abierto a oportunidades",
        "hero.role": "Ingeniero de Sistemas",
        "hero.contact": "Contáctame",
        "hero.certs": "Certificados",
        "stats.grad": "Graduado en Ingeniería de Sistemas",
        "stats.certs": "Certificados",
        "stats.badges": "Insignias en Credly",
        "stats.projects": "Proyectos destacados",

        // About
        "about.kicker": "Sobre mí",
        "about.title": "Construyo software que resuelve problemas reales",
        "about.p1": "Ingeniero de Sistemas de la Universidad Distrital Francisco José de Caldas, enfocado en desarrollo de software full stack, datos e inteligencia artificial.",
        "about.p2": "Soy cofundador de <strong>CareFlow</strong>, una plataforma SaaS de documentación asistida de enfermería que convierte información estructurada en notas clínicas listas para revisar y aprobar, donde lidero la ingeniería. Antes evalué y mejoré Modelos de Lenguaje de gran escala como <strong>AI Training Specialist en Scale AI</strong>.",
        "about.p3": "Disfruto construir interfaces intuitivas respaldadas por backends sólidos y bien probados, y siempre estoy aprendiendo, con formación complementaria en redes y ciberseguridad.",
        "about.currently": "Actualmente",
        "about.currentlyValue": "Cofundador y Director de Ingeniería, CareFlow",
        "about.education": "Educación",
        "about.educationValue": "Ingeniería de Sistemas, 2026",
        "about.based": "Ubicación",
        "lang.spanish": "Español",
        "lang.native": "Nativo",
        "lang.english": "Inglés",
        "lang.level": "Intermedio-avanzado",

        // Experience
        "exp.kicker": "Experiencia",
        "exp.title": "Dónde he trabajado",
        "exp.cf.role": "Cofundador y Director de Ingeniería",
        "exp.cf.date": "jun 2026 – presente",
        "exp.cf.desc": "Plataforma SaaS de documentación clínica asistida para equipos de enfermería: la enfermera completa campos guiados y CareFlow genera una nota clínica estandarizada y trazable, lista para revisar y aprobar.",
        "exp.cf.b1": "Arquitectura y desarrollo full stack del producto: frontend web y backend en Supabase (PostgreSQL, Edge Functions).",
        "exp.cf.b2": "Diseño de un modelo multi-institución con aislamiento de datos mediante Row Level Security, gestión de usuarios, roles, sesiones y personalización de marca por institución.",
        "exp.cf.b3": "Modelado de datos clínicos: pacientes, borradores con autoguardado, confirmación de notas, continuidad entre turnos y políticas de retención.",
        "exp.cf.b4": "Motor de reglas clínicas generado automáticamente (Python) a partir del libro clínico validado por enfermería, con auditoría y trazabilidad de cada regla.",
        "exp.cf.b5": "Implementación de los módulos de Entrega y Recibo de turno, con una experiencia optimizada para teclado y un sistema de diseño propio.",
        "exp.cf.b6": "Aseguramiento de calidad: pruebas unitarias, de integración, de base de datos (SQL) y end-to-end con Playwright.",
        "exp.cf.b7": "CI/CD con GitHub Actions y despliegues separados para desarrollo, staging y piloto, incluyendo verificación de entornos, respaldos, rotación de llaves y controles de seguridad.",
        "exp.cf.b8": "Trabajo directo con profesionales de enfermería para traducir necesidades clínicas en requisitos de software.",
        "exp.scale.place": "Remoto (California, EE. UU.)",
        "exp.scale.date": "mar 2025 – nov 2025",
        "exp.scale.b1": "Evalué y refiné Modelos de Lenguaje de gran escala de líderes de la industria (OpenAI, Google, Meta), asegurando respuestas con altos estándares de precisión factual, coherencia lógica, seguridad y mitigación de sesgos.",
        "exp.scale.b2": "Diagnostiqué problemas complejos de razonamiento lógico, ejecución de código y pipelines de datos, entregando retroalimentación estructurada para guiar las iteraciones de ingeniería.",
        "exp.scale.b3": "Diseñé e implementé scripts y herramientas de evaluación automatizada en Python para flujos de ciencia de datos, reduciendo significativamente el tiempo de revisión manual.",
        "chip.llm": "Evaluación de LLMs",
        "chip.qa": "Automatización de QA",
        "chip.pipelines": "Pipelines de datos",

        // Projects
        "proj.kicker": "Proyectos",
        "proj.title": "Proyectos académicos",
        "proj.desc": "Desarrollados durante mi carrera de Ingeniería de Sistemas en la Universidad Distrital.",
        "proj.api.title": "Generador automático de APIs",
        "proj.api.desc": "Genera APIs REST a partir de modelos relacionales, con un flujo de XML + Docker Compose para integrar y visualizar la API generada.",
        "proj.api.date": "jun 2024 – jul 2024",
        "proj.lab.title": "Gestor de equipos de laboratorio",
        "proj.lab.desc": "Aplicación web para la venta y alquiler de equipos de laboratorio, con gestión de usuarios, seguimiento de préstamos e inventario.",
        "proj.lab.date": "ago 2024 – dic 2024",
        "proj.sql.title": "Compilador a SQL con diagramas E-R",
        "proj.sql.desc": "Un compilador que traduce un lenguaje propio a SQL y genera diagramas entidad-relación.",
        "proj.sql.date": "Compiladores",
        "proj.cnn.title": "Reconocimiento de señales de tránsito",
        "proj.cnn.desc": "Sistema de deep learning que reconoce señales de tránsito usando una red neuronal convolucional.",
        "proj.cnn.date": "ene 2024 – abr 2024",
        "proj.eps.title": "Sistema de citas médicas",
        "proj.eps.desc": "Simulación de una EPS con gestión de citas médicas sobre una base de datos relacional y una interfaz de escritorio.",
        "proj.eps.date": "ago 2023 – dic 2023",

        // Skills
        "skills.kicker": "Habilidades",
        "skills.title": "Herramientas con las que trabajo",
        "skills.languages": "Lenguajes",
        "skills.frameworks": "Frameworks y plataformas",
        "skills.devops": "DevOps y pruebas",
        "skills.data": "Datos e IA",
        "skills.soft": "Habilidades blandas",
        "soft.leadership": "Liderazgo",
        "soft.teamwork": "Trabajo en equipo",
        "soft.organization": "Organización",
        "soft.proactivity": "Proactividad",
        "soft.selflearning": "Autoaprendizaje",

        // Credentials
        "cred.kicker": "Certificados",
        "cred.title": "Certificados e insignias",
        "cred.desc": "Cursos de ciberseguridad, redes, nube e IoT. Abre cualquier certificado para verlo en tamaño completo.",
        "cred.viewAll": "Ver todos los certificados",
        "cred.badges": "Insignias de Credly",
        "cred.badgesDesc": "Insignias digitales verificadas emitidas por Cisco.",
        "cred.profile": "Perfil de Credly",

        // Education
        "edu.kicker": "Educación",
        "edu.title": "Educación",
        "edu.degree": "Ingeniería de Sistemas",
        "edu.detail": "Universidad Distrital Francisco José de Caldas · sep 2020 – sep 2026",
        "edu.status": "Graduado",

        // Contact & footer
        "contact.title": "Trabajemos juntos",
        "contact.desc": "Busco oportunidades como desarrollador de software donde pueda aportar y seguir creciendo. No dudes en escribirme.",
        "contact.email": "Enviar un correo",
        "contact.copy": "Copiar correo",
        "contact.print": "Imprimir / guardar como PDF",
        "footer.certs": "Certificados",
        "footer.resume": "CV",

        // Certificates page
        "certs.back": "Volver al CV",
        "certs.title": "Certificados",
        "certs.intro": "Cursos que completé en ciberseguridad, nube e Internet de las Cosas, varios de ellos como requisito de grado. Haz clic en cualquier certificado para verlo en tamaño completo, abrir el PDF o verificarlo.",
        "certs.filterLabel": "Filtrar por emisor",
        "certs.searchLabel": "Buscar certificados",
        "certs.search": "Buscar certificados…",
        "certs.empty": "Ningún certificado coincide con tu búsqueda.",
        "certs.badgesTitle": "Insignias verificadas",
        "certs.badgesDesc": "Insignias digitales emitidas por Cisco y verificables en Credly.",
        "viewer.close": "Cerrar",
        "viewer.prev": "Certificado anterior",
        "viewer.next": "Certificado siguiente",
        "viewer.verify": "Verificar",
        "viewer.open": "Abrir PDF",
        "viewer.download": "Descargar",
    };

    // Strings used by scripts (rendered content, messages)
    const STR = {
        en: {
            typed: "Full Stack Developer|Co-founder @ CareFlow|AI Training Specialist",
            more: "Show more",
            less: "Show less",
            copied: "Email copied to clipboard",
            viewCert: "View certificate",
            certAlt: "certificate",
            all: "All",
            certId: "Cert ID",
            "cat.Cybersecurity": "Cybersecurity",
            "cat.Cloud": "Cloud",
            "cat.IoT": "IoT",
            "doc.Certificate": "Certificate",
            "doc.Course credential": "Course credential",
            "doc.Award of Completion": "Award of Completion",
        },
        es: {
            typed: "Desarrollador Full Stack|Cofundador @ CareFlow|AI Training Specialist",
            more: "Ver más",
            less: "Ver menos",
            copied: "Correo copiado al portapapeles",
            viewCert: "Ver certificado",
            certAlt: "certificado",
            all: "Todos",
            certId: "ID del certificado",
            "cat.Cybersecurity": "Ciberseguridad",
            "cat.Cloud": "Nube",
            "cat.IoT": "IoT",
            "doc.Certificate": "Certificado",
            "doc.Course credential": "Credencial del curso",
            "doc.Award of Completion": "Certificado de finalización",
        },
    };

    const store = {
        get() { try { return localStorage.getItem("lang"); } catch { return null; } },
        set(v) { try { localStorage.setItem("lang", v); } catch { /* storage unavailable */ } },
    };

    // Remember the English originals so switching back restores them exactly
    const originals = new Map();
    document.querySelectorAll("[data-i18n]").forEach((el) => originals.set(el, el.innerHTML));
    const attrOriginals = new Map();
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
        const saved = {};
        el.dataset.i18nAttr.split(",").forEach((pair) => {
            const [attr] = pair.split(":");
            saved[attr] = el.getAttribute(attr);
        });
        attrOriginals.set(el, saved);
    });

    let lang = "en";

    function apply(next) {
        lang = next === "es" ? "es" : "en";
        document.documentElement.lang = lang;

        originals.forEach((html, el) => {
            const key = el.dataset.i18n;
            el.innerHTML = lang === "es" && ES[key] ? ES[key] : html;
        });
        attrOriginals.forEach((saved, el) => {
            el.dataset.i18nAttr.split(",").forEach((pair) => {
                const [attr, key] = pair.split(":");
                el.setAttribute(attr, lang === "es" && ES[key] ? ES[key] : saved[attr]);
            });
        });

        document.querySelectorAll(".lang-switch button").forEach((b) => {
            b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
        });
        document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
    }

    window.I18N = {
        get lang() { return lang; },
        t: (key) => STR[lang][key] ?? STR.en[key] ?? key,
        set(next) { store.set(next); apply(next); },
    };

    document.querySelectorAll(".lang-switch button").forEach((b) => {
        b.addEventListener("click", () => window.I18N.set(b.dataset.lang));
    });

    // Saved choice first, then the browser language
    const saved = store.get();
    const initial = saved || ((navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en");
    apply(initial);
})();
