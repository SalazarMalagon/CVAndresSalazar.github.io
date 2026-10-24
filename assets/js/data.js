// Certificates shown on certificates.html (files live in assets/certificates/).
// Each entry can have several documents: the certificate itself and a supporting credential.
window.CERTIFICATES = [
    {
        id: "helsinki-iot",
        title: "Introduction to the Internet of Things",
        issuer: "University of Helsinki · MOOC.fi",
        group: "Helsinki",
        category: "IoT",
        date: "2026-07-21",
        verify: "https://courses.mooc.fi/certificates/validate/76ynqxm6zze39gu",
        docs: [{ label: "Certificate", file: "helsinki-iot" }],
    },
    {
        id: "cisco-seguridad-terminales",
        title: "Endpoint Security",
        titleEs: "Seguridad de Terminales",
        issuer: "Cisco Networking Academy · MinTIC",
        group: "Cisco",
        category: "Cybersecurity",
        date: "2026-07-12",
        certId: "b5161a15-12bd-4402-b240-c86fd00627b0",
        docs: [
            { label: "Certificate", file: "cisco-seguridad-terminales" },
            { label: "Course credential", file: "cisco-seguridad-terminales-credential" },
        ],
    },
    {
        id: "cisco-gestion-amenazas",
        title: "Cyber Threat Management",
        titleEs: "Administración de Amenazas Cibernéticas",
        issuer: "Cisco Networking Academy · MinTIC",
        group: "Cisco",
        category: "Cybersecurity",
        date: "2026-07-12",
        certId: "8c5cf25e-1ea7-4342-9e0a-0d088c0e694c",
        docs: [
            { label: "Certificate", file: "cisco-gestion-amenazas" },
            { label: "Course credential", file: "cisco-gestion-amenazas-credential" },
        ],
    },
    {
        id: "cisco-defensa-red",
        title: "Network Defense",
        titleEs: "Defensa de la Red",
        issuer: "Cisco Networking Academy · MinTIC",
        group: "Cisco",
        category: "Cybersecurity",
        date: "2026-07-12",
        certId: "dd85504f-97d5-4c4e-9d19-131a42991a0f",
        docs: [
            { label: "Certificate", file: "cisco-defensa-red" },
            { label: "Course credential", file: "cisco-defensa-red-credential" },
        ],
    },
    {
        id: "cisco-intro-ciberseguridad",
        title: "Introduction to Cybersecurity",
        titleEs: "Introducción a la Ciberseguridad",
        issuer: "Cisco Networking Academy · MinTIC",
        group: "Cisco",
        category: "Cybersecurity",
        date: "2026-06-16",
        certId: "f6f851f5-bc0a-40ac-bdb5-ac16880957a6",
        docs: [
            { label: "Certificate", file: "cisco-intro-ciberseguridad" },
            { label: "Course credential", file: "cisco-intro-ciberseguridad-credential" },
        ],
    },
    {
        id: "oracle-oci-foundations-ii",
        title: "Oracle Cloud Infrastructure Foundations II",
        issuer: "Oracle Academy · MinTIC AvanzaTEC",
        group: "Oracle",
        category: "Cloud",
        date: "2026-04-28",
        docs: [{ label: "Award of Completion", file: "oracle-oci-foundations-ii" }],
    },
    {
        id: "cisco-ethical-hacker",
        title: "Ethical Hacker",
        issuer: "Cisco Networking Academy",
        group: "Cisco",
        category: "Cybersecurity",
        date: "2026-04-06",
        certId: "a8a68418-698e-49fb-b601-97b07f35f876",
        verify: "https://www.credly.com/badges/afce56e1-34b5-4b72-82d4-f32d5e025626/public_url",
        docs: [
            { label: "Certificate", file: "cisco-ethical-hacker" },
            { label: "Course credential", file: "cisco-ethical-hacker-credential" },
        ],
    },
];

// Public badges from https://www.credly.com/users/andres-salazar.0553cc3f
window.CREDLY_PROFILE = "https://www.credly.com/users/andres-salazar.0553cc3f/badges";
window.BADGES = [
    { id: "afce56e1-34b5-4b72-82d4-f32d5e025626", name: "Ethical Hacker", date: "2026-04-06", img: "https://images.credly.com/images/242902b5-f527-42ad-865e-977c9e1b5b58/image.png" },
    { id: "d652e55e-2df6-4e68-a685-409cd7a4c0ae", name: "Cyber Threat Management", date: "2025-01-01", img: "https://images.credly.com/images/5d5ac32b-d239-42b8-9665-8a921dc3ab47/image.png" },
    { id: "105f25f0-bc19-4354-bb67-a40f23b6e077", name: "Endpoint Security", date: "2025-01-01", img: "https://images.credly.com/images/0ca5f542-fb5e-4a22-9b7a-c1a1ce4c3db7/EndpointSecurity.png" },
    { id: "0dccf397-0c40-45bc-8f4a-5cb09198650a", name: "Network Defense", date: "2025-01-01", img: "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png" },
    { id: "83d538be-f5ef-4b18-9a06-ae00b24fa5d9", name: "Introduction to Cybersecurity", date: "2024-12-31", img: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png" },
    { id: "aa78d979-30a7-48fc-9866-c20762e06f76", name: "Networking Devices and Initial Configuration", date: "2024-12-31", img: "https://images.credly.com/images/88316fe8-5651-4e61-a6be-5be1558f049e/image.png" },
    { id: "c38221b4-6a23-4bb6-b150-b9f7ec0866f6", name: "Network Addressing and Basic Troubleshooting", date: "2024-12-22", img: "https://images.credly.com/images/49c099bd-8542-4f48-8c03-f21799dcaf51/image.png" },
    { id: "66e55a6f-9c5d-46f4-9790-8da0e3441967", name: "Networking Basics", date: "2024-12-21", img: "https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png" },
    { id: "29e00d48-a15f-4ae5-986e-1d08fa10d1d1", name: "Network Support and Security", date: "2024-12-21", img: "https://images.credly.com/images/a4dd891f-7bf5-4938-8241-50dc81e8cc00/image.png" },
];
