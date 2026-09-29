/* =========================================================
   Diccionario de textos del sitio
   ---------------------------------------------------------
   - Para cambiar un texto: editarlo acá, en cada idioma.
   - Para agregar un idioma: copiar el bloque "en" completo,
     cambiarle la clave (ej. "pt") y traducir los valores.
     El selector de idioma lo muestra automáticamente.
   - En el HTML, cada texto se vincula con data-i18n="clave"
     (ej. data-i18n="hero.lead"). Atributos (alt, aria-label):
     data-i18n-attr="alt:clave; aria-label:otra.clave".
   - Se permite HTML simple en los valores: <em>, <strong>, <br>.
   - En "manifesto", las palabras entre *asteriscos* se
     destacan en cursiva.
   - Si falta una clave en un idioma, se usa la del idioma
     por defecto.
   ========================================================= */
window.I18N = {
  default: 'es',

  languages: {
    /* ======================= ESPAÑOL ======================= */
    es: {
      _meta: { label: 'ES', name: 'Español', htmlLang: 'es-AR' },

      meta: {
        title: 'Precission S.R.L. | Software a medida, apps y seguridad de identidades',
        description: 'Más de 20 años en el mercado de TI. Desarrollo de software a medida, consultoría, aplicaciones móviles, gestión de identidades y accesos (IAM/PAM) y outsourcing on-shore y off-shore. Santa Fe, Argentina.',
      },

      a11y: {
        home: 'Precission, volver al inicio',
        mainNav: 'Principal',
        footerNav: 'Pie de página',
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú',
        toServices: 'Ir a servicios',
        toTop: 'Volver arriba',
        language: 'Idioma',
      },

      nav: {
        services: 'Servicios',
        projects: 'Proyectos',
        method: 'Cómo trabajamos',
        team: 'Equipo',
        contact: 'Contacto',
        cta: 'Hablemos',
      },

      hero: {
        eyebrow: 'Más de 20 años en el mercado de TI',
        title1: 'Tecnología',
        title2: 'construida con',
        title3: '<em>precisión.</em>',
        lead: 'Desarrollamos software a medida, aplicaciones móviles y soluciones de identidad y accesos para empresas y gobiernos que no pueden darse el lujo de fallar.',
        ctaPrimary: 'Contanos tu proyecto',
        ctaSecondary: 'Ver proyectos',
        stat1: 'años construyendo<br>soluciones de TI',
        stat2: 'áreas de<br>especialización',
        stat3: 'shore: equipos donde<br>los necesites',
      },

      clients: {
        eyebrow: 'Confían en nosotros',
        lead: 'Empresas y organismos que eligen a Precission para construir su tecnología.',
        prevencionArt: 'Prevención ART de Sancor Seguros',
        ccu: 'CCU',
        prevencionSalud: 'Prevención Salud de Sancor Seguros',
      },

      services: {
        eyebrow: 'Qué hacemos',
        title: 'Todo lo que tu organización necesita para <em>crecer segura.</em>',
        s1Title: 'Desarrollo de software a medida',
        s1Text: 'Plataformas web y sistemas de gestión diseñados alrededor de tus procesos, no al revés. Código mantenible, escalable y pensado para durar.',
        s2Title: 'Consultoría',
        s2Text: 'Diagnóstico, arquitectura y hoja de ruta tecnológica para decidir con claridad y sin improvisar.',
        s3Title: 'Aplicaciones móviles',
        s3Text: 'Apps para iOS y Android con experiencias simples, rápidas y confiables, listas para el uso diario.',
        s4Title: 'Gestión del ciclo completo de accesos e identidades',
        s4Text: 'IAM y PAM sobre <strong>Active Directory, SAP y Google Workspace (GSuite)</strong>. Cada persona con el acceso justo, en el momento justo, con trazabilidad total.',
        s5Title: 'Outsourcing development',
        s5Text: 'Equipos de desarrollo en modalidad <strong>on-shore y off-shore</strong> que se integran a tu organización y escalan al ritmo de tu demanda.',
      },

      projects: {
        eyebrow: 'Proyectos',
        title: 'Soluciones reales, <em>en uso todos los días.</em>',
        aside: 'Del gobierno a la seguridad privada y la salud: productos que diseñamos, construimos y acompañamos en producción.',
        viewProject: 'Ver proyecto',

        portalCat: 'GovTech · Smart Cities',
        portalDesc: 'Herramienta de comunicación que colabora con los gobiernos y el ciudadano, contribuyendo en el desarrollo de <em>"ciudades más inteligentes"</em>.',
        portalChips: ['Trámites', 'Reclamos', 'Turnos', 'Noticias', 'Agenda'],
        portalAlt: 'Pantallas de la app Portal Ciudadano: trámites, reclamos, turnos y noticias',

        argosCat: 'Seguridad',
        argosDesc: 'Tecnología aplicada al negocio de la seguridad. Panel web y app móvil para gestionar vigiladores, puestos y cobertura en tiempo real.',
        argosChips: ['Monitoreo en línea', 'Puestos de seguridad', 'Geolocalización', 'Web + Mobile'],
        argosAlt: 'Panel web y app móvil de Argos con vigiladores en línea y mapa de cobertura',

        kineCat: 'Salud · App móvil',
        kineDesc: 'Te presentamos la nueva app de la Rehabilitación Laboral: rutinas guiadas, objetivos y seguimiento del paciente, desde el celular.',
        kineChips: ['Rutinas guiadas', 'Seguimiento', 'Rehabilitación laboral'],
        kineAlt: 'Pantallas de la app KineMobile con ejercicios de rehabilitación',
      },

      manifesto: 'No hacemos software genérico. Hacemos el software *exacto* que tu organización necesita: *seguro,* *escalable* y hecho para *durar.*',

      method: {
        eyebrow: 'Cómo trabajamos',
        title: 'Un proceso claro, <em>de principio a fin.</em>',
        step1Title: 'Entendemos',
        step1Text: 'Escuchamos tu negocio, relevamos procesos y definimos objetivos medibles antes de escribir una línea de código.',
        step2Title: 'Diseñamos',
        step2Text: 'Arquitectura, experiencia de usuario y seguridad planificadas desde el inicio, no como un parche al final.',
        step3Title: 'Construimos',
        step3Text: 'Entregas iterativas y visibles. Vas viendo avances reales y validando cada paso junto al equipo.',
        step4Title: 'Acompañamos',
        step4Text: 'Puesta en producción, soporte y evolución continua. Seguimos cerca cuando el proyecto ya está en uso.',
        pillar1Title: 'Seguridad por diseño',
        pillar1Text: 'Nuestra experiencia en identidades y accesos se traslada a cada proyecto.',
        pillar2Title: 'Foco en el resultado',
        pillar2Text: 'Medimos el éxito por el impacto en tu operación, no por las horas.',
        pillar3Title: 'Cercanía real',
        pillar3Text: 'Un equipo que conocés, que responde y que se compromete con tu proyecto.',
      },

      team: {
        eyebrow: 'Nuestro equipo',
        title: 'Las personas detrás de <em>cada proyecto.</em>',
        lead: 'Un equipo que combina experiencia y energía joven, y trabaja cerca de cada cliente desde el Parque Tecnológico del Litoral Centro, en Santa Fe.',
        alt: 'El equipo de Precission frente al Edificio TICs del Parque Tecnológico del Litoral Centro',
        badge: 'Parque Tecnológico del Litoral Centro · Santa Fe',
        ctaText: '¿Querés conocernos? Coordinemos una reunión y te contamos cómo trabajamos.',
        ctaButton: 'Coordinar una reunión',
      },

      whatsapp: {
        label: '¿Hablamos por WhatsApp?',
        aria: 'Escribinos por WhatsApp',
        contactLink: 'Escribinos por WhatsApp',
        message: 'Hola Precission, quiero hacer una consulta sobre un proyecto.',
      },

      contact: {
        eyebrow: '¡Escribinos!',
        title: '¿Tenés un proyecto en mente? <em>Hagámoslo realidad.</em>',
        lead: 'Envianos tus datos y pronto nos contactaremos con vos. Sin compromiso: primero entendemos lo que necesitás.',
        location: 'Santa Fe, Argentina',
        name: 'Nombre',
        nameError: 'Contanos cómo te llamás.',
        email: 'Correo',
        emailError: 'Ingresá un correo válido.',
        phone: 'Teléfono <small>(opcional)</small>',
        phoneError: 'Revisá el número.',
        message: 'Mensaje',
        messageError: 'Contanos un poco más sobre tu proyecto.',
        submit: 'Enviar mensaje',
        sending: 'Enviando…',
        note: 'Al enviar, aceptás nuestra <a href="privacidad.html">política de privacidad</a>. Usamos tus datos solo para responderte.',
        successTitle: '¡Gracias por escribirnos!',
        successText: 'Recibimos tu mensaje. Pronto nos contactaremos con vos.',
        sendAnother: 'Enviar otro mensaje',
      },

      privacy: {
        meta: {
          title: 'Política de privacidad | Precission S.R.L.',
          description: 'Cómo Precission S.R.L. recolecta, usa y protege los datos personales que nos compartís a través de este sitio, conforme a la Ley 25.326.',
        },
        eyebrow: 'Legal',
        title: 'Política de <em>privacidad.</em>',
        updated: 'Última actualización: 29 de septiembre de 2026',
        intro: 'En Precission cuidamos los datos que nos confiás. Esta política explica qué información recolectamos a través de este sitio, para qué la usamos y cómo podés ejercer tus derechos, conforme a la Ley N° 25.326 de Protección de los Datos Personales y su normativa complementaria.',
        back: 'Volver al sitio',
        toc: 'En esta página',

        s1Title: 'Responsable de los datos',
        s1Body: '<p>El responsable de la base de datos es <strong>Precission S.R.L.</strong>, con domicilio en el Parque Tecnológico del Litoral Centro (Edificio TICs), Santa Fe, Argentina.</p><p>Para cualquier consulta sobre esta política o sobre tus datos podés llamarnos o escribirnos por WhatsApp al +54 9 342 4624067.</p>',

        s2Title: 'Qué datos recolectamos',
        s2Body: '<ul><li><strong>Formulario de contacto:</strong> nombre, correo electrónico, teléfono (opcional) y el mensaje que nos envíes.</li><li><strong>WhatsApp:</strong> si nos escribís por WhatsApp, recibimos tu número y el contenido de la conversación. Ese canal se rige además por la política de privacidad de WhatsApp.</li><li><strong>Preferencia de idioma:</strong> si elegís un idioma, lo guardamos en tu propio navegador (almacenamiento local) para recordarlo en tu próxima visita. No se nos envía ni te identifica.</li></ul><p>Este sitio no utiliza cookies publicitarias ni de seguimiento. Para mostrar las tipografías usamos Google Fonts, por lo que tu navegador se conecta con los servidores de Google, que pueden registrar tu dirección IP.</p>',

        s3Title: 'Para qué los usamos',
        s3Body: '<ul><li>Responder tu consulta y darte la información o propuesta que nos pediste.</li><li>Coordinar reuniones y dar seguimiento a la conversación comercial que iniciaste.</li></ul><p>No usamos tus datos para enviarte publicidad sin tu consentimiento, y <strong>nunca vendemos ni alquilamos</strong> tu información.</p>',

        s4Title: 'Consentimiento',
        s4Body: '<p>Al completar y enviar el formulario, o al escribirnos por WhatsApp, prestás tu consentimiento libre, expreso e informado para que tratemos tus datos con las finalidades descriptas en esta política. Los datos del formulario son voluntarios; el nombre, el correo y el mensaje son necesarios para poder responderte.</p>',

        s5Title: 'Con quién los compartimos',
        s5Body: '<p>No cedemos tus datos a terceros. Solo pueden acceder a ellos los proveedores que nos ayudan a operar (por ejemplo, servicios de alojamiento web o de correo electrónico), exclusivamente para prestar ese servicio y con obligación de confidencialidad. También podríamos comunicarlos si una autoridad competente lo requiere conforme a la ley.</p>',

        s6Title: 'Cuánto tiempo los conservamos',
        s6Body: '<p>Conservamos tus datos durante el tiempo necesario para atender tu consulta y, si iniciamos una relación comercial, mientras esta se mantenga y durante los plazos que exija la ley. Cumplido ese plazo, los eliminamos o anonimizamos.</p>',

        s7Title: 'Cómo los protegemos',
        s7Body: '<p>Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra el acceso no autorizado, la pérdida o la alteración: conexiones cifradas, acceso restringido al personal que lo necesita y controles de identidad y accesos, un área en la que nos especializamos.</p>',

        s8Title: 'Tus derechos',
        s8Body: '<p>Podés ejercer en cualquier momento tus derechos de <strong>acceso, rectificación, actualización y supresión</strong> de tus datos, y retirar tu consentimiento. Para hacerlo, contactanos por teléfono o WhatsApp al +54 9 342 4624067 indicando tu nombre y el pedido. Respondemos las solicitudes de acceso dentro de los 10 días corridos y las de rectificación, actualización o supresión dentro de los 5 días hábiles, según los plazos de la Ley 25.326.</p><p class="legal__notice">El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326.</p><p class="legal__notice">La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.</p>',

        s9Title: 'Menores de edad',
        s9Body: '<p>Este sitio está dirigido a empresas y organismos. No recolectamos intencionalmente datos de menores de 18 años.</p>',

        s10Title: 'Cambios en esta política',
        s10Body: '<p>Podemos actualizar esta política para reflejar cambios en nuestras prácticas o en la normativa. Publicaremos la nueva versión en esta página con su fecha de actualización.</p>',
      },

      footer: {
        legal: 'Precission S.R.L. · Santa Fe, Argentina',
        privacy: 'Política de privacidad',
      },
    },

    /* ======================= ENGLISH ======================= */
    en: {
      _meta: { label: 'EN', name: 'English', htmlLang: 'en' },

      meta: {
        title: 'Precission S.R.L. | Custom software, apps and identity security',
        description: 'Over 20 years in the IT industry. Custom software development, consulting, mobile apps, identity and access management (IAM/PAM) and on-shore and off-shore outsourcing. Santa Fe, Argentina.',
      },

      a11y: {
        home: 'Precission, back to top',
        mainNav: 'Main',
        footerNav: 'Footer',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        toServices: 'Go to services',
        toTop: 'Back to top',
        language: 'Language',
      },

      nav: {
        services: 'Services',
        projects: 'Projects',
        method: 'How we work',
        team: 'Team',
        contact: 'Contact',
        cta: "Let's talk",
      },

      hero: {
        eyebrow: 'Over 20 years in the IT industry',
        title1: 'Technology',
        title2: 'built with',
        title3: '<em>precision.</em>',
        lead: 'We build custom software, mobile apps and identity and access solutions for companies and governments that cannot afford to fail.',
        ctaPrimary: 'Tell us about your project',
        ctaSecondary: 'See our work',
        stat1: 'years building<br>IT solutions',
        stat2: 'areas of<br>expertise',
        stat3: 'shore: teams wherever<br>you need them',
      },

      clients: {
        eyebrow: 'Trusted by',
        lead: 'Companies and public institutions that choose Precission to build their technology.',
        prevencionArt: 'Prevención ART by Sancor Seguros',
        ccu: 'CCU',
        prevencionSalud: 'Prevención Salud by Sancor Seguros',
      },

      services: {
        eyebrow: 'What we do',
        title: 'Everything your organization needs to <em>grow securely.</em>',
        s1Title: 'Custom software development',
        s1Text: 'Web platforms and management systems designed around your processes, not the other way around. Maintainable, scalable code built to last.',
        s2Title: 'Consulting',
        s2Text: 'Assessment, architecture and a technology roadmap so you can decide with clarity instead of improvising.',
        s3Title: 'Mobile apps',
        s3Text: 'iOS and Android apps with simple, fast and reliable experiences, ready for everyday use.',
        s4Title: 'Full-lifecycle identity and access management',
        s4Text: 'IAM and PAM across <strong>Active Directory, SAP and Google Workspace (GSuite)</strong>. The right access for every person, at the right time, fully traceable.',
        s5Title: 'Outsourced development',
        s5Text: '<strong>On-shore and off-shore</strong> development teams that blend into your organization and scale with your demand.',
      },

      projects: {
        eyebrow: 'Projects',
        title: 'Real solutions, <em>used every day.</em>',
        aside: 'From government to private security and healthcare: products we design, build and support in production.',
        viewProject: 'View project',

        portalCat: 'GovTech · Smart Cities',
        portalDesc: 'A communication tool that connects governments and citizens, helping build <em>"smarter cities"</em>.',
        portalChips: ['Procedures', 'Complaints', 'Appointments', 'News', 'Events'],
        portalAlt: 'Portal Ciudadano app screens: procedures, complaints, appointments and news',

        argosCat: 'Security',
        argosDesc: 'Technology applied to the security business. A web dashboard and mobile app to manage guards, posts and coverage in real time.',
        argosChips: ['Live monitoring', 'Security posts', 'Geolocation', 'Web + Mobile'],
        argosAlt: 'Argos web dashboard and mobile app showing guards online and a coverage map',

        kineCat: 'Health · Mobile app',
        kineDesc: 'Meet the new occupational rehabilitation app: guided routines, goals and patient follow-up, right from the phone.',
        kineChips: ['Guided routines', 'Follow-up', 'Occupational rehab'],
        kineAlt: 'KineMobile app screens with rehabilitation exercises',
      },

      manifesto: "We don't build generic software. We build the *exact* software your organization needs: *secure,* *scalable* and built to *last.*",

      method: {
        eyebrow: 'How we work',
        title: 'A clear process, <em>from start to finish.</em>',
        step1Title: 'Understand',
        step1Text: 'We listen to your business, map your processes and set measurable goals before writing a single line of code.',
        step2Title: 'Design',
        step2Text: 'Architecture, user experience and security planned from day one, not patched in at the end.',
        step3Title: 'Build',
        step3Text: 'Iterative, visible deliveries. You see real progress and validate every step alongside the team.',
        step4Title: 'Support',
        step4Text: 'Go-live, support and continuous improvement. We stay close once the product is in use.',
        pillar1Title: 'Security by design',
        pillar1Text: 'Our identity and access expertise carries into every project.',
        pillar2Title: 'Outcome-driven',
        pillar2Text: 'We measure success by the impact on your operations, not by hours.',
        pillar3Title: 'Truly close',
        pillar3Text: 'A team you know, that answers and is committed to your project.',
      },

      team: {
        eyebrow: 'Our team',
        title: 'The people behind <em>every project.</em>',
        lead: 'A team that blends experience with young energy, working closely with every client from the Litoral Centro Technology Park in Santa Fe, Argentina.',
        alt: 'The Precission team in front of the ICT Building at the Litoral Centro Technology Park',
        badge: 'Litoral Centro Technology Park · Santa Fe',
        ctaText: "Want to meet us? Let's set up a meeting and we'll walk you through how we work.",
        ctaButton: 'Book a meeting',
      },

      whatsapp: {
        label: 'Chat with us on WhatsApp',
        aria: 'Message us on WhatsApp',
        contactLink: 'Message us on WhatsApp',
        message: "Hi Precission, I'd like to ask about a project.",
      },

      contact: {
        eyebrow: 'Get in touch',
        title: 'Have a project in mind? <em>Let’s make it happen.</em>',
        lead: "Send us your details and we'll get back to you soon. No strings attached: first we understand what you need.",
        location: 'Santa Fe, Argentina',
        name: 'Name',
        nameError: 'Please tell us your name.',
        email: 'Email',
        emailError: 'Please enter a valid email.',
        phone: 'Phone <small>(optional)</small>',
        phoneError: 'Please check the number.',
        message: 'Message',
        messageError: 'Tell us a bit more about your project.',
        submit: 'Send message',
        sending: 'Sending…',
        note: 'By submitting, you agree to our <a href="privacidad.html">privacy policy</a>. We only use your details to reply to you.',
        successTitle: 'Thanks for reaching out!',
        successText: "We've received your message and will get back to you soon.",
        sendAnother: 'Send another message',
      },

      privacy: {
        meta: {
          title: 'Privacy policy | Precission S.R.L.',
          description: 'How Precission S.R.L. collects, uses and protects the personal data you share through this website, in accordance with Argentine Law 25,326.',
        },
        eyebrow: 'Legal',
        title: 'Privacy <em>policy.</em>',
        updated: 'Last updated: September 29, 2026',
        intro: 'At Precission we take care of the data you trust us with. This policy explains what information we collect through this website, what we use it for and how you can exercise your rights, in accordance with Argentine Personal Data Protection Law No. 25,326 and related regulations.',
        back: 'Back to the site',
        toc: 'On this page',

        s1Title: 'Data controller',
        s1Body: '<p>The data controller is <strong>Precission S.R.L.</strong>, located at the Litoral Centro Technology Park (ICT Building), Santa Fe, Argentina.</p><p>For any question about this policy or your data, you can call us or message us on WhatsApp at +54 9 342 4624067.</p>',

        s2Title: 'What data we collect',
        s2Body: '<ul><li><strong>Contact form:</strong> name, email address, phone number (optional) and the message you send us.</li><li><strong>WhatsApp:</strong> if you message us on WhatsApp, we receive your number and the content of the conversation. That channel is also governed by WhatsApp’s privacy policy.</li><li><strong>Language preference:</strong> if you choose a language, we store it in your own browser (local storage) to remember it on your next visit. It is not sent to us and does not identify you.</li></ul><p>This website does not use advertising or tracking cookies. To display fonts we use Google Fonts, so your browser connects to Google’s servers, which may log your IP address.</p>',

        s3Title: 'What we use it for',
        s3Body: '<ul><li>To answer your inquiry and provide the information or proposal you requested.</li><li>To schedule meetings and follow up on the business conversation you started.</li></ul><p>We do not use your data to send you advertising without your consent, and we <strong>never sell or rent</strong> your information.</p>',

        s4Title: 'Consent',
        s4Body: '<p>By filling in and submitting the form, or by messaging us on WhatsApp, you give your free, express and informed consent for us to process your data for the purposes described in this policy. Providing data through the form is voluntary; your name, email and message are required so we can reply.</p>',

        s5Title: 'Who we share it with',
        s5Body: '<p>We do not transfer your data to third parties. Only the providers that help us operate (for example, web hosting or email services) may access it, solely to provide that service and under a duty of confidentiality. We may also disclose it if required by a competent authority in accordance with the law.</p>',

        s6Title: 'How long we keep it',
        s6Body: '<p>We keep your data for as long as needed to handle your inquiry and, if we start a business relationship, for as long as it lasts and for the periods required by law. After that, we delete or anonymize it.</p>',

        s7Title: 'How we protect it',
        s7Body: '<p>We apply reasonable technical and organizational measures to protect your data against unauthorized access, loss or alteration: encrypted connections, access restricted to the staff who need it, and identity and access controls, an area we specialize in.</p>',

        s8Title: 'Your rights',
        s8Body: '<p>You can exercise your rights of <strong>access, rectification, update and deletion</strong> of your data at any time, and withdraw your consent. To do so, contact us by phone or WhatsApp at +54 9 342 4624067 with your name and request. We answer access requests within 10 calendar days and rectification, update or deletion requests within 5 business days, as set out in Law 25,326.</p><p class="legal__notice">The data subject has the right to access their personal data free of charge at intervals of no less than six months, unless a legitimate interest is demonstrated, as established in Article 14, paragraph 3 of Law No. 25,326.</p><p class="legal__notice">The AGENCY FOR ACCESS TO PUBLIC INFORMATION (Agencia de Acceso a la Información Pública), as the Supervisory Authority of Law No. 25,326, is empowered to handle complaints and claims filed by anyone whose rights are affected by non-compliance with the regulations in force on personal data protection.</p>',

        s9Title: 'Minors',
        s9Body: '<p>This website is aimed at companies and public institutions. We do not knowingly collect data from people under 18.</p>',

        s10Title: 'Changes to this policy',
        s10Body: '<p>We may update this policy to reflect changes in our practices or in the regulations. We will publish the new version on this page with its update date.</p>',
      },

      footer: {
        legal: 'Precission S.R.L. · Santa Fe, Argentina',
        privacy: 'Privacy policy',
      },
    },
  },
};
