export interface Community {
  badge: string;
  title: string;
  description: string;
  extra?: string;
  tags: string[];
  images: string[];
  reverse?: boolean; // para alternar imagen izquierda/derecha
}

export const communities: Community[] = [
  {
    badge: "Ex - AIESECA",
    title: "AIESEC EN SUCRE",
    description:
      "Mi recorrido en el voluntariado comenzó en AIESEC, una organización sin fines de lucro enfocada en desarrollar liderazgo en los jóvenes. En ese entonces era una persona bastante cerrada: prefería estar sola y evitaba interactuar con otras personas. AIESEC me retó a salir de mi zona de confort y me abrió los ojos a un mundo de oportunidades que no sabía que existían — fue el punto de partida de mi interés por seguir explorando otras organizaciones, comunidades y espacios de voluntariado.",
    extra:
      "Dentro de la organización formé parte del área de Recursos Humanos, donde trabajé junto a todos los miembros del equipo y participé en la organización de eventos internos. Con el tiempo me animé a asumir nuevos roles de liderazgo: pasé de ser miembro newbie a Manager de Educación, luego OCVP (vicepresidenta del comité organizador) y finalmente OCP del EFA, liderando como presidenta del comité organizador del Encuentro de Familias AIESEC. Gracias a esta experiencia aprendí a ver el networking y los eventos desde otra perspectiva, y hoy puedo decir que esa primera puerta que AIESEC me abrió cambió completamente mi forma de relacionarme con el mundo.",
    tags: ["LIDERAZGO", "ROL", "CRECIMIENTO"],
    images: [
      "/images/aiesec0.png",
      "/images/aiesec1.JPG",
      "/images/aiesec2.png",
      "/images/aiesec3.png",
      "/images/aiesec4.png",
    ],
  },
  {
    badge: "Organizer - WTM Sucre",
    title: "Comunidad Women Techmakers Sucre Sucre",
    description:
      "Actualmente soy miembro oficial de Women Techmakers, un reconocimiento que llegó gracias a mi participación constante y mi compromiso con los distintos eventos de la comunidad. Comencé como organizer, apoyando en áreas como logística, escenografía, marketing y desarrollo web, además de asistir regularmente a sus charlas y eventos.",
    extra:
      "Esta comunidad me ayudó a crecer y a resolver muchas dudas que tenía sobre mi carrera. Conocí Women Techmakers un poco tarde, pero me aportó muchísimo — por eso me encantaría que las personas que recién están entrando a esta área conozcan esta hermosa comunidad y se animen a ser parte de ella.",
    tags: ["Comunidad", "Liderazgo", "Mentoría"],
    images: [
      "/images/wtm0.jpeg",
      "/images/wtm1.png",
      "/images/wtm3.png",
      // "/images/wtm3.png",
      // "/images/wtm4.png",
    ],
    reverse: true,
  },
  {
    badge: "Organizer - GDG Sucre",
    title: "Comunidad Google Developer Groups Sucre",
    description:
      "Soy organizer de GDG Sucre (Google Developer Groups), donde participo activamente en distintas áreas del equipo: marketing, logística, acreditación, escenografía y desarrollo web — esta última siendo el área en la que más me enfoco y disfruto aportar. Formar parte de GDG me ha permitido conectar con otros desarrolladores de la región, aprender de eventos como DevFest y Google I/O Extended, y fortalecer mis habilidades tanto técnicas como de organización trabajando en equipo bajo presión y tiempos ajustados.",
    tags: ["Eventos", "Networking", "Comunidad Tech"],
    images: ["/images/gdg1.jpeg", "/images/gdg2.jpeg", "/images/gdg3.png"],
    reverse: true,
  },
  {
    badge: "Voluntario - AWS User Group Sucre",
    title: "Comunidad AWS User Group Sucre",
    description:
      "La comunidad de AWS está creciendo cada vez más en Sucre, y actualmente soy parte de ella como voluntaria, apoyando en distintos eventos según se van presentando. Como AWS es un área relativamente nueva para mí, decidí adentrarme en la comunidad como una forma de seguir aprendiendo y fortalecer mis conocimientos sobre la nube y sus servicios. Aún estoy en una etapa de exploración dentro de la comunidad, conociendo más de cerca cómo funciona y buscando el área en la que mejor pueda aportar — pero ya esta primera experiencia me ha abierto las puertas a un mundo tecnológico distinto al que estaba acostumbrada.",
    tags: ["Cloud Computing", "AWS", "Aprendizaje"],
    images: [
      "/images/aws0.jpeg",
      "/images/aws1.jpeg",
      "/images/aws2.jpg",
      "/images/aws3.jpeg",
    ],
    reverse: true,
  },
  {
    badge: "Voluntaria - Microsoft Sucre",
    title: "Comunidad Microsoft Sucre",
    description:
      "Actualmente soy voluntaria dentro de la comunidad de Microsoft Sucre (MUGB), donde ayudo en la organización de sus eventos. Aprovechando esta oportunidad, estoy tomando distintos cursos y explorando nuevas herramientas dentro del ecosistema Microsoft, ya que la comunidad nos brinda acceso a vouchers de certificación que me permiten seguir formándome. Esta experiencia me ha permitido conocer de cerca tecnologías como Azure y GitHub Copilot, además de seguir construyendo una red de contactos dentro del ecosistema tecnológico de Sucre.",
    tags: ["Microsoft", "Azure", "Certificaciones"],
    images: [
      "/images/microsoft0.png",
      "/images/microsoft1.png",
      "/images/microsoft2.png",
      "/images/microsoft3.png",
      "/images/microsoft4.png",
    ],
    reverse: true,
  },
  {
    badge: "Participación activa",
    title: "Hackaton y programas de innovación",
    description:
      "A lo largo de mi camino en tecnología he participado en distintos programas de innovación y hackatones, buscando seguir generando nuevas experiencias, conociendo personas de las que puedo aprender y explorando nuevas tecnologías. Mi primer hackatón fue en la CCBOL de Sucre, Bolivia, y más adelante participé en el Build with AI Bolivia, en Santa Cruz. En ambos eventos, mi equipo obtuvo mención honorífica. Más adelante tuve la oportunidad de formar parte de TECH CONNECT, un programa organizado por la Embajada de Estados Unidos en Sucre que marcó bastante mi crecimiento dentro del ámbito tecnológico.",
    tags: ["Hackatones", "Innovación", "Mención Honorífica"],
    images: [
      "/images/hack1.jpeg",
      "/images/hack2.jpeg",
      "/images/hack3.jpeg",
      "/images/tech3.jpeg",
      "/images/hack4.jpg",
    ],
  },
];
