export interface Community {
  key: string;
  short: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  colors: [string, string];
}

export const communities: Community[] = [
  {
    key: "aiesec",
    short: "AIESEC",
    badge: "Ex AIESECa · Liderazgo",
    title: "AIESEC en Sucre",
    description:
      "Aquí comenzó mi recorrido en el voluntariado. Trabajé en Recursos Humanos y asumí distintos retos de liderazgo: Manager de Educación, OCVP y OCP del Encuentro de Familias AIESEC. Esta experiencia transformó mi manera de conectar, organizar y trabajar con otras personas.",
    tags: ["Liderazgo", "Recursos Humanos", "Eventos"],
    images: [
      "/images/aiesec0.png",
      "/images/aiesec1.JPG",
      "/images/aiesec2.png",
      "/images/aiesec3.png",
    ],
    colors: ["#a855f7", "#ec4899"],
  },
  {
    key: "gdg",
    short: "GDG",
    badge: "Organizer · GDG Sucre",
    title: "Google Developer Groups Sucre",
    description:
      "Participo en marketing, logística, acreditación, escenografía y especialmente desarrollo web. La comunidad me permite aprender en eventos como DevFest y Google I/O Extended, conectar con desarrolladores y fortalecer el trabajo en equipo.",
    tags: ["Desarrollo web", "Eventos", "Networking"],
    images: ["/images/gdg1.jpeg", "/images/gdg2.jpeg", "/images/gdg3.png"],
    colors: ["#4285f4", "#34a853"],
  },
  {
    key: "wtm",
    short: "WTM",
    badge: "Organizer · WTM Sucre",
    title: "Women Techmakers Sucre",
    description:
      "Apoyo en logística, escenografía, marketing y desarrollo web, además de participar constantemente en charlas y encuentros. Es una comunidad que impulsa mi crecimiento y me inspira a acercar nuevas oportunidades a más mujeres en tecnología.",
    tags: ["Comunidad", "Mujeres en tecnología", "Mentoría"],
    images: ["/images/wtm0.jpeg", "/images/wtm1.png", "/images/wtm3.png"],
    colors: ["#a855f7", "#f59e0b"],
  },
  {
    key: "microsoft",
    short: "MSFT",
    badge: "Voluntaria · Microsoft Sucre",
    title: "Microsoft User Group Bolivia — Sucre",
    description:
      "Colaboro en la organización de eventos y aprovecho los espacios de formación de la comunidad para explorar Azure, GitHub Copilot y otras herramientas del ecosistema Microsoft, mientras continúo construyendo una red tecnológica local.",
    tags: ["Microsoft", "Azure", "Certificaciones"],
    images: [
      "/images/microsoft0.png",
      "/images/microsoft1.png",
      "/images/microsoft2.png",
      "/images/microsoft3.png",
    ],
    colors: ["#00a4ef", "#f25022"],
  },
  {
    key: "aws",
    short: "AWS",
    badge: "Voluntaria · AWS UG Sucre",
    title: "AWS User Group Sucre",
    description:
      "Apoyo en los eventos de una comunidad local en crecimiento y, al mismo tiempo, profundizo mis conocimientos sobre computación en la nube y servicios de AWS. Es un espacio de exploración, aprendizaje y colaboración constante.",
    tags: ["Cloud Computing", "AWS", "Aprendizaje"],
    images: [
      "/images/aws0.jpeg",
      "/images/aws1.jpeg",
      "/images/aws2.jpg",
      "/images/aws3.jpeg",
    ],
    colors: ["#ff9900", "#7c3aed"],
  },
  {
    key: "tech-connect",
    short: "TECH",
    badge: "Participante · Programa de innovación",
    title: "Tech Connect",
    description:
      "Formé parte de este programa impulsado por la Embajada de Estados Unidos en Sucre. La experiencia marcó mi crecimiento tecnológico mediante formación, innovación y conexión con personas interesadas en crear soluciones con impacto.",
    tags: ["Innovación", "Tecnología", "Networking"],
    images: [
      "/images/tech1.jpeg",
      "/images/tech2.jpeg",
      "/images/tech3.jpeg",
      "/images/tech4.jpeg",
    ],
    colors: ["#ec4899", "#6366f1"],
  },
];
