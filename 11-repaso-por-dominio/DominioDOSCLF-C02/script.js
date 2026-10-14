// DATA BASE - CLF-C02 REPASO DOMINIO 2: SEGURIDAD Y CUMPLIMIENTO

const checkpointData = [
  {
    id: "cp1",
    q: "En el Modelo de Responsabilidad Compartida, ¿cuál es una responsabilidad EXCLUSIVA de AWS?",
    options: [
      "Cifrado de datos del lado del cliente",
      "Parchear el sistema operativo de instancias EC2",
      "Mantenimiento físico de la infraestructura de centros de datos",
      "Configuración de reglas de Security Groups",
    ],
    correct: 2,
  },
  {
    id: "cp2",
    q: "¿Qué mecanismo de IAM otorga permisos temporales a servicios o usuarios sin compartir credenciales de largo plazo?",
    options: ["IAM User", "IAM Policy", "IAM Role", "IAM Group"],
    correct: 2,
  },
  {
    id: "cp3",
    q: "¿Qué servicio registra todas las llamadas a la API de AWS para auditoría y gobernanza?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "AWS Artifact",
    ],
    correct: 1,
  },
  {
    id: "cp4",
    q: "¿Cuál es la función principal de AWS KMS?",
    options: [
      "Rotar contraseñas de bases de datos",
      "Generar y administrar claves de cifrado",
      "Bloquear ataques SQL Injection",
      "Escanear vulnerabilidades en código",
    ],
    correct: 1,
  },
  {
    id: "cp5",
    q: "¿Qué servicio protege aplicaciones web filtrando tráfico en la capa 7 (HTTP/HTTPS)?",
    options: ["AWS Shield", "AWS WAF", "Amazon GuardDuty", "Amazon Inspector"],
    correct: 1,
  },
];

const expressData = [
  {
    t: "Shared Responsibility Model",
    what: "AWS es responsable de la seguridad 'DE' la nube (hardware, datacenters, hipervisor). El cliente es responsable de la seguridad 'EN' la nube (datos, IAM, SO en EC2).",
    kw: "🔑 Seguridad DE la nube vs EN la nube, Parcheo de hardware vs SO",
    confuse:
      "❌ Confundir la responsabilidad de parchear el hipervisor (AWS) con el SO invitado en EC2 (Cliente).",
  },
  {
    t: "AWS IAM",
    what: "Servicio global para gestionar identidades y controlar de forma segura el acceso a los recursos de AWS.",
    kw: "🔑 Principio de menor privilegio, Políticas JSON, Usuarios, Grupos",
    confuse:
      "❌ Confundir permisos de IAM con protección perimetral de red (Security Groups).",
  },
  {
    t: "IAM Roles",
    what: "Otorga permisos temporales a servicios, aplicaciones o usuarios externos sin requerir credenciales estáticas.",
    kw: "🔑 Credenciales temporales, Asumir rol, EC2 accediendo a S3",
    confuse:
      "❌ Confundir con IAM Users (que usan credenciales fijas como contraseñas o claves de acceso).",
  },
  {
    t: "IAM Policies",
    what: "Documentos JSON que definen explícitamente qué acciones están permitidas (Allow) o denegadas (Deny) sobre recursos.",
    kw: "🔑 Documento JSON, Allow/Deny explícito, Adjunto a usuarios/roles",
    confuse:
      "❌ Confundir con Security Groups (que son reglas de firewall de red, no autorizaciones API).",
  },
  {
    t: "MFA (Multi-Factor Authentication)",
    what: "Capa adicional de seguridad que requiere un segundo factor de autenticación además de la contraseña.",
    kw: "🔑 Autenticación de dos factores, Token virtual/físico, Protección adicional",
    confuse:
      "❌ Pensar que la contraseña compleja reemplaza la necesidad de habilitar MFA.",
  },
  {
    t: "IAM Identity Center",
    what: "Punto de acceso centralizado para gestionar el inicio de sesión único (SSO) en múltiples cuentas de AWS y aplicaciones.",
    kw: "🔑 Single Sign-On (SSO), Acceso multi-cuenta, AWS Organizations",
    confuse:
      "❌ Confundir con Amazon Cognito (diseñado para autenticar usuarios finales en aplicaciones de clientes).",
  },
  {
    t: "AWS KMS",
    what: "Servicio administrado para crear, controlar y gestionar claves de cifrado de datos.",
    kw: "🔑 Claves de cifrado (KMS Keys), Cifrado en reposo, Encriptación masiva",
    confuse:
      "❌ Confundir con Secrets Manager (diseñado para guardar y rotar texto sensible como contraseñas).",
  },
  {
    t: "AWS Secrets Manager",
    what: "Servicio para guardar, rotar, recuperar y gestionar credenciales de bases de datos y claves API de forma segura.",
    kw: "🔑 Rotación automática de credenciales, Contraseñas de bases de datos",
    confuse:
      "❌ Confundir con Systems Manager Parameter Store (que almacena variables pero no rota credenciales automáticamente).",
  },
  {
    t: "AWS WAF",
    what: "Firewall de aplicaciones web que filtra el tráfico HTTP/HTTPS en la capa 7 para proteger contra exploits comunes.",
    kw: "🔑 Capa 7, SQL Injection, Cross-Site Scripting (XSS), Reglas de tráfico web",
    confuse:
      "❌ Confundir con AWS Shield (diseñado para protección contra ataques DDoS masivos en capas 3 y 4).",
  },
  {
    t: "AWS Shield",
    what: "Servicio gestionado de protección contra ataques de denegación de servicio distribuido (DDoS).",
    kw: "🔑 Protección DDoS, Capas 3 y 4 (SYN floods), Shield Standard vs Advanced",
    confuse:
      "❌ Confundir con AWS WAF (que analiza el contenido de las peticiones HTTP/HTTPS).",
  },
  {
    t: "Amazon GuardDuty",
    what: "Servicio inteligente de detección de amenazas que monitorea continuamente logs para identificar actividad maliciosa.",
    kw: "🔑 Detección de amenazas, Threat Intelligence, Análisis de VPC Flow Logs/CloudTrail, Machine Learning",
    confuse:
      "❌ Confundir con Amazon Inspector (que escanea vulnerabilidades en código e instancias, no patrones anómalos de red).",
  },
  {
    t: "Amazon Inspector",
    what: "Servicio automatizado de gestión de vulnerabilidades que escanea cargas de trabajo en EC2 e imágenes en ECR.",
    kw: "🔑 Escaneo de vulnerabilidades, Software conocido (CVEs), Parches faltantes",
    confuse:
      "❌ Confundir con GuardDuty (Inspector busca vulnerabilidades en reposo, GuardDuty detecta ataques activos).",
  },
  {
    t: "AWS CloudTrail",
    what: "Registra, monitorea y retiene el historial de llamadas a la API y eventos dentro de una cuenta de AWS.",
    kw: "🔑 Historial de APIs, Auditoría de acciones, '¿Quién hizo qué y cuándo?'",
    confuse:
      "❌ Confundir con Amazon CloudWatch (que monitorea métricas de rendimiento y estado de recursos).",
  },
  {
    t: "AWS Config",
    what: "Evalúa, audita y registra de forma continua las configuraciones de los recursos de AWS para asegurar el cumplimiento.",
    kw: "🔑 Historial de configuración de recursos, Cumplimiento de reglas, Auditoría de cambios",
    confuse:
      "❌ Confundir con CloudTrail (Config rastrea el estado de los recursos, CloudTrail rastrea quién llamó a la API).",
  },
  {
    t: "AWS Artifact",
    what: "Portal bajo demanda para acceder gratuitamente a informes de auditoría, certificaciones e acuerdos de cumplimiento de AWS.",
    kw: "🔑 Informes de cumplimiento, SOC, PCI-DSS, Acuerdos de confidencialidad",
    confuse:
      "❌ Confundir con AWS Security Hub (que evalúa el estado técnico de seguridad en tiempo real).",
  },
  {
    t: "AWS Trusted Advisor",
    what: "Herramienta de recomendaciones en tiempo real que evalúa tu cuenta en 5 pilares: Seguridad, Costos, Rendimiento, Tolerancia a fallos y Cuotas.",
    kw: "🔑 Recomendaciones automáticas, Puertos abiertos (0.0.0.0/0), Verificación de MFA en Root",
    confuse:
      "❌ Confundir con AWS Security Hub (Trusted Advisor da consejos generales de optimización, Security Hub unifica hallazgos de seguridad).",
  },
];

const comparacionesData = [
  {
    title: "CloudTrail vs CloudWatch vs AWS Config",
    comparisons: [
      {
        prob: "¿Quién ejecutó el comando para borrar una base de datos a las 3 AM?",
        correct: "AWS CloudTrail",
        kw: "Registro de llamadas API / Auditoría de usuarios",
      },
      {
        prob: "¿Cuál es la utilización de CPU de mi servidor web en los últimos 30 minutos?",
        correct: "Amazon CloudWatch",
        kw: "Métricas de rendimiento / Alarma de uso",
      },
      {
        prob: "¿Qué cambios sufrió la configuración de un Security Group la semana pasada?",
        correct: "AWS Config",
        kw: "Historial de configuración de recursos / Reglas de cumplimiento",
      },
    ],
  },
  {
    title: "AWS WAF vs AWS Shield",
    comparisons: [
      {
        prob: "Proteger un sitio web contra inyecciones SQL y Scripts entre sitios (XSS)",
        correct: "AWS WAF",
        kw: "Capa 7 (HTTP/HTTPS) / Reglas de filtrado web",
      },
      {
        prob: "Mitigar un ataque masivo de inundación de tráfico UDP/SYN (DDoS)",
        correct: "AWS Shield",
        kw: "Protección DDoS / Capas 3 y 4 de red",
      },
    ],
  },
  {
    title: "Amazon GuardDuty vs Amazon Inspector",
    comparisons: [
      {
        prob: "Detectar si una instancia EC2 está comunicándose con una botnet conocida mediante análisis de logs",
        correct: "Amazon GuardDuty",
        kw: "Detección de amenazas / Comportamiento anómalo / Machine Learning",
      },
      {
        prob: "Identificar si un servidor tiene software desactualizado o vulnerabilidades CVE conocidas",
        correct: "Amazon Inspector",
        kw: "Escaneo de vulnerabilidades / Software sin parches",
      },
    ],
  },
  {
    title: "AWS KMS vs AWS Secrets Manager",
    comparisons: [
      {
        prob: "Cifrar el contenido de un bucket de Amazon S3 en reposo mediante una clave administrada",
        correct: "AWS KMS",
        kw: "Gestión de claves de cifrado (Encryption Keys)",
      },
      {
        prob: "Almacenar y rotar automáticamente las credenciales de conexión a RDS cada 30 días",
        correct: "AWS Secrets Manager",
        kw: "Rotación automática de contraseñas y secretos",
      },
    ],
  },
  {
    title: "AWS IAM vs Amazon Cognito",
    comparisons: [
      {
        prob: "Controlar qué administradores y desarrolladores pueden crear recursos en la cuenta de AWS",
        correct: "AWS IAM",
        kw: "Acceso a la infraestructura de AWS / Empleados e ingenieros",
      },
      {
        prob: "Permitir que los clientes de una app móvil registren su cuenta e inicien sesión con Google/Facebook",
        correct: "Amazon Cognito",
        kw: "Autenticación de usuarios finales / App móvil y web",
      },
    ],
  },
  {
    title: "AWS Artifact vs AWS Security Hub",
    comparisons: [
      {
        prob: "Descargar un informe oficial de auditoría PCI-DSS o SOC 2 para entregárselo a un auditor externo",
        correct: "AWS Artifact",
        kw: "Documentos e informes de cumplimiento oficial de AWS",
      },
      {
        prob: "Ver un panel consolidado de la postura de seguridad global y las alertas de múltiples herramientas",
        correct: "AWS Security Hub",
        kw: "Consolidación de hallazgos de seguridad / Postura técnica",
      },
    ],
  },
  {
    title: "IAM User vs IAM Role",
    comparisons: [
      {
        prob: "Asignar un usuario permanente a una persona específica con un nombre y contraseña fijos",
        correct: "IAM User",
        kw: "Identidad permanente para personas",
      },
      {
        prob: "Permitir que una instancia EC2 lea datos de un bucket de Amazon S3 sin guardar claves en el código",
        correct: "IAM Role",
        kw: "Permisos temporales para servicios o identidades externas",
      },
    ],
  },
];

const escenariosData = [
  {
    id: 1,
    question:
      "Un oficial de seguridad necesita investigar qué usuario modificó las reglas de un Security Group la noche anterior, comprometiendo la red de la empresa.",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "Amazon Inspector",
    ],
    correct: 1,
    kw: "Quién modificó recurso, registro de llamadas API, historia de acciones.",
    explanation:
      "AWS CloudTrail audita y registra el historial de todas las API ejecutadas en la cuenta, identificando usuario, hora e IP de origen.",
    distractors:
      "CloudWatch monitorea métricas operativas. AWS Config rastrea los cambios del estado del recurso pero no quién ejecutó la llamada API específica. Inspector busca vulnerabilidades en código/SO.",
  },
  {
    id: 2,
    question:
      "Una compañía sospecha que algunas de sus instancias EC2 están siendo utilizadas para minar criptomonedas debido a tráfico saliente extraño detectado mediante patrones de red.",
    options: [
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Trusted Advisor",
      "Amazon Cognito",
    ],
    correct: 1,
    kw: "Detectar actividad sospechosa, minado de cripto, anomalías de red.",
    explanation:
      "Amazon GuardDuty es un servicio con Inteligencia Artificial que analiza VPC Flow Logs y CloudTrail para detectar comportamientos maliciosos como minería o botnets.",
    distractors:
      "WAF filtra peticiones web entrantes. Trusted Advisor ofrece sugerencias de optimización general. Cognito gestiona usuarios finales.",
  },
  {
    id: 3,
    question:
      "Un sitio web de comercio electrónico necesita protegerse contra ataques de SQL Injection y Cross-Site Scripting (XSS) que intentan explotar su formulario de pagos.",
    options: ["AWS Shield Standard", "AWS WAF", "Amazon GuardDuty", "AWS KMS"],
    correct: 1,
    kw: "SQL Injection, XSS, Filtrar tráfico capa 7 HTTP/HTTPS.",
    explanation:
      "AWS WAF inspecciona peticiones web a nivel de capa 7 para bloquear ataques como SQLi o XSS mediante reglas personalizadas.",
    distractors:
      "Shield protege contra DDoS en capas 3 y 4. GuardDuty detecta amenazas tras el análisis de logs. KMS maneja claves de encriptación.",
  },
  {
    id: 4,
    question:
      "Una aplicación requiere conectarse a una base de datos de Amazon RDS. Por políticas internas, la contraseña de acceso debe cambiar cada 60 días sin intervención manual.",
    options: [
      "AWS KMS",
      "AWS Key Management Service",
      "AWS Secrets Manager",
      "Amazon Cognito",
    ],
    correct: 2,
    kw: "Almacenar credenciales, rotación automática sin código manual.",
    explanation:
      "AWS Secrets Manager permite guardar contraseñas y rotarlas automáticamente integración mediante funciones Lambda.",
    distractors:
      "KMS administra las claves matemáticas para encriptar, pero no rota el contenido de las contraseñas en bases de datos.",
  },
  {
    id: 5,
    question:
      "Una institución médica debe encriptar de forma obligatoria todos sus archivos médicos guardados en Amazon S3 mediante claves matemáticas bajo su propio control.",
    options: ["AWS KMS", "AWS Secrets Manager", "AWS WAF", "AWS CloudTrail"],
    correct: 0,
    kw: "Cifrar datos en reposo, generación y control de claves.",
    explanation:
      "AWS KMS se utiliza para la creación y gestión centralizada de claves de cifrado (Encryption Keys) para cifrar datos en reposo.",
    distractors:
      "Secrets Manager guarda texto confidencial como tokens o contraseñas. CloudTrail solo audita logs.",
  },
  {
    id: 6,
    question:
      "Un auditor exige la entrega del informe de cumplimiento ISO 27001 que certifique la infraestructura física de los datacenters de AWS.",
    options: [
      "AWS Security Hub",
      "AWS Artifact",
      "AWS Trusted Advisor",
      "AWS Config",
    ],
    correct: 1,
    kw: "Informe de cumplimiento, certificación de auditoría, documentos de terceros.",
    explanation:
      "AWS Artifact es el portal donde los clientes descargan libremente los informes de auditoría y cumplimiento normativo de AWS (ISO, SOC, PCI).",
    distractors:
      "Security Hub es una consola técnica de seguridad. Trusted Advisor da recomendaciones de uso. Config valida reglas en los recursos del usuario.",
  },
  {
    id: 7,
    question:
      "Un equipo de desarrollo quiere conceder a una aplicación ejecutada en una instancia EC2 el permiso de subir imágenes a Amazon S3 sin incrustar Access Keys estáticas en el código.",
    options: [
      "Crear un IAM User e incrustar claves",
      "Asignar un IAM Role a la instancia EC2",
      "Usar Amazon Cognito",
      "Habilitar AWS Shield",
    ],
    correct: 1,
    kw: "Acceso de servicio a servicio, evitar credenciales estáticas, permisos temporales.",
    explanation:
      "Los IAM Roles otorgan credenciales temporales seguras a recursos de AWS como instancias EC2 para interactuar con otros servicios.",
    distractors:
      "Incrustar claves de IAM User es una pésima práctica de seguridad. Cognito es para usuarios finales de aplicaciones.",
  },
  {
    id: 8,
    question:
      "Según el Modelo de Responsabilidad Compartida de AWS, ¿cuál de las siguientes tareas recae totalmente del lado del cliente cuando utiliza Amazon EC2?",
    options: [
      "Mantenimiento del hardware del servidor",
      "Instalación de parches de seguridad en el Sistema Operativo de la instancia",
      "Parchear el software del hipervisor",
      "Asegurar las instalaciones físicas del datacenter",
    ],
    correct: 1,
    kw: "Responsabilidad del cliente, seguridad EN la nube, Instancia EC2.",
    explanation:
      "En IaaS (como EC2), el cliente es responsable de todo lo configurado dentro del servidor, incluido el SO, parches y aplicaciones.",
    distractors:
      "El hardware, la seguridad física y el hipervisor son responsabilidad exclusiva de AWS ('DE' la nube).",
  },
];

const preguntasData = [
  {
    id: 1,
    type: "Reconocimiento",
    q: "¿Qué servicio analiza automáticamente imágenes de contenedores en Amazon ECR para detectar software desactualizado o vulnerabilidades?",
    options: [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Shield",
      "AWS Config",
    ],
    correct: 1,
  },
  {
    id: 2,
    type: "Reconocimiento",
    q: "¿Qué característica de IAM obliga a un usuario a proporcionar un código temporal enviado a su teléfono móvil antes de acceder a la consola?",
    options: [
      "IAM Role",
      "Multi-Factor Authentication (MFA)",
      "IAM Policy",
      "SSO Single Sign-On",
    ],
    correct: 1,
  },
  {
    id: 3,
    type: "Reconocimiento",
    q: "¿Qué herramienta integrada de AWS brinda recomendaciones sobre si la cuenta tiene puertos de red expuestos excesivamente (0.0.0.0/0)?",
    options: [
      "AWS Artifact",
      "AWS Trusted Advisor",
      "AWS KMS",
      "Amazon Cognito",
    ],
    correct: 1,
  },
  {
    id: 4,
    type: "Comparación",
    q: "¿En qué se diferencia AWS WAF de AWS Shield?",
    options: [
      "WAF filtra contenido HTTP/HTTPS en la capa 7; Shield previene ataques DDoS en las capas 3 y 4.",
      "Shield solo sirve para cifrar datos; WAF administra contraseñas.",
      "WAF es responsabilidad exclusiva de AWS; Shield es responsabilidad del cliente.",
      "WAF sustituye la necesidad de usar IAM Roles.",
    ],
    correct: 0,
  },
  {
    id: 5,
    type: "Comparación",
    q: "¿Cuál es la diferencia fundamental entre AWS CloudTrail y Amazon CloudWatch?",
    options: [
      "CloudTrail monitorea la temperatura del procesador; CloudWatch administra la red.",
      "CloudTrail registra eventos de API y auditoría; CloudWatch monitorea métricas, rendimiento y alarmas.",
      "CloudWatch es un servicio de seguridad; CloudTrail es solo para bases de datos.",
      "No hay diferencia, son el mismo servicio.",
    ],
    correct: 1,
  },
  {
    id: 6,
    type: "Comparación",
    q: "¿En qué se diferencian AWS KMS y AWS Secrets Manager?",
    options: [
      "KMS maneja claves para cifrar datos en reposo; Secrets Manager almacena y rota credenciales de bases de datos.",
      "Secrets Manager es gratuito y KMS es pagado.",
      "KMS bloquea ataques SQLi y Secrets Manager detiene ataques DDoS.",
      "Secrets Manager administra los permisos de los usuarios IAM.",
    ],
    correct: 0,
  },
  {
    id: 7,
    type: "Escenario",
    q: "Una arquitectura requiere consolidar todos los hallazgos de seguridad provenientes de GuardDuty, Inspector y Macie en una sola consola unificada. ¿Qué servicio debe activar?",
    options: [
      "AWS Security Hub",
      "AWS Artifact",
      "AWS Config",
      "Amazon CloudWatch",
    ],
    correct: 0,
  },
  {
    id: 8,
    type: "Escenario",
    q: "Una empresa desea que sus usuarios internos inicien sesión en múltiples cuentas de AWS con una sola combinación de credenciales integrada con Active Directory. ¿Qué servicio ofrece esta funcionalidad?",
    options: [
      "AWS IAM Identity Center (AWS SSO)",
      "AWS KMS",
      "Amazon Cognito",
      "AWS Secrets Manager",
    ],
    correct: 0,
  },
];

const simulacroData = [
  {
    id: 1,
    q: "En el modelo de responsabilidad compartida, ¿quién es responsable de asegurar que el tráfico hacia una base de datos Amazon RDS esté restringido mediante reglas de firewall de base de datos?",
    options: ["AWS", "El cliente", "Terceros auditores", "Amazon Inspector"],
    correct: 1,
    concept: "Shared Responsibility / Base de datos",
    confusion:
      "Confundir administración de datos con infraestructura de la base de datos.",
  },
  {
    id: 2,
    q: "¿Qué servicio es el más adecuado para identificar si la clave Root de la cuenta no tiene habilitado MFA?",
    options: ["AWS Trusted Advisor", "Amazon GuardDuty", "AWS WAF", "AWS KMS"],
    correct: 0,
    concept: "AWS Trusted Advisor / Auditoría de Seguridad",
    confusion:
      "Confundir recomendaciones de postura con servicios de encriptación.",
  },
  {
    id: 3,
    q: "Un desarrollador necesita almacenar un token de API de un servicio externo y requiere que el sistema lo cambie de forma automática de forma periódica. ¿Qué servicio debe utilizar?",
    options: [
      "AWS KMS",
      "AWS Systems Manager Parameter Store",
      "AWS Secrets Manager",
      "AWS IAM",
    ],
    correct: 2,
    concept: "AWS Secrets Manager",
    confusion:
      "Confundir KMS (claves de cifrado) con Secrets Manager (rotación de credenciales).",
  },
  {
    id: 4,
    q: "¿Qué servicio debe usar un equipo de seguridad para ser alertado si un usuario intenta autenticarse repetidamente desde una dirección IP maliciosa conocida?",
    options: [
      "AWS Shield",
      "Amazon GuardDuty",
      "AWS CloudTrail",
      "AWS Artifact",
    ],
    correct: 1,
    concept: "Amazon GuardDuty",
    confusion:
      "Confundir registro de llamadas (CloudTrail) con análisis inteligente de amenazas (GuardDuty).",
  },
  {
    id: 5,
    q: "¿Qué documento o política de IAM otorga explícitamente permisos mediante un archivo con sintaxis JSON?",
    options: ["IAM User", "IAM Role", "IAM Policy", "IAM Group"],
    correct: 2,
    concept: "IAM Policy",
    confusion:
      "Confundir las identidades (User/Role) con el documento de permisos (Policy).",
  },
];

const cierreServicios = [
  "Shared Responsibility Model: Divide la seguridad 'DE' la nube (AWS) y 'EN' la nube (Cliente).",
  "AWS IAM: Administra identidades, usuarios, grupos y permisos basados en menor privilegio.",
  "IAM Roles: Otorga credenciales temporales a aplicaciones o servicios sin claves fijas.",
  "IAM Policies: Documentos JSON que definen explícitamente permisos (Allow/Deny).",
  "AWS MFA: Autenticación multifactor para añadir una capa de protección crítica.",
  "IAM Identity Center: Centraliza el inicio de sesión único (SSO) para múltiples cuentas de AWS.",
  "AWS KMS: Crea y administra claves matemáticas de cifrado para datos en reposo.",
  "AWS Secrets Manager: Almacena y rota automáticamente contraseñas y claves API.",
  "AWS WAF: Firewall capa 7 para detener SQL Injection, XSS y reglas de tráfico HTTP.",
  "AWS Shield: Protección gestionada contra ataques de denegación de servicio (DDoS).",
  "Amazon GuardDuty: Detección inteligente de amenazas analizando logs mediante ML.",
  "Amazon Inspector: Escaneo automático de vulnerabilidades e parches en EC2 y ECR.",
  "AWS CloudTrail: Registra y audita 'quién realizó qué llamada a la API y cuándo'.",
  "AWS Config: Evalúa el historial de cambios y el cumplimiento de los recursos.",
  "AWS Artifact: Descarga gratuita de reportes oficiales de auditoría y certificaciones.",
];

const cierreTrampas = [
  "No asumas que AWS respalda automáticamente tus datos: el respaldo de datos es responsabilidad del CLIENTE.",
  "CloudTrail registra acciones API ('quién hizo qué'); CloudWatch monitorea rendimiento (CPU, RAM).",
  "Inspector busca vulnerabilidades en código y SO en reposo; GuardDuty detecta intrusiones activas en tiempo real.",
  "WAF actúa en Capa 7 (HTTP); Shield actúa en Capas 3 y 4 (DDoS de red).",
  "KMS maneja claves de cifrado; Secrets Manager rota las contraseñas y credenciales.",
  "Trusted Advisor ofrece recomendaciones generales; Security Hub centraliza alertas e hallazgos de seguridad.",
  "Nunca incrustes Access Keys en el código de instancias EC2; utiliza siempre un IAM Role.",
  "El usuario Root NUNCA debe usarse para tareas cotidianas; crea usuarios IAM o usa SSO.",
  "IAM Policies por defecto deniegan todo acceso si no existe un 'Allow' explícito.",
  "AWS Artifact NO es una consola interactiva de seguridad, es un repositorio de documentos en PDF para auditores.",
];

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderCheckpoint();
  renderExpress();
  renderComparaciones();
  renderEscenarios();
  renderPreguntas();
  renderSimulacro();
  renderCierre();
//   startTimer();
});

// NAVIGATION
function initNavigation() {
  const btns = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".section-block");
  const progressBar = document.getElementById("main-progress");

  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));

      btn.classList.add("active");
      const target = btn.getAttribute("data-section");
      document.getElementById(target).classList.add("active");

      const progress = ((index + 1) / btns.length) * 100;
      progressBar.style.width = `${progress}%`;
    });
  });
}

// RENDERERS
function renderCheckpoint() {
  const container = document.getElementById("checkpoint-cards");
  container.innerHTML = checkpointData
    .map(
      (item, idx) => `
        <div class="card">
            <h4>Pregunta ${idx + 1}</h4>
            <p style="margin-bottom:12px;">${item.q}</p>
            <div class="options-list">
                ${item.options
                  .map(
                    (opt, oIdx) => `
                    <div class="option-item" onclick="selectOption(this, '${item.id}')" data-value="${oIdx}">
                        ${opt}
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `,
    )
    .join("");
}

function selectOption(el, groupId) {
  const parent = el.parentElement;
  parent
    .querySelectorAll(".option-item")
    .forEach((opt) => opt.classList.remove("selected"));
  el.classList.add("selected");
}

function evaluarCheckpoint() {
  let score = 0;
  checkpointData.forEach((item) => {
    const selected = document.querySelector(`[onclick*="${item.id}"].selected`);
    if (selected) {
      const val = parseInt(selected.getAttribute("data-value"));
      if (val === item.correct) score++;
    }
  });

  const resCard = document.getElementById("checkpoint-score");
  resCard.classList.remove("hidden");
  resCard.innerHTML = `
        <h3>Resultado Checkpoint: ${score} / ${checkpointData.length}</h3>
        <p>${score >= 4 ? "¡Excelente ritmo inicial! Dominas los pilares básicos." : "Atención: Refuerza las bases del Modelo de Responsabilidad e IAM."}</p>
    `;
}

function renderExpress() {
  const container = document.getElementById("express-grid");
  container.innerHTML = expressData
    .map(
      (item) => `
        <div class="card">
            <h3>${item.t}</h3>
            <p style="margin-bottom:8px;"><strong>¿QUÉ HACE?</strong><br>${item.what}</p>
            <span class="kw-badge">${item.kw}</span><br>
            <span class="confuse-badge">${item.confuse}</span>
        </div>
    `,
    )
    .join("");
}

function renderComparaciones() {
  const container = document.getElementById("comparaciones-list");
  container.innerHTML = comparacionesData
    .map(
      (item) => `
        <div class="card">
            <h3>${item.title}</h3>
            ${item.comparisons
              .map(
                (c) => `
                <div style="margin-bottom:12px; padding:10px; background:#0f172a; border-radius:6px;">
                    <p style="color:var(--text-muted); font-size:0.85rem;"><strong>PROBLEMA:</strong> ${c.prob}</p>
                    <p style="color:var(--aws-orange); font-weight:bold; margin-top:4px;">➔ SERVICIO CORRECTO: ${c.correct}</p>
                    <p style="color:var(--aws-blue); font-size:0.8rem; margin-top:2px;">🔑 <em>Palabras clave: ${c.kw}</em></p>
                </div>
            `,
              )
              .join("")}
        </div>
    `,
    )
    .join("");
}

function renderEscenarios() {
  const container = document.getElementById("escenarios-container");
  container.innerHTML = escenariosData
    .map(
      (sc, idx) => `
        <div class="card">
            <h4>Escenario ${idx + 1}</h4>
            <p style="margin-bottom:12px;">${sc.question}</p>
            <div class="options-list">
                ${sc.options
                  .map(
                    (opt, oIdx) => `
                    <div class="option-item" onclick="checkEscenario(${sc.id}, ${oIdx})">${opt}</div>
                `,
                  )
                  .join("")}
            </div>
            <div id="sc-fb-${sc.id}" class="feedback-box hidden"></div>
        </div>
    `,
    )
    .join("");
}

function checkEscenario(scId, selectedIdx) {
  const sc = escenariosData.find((s) => s.id === scId);
  const fb = document.getElementById(`sc-fb-${scId}`);
  fb.classList.remove("hidden", "correct", "incorrect");

  if (selectedIdx === sc.correct) {
    fb.classList.add("correct");
    fb.innerHTML = `
            <strong>✓ ¡Respuesta Correcta!</strong><br>
            <strong>🔑 Palabras Clave:</strong> ${sc.kw}<br>
            <strong>🧠 Explicación:</strong> ${sc.explanation}
        `;
  } else {
    fb.classList.add("incorrect");
    fb.innerHTML = `
            <strong>❌ Incorrecto.</strong><br>
            <strong>✓ Opción correcta:</strong> ${sc.options[sc.correct]}<br>
            <strong>🧠 Explicación:</strong> ${sc.explanation}<br>
            <strong>⚠️ Distractores:</strong> ${sc.distractors}
        `;
  }
}

function renderPreguntas() {
  const container = document.getElementById("preguntas-container");
  container.innerHTML = preguntasData
    .map(
      (p, idx) => `
        <div class="card">
            <span class="kw-badge" style="margin-bottom:10px;">${p.type}</span>
            <h4>Pregunta ${idx + 1}</h4>
            <p style="margin-bottom:12px;">${p.q}</p>
            <div class="options-list">
                ${p.options
                  .map(
                    (opt, oIdx) => `
                    <div class="option-item" onclick="checkPregunta(this, ${p.correct})">${opt}</div>
                `,
                  )
                  .join("")}
            </div>
            <div class="feedback-box hidden"></div>
        </div>
    `,
    )
    .join("");
}

function checkPregunta(el, correctIdx) {
  const parent = el.parentElement;
  const fb = parent.nextElementSibling;
  const selectedIdx = Array.from(parent.children).indexOf(el);

  fb.classList.remove("hidden", "correct", "incorrect");
  if (selectedIdx === correctIdx) {
    fb.classList.add("correct");
    fb.innerHTML = `<strong>✓ Correcto.</strong> Entendimiento alineado con el estándar del examen CLF-C02.`;
  } else {
    fb.classList.add("incorrect");
    fb.innerHTML = `<strong>❌ Incorrecto.</strong> Revisa las diferencias clave de este servicio.`;
  }
}

function renderSimulacro() {
  const container = document.getElementById("simulacro-container");
  container.innerHTML = simulacroData
    .map(
      (item, idx) => `
        <div class="card">
            <h4>Pregunta ${idx + 1}</h4>
            <p style="margin-bottom:12px;">${item.q}</p>
            <div class="options-list">
                ${item.options
                  .map(
                    (opt, oIdx) => `
                    <div class="option-item" onclick="selectOption(this, 'sim-${item.id}')" data-value="${oIdx}">
                        ${opt}
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `,
    )
    .join("");
}

function evaluarSimulacro() {
  let score = 0;
  let weakConcepts = [];
  let confusedServices = [];

  simulacroData.forEach((item) => {
    const selected = document.querySelector(
      `[onclick*="sim-${item.id}"].selected`,
    );
    if (selected) {
      const val = parseInt(selected.getAttribute("data-value"));
      if (val === item.correct) {
        score++;
      } else {
        weakConcepts.push(item.concept);
        confusedServices.push(item.confusion);
      }
    } else {
      weakConcepts.push(item.concept);
      confusedServices.push("Pregunta no respondida.");
    }
  });

  const percentage = (score / simulacroData.length) * 100;
  const res = document.getElementById("simulacro-resultado");
  res.classList.remove("hidden");

  res.innerHTML = `
        <h3>Diagnóstico del Mini Simulacro</h3>
        <p><strong>Puntaje:</strong> ${score} / ${simulacroData.length}</p>
        <p><strong>Porcentaje de Acierto:</strong> ${percentage}%</p>
        ${
          weakConcepts.length > 0
            ? `
            <div style="margin-top:15px; padding:12px; background:#0f172a; border-radius:6px; border-left:4px solid var(--accent-red);">
                <p style="color:var(--accent-red);"><strong>Conceptos débiles a reforzar:</strong></p>
                <ul style="margin-left:20px; font-size:0.9rem; color:var(--text-muted);">
                    ${[...new Set(weakConcepts)].map((c) => `<li>${c}</li>`).join("")}
                </ul>
                <p style="color:var(--aws-orange); margin-top:8px;"><strong>Servicios confundidos / Trampas detectadas:</strong></p>
                <ul style="margin-left:20px; font-size:0.85rem; color:var(--text-muted);">
                    ${[...new Set(confusedServices)].map((cs) => `<li>${cs}</li>`).join("")}
                </ul>
            </div>
        `
            : `
            <p style="margin-top:10px; color:var(--accent-green);"><strong>¡Perfecto!</strong> Dominas con precisión los servicios de seguridad de AWS.</p>
        `
        }
    `;
}

function renderCierre() {
  const listServicios = document.getElementById("lista-cierre-servicios");
  const listTrampas = document.getElementById("lista-cierre-trampas");

  listServicios.innerHTML = cierreServicios
    .map((item) => `<li>${item}</li>`)
    .join("");
  listTrampas.innerHTML = cierreTrampas
    .map((item) => `<li>${item}</li>`)
    .join("");
}

// // TIMER GLOBAL (60 MINUTOS)
// function startTimer() {
//   let seconds = 0;
//   const timerEl = document.getElementById("global-timer");
//   setInterval(() => {
//     seconds++;
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     timerEl.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")} / 60:00`;
//   }, 1000);
// }
