// DATA BASE - CLF-C02 REPASO DOMINIO 3: TECNOLOGÍA Y SERVICIOS DE CLOUD

const checkpointData = [
  {
    id: "cp1",
    term: "Object storage",
    options: ["Amazon EBS", "Amazon S3", "Amazon EFS", "Amazon EC2"],
    correct: 1,
  },
  {
    id: "cp2",
    term: "Virtual machine",
    options: ["AWS Lambda", "Amazon EC2", "Amazon ECS", "AWS Fargate"],
    correct: 1,
  },
  {
    id: "cp3",
    term: "NoSQL Database",
    options: [
      "Amazon RDS",
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon Redshift",
    ],
    correct: 2,
  },
  {
    id: "cp4",
    term: "DNS Service",
    options: [
      "AWS Direct Connect",
      "Amazon Route 53",
      "Amazon CloudFront",
      "AWS Global Accelerator",
    ],
    correct: 1,
  },
  {
    id: "cp5",
    term: "CDN (Content Delivery Network)",
    options: ["Amazon CloudFront", "API Gateway", "AWS VPN", "Amazon S3"],
    correct: 0,
  },
  {
    id: "cp6",
    term: "Serverless compute",
    options: ["Amazon EC2", "AWS Lambda", "Amazon EKS", "AWS Outposts"],
    correct: 1,
  },
  {
    id: "cp7",
    term: "Message queue",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "AWS Step Functions",
      "Amazon Kinesis",
    ],
    correct: 1,
  },
  {
    id: "cp8",
    term: "Monitoring & Metrics",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "Amazon CloudWatch",
      "AWS Health",
    ],
    correct: 2,
  },
];

const categoriesData = [
  { cat: "COMPUTE", list: "EC2, Lambda, ECS, EKS, Fargate" },
  { cat: "STORAGE", list: "S3, EBS, EFS, AWS Backup" },
  { cat: "DATABASE", list: "RDS, Aurora, DynamoDB, Redshift" },
  { cat: "NETWORKING", list: "VPC, Route 53, CloudFront, API Gateway" },
  { cat: "MESSAGING & INTEGRATION", list: "SQS, SNS, Step Functions" },
  {
    cat: "MONITORING & GOVERNANCE",
    list: "CloudWatch, CloudTrail, Config, Systems Manager",
  },
  { cat: "ANALYTICS", list: "Athena, Glue, Kinesis" },
  { cat: "MIGRATION & TRANSFER", list: "DataSync, Snow Family" },
  { cat: "AI / ML", list: "SageMaker, Bedrock" },
];

const expressTableData = [
  {
    s: "Amazon EC2",
    p: "Servidores virtuales ajustables en la nube",
    kw: "Virtual Machine, Instancias, Control de SO",
  },
  {
    s: "AWS Lambda",
    p: "Ejecución de código sin administrar servidores",
    kw: "Serverless Compute, Event-driven, Pay per execution",
  },
  {
    s: "Amazon ECS",
    p: "Orquestación de contenedores Docker (Propietario AWS)",
    kw: "Containers, Docker, AWS Native Orchestration",
  },
  {
    s: "Amazon EKS",
    p: "Orquestación de contenedores usando Kubernetes",
    kw: "Kubernetes nativo, K8s, Open-source containers",
  },
  {
    s: "AWS Fargate",
    p: "Motor Serverless para correr contenedores (ECS/EKS)",
    kw: "Serverless Containers, Sin gestionar nodos",
  },
  {
    s: "Amazon S3",
    p: "Almacenamiento ilimitado de objetos (archivos)",
    kw: "Object storage, Buckets, Archivos estáticos, 99.999999999% durabilidad",
  },
  {
    s: "Amazon EBS",
    p: "Disco de bloque para conectar a una instancia EC2",
    kw: "Block storage, Disco duro para EC2, Persistente local",
  },
  {
    s: "Amazon EFS",
    p: "Sistema de archivos de archivos compartido para múltiples EC2",
    kw: "File storage, NFS compartido, Acceso simultáneo Linux",
  },
  {
    s: "Amazon RDS",
    p: "Bases de datos relacionales administradas (MySQL, Postgres, etc.)",
    kw: "Relational DB, SQL, Tablas compuestas, Multi-AZ",
  },
  {
    s: "Amazon Aurora",
    p: "Base de datos SQL de alto rendimiento compatible con MySQL/PostgreSQL",
    kw: "Enterprise SQL, 5x velocidad de MySQL, Auto-scaling de almacenamiento",
  },
  {
    s: "Amazon DynamoDB",
    p: "Base de datos NoSQL ultra rápida de clave-valor",
    kw: "NoSQL, Key-value, Latencia de milisegundos de un solo dígito, Serverless DB",
  },
  {
    s: "Amazon Redshift",
    p: "Almacén de datos (Data Warehouse) para analítica PETABYTE",
    kw: "Data Warehouse, Olap, SQL de gran escala, Business Intelligence",
  },
  {
    s: "Amazon VPC",
    p: "Red virtual privada y aislada para tus recursos",
    kw: "Isolated network, Subnets, Security Groups, Route Tables",
  },
  {
    s: "Amazon Route 53",
    p: "Servicio de DNS administrado y registro de dominios",
    kw: "DNS, Routing policies, Health checks, Dominio web",
  },
  {
    s: "Amazon CloudFront",
    p: "Red de distribución de contenido (CDN) global",
    kw: "CDN, Edge Locations, Baja latencia, Caching global",
  },
  {
    s: "Amazon API Gateway",
    p: "Creación y administración de APIs a escala",
    kw: "REST / HTTP APIs, Endpoint puerta de entrada, Serverless API",
  },
  {
    s: "Amazon SQS",
    p: "Cola de mensajes para desacoplar componentes (Desacoplamiento)",
    kw: "Message Queue, Decoupling, Poll/Queue, Asíncrono",
  },
  {
    s: "Amazon SNS",
    p: "Servicio de notificaciones Push (Publicador / Suscriptor)",
    kw: "Pub/Sub, Push notifications, SMS, Email, Fan-out",
  },
  {
    s: "AWS Step Functions",
    p: "Orquestación visual de flujos de trabajo serverless",
    kw: "Visual Workflows, State Machine, Coordinar Lambda",
  },
  {
    s: "Amazon CloudWatch",
    p: "Monitoreo de rendimiento, métricas y alarmas",
    kw: "Metrics, Alarms, Logs de rendimiento, CPU/RAM utilization",
  },
  {
    s: "AWS CloudTrail",
    p: "Auditoría de llamadas a la API y registro de acciones",
    kw: "API Auditing, 'Quién hizo qué', Governance, User Activity",
  },
  {
    s: "AWS Config",
    p: "Auditoría e historial de configuración de recursos",
    kw: "Configuration history, Compliance, Reglas de recursos",
  },
  {
    s: "Amazon Athena",
    p: "Consultas SQL analíticas directamente sobre archivos en S3",
    kw: "Query S3 with SQL, Serverless Analytics, Ad-hoc queries",
  },
  {
    s: "AWS Glue",
    p: "Servicio ETL administrado y catálogo de datos",
    kw: "ETL (Extract, Transform, Load), Data Catalog, Preparación de datos",
  },
  {
    s: "Amazon Kinesis",
    p: "Procesamiento de datos en tiempo real (Streaming)",
    kw: "Real-time streaming, Video/Data streams, Ingesta masiva viva",
  },
  {
    s: "AWS DataSync",
    p: "Transferencia de datos automatizada y rápida hacia AWS",
    kw: "Online data transfer, Migrar archivos locales a S3/EFS",
  },
  {
    s: "AWS Snow Family",
    p: "Dispositivos físicos para transportar petabytes de datos fuera de línea",
    kw: "Offline physical transport, Petabytes/Exabytes, Lugares remotos",
  },
  {
    s: "AWS Systems Manager",
    p: "Gestión centralizada y parcheo operacional de EC2",
    kw: "Patching, Parameter Store, Operaciones automatizadas de servidores",
  },
  {
    s: "AWS Backup",
    p: "Servicio centralizado para gestionar backups de servicios AWS",
    kw: "Centralized Backups, Retención de respaldos, Compliance de backup",
  },
  {
    s: "Amazon SageMaker",
    p: "Plataforma completa para construir, entrenar y desplegar modelos de ML",
    kw: "Machine Learning personalizado, Entrenar modelos AI",
  },
  {
    s: "Amazon Bedrock",
    p: "Servicio administrado para crear aplicaciones con IA Generativa (LLMs)",
    kw: "Generative AI, Foundation Models, LLM, Prompt Engineering",
  },
];

const comparacionesData = [
  {
    title: "EC2 vs Lambda",
    ec2: "Servidores dedicados/gestionados en los que tú administras el SO. Ideal para procesos continuos.",
    lambda:
      "Código Serverless. Se ejecuta solo ante eventos (máximo 15 min). Pagas solo por milisegundo consumido.",
  },
  {
    title: "S3 vs EBS vs EFS",
    ec2: "S3 = Almacenamiento de Objetos (acceso global por API HTTP).",
    lambda:
      "EBS = Disco Duro de Bloque (unido a una sola EC2). EFS = Sistema de Archivos compartibles por múltiples EC2 (NFS).",
  },
  {
    title: "RDS vs DynamoDB",
    ec2: "RDS = Relacional (SQL), esquemas estructurados, transacciones complejas ACID.",
    lambda:
      "DynamoDB = NoSQL, Clave-Valor, escala ilimitada con latencia de milisegundos de 1 dígito.",
  },
  {
    title: "RDS vs Aurora",
    ec2: "RDS = Soporta múltiples motores tradicionales (MySQL, PostgreSQL, Oracle, SQL Server).",
    lambda:
      "Aurora = Motor propietario de AWS ultra rápido (hasta 5x más rápido que MySQL estándar) con Auto-scaling.",
  },
  {
    title: "SQS vs SNS",
    ec2: "SQS = Cola de mensajes (Pull: las aplicaciones leen la cola). Desacoplamiento.",
    lambda:
      "SNS = Notificaciones (Push: envía mensajes a múltiples suscriptores por email, SMS o Lambda).",
  },
  {
    title: "CloudWatch vs CloudTrail vs Config",
    ec2: "CloudWatch = Rendimiento y métricas (uso de CPU, espacio de disco).",
    lambda:
      "CloudTrail = Quién hizo la llamada API (Auditoría). Config = Qué cambios de configuración sufrió el recurso.",
  },
  {
    title: "CloudFront vs Route 53",
    ec2: "CloudFront = Red CDN que guarda en caché contenido perimetralmente.",
    lambda:
      "Route 53 = Servicio DNS para traducir nombres de dominio (ej. miempresa.com) a direcciones IP.",
  },
  {
    title: "Athena vs Redshift",
    ec2: "Athena = Consultar archivos estáticos en S3 mediante SQL directamente sin cargar datos.",
    lambda:
      "Redshift = Data Warehouse completo para consultas analíticas complejas en volúmenes petabyte.",
  },
  {
    title: "VPN vs Direct Connect",
    ec2: "VPN = Conexión segura encriptada a través de Internet pública (rápida de configurar).",
    lambda:
      "Direct Connect = Conexión física dedicada directa (privada, rápida, latencia constante sin usar internet).",
  },
  {
    title: "DataSync vs Snow Family",
    ec2: "DataSync = Migración de datos en línea usando la red existente.",
    lambda:
      "Snow Family = Transporte físico de datos mediante dispositivos para petabytes o sin conexión a internet.",
  },
  {
    title: "ECS vs EKS",
    ec2: "ECS = Orquestador de contenedores nativo y simplificado de AWS.",
    lambda:
      "EKS = Orquestador de contenedores basado en el estándar Kubernetes open-source.",
  },
  {
    title: "ECS vs Fargate",
    ec2: "ECS = La herramienta de control de contenedores (eliges si corren en EC2 o Fargate).",
    lambda:
      "Fargate = El motor de cómputo Serverless que elimina la necesidad de administrar instancias EC2 para contenedores.",
  },
];

const battleData = [
  {
    q: "Necesitas guardar archivos estáticos masivos accesibles desde la web:",
    optA: "Amazon EBS",
    optB: "Amazon S3",
    correct: "B",
  },
  {
    q: "Necesitas enviar notificaciones SMS instantáneas a miles de clientes:",
    optA: "Amazon SQS",
    optB: "Amazon SNS",
    correct: "B",
  },
  {
    q: "Necesitas ejecutar consultas analíticas SQL a petabytes de datos estructurados empresariales:",
    optA: "Amazon Redshift",
    optB: "Amazon Athena",
    correct: "A",
  },
  {
    q: "Quieres auditar quién eliminó un bucket S3 ayer:",
    optA: "Amazon CloudWatch",
    optB: "AWS CloudTrail",
    correct: "B",
  },
  {
    q: "Quieres conectar tu datacenter a AWS con una línea física privada de velocidad garantizada:",
    optA: "AWS Direct Connect",
    optB: "AWS Site-to-Site VPN",
    correct: "A",
  },
];

const escenariosData = [
  {
    id: 1,
    question:
      "Una empresa necesita almacenar archivos de imágenes y videos entregándolos con la menor latencia posible a usuarios globales.",
    options: [
      "Amazon S3 + Amazon CloudFront",
      "Amazon EBS + AWS Direct Connect",
      "Amazon EFS + AWS Route 53",
      "Amazon Storage Gateway + AWS Auto Scaling",
    ],
    correct: 0,
    kw: "Almacenar objetos (S3) + Entrega con baja latencia global / CDN (CloudFront).",
    reason:
      "S3 es el almacenamiento de objetos ideal para multimedia y CloudFront distribuye esos archivos en caché globalmente mediante Edge Locations.",
    distractors:
      "EBS es solo local para una EC2. EFS no distribuye perimetralmente contenido a usuarios finales.",
  },
  {
    id: 2,
    question:
      "Se requiere procesar imágenes subidas a la nube de manera automática ejecutando un código solo cuando aparece un nuevo archivo, sin mantener servidores encendidos 24/7.",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "AWS Elastic Beanstalk",
      "Amazon ECS con EC2",
    ],
    correct: 1,
    kw: "Serverless, ejecución orientada a eventos, sin administrar servidores.",
    reason:
      "AWS Lambda ejecuta código en respuesta a eventos (subida de archivos a S3) de forma 100% Serverless sin costos inactivos.",
    distractors:
      "EC2 requiere pagar por el servidor mientras esté encendido. Elastic Beanstalk aprovisiona servidores EC2 por debajo.",
  },
  {
    id: 3,
    question:
      "Una compañía financiera necesita migrar su base de datos relacional MySQL a una solución administrada por AWS de ultra alto rendimiento y auto-escalado de almacenamiento.",
    options: [
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora",
      "Amazon ElastiCache",
    ],
    correct: 2,
    kw: "Base de datos Relacional MySQL compatible + Enterprise High Performance.",
    reason:
      "Amazon Aurora ofrece compatibilidad total con MySQL/PostgreSQL con un rendimiento hasta 5 veces superior y auto-escalado de almacenamiento.",
    distractors:
      "DynamoDB es NoSQL. Redshift es para analítica/Data Warehouse. ElastiCache es en-memoria.",
  },
  {
    id: 4,
    question:
      "Se requiere una cola de mensajes para asegurar que si el sistema de inventarios falla, las órdenes de compra no se pierdan y queden almacenadas hasta procesarse.",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "AWS Step Functions",
      "Amazon Kinesis",
    ],
    correct: 1,
    kw: "Cola de mensajes, desacoplamiento de componentes, Retención de mensajes.",
    reason:
      "Amazon SQS (Simple Queue Service) retiene y almacena mensajes en cola de forma asíncrona permitiendo desacoplar la arquitectura.",
    distractors:
      "SNS envía notificaciones (Push). Kinesis es para flujos de datos continuos de analítica.",
  },
  {
    id: 5,
    question:
      "Un departamento de análisis necesita hacer consultas SQL esporádicas a archivos CSV almacenados en Amazon S3 sin necesidad de crear ni cargar datos en una base de datos.",
    options: ["Amazon Athena", "Amazon Redshift", "Amazon RDS", "AWS Glue"],
    correct: 0,
    kw: "Consultas SQL directas sobre S3 sin servidor (Serverless Ad-hoc queries).",
    reason:
      "Amazon Athena permite analizar directamente los datos guardados en S3 ejecutando código SQL estándar de forma serverless.",
    distractors:
      "Redshift requiere aprovisionar un clúster. RDS requiere importar los datos a tablas estructuradas.",
  },
  {
    id: 6,
    question:
      "Una empresa necesita mover 500 Terabytes de datos desde una ubicación física remota con conexiones a internet muy lentas hacia Amazon S3.",
    options: [
      "AWS DataSync",
      "AWS Snowball Edge",
      "AWS Direct Connect",
      "Amazon Route 53",
    ],
    correct: 1,
    kw: "Petabytes fuera de línea (Offline transfer), conexión lenta.",
    reason:
      "Los dispositivos de la familia AWS Snowball permiten transferir datos masivos de forma física sin depender de una red de internet lenta.",
    distractors:
      "DataSync y Direct Connect requieren enlaces de red continuos de alta velocidad.",
  },
  {
    id: 7,
    question:
      "Se requiere un servicio que responda las peticiones de dominios web traduciendo 'mipaginaservers.com' a la IP pública correspondiente.",
    options: [
      "Amazon CloudFront",
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon API Gateway",
    ],
    correct: 1,
    kw: "DNS Service, resolución de nombres de dominio.",
    reason:
      "Amazon Route 53 es el servicio DNS autoritativo administrado de AWS.",
    distractors:
      "CloudFront es una CDN para caché. API Gateway gestiona APIs REST.",
  },
  {
    id: 8,
    question:
      "Una aplicación de microservicios basada en contenedores Docker necesita ser desplegada de forma Serverless sin tener que administrar los nodos del clúster.",
    options: [
      "Amazon EC2 con Docker",
      "AWS Fargate",
      "AWS Lambda",
      "AWS Systems Manager",
    ],
    correct: 1,
    kw: "Contenedores Serverless, sin gestionar instancias ni nodos.",
    reason:
      "AWS Fargate es el motor Serverless para ejecutar contenedores sobre ECS o EKS sin aprovisionar servidores.",
    distractors:
      "EC2 requiere administrar las VMs. Systems Manager es para gestión y parches.",
  },
  {
    id: 9,
    question:
      "Una empresa quiere integrar Inteligencia Artificial Generativa en su app usando modelos base de lenguaje (LLMs) mediante una API simple.",
    options: [
      "Amazon SageMaker",
      "Amazon Bedrock",
      "Amazon Lex",
      "Amazon Rekognition",
    ],
    correct: 1,
    kw: "IA Generativa, Foundation Models, LLM, API simple.",
    reason:
      "Amazon Bedrock facilita la creación de soluciones con IA Generativa usando modelos de lenguaje (LLMs) mediante APIs.",
    distractors:
      "SageMaker es para entrenar modelos de Machine Learning desde cero.",
  },
  {
    id: 10,
    question:
      "Un arquitecto necesita adjuntar un volumen de almacenamiento persistente de tipo bloque a una instancia Linux de Amazon EC2.",
    options: ["Amazon S3", "Amazon EBS", "Amazon EFS", "AWS Snowcone"],
    correct: 1,
    kw: "Block storage, adjunto directo a una instancia EC2.",
    reason:
      "Amazon EBS provee volúmenes de almacenamiento de bloque diseñados específicamente para Amazon EC2.",
    distractors:
      "S3 es de objetos. EFS es un sistema de archivos en red compartido.",
  },
];

const preguntasData = [
  {
    id: 1,
    type: "Reconocimiento",
    q: "¿Qué servicio es una base de datos NoSQL totalmente administrada de clave-valor?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora",
    ],
    correct: 1,
  },
  {
    id: 2,
    type: "Reconocimiento",
    q: "¿Cuál de los siguientes es un motor de ejecución Serverless para contenedores?",
    options: ["AWS Fargate", "Amazon EC2", "AWS Outposts", "AWS Auto Scaling"],
    correct: 0,
  },
  {
    id: 3,
    type: "Reconocimiento",
    q: "¿Qué servicio de AWS se usa para crear flujos de trabajo visuales orchestrando múltiples funciones Lambda?",
    options: ["Amazon SQS", "AWS Step Functions", "Amazon SNS", "AWS Glue"],
    correct: 1,
  },
  {
    id: 4,
    type: "Reconocimiento",
    q: "¿Qué herramienta realiza procesos de ETL (Extracción, Transformación y Carga) para analítica?",
    options: ["AWS DataSync", "AWS Glue", "Amazon Athena", "Amazon Kinesis"],
    correct: 1,
  },
  {
    id: 5,
    type: "Comparación",
    q: "¿En qué se diferencia Amazon EBS de Amazon EFS?",
    options: [
      "EBS se conecta a una sola instancia a la vez; EFS se puede compartir simultáneamente entre cientos de instancias EC2.",
      "EBS es almacenamiento de objetos; EFS es almacenamiento NoSQL.",
      "EBS se usa con Lambda; EFS solo con EC2.",
      "EBS es más lento que S3.",
    ],
    correct: 0,
  },
  {
    id: 6,
    type: "Comparación",
    q: "¿Cuál es la diferencia principal entre Amazon CloudWatch y AWS CloudTrail?",
    options: [
      "CloudWatch monitorea el rendimiento y métricas; CloudTrail audita las llamadas a las APIs.",
      "CloudWatch detecta ataques DDoS; CloudTrail encripta datos.",
      "CloudWatch gestiona usuarios de IAM; CloudTrail crea instancias EC2.",
      "Son el mismo servicio con nombres distintos.",
    ],
    correct: 0,
  },
  {
    id: 7,
    type: "Comparación",
    q: "¿Cuándo deberías usar AWS Direct Connect en lugar de una VPN por Site-to-Site?",
    options: [
      "Cuando necesitas una línea física dedicada de ultra baja latencia sin pasar por Internet pública.",
      "Cuando buscas la opción más económica para conexiones ocasionales.",
      "Cuando quieres encriptar automáticamente correos de notificaciones.",
      "Cuando la conexión debe configurarse en menos de 5 minutos.",
    ],
    correct: 0,
  },
  {
    id: 8,
    type: "Escenario",
    q: "Una empresa procesa millones de eventos de telemetría por segundo procedentes de dispositivos IoT y necesita procesarlos en tiempo real. ¿Qué servicio debe elegir?",
    options: [
      "Amazon S3 Glacier",
      "Amazon Kinesis",
      "AWS Snowball",
      "AWS DataSync",
    ],
    correct: 1,
  },
  {
    id: 9,
    type: "Escenario",
    q: "Una organización necesita centralizar la aplicación de parches de seguridad periódicos en un grupo de 100 servidores Amazon EC2.",
    options: [
      "AWS Systems Manager",
      "AWS Backup",
      "Amazon CloudWatch",
      "AWS Config",
    ],
    correct: 0,
  },
  {
    id: 10,
    type: "Escenario",
    q: "Una tienda en línea quiere distribuir archivos estáticos (HTML, JS, Imágenes) globalmente asegurando la mínima latencia para los usuarios.",
    options: [
      "Amazon Route 53",
      "Amazon CloudFront",
      "AWS API Gateway",
      "Amazon Storage Gateway",
    ],
    correct: 1,
  },
];

const simulacroData = [
  {
    id: 1,
    q: "¿Qué servicio permite ejecutar consultas SQL analíticas directamente sobre datos almacenados en buckets de Amazon S3?",
    options: ["Amazon Redshift", "Amazon Athena", "AWS Glue", "Amazon RDS"],
    correct: 1,
    concept: "Analítica en S3 (Athena vs Redshift)",
    confusion:
      "Confundir Athena (SQL serverless en S3) con Redshift (Data Warehouse).",
  },
  {
    id: 2,
    q: "¿Cuál es la solución óptima para desacoplar componentes mediante un sistema de colas de mensajes en una arquitectura orientada a servicios?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "AWS Step Functions",
      "Amazon Kinesis",
    ],
    correct: 1,
    concept: "Desacoplamiento / Mensajería",
    confusion: "Confundir SQS (Cola / Pull) con SNS (Notificación / Push).",
  },
  {
    id: 3,
    q: "Una aplicación requiere una base de datos relacional compatible con PostgreSQL con alta disponibilidad Multi-AZ y almacenamiento autoregulable. ¿Qué servicio cumple esto mejor?",
    options: [
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon ElastiCache",
      "Amazon EBS",
    ],
    correct: 1,
    concept: "Bases de datos relacionales administradas",
    confusion: "Confundir Aurora (SQL avanzado) con DynamoDB (NoSQL).",
  },
  {
    id: 4,
    q: "Una empresa necesita almacenar petabytes de datos en una solución de almacenamiento de objetos duradera de muy bajo costo para archivado histórico de largo plazo.",
    options: ["Amazon S3 Glacier", "Amazon EBS", "Amazon EFS", "AWS Snowball"],
    correct: 0,
    concept: "Almacenamiento de archivado",
    confusion:
      "Confundir S3 Glacier con almacenamiento de disco de bloque EBS.",
  },
  {
    id: 5,
    q: "Un equipo quiere compilar y desplegar modelos de aprendizaje automático personalizados usando notebooks administrados.",
    options: [
      "Amazon Bedrock",
      "Amazon SageMaker",
      "AWS Glue",
      "Amazon Rekognition",
    ],
    correct: 1,
    concept: "Servicios de IA / ML",
    confusion:
      "Confundir SageMaker (Modelos personalizados/ML) con Bedrock (IA Generativa).",
  },
];

const cierreAsociaciones = [
  "Object storage ➔ Amazon S3",
  "Virtual machine ➔ Amazon EC2",
  "Serverless compute ➔ AWS Lambda",
  "NoSQL database ➔ Amazon DynamoDB",
  "DNS service ➔ Amazon Route 53",
  "CDN ➔ Amazon CloudFront",
  "Message queue ➔ Amazon SQS",
  "Push Notifications ➔ Amazon SNS",
  "API Management ➔ Amazon API Gateway",
  "Monitoring & Metrics ➔ Amazon CloudWatch",
  "API Auditing ➔ AWS CloudTrail",
  "Configuration compliance ➔ AWS Config",
  "SQL directly on S3 ➔ Amazon Athena",
  "ETL & Data Catalog ➔ AWS Glue",
  "Data Warehouse ➔ Amazon Redshift",
  "Streaming real-time data ➔ Amazon Kinesis",
  "Online data transfer ➔ AWS DataSync",
  "Offline physical petabyte transfer ➔ AWS Snow Family",
  "Generative AI / Foundation Models ➔ Amazon Bedrock",
  "Custom Machine Learning models ➔ Amazon SageMaker",
];

const cierreTrampas = [
  "S3 es almacenamiento de Objetos (archivos), EBS es almacenamiento de Bloques (discos duros para EC2).",
  "CloudWatch mide el RENDIMIENTO (CPU, RAM); CloudTrail registra ACCIONES ('quién llamó a la API').",
  "Athena consulta S3 sin mover los datos; Redshift es un Data Warehouse donde los datos se estructuran para analítica masiva.",
  "SQS usa modelo PULL (las apps leen de la cola); SNS usa modelo PUSH (envía notificaciones a receptores).",
  "Fargate NO es una alternativa a ECS/EKS; Fargate es el motor Serverless sobre el cual se ejecutan ECS/EKS.",
  "Aurora NO es una base de datos NoSQL; es una base de datos SQL Relacional ultra rápida compatible con MySQL/PostgreSQL.",
  "Direct Connect NO pasa por la red pública de Internet; la VPN SI pasa por la red pública de Internet cifrada.",
  "DataSync traslada datos por la RED (online); la familia Snow traslada datos en DISCOS FÍSICOS (offline).",
  "Bedrock se usa para IA Generativa y LLMs; SageMaker se usa para construir y entrenar modelos propios de Machine Learning.",
  "EFS se puede compartir entre cientos de EC2 simultáneamente; EBS estándar solo se conecta a una sola EC2.",
];

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderCheckpoint();
  renderCategories();
  renderExpressTable();
  renderComparaciones();
  renderBattle();
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
            <h4>Pregunta ${idx + 1}: Patrón "${item.term}"</h4>
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
        <p>${score >= 6 ? "¡Excelente reflejo conceptual! Dominas las asociaciones directas." : "Refuerza los nombres de los servicios clave."}</p>
    `;
}

function renderCategories() {
  const container = document.getElementById("categories-grid");
  container.innerHTML = categoriesData
    .map(
      (c) => `
        <div class="card">
            <h4 style="color:var(--aws-blue);">${c.cat}</h4>
            <p style="font-size:0.85rem; color:var(--text-muted);">${c.list}</p>
        </div>
    `,
    )
    .join("");
}

function renderExpressTable() {
  const container = document.getElementById("express-table-body");
  container.innerHTML = expressTableData
    .map(
      (row) => `
        <tr>
            <td style="color:var(--aws-orange); font-weight:bold;">${row.s}</td>
            <td>${row.p}</td>
            <td><span class="kw-badge">${row.kw}</span></td>
        </tr>
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
            <p style="margin-bottom:8px;"><strong>Opción A:</strong> ${item.ec2}</p>
            <p><strong>Opción B:</strong> ${item.lambda}</p>
        </div>
    `,
    )
    .join("");
}

function renderBattle() {
  const container = document.getElementById("battle-container");
  container.innerHTML = battleData
    .map(
      (b, idx) => `
        <div class="card" id="b-card-${idx}">
            <h4>Reto ${idx + 1}</h4>
            <p style="margin-bottom:12px;">${b.q}</p>
            <div class="battle-grid">
                <button class="btn-battle" onclick="checkBattle(${idx}, 'A')">${b.optA}</button>
                <button class="btn-battle" onclick="checkBattle(${idx}, 'B')">${b.optB}</button>
            </div>
            <div id="b-fb-${idx}" class="feedback-box hidden"></div>
        </div>
    `,
    )
    .join("");
}

function checkBattle(idx, choice) {
  const b = battleData[idx];
  const fb = document.getElementById(`b-fb-${idx}`);
  fb.classList.remove("hidden", "correct", "incorrect");

  if (choice === b.correct) {
    fb.classList.add("correct");
    fb.innerHTML = `<strong>✓ ¡Correcto!</strong> Excelente elección.`;
  } else {
    fb.classList.add("incorrect");
    fb.innerHTML = `<strong>❌ Incorrecto.</strong> La opción correcta era la <strong>${b.correct === "A" ? b.optA : b.optB}</strong>.`;
  }
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
    fb.innerHTML = `<strong>✓ Correcto.</strong> Excelente dominio conceptual del examen.`;
  } else {
    fb.classList.add("incorrect");
    fb.innerHTML = `<strong>❌ Incorrecto.</strong> Revisa las palabras clave de la pregunta.`;
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
      confusedServices.push("Pregunta omitida.");
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
                <p style="color:var(--aws-orange); margin-top:8px;"><strong>Servicios confundidos:</strong></p>
                <ul style="margin-left:20px; font-size:0.85rem; color:var(--text-muted);">
                    ${[...new Set(confusedServices)].map((cs) => `<li>${cs}</li>`).join("")}
                </ul>
            </div>
        `
            : `
            <p style="margin-top:10px; color:var(--accent-green);"><strong>¡Perfecto!</strong> Tienes un dominio completo del mapa de servicios de AWS.</p>
        `
        }
    `;
}

function renderCierre() {
  const listAsociaciones = document.getElementById("lista-cierre-asociaciones");
  const listTrampas = document.getElementById("lista-cierre-trampas");

  listAsociaciones.innerHTML = cierreAsociaciones
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
