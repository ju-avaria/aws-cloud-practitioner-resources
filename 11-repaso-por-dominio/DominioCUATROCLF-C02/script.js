// DATA BASE - CLF-C02 REPASO DOMINIO 4: FACTURACIÓN, PRECIOS Y SOPORTE

const checkpointData = [
  {
    id: "cp1",
    q: "Herramienta web gratuita para estimar los costos de una nueva arquitectura en AWS antes de desplegarla:",
    options: [
      "Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Cost Anomaly Detection",
    ],
    correct: 1,
  },
  {
    id: "cp2",
    q: "Herramienta para visualizar, analizar y graficar el historial de costos y uso de los últimos meses:",
    options: [
      "AWS Pricing Calculator",
      "Cost Explorer",
      "AWS Budgets",
      "AWS Billing Conductor",
    ],
    correct: 1,
  },
  {
    id: "cp3",
    q: "Servicio para configurar umbrales de presupuesto y recibir alertas cuando los costos reales o pronosticados superen el límite:",
    options: [
      "AWS CloudWatch Alarms",
      "AWS Budgets",
      "Cost Explorer",
      "AWS Trusted Advisor",
    ],
    correct: 1,
  },
  {
    id: "cp4",
    q: "¿Qué herramienta integrada escanea la cuenta e identifica instancias EC2 infrautilizadas y volúmenes EBS no adjuntos para ahorrar dinero?",
    options: [
      "AWS Budgets",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "AWS Cost Categories",
    ],
    correct: 2,
  },
  {
    id: "cp5",
    q: "¿Cuál es el plan de soporte mínimo de AWS que incluye soporte técnico 24/7 por email/chat/teléfono con tiempo de respuesta < 1 hora para producciones caídas?",
    options: ["Developer", "Business", "Enterprise On-Demand", "Basic"],
    correct: 1,
  },
];

const expressData = [
  {
    t: "Pay-as-you-go",
    what: "Modelo de pago por uso donde solo pagas por los recursos que consumes sin contratos obligatorios a largo plazo.",
    kw: "🔑 Sin costos iniciales, Gastos variables según consumo",
  },
  {
    t: "CapEx vs OpEx",
    what: "CapEx es la inversión fija inicial en hardware físico. OpEx es el gasto operativo variable basado en el consumo en la nube.",
    kw: "🔑 CapEx = Inversión inicial / OpEx = Gasto operativo flexible",
  },
  {
    t: "AWS Free Tier",
    what: "Oferta de prueba dividida en 3 tipos: Siempre gratis, 12 meses gratis y Pruebas gratuitas temporales.",
    kw: "🔑 Always Free, 12-Months Free, Free Trials",
  },
  {
    t: "AWS Pricing Calculator",
    what: "Herramienta de estimación previa para calcular el costo proyectado de servicios antes de crearlos.",
    kw: "🔑 Estimación antes de desplegar, '¿Cuánto costará?'",
  },
  {
    t: "AWS Cost Explorer",
    what: "Herramienta para visualizar, analizar y predecir patrones de costos e historia de uso pasados.",
    kw: "🔑 Gráficos históricos, Tendencias de uso, Forecast",
  },
  {
    t: "AWS Budgets",
    what: "Permite fijar presupuestos personalizados y enviar alertas (Email/SNS) al superar límites de costo o uso.",
    kw: "🔑 Alertas preventivas, Umbrales de costo/uso, Exceder presupuesto",
  },
  {
    t: "Cost Allocation Tags",
    what: "Etiquetas clave-valor asignadas a recursos para rastrear y organizar el costo por centro de costos o proyecto.",
    kw: "🔑 Key-Value tags, Asignación de costos por proyecto/departamento",
  },
  {
    t: "AWS Cost Categories",
    what: "Permite agrupar métricas de costos usando reglas basadas en cuentas, tags o servicios para jerarquías complejas.",
    kw: "🔑 Reglas de agrupación, Estructuras organizativas complejas",
  },
  {
    t: "Consolidated Billing",
    what: "Función de AWS Organizations que combina la facturación de múltiples cuentas en una sola factura con descuentos por volumen.",
    kw: "🔑 Una sola factura, Descuentos por volumen agrupado, Pagaré unificado",
  },
  {
    t: "Savings Plans",
    what: "Modelo de descuento flexible al comprometerse a un uso constante de cómputo ($/hora) a 1 o 3 años.",
    kw: "🔑 Compromiso $/hora, Descuento hasta 72%, Flexible entre familias/regiones",
  },
  {
    t: "Reserved Instances (RI)",
    what: "Descuento significativo al comprometerse a utilizar capacidad específica de EC2/RDS a 1 o 3 años.",
    kw: "🔑 Compromiso a 1 o 3 años, Instancias continuas, Descuento fijo",
  },
  {
    t: "Spot Instances",
    what: "Uso de capacidad ociosa de EC2 con hasta 90% de descuento, con riesgo de interrupción avisando 2 minutos antes.",
    kw: "🔑 Capacidad ociosa, Cargas interrumpibles, Hasta 90% de ahorro",
  },
  {
    t: "On-Demand Instances",
    what: "Pago por segundo/hora sin compromisos a largo plazo ni pago por adelantado. Máxima flexibilidad al costo estándar.",
    kw: "🔑 Sin compromiso, Cargas de corta duración o impredecibles",
  },
  {
    t: "AWS Trusted Advisor",
    what: "Escanea la cuenta y da recomendaciones en 5 pilares, destacando la Optimización de Costos (recursos ociosos).",
    kw: "🔑 Verificación de costos ociosos, Puertos abiertos, MFA en Root",
  },
  {
    t: "AWS Support Plans",
    what: "4 niveles de soporte técnico: Basic (Gratis), Developer, Business y Enterprise (incluyen SLAs progresivos).",
    kw: "🔑 Basic, Developer, Business, Enterprise Support",
  },
  {
    t: "AWS Health Dashboard",
    what: "Muestra el estado general global de todos los servicios de AWS en todas las regiones.",
    kw: "🔑 Estado global público de servicios AWS, Caídas generales",
  },
  {
    t: "AWS Personal Health Dashboard",
    what: "Muestra eventos personalizados y alertas que afectan específicamente a TUS recursos de AWS.",
    kw: "🔑 Eventos que afectan a MIS recursos, Mantenimiento programado de mi EC2",
  },
  {
    t: "AWS Concierge Support",
    what: "Equipo de especialistas senior en facturación dedicado exclusivamente a clientes de nivel Enterprise.",
    kw: "🔑 Asesor de facturación dedicado, Plan Enterprise exclusivamente",
  },
  {
    t: "Service Quotas",
    what: "Permite ver y solicitar aumentos de los límites por defecto de recursos asignados a la cuenta.",
    kw: "🔑 Solicitud de incremento de límites, Límites de recursos por región",
  },
  {
    t: "AWS Marketplace",
    what: "Catálogo digital para comprar, desplegar y gestionar software de terceros probado para ejecutarse en AWS.",
    kw: "🔑 Software de terceros, AMIs de terceros, SaaS integrado en factura AWS",
  },
];

const comparacionesData = [
  {
    title: "Pricing Calculator vs Cost Explorer",
    col1: "AWS Pricing Calculator",
    col2: "AWS Cost Explorer",
    rows: [
      {
        f: "¿Cuándo se usa?",
        c1: "ANTES de crear los recursos (Proyección).",
        c2: "DESPUÉS de haber usado los recursos (Histórico).",
      },
      {
        f: "Objetivo Principal",
        c1: "Estimar costos de una solución propuesta.",
        c2: "Visualizar y analizar datos de costos pasados.",
      },
      {
        f: "Palabra clave de examen",
        c1: "'Estimate architecture cost before launch'",
        c2: "'Analyze past spending / Forecast future costs'",
      },
    ],
  },
  {
    title: "Cost Explorer vs AWS Budgets",
    col1: "AWS Cost Explorer",
    col2: "AWS Budgets",
    rows: [
      {
        f: "Función principal",
        c1: "Visualizar y analizar gráficos de consumo.",
        c2: "Establecer límites y emitir alertas preventivas.",
      },
      {
        f: "Acción reactiva/proactiva",
        c1: "Análisis reactivo/descriptivo de patrones.",
        c2: "Alertas proactivas cuando se excede un umbral ($ o %).",
      },
      {
        f: "Palabra clave de examen",
        c1: "'Visualize spending over time'",
        c2: "'Alert when costs exceed threshold'",
      },
    ],
  },
  {
    title:
      "Modelos de Cómputo EC2: On-Demand vs Reserved vs Savings Plans vs Spot",
    col1: "Modelo",
    col2: "Casos de Uso & Característica Clave",
    rows: [
      {
        f: "On-Demand",
        c1: "Corta duración, impredecible, pruebas.",
        c2: "Flexibilidad total, costo por segundo, sin compromiso.",
      },
      {
        f: "Reserved Instances",
        c1: "Cargas de trabajo estables de largo plazo.",
        c2: "Compromiso a 1 o 3 años, descuento hasta 72%.",
      },
      {
        f: "Savings Plans",
        c1: "Flexibilidad entre familias de EC2 / Fargate / Lambda.",
        c2: "Compromiso de consumo $/hora a 1 o 3 años.",
      },
      {
        f: "Spot Instances",
        c1: "Procesamiento por lotes, tolerante a fallos.",
        c2: "Hasta 90% descuento, interrupción con aviso de 2 min.",
      },
    ],
  },
  {
    title: "Cost Allocation Tags vs Cost Categories",
    col1: "Cost Allocation Tags",
    col2: "AWS Cost Categories",
    rows: [
      {
        f: "Mecanismo",
        c1: "Etiquetas clave-valor aplicadas directamente al recurso.",
        c2: "Reglas lógicas para agrupar tags, cuentas y servicios.",
      },
      {
        f: "Uso típico",
        c1: "Etiquetar un servidor con 'Proyecto: Alpha'.",
        c2: "Crear una categoría 'Unidad de Negocio: Ventas'.",
      },
      {
        f: "Palabra clave",
        c1: "'Key-Value metadata on resources'",
        c2: "'Group cost metrics using rule-based engine'",
      },
    ],
  },
  {
    title: "AWS Health Dashboard vs Personal Health Dashboard",
    col1: "AWS Health Dashboard (Global)",
    col2: "Personal Health Dashboard (PHD)",
    rows: [
      {
        f: "Alcance",
        c1: "Estado general de la infraestructura de AWS a nivel mundial.",
        c2: "Impacto específico en los recursos activos de TU cuenta.",
      },
      {
        f: "Visibilidad",
        c1: "Acceso público general (salud de regiones).",
        c2: "Requiere iniciar sesión (alerta de mantenimiento de tu EC2).",
      },
      {
        f: "Palabra clave",
        c1: "'Public status of all AWS services'",
        c2: "'Personalized view of events affecting your resources'",
      },
    ],
  },
  {
    title: "AWS Support Plans vs AWS Concierge Support",
    col1: "Plan de Soporte (Basic/Dev/Business/Enterprise)",
    col2: "AWS Concierge Support",
    rows: [
      {
        f: "Materia que atiende",
        c1: "Soporte técnico, arquitectónico y operativo.",
        c2: "Soporte administrativo y de facturación exclusivo.",
      },
      {
        f: "Disponibilidad",
        c1: "Todos los clientes según el nivel elegido.",
        c2: "Incluido ÚNICAMENTE en el plan Enterprise Support.",
      },
      {
        f: "Palabra clave",
        c1: "'Technical support SLAs / TAM'",
        c2: "'Dedicated billing assistant for Enterprise accounts'",
      },
    ],
  },
];

const tablaFundamentalData = [
  {
    quiero: "Estimar costos antes de crear recursos",
    resp: "AWS Pricing Calculator",
    kw: "Estimate, Before deployment, Proyección",
  },
  {
    quiero: "Analizar y graficar costos pasados",
    resp: "AWS Cost Explorer",
    kw: "Historical analysis, Graphs, Trends",
  },
  {
    quiero: "Crear presupuestos con alertas cuando se supere un límite",
    resp: "AWS Budgets",
    kw: "Alerts, Threshold, Exceed limit",
  },
  {
    quiero: "Asignar costos a proyectos usando etiquetas clave-valor",
    resp: "Cost Allocation Tags",
    kw: "Key-Value, Metadata, Tagging",
  },
  {
    quiero: "Identificar recursos ociosos o no utilizados para optimizar gasto",
    resp: "AWS Trusted Advisor",
    kw: "Cost optimization, Idle resources",
  },
  {
    quiero: "Cómputo al precio más bajo para cargas interrumpibles",
    resp: "Spot Instances",
    kw: "Fault-tolerant, Unused capacity, 90% discount",
  },
  {
    quiero: "Cómputo sin compromiso inicial para cargas impredecibles",
    resp: "On-Demand Instances",
    kw: "No commitment, Short term, Flexibility",
  },
  {
    quiero:
      "Unificar facturación de múltiples cuentas con descuentos por volumen",
    resp: "Consolidated Billing",
    kw: "AWS Organizations, Single bill, Volume discount",
  },
  {
    quiero: "Atención técnica 24/7 con respuesta < 1 hora para producción",
    resp: "Business Support Plan",
    kw: "Production down < 1hr, 24/7 Chat/Phone",
  },
  {
    quiero:
      "Asistencia técnica personalizada con un Technical Account Manager (TAM)",
    resp: "Enterprise Support Plan",
    kw: "TAM, Business-critical < 15min response",
  },
];

const escenariosData = [
  {
    id: 1,
    question:
      "Una startup planea lanzar un nuevo producto en AWS dentro de tres meses. El Director de Finanzas necesita una estimación detallada de los costos mensuales proyectados de la infraestructura antes de aprobar el presupuesto.",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Billing Conductor",
    ],
    correct: 2,
    kw: "Antes de lanzar, Estimación proyectada previa.",
    reason:
      "AWS Pricing Calculator permite estimar el costo de los servicios de AWS antes de crearlos o desplegarlos.",
    distractors:
      "Cost Explorer analiza costos históricos pasados. AWS Budgets genera alertas cuando los costos ya existentes sobrepasan un límite.",
  },
  {
    id: 2,
    question:
      "Una empresa quiere asegurarse de recibir una notificación por correo electrónico de inmediato si la factura mensual acumulada supera los $5,000 USD antes de que finalice el mes.",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Trusted Advisor",
      "AWS CloudWatch Logs",
    ],
    correct: 1,
    kw: "Notificación por correo, Superar límite/umbral mensual.",
    reason:
      "AWS Budgets te permite configurar presupuestos personalizados y enviar alertas cuando tus costos superan (o se prevé que superen) el umbral.",
    distractors:
      "Cost Explorer grafica datos pero no genera alertas presupuestarias automáticas personalizadas.",
  },
  {
    id: 3,
    question:
      "Un análisis de costos revela que una empresa tiene 20 volúmenes de disco EBS no adjuntos a ninguna instancia EC2 y varias direcciones IP elásticas sin usar generando cargos. ¿Qué servicio habría recomendado eliminar estos recursos ociosos?",
    options: [
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS Budgets",
    ],
    correct: 1,
    kw: "Recursos ociosos, Eliminar volúmenes no adjuntos, Optimización de costos.",
    reason:
      "AWS Trusted Advisor escanea la infraestructura para detectar recursos no utilizados o subutilizados y optimizar el gasto.",
    distractors:
      "AWS Config audita configuraciones de cumplimiento, pero no destaca automáticamente la optimización financiera de recursos ociosos.",
  },
  {
    id: 4,
    question:
      "Una compañía de procesamiento de datos por lotes (Batch) necesita ejecutar trabajos nocturnos que pueden pausarse y reanudarse sin problemas. Buscan la opción de cómputo EC2 más barata posible.",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Savings Plans",
    ],
    correct: 2,
    kw: "Procesamiento por lotes, Cargas tolerantes a fallos/interrupciones, Precio más bajo.",
    reason:
      "Las instancias Spot ofrecen hasta un 90% de descuento sobre el precio On-Demand utilizando capacidad ociosa de EC2 para tareas que toleran interrupciones.",
    distractors:
      "Reserved Instances exige compromiso continuo a 1 o 3 años. On-Demand es el precio estándar sin descuento.",
  },
  {
    id: 5,
    question:
      "Un grupo empresarial administra 15 cuentas de AWS independientes. Finanzas desea consolidar la facturación en un solo pago y beneficiarse de descuentos por volumen de consumo acumulado.",
    options: [
      "AWS Cost Categories",
      "Consolidated Billing (AWS Organizations)",
      "AWS Cost Explorer",
      "AWS License Manager",
    ],
    correct: 1,
    kw: "Consolidar en un solo pago, Múltiples cuentas, Descuento por volumen.",
    reason:
      "Consolidated Billing es una característica de AWS Organizations que combina los costos de múltiples cuentas en una sola factura con descuentos por volumen.",
    distractors:
      "Cost Categories solo clasifica líneas de cobro pero no consolida el pago ni otorga descuentos por escala.",
  },
  {
    id: 6,
    question:
      "Una empresa con el plan Enterprise Support requiere asistencia técnica inmediata debido a que su sistema crítico de producción está totalmente caído y paralizando el negocio.",
    options: [
      "Tiempo de respuesta < 12 horas",
      "Tiempo de respuesta < 1 hora",
      "Tiempo de respuesta < 15 minutos",
      "Tiempo de respuesta < 24 horas",
    ],
    correct: 2,
    kw: "Enterprise Support, Carga crítica de negocio caída (Business-critical system down).",
    reason:
      "El plan Enterprise Support garantiza una respuesta de un ingeniero en menos de 15 minutos para sistemas críticos de negocio caídos.",
    distractors:
      "Menos de 1 hora es la métrica del plan Business Support para sistemas de producción caídos.",
  },
  {
    id: 7,
    question:
      "Un Gerente de TI nota que un servidor EC2 específico tuvo una degradación en su rendimiento debido a un evento de mantenimiento de hardware programado por AWS. ¿Dónde puede verificar la notificación específica de su recurso?",
    options: [
      "AWS Health Dashboard",
      "AWS Personal Health Dashboard",
      "AWS Service Quotas",
      "AWS Trusted Advisor",
    ],
    correct: 1,
    kw: "Notificación específica de mi recurso, Mantenimiento programado.",
    reason:
      "El Personal Health Dashboard brinda visibilidad sobre eventos que afectan específicamente a los recursos activos de la cuenta del cliente.",
    distractors:
      "El AWS Health Dashboard global muestra el estado público general de los servicios sin personalizar para tu cuenta.",
  },
  {
    id: 8,
    question:
      "Una empresa necesita adquirir licencias de un software de firewall de terceros (Fortinet/Palo Alto) e integrarlo directamente en su factura mensual de AWS.",
    options: [
      "AWS Service Catalog",
      "AWS Marketplace",
      "AWS Systems Manager",
      "AWS Artifact",
    ],
    correct: 1,
    kw: "Software de terceros, Integrado en la factura de AWS.",
    reason:
      "AWS Marketplace permite comprar y desplegar software de terceros facturado directamente a través de AWS.",
    distractors:
      "AWS Artifact es para descargar reportes de auditoría y cumplimiento.",
  },
];

const preguntasData = [
  {
    id: 1,
    type: "Reconocimiento",
    q: "¿Qué plan de soporte de AWS incluye por primera vez acceso a un Technical Account Manager (TAM) dedicado?",
    options: [
      "Developer Support",
      "Business Support",
      "Enterprise Support",
      "Basic Support",
    ],
    correct: 2,
  },
  {
    id: 2,
    type: "Reconocimiento",
    q: "¿Qué beneficio ofrece el modelo de compra Savings Plans en comparación con las Reserved Instances tradicionales?",
    options: [
      "Descuentos aplicables automáticamente a través de múltiples familias de instancias, regiones y servicios como Fargate y Lambda.",
      "Permite ejecutar instancias totalmente gratis.",
      "Elimina la necesidad de usar AWS IAM.",
      "Garantiza capacidad física dedicada en el datacenter.",
    ],
    correct: 0,
  },
  {
    id: 3,
    type: "Reconocimiento",
    q: "¿Qué herramienta permite solicitar formalmente un aumento en el límite predeterminado del número de VPCs por región en una cuenta?",
    options: [
      "AWS Budgets",
      "AWS Service Quotas",
      "AWS Config",
      "AWS Trusted Advisor",
    ],
    correct: 1,
  },
  {
    id: 4,
    type: "Comparación",
    q: "¿En qué se diferencian el plan Business Support y el plan Enterprise Support?",
    options: [
      "Business atiende solo por correo; Enterprise ofrece teléfono.",
      "Enterprise incluye un TAM dedicado y tiempo de respuesta de <15 min para sistemas críticos caídos; Business no tiene TAM y su mejor SLA es <1 hora.",
      "Business es gratuito; Enterprise cuesta $10 al mes.",
      "No hay diferencia en SLAs de soporte.",
    ],
    correct: 1,
  },
  {
    id: 5,
    type: "Comparación",
    q: "¿Cuál es la diferencia de uso entre AWS Pricing Calculator y AWS Cost Explorer?",
    options: [
      "Pricing Calculator proyecta costos hipotéticos antes de la implementación; Cost Explorer analiza el histórico de costos reales acumulados.",
      "Pricing Calculator sirve para comprar licencias de terceros; Cost Explorer para pagar la factura.",
      "Pricing Calculator reemplaza las facturas de AWS; Cost Explorer solo mide el uso de memoria RAM.",
      "Pricing Calculator requiere suscripción pagada; Cost Explorer es solo para nivel Enterprise.",
    ],
    correct: 0,
  },
  {
    id: 6,
    type: "Comparación",
    q: "¿Cuál es la diferencia entre AWS Health Dashboard y Personal Health Dashboard?",
    options: [
      "Health Dashboard es para facturación; Personal Health Dashboard es para soporte.",
      "Health Dashboard muestra el estado de salud global público de los servicios; Personal Health muestra los eventos que afectan a los recursos específicos de tu cuenta.",
      "Personal Health Dashboard requiere el pago de $500/mes.",
      "Ambos muestran exactamente la misma información.",
    ],
    correct: 1,
  },
  {
    id: 7,
    type: "Escenario",
    q: "Una empresa desea etiquetar todas sus instancias EC2 con 'Proyecto: Marketing' para poder desglosar y ver en la factura de fin de mes cuánto gastó ese departamento específico. ¿Qué función debe activar?",
    options: [
      "AWS Cost Allocation Tags",
      "AWS Budgets",
      "Consolidated Billing",
      "AWS Cost Categories",
    ],
    correct: 0,
  },
  {
    id: 8,
    type: "Escenario",
    q: "Un cliente de nivel Enterprise tiene dudas sobre una discrepancia en los impuestos cobrados en su factura mensual de AWS. ¿A quién puede acudir directamente para resolver esta duda administrativa?",
    options: [
      "Un Technical Account Manager (TAM)",
      "AWS Concierge Support Team",
      "AWS Solutions Architect",
      "AWS Security Team",
    ],
    correct: 1,
  },
];

const simulacroData = [
  {
    id: 1,
    q: "¿Qué opción de compra de EC2 ofrece hasta un 90% de descuento pero permite a AWS interrumpir la instancia con un aviso previo de 2 minutos?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Savings Plans",
    ],
    correct: 2,
    concept: "Modelos de Cómputo EC2",
    tool: "Spot vs On-Demand",
  },
  {
    id: 2,
    q: "¿Qué herramienta usarías para configurar un presupuesto de $1,000 USD al mes y recibir una alerta en Slack o correo si el gasto estimado supera los $800 USD?",
    options: [
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
    ],
    correct: 1,
    concept: "Control Presupuestario",
    tool: "AWS Budgets",
  },
  {
    id: 3,
    q: "¿Qué servicio o característica de AWS ayuda a reducir la tarifa combinada al sumar el volumen de datos transferidos de múltiples cuentas dentro de una organización?",
    options: [
      "Consolidated Billing",
      "AWS Cost Allocation Tags",
      "AWS Cost Explorer",
      "AWS Marketplace",
    ],
    correct: 0,
    concept: "Facturación Centralizada",
    tool: "Consolidated Billing",
  },
  {
    id: 4,
    q: "¿Cuál es el plan de soporte de AWS más económico que ofrece acceso 24/7 por teléfono y chat con ingenieros de soporte para casos ilimitados?",
    options: [
      "Developer Support",
      "Business Support",
      "Enterprise Support",
      "Basic Support",
    ],
    correct: 1,
    concept: "Planes de Soporte de AWS",
    tool: "Business Support Plan",
  },
  {
    id: 5,
    q: "¿Qué herramienta escanea continuamente tu entorno de AWS para notificarte sobre recursos subutilizados como instancias EC2 inactivas?",
    options: [
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS CloudTrail",
      "AWS Personal Health Dashboard",
    ],
    correct: 0,
    concept: "Optimización de Costos",
    tool: "AWS Trusted Advisor",
  },
];

const cierreConceptos = [
  "AWS Pricing Calculator estima costos de arquitectura ANTES de construir.",
  "AWS Cost Explorer analiza, grafica y proyecta costos e historial PASADO.",
  "AWS Budgets emite alertas automáticas al superar umbrales de costo o uso.",
  "Cost Allocation Tags usa parejas Clave-Valor para rastrear gastos por proyecto.",
  "Consolidated Billing combina cuentas para obtener una factura única y descuentos por volumen.",
  "On-Demand ofrece máxima flexibilidad sin compromiso inicial al costo estándar.",
  "Spot Instances ofrece hasta 90% de descuento para cargas tolerantes a interrupciones.",
  "Savings Plans ofrece descuentos hasta 72% al comprometerse a un consumo $/hora.",
  "AWS Trusted Advisor escanea recursos ociosos para optimizar costos de la cuenta.",
  "Basic Support es gratuito e incluye documentación, paneles de salud y servicio al cliente.",
  "Developer Support ofrece soporte técnico en horario de oficina por correo.",
  "Business Support incluye atención 24/7 por teléfono/chat y respuesta <1hr para producción caída.",
  "Enterprise Support incluye un TAM dedicado y respuesta <15min para sistemas críticos caídos.",
  "AWS Concierge es un equipo especializado exclusivo de Enterprise para resolver dudas de facturación.",
  "Personal Health Dashboard avisa sobre eventos que afectan específicamente a TUS recursos.",
];

const cierreTrampas = [
  "No confundas Pricing Calculator (proyección futura) con Cost Explorer (análisis del pasado).",
  "Cost Explorer grafica los costos, pero es AWS Budgets el que envía las alertas al superar un límite.",
  "Spot Instances NO son para bases de datos críticas; pueden ser interrumpidas con aviso de 2 minutos.",
  "Consolidated Billing NO combina permisos de usuarios, solo unifica el pago y los descuentos por volumen.",
  "El plan Developer Support NO incluye soporte telefónico ni atención 24/7 (solo correo en horario comercial).",
  "El Technical Account Manager (TAM) NUNCA está incluido en el plan Business Support; solo en Enterprise.",
  "AWS Health Dashboard es global e impersonal; Personal Health Dashboard muestra solo tus recursos.",
  "AWS Concierge atiende temas de FACTURACIÓN y cuentas, NO problemas técnicos de código o arquitectura.",
  "El Nivel Gratuito (Free Tier) NO evita que te cobren si superas los límites de uso especificados.",
  "Service Quotas sirve para aumentar límites de recursos, NO para pedir descuentos en la factura.",
];

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderCheckpoint();
  renderExpress();
  renderComparaciones();
  renderTablaFundamental();
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
        <p>${score >= 4 ? "¡Excelente inicio! Dominas las herramientas de Billing y Soporte." : "Atención: Repasa las diferencias entre las herramientas de costos."}</p>
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
            <span class="kw-badge">${item.kw}</span>
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
            <table class="comp-table">
                <thead>
                    <tr>
                        <th>Criterio / Servicio</th>
                        <th>${item.col1}</th>
                        <th>${item.col2}</th>
                    </tr>
                </thead>
                <tbody>
                    ${item.rows
                      .map(
                        (r) => `
                        <tr>
                            <td><strong>${r.f}</strong></td>
                            <td>${r.c1}</td>
                            <td>${r.c2}</td>
                        </tr>
                    `,
                      )
                      .join("")}
                </tbody>
            </table>
        </div>
    `,
    )
    .join("");
}

function renderTablaFundamental() {
  const container = document.getElementById("tabla-fundamental-body");
  container.innerHTML = tablaFundamentalData
    .map(
      (row) => `
        <tr>
            <td style="color:var(--aws-orange); font-weight:bold;">${row.quiero}</td>
            <td style="color:var(--aws-blue); font-weight:bold;">${row.resp}</td>
            <td><span class="kw-badge">🔑 ${row.kw}</span></td>
        </tr>
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
            <strong>🧠 Razonamiento:</strong> ${sc.reason}
        `;
  } else {
    fb.classList.add("incorrect");
    fb.innerHTML = `
            <strong>❌ Respuesta Incorrecta.</strong><br>
            <strong>✓ Opción correcta:</strong> ${sc.options[sc.correct]}<br>
            <strong>🧠 Razonamiento:</strong> ${sc.reason}<br>
            <strong>❌ Distractores:</strong> ${sc.distractors}
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
    fb.innerHTML = `<strong>✓ Correcto.</strong> Opción perfectamente alineada con el examen oficial.`;
  } else {
    fb.classList.add("incorrect");
    fb.innerHTML = `<strong>❌ Incorrecto.</strong> Repasa los criterios clave del Dominio 4.`;
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
  let confusedTools = [];

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
        confusedTools.push(item.tool);
      }
    } else {
      weakConcepts.push(item.concept);
      confusedTools.push("Pregunta omitida.");
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
                <p style="color:var(--aws-orange); margin-top:8px;"><strong>Herramientas confundidas:</strong></p>
                <ul style="margin-left:20px; font-size:0.85rem; color:var(--text-muted);">
                    ${[...new Set(confusedTools)].map((t) => `<li>${t}</li>`).join("")}
                </ul>
            </div>
        `
            : `
            <p style="margin-top:10px; color:var(--accent-green);"><strong>¡Excelente!</strong> Dominas con precisión los conceptos de Facturación, Precios y Soporte.</p>
        `
        }
    `;
}

function renderCierre() {
  const listConceptos = document.getElementById("lista-cierre-conceptos");
  const listTrampas = document.getElementById("lista-cierre-trampas");

  listConceptos.innerHTML = cierreConceptos
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
