// DATA BASE - CLF-C02 REPASO DOMINIO 1

const checkpointData = [
  {
    id: "cp1",
    q: "¿Qué concepto permite ajustar automáticamente los recursos según las fluctuaciones de la demanda?",
    options: [
      "Escalabilidad",
      "Elasticidad",
      "Alta Disponibilidad",
      "Tolerancia a Fallos",
    ],
    correct: 1,
  },
  {
    id: "cp2",
    q: "Si necesitas que tu arquitectura soporte la caída de una Availability Zone sin interrumpir el servicio, buscas:",
    options: [
      "Elasticidad",
      "Alta Disponibilidad (HA)",
      "Agilidad",
      "Pago por uso",
    ],
    correct: 1,
  },
  {
    id: "cp3",
    q: "¿Qué representa una Availability Zone (AZ) en AWS?",
    options: [
      "Una región geográfica completa",
      "Uno o más centros de datos aislados dentro de una Región",
      "Un punto de presencia para CDN",
      "Un centro de datos compartido globalmente",
    ],
    correct: 1,
  },
  {
    id: "cp4",
    q: "Cambiar de costos de inversión inicial a costos de operación variable es pasar de:",
    options: ["OpEx a CapEx", "CapEx a OpEx", "SaaS a PaaS", "IaaS a PaaS"],
    correct: 1,
  },
  {
    id: "cp5",
    q: "Amazon EC2 pertenece a qué modelo de servicio Cloud:",
    options: ["SaaS", "PaaS", "IaaS", "Serverless"],
    correct: 2,
  },
];

const expressData = [
  {
    t: "Cloud Computing",
    def: "Entrega bajo demanda de recursos de TI a través de Internet con pago por uso.",
    kw: "Bajo demanda, Pago por uso, Sin inversión inicial",
  },
  {
    t: "Elasticidad",
    def: "Capacidad de aumentar o reducir recursos automáticamente según la demanda en tiempo real.",
    kw: "Auto Scaling, Demanda variable, Liberar recursos",
  },
  {
    t: "Escalabilidad",
    def: "Capacidad de una arquitectura para manejar un crecimiento sostenido de carga de trabajo.",
    kw: "Crecimiento a largo plazo, Escalado Horizontal/Vertical",
  },
  {
    t: "High Availability (HA)",
    def: "Garantiza que un sistema permanezca operativo y accesible con un mínimo de tiempo de inactividad.",
    kw: "Mínimo downtime, Multizona (Multi-AZ), Elastic Load Balancer",
  },
  {
    t: "Fault Tolerance (FT)",
    def: "Capacidad de un sistema para seguir funcionando sin interrupción a pesar de fallos en componentes.",
    kw: "Zero downtime, Redundancia total, Componentes duplicados",
  },
  {
    t: "AWS Regions",
    def: "Ubicación geográfica física en el mundo que contiene múltiples zonas de disponibilidad aisladas.",
    kw: "Ubicación geográfica, Latencia, Cumplimiento legal/datos",
  },
  {
    t: "Availability Zones (AZ)",
    def: "Uno o más datacenters aislados dentro de una Región, conectados por redes de alta velocidad.",
    kw: "Centros de datos aislados, Tolerancia a desastres locales",
  },
  {
    t: "Edge Locations",
    def: "Puntos de presencia globales usados para entregar contenido de baja latencia a los usuarios.",
    kw: "Amazon CloudFront, Amazon Route 53, Caché global, Latencia",
  },
  {
    t: "CapEx (Capital Expenditure)",
    def: "Gastos de capital iniciales en infraestructura física tangible antes de usarla.",
    kw: "Inversión inicial, Servidores físicos, Alto riesgo de capacidad",
  },
  {
    t: "OpEx (Operational Expenditure)",
    def: "Gastos operativos continuos donde solo pagas por lo que consumes mientras lo usas.",
    kw: "Pago por uso, Sin costos fijos iniciales, Flexibilidad financiera",
  },
];

const comparacionesData = [
  {
    title: "Elasticidad vs Escalabilidad",
    diff: "La Escalabilidad diseña la capacidad de crecer a medida que el negocio aumenta. La Elasticidad permite a los recursos expandirse Y contraerse automáticamente según la demanda inmediata.",
    kw: "Escalabilidad = Crecimiento proyectado / Elasticidad = Dinámico/Automático (Subir y Bajar)",
    exam: "Si el examen menciona 'picos imprevistos de tráfico web durante Black Friday', la respuesta es Elasticidad.",
  },
  {
    title: "High Availability vs Fault Tolerance",
    diff: "HA tolera breves interrupciones aceptables para mantener el sistema arriba. FT garantiza CERO tiempo de inactividad mediante redundancia exacta instantánea.",
    kw: "HA = Mínimo tiempo de inactividad / FT = Cero tiempo de inactividad (Zero Downtime)",
    exam: "Pregunta sobre la caída de una AZ que exige continuidad instantánea sin degradación = Fault Tolerance.",
  },
  {
    title: "Region vs Availability Zone",
    diff: "Una Región es la zona geográfica del mundo (ej. us-east-1). Una AZ es una instalación física (datacenter) dentro de esa región.",
    kw: "Región = País/Ubicación / AZ = Datacenter (múltiples por región)",
    exam: "Para reducir latencia de usuarios finales en Europa eliges la Región más cercana. Para aislar fallos de infraestructura usas múltiples AZs.",
  },
  {
    title: "CapEx vs OpEx",
    diff: "CapEx requiere grandes compras por adelantado de centros de datos. OpEx convierte esos costos en gastos operativos variables según consumo.",
    kw: "CapEx = Inversión inicial de capital / OpEx = Gastos de operación en la nube",
    exam: "Al migrar a AWS, los costos cambian de CapEx a OpEx.",
  },
  {
    title: "IaaS vs PaaS vs SaaS",
    diff: "IaaS da control total de red/servidores (EC2). PaaS gestiona el SO y runtime, tú solo pones el código (Elastic Beanstalk). SaaS entrega la aplicación lista para usarse (WorkDocs, M365).",
    kw: "IaaS = Infraestructura pura / PaaS = Despliegue de código / SaaS = Aplicación final completa",
    exam: "Si una empresa quiere enfocarse solo en el desarrollo de software sin administrar el sistema operativo = PaaS.",
  },
  {
    title: "Cloud vs On-Premises vs Hybrid",
    diff: "On-Premises mantiene todo en datacenters propios. Cloud opera totalmente en el proveedor. Híbrida conecta la infraestructura local con la nube pública.",
    kw: "On-Prem = Tradicional/Local / Cloud = 100% Proveedor / Híbrido = Direct Connect / VPN",
    exam: "Empresas con regulaciones estrictas de almacenamiento local que usan la nube para cómputo = Modelo Híbrido.",
  },
];

const escenariosData = [
  {
    id: 1,
    scenario:
      "Una startup de comercio electrónico proyecta un crecimiento constante de usuarios durante los próximos 2 años y necesita asegurar que su sistema pueda manejar la carga sin rediseñar la arquitectura constantemente.",
    options: ["Elasticidad", "Escalabilidad", "Edge Location", "CapEx"],
    correct: 1,
    kw: "Crecimiento constante a largo plazo, manejo de carga.",
    reason:
      "La escalabilidad se enfoca en adaptar la arquitectura para atender un incremento continuo y sostenido de la demanda de trabajo a lo largo del tiempo.",
    whyNot:
      "Elasticidad es para fluctuaciones a corto plazo (subir/bajar). Edge Location es para caché de datos. CapEx es un modelo financiero.",
  },
  {
    id: 2,
    scenario:
      "Una empresa quiere reducir los tiempos de carga de su sitio web global sirviendo archivos de video e imágenes desde ubicaciones físicas cercanas a sus usuarios finales.",
    options: [
      "Availability Zones",
      "AWS Regions",
      "Edge Locations (Amazon CloudFront)",
      "AWS Direct Connect",
    ],
    correct: 2,
    kw: "Reducir latencia global, archivos cerca del usuario.",
    reason:
      "Las Edge Locations almacenan en caché el contenido estático y dinámico en puntos globales para responder con baja latencia.",
    whyNot:
      "AZs y Regiones albergan la infraestructura de cómputo principal, no la red de distribución perimetral.",
  },
  {
    id: 3,
    scenario:
      "Una institución financiera necesita alojar datos altamente confidenciales en su propio centro de datos por normativas locales, pero requiere ejecutar análisis intensivos utilizando servicios de cómputo en AWS.",
    options: [
      "Modelo On-Premises puro",
      "Modelo Cloud puro",
      "Modelo de Despliegue Híbrido",
      "Modelo SaaS",
    ],
    correct: 2,
    kw: "Datos en datacenter propio + cómputo en la nube.",
    reason:
      "El modelo híbrido permite conectar infraestructura local (On-Premises) con la nube pública de AWS.",
    whyNot:
      "No es Cloud puro porque mantiene datos en local; no es On-Premises puro porque usa cómputo de AWS.",
  },
  {
    id: 4,
    scenario:
      "Un desarrollador quiere lanzar una aplicación web rápidamente sin tener que configurar, parchear o administrar la infraestructura del sistema operativo subyacente.",
    options: [
      "IaaS (Infrastructure as a Service)",
      "PaaS (Platform as a Service)",
      "SaaS (Software as a Service)",
      "CapEx",
    ],
    correct: 1,
    kw: "Sin administrar SO, enfocado solo en el código.",
    reason:
      "PaaS abstrae la gestión del sistema operativo y hardware, permitiendo al usuario enfocarse únicamente en el código de la aplicación.",
    whyNot:
      "IaaS te exige administrar el SO (como en EC2). SaaS es una aplicación ya construida para el usuario final.",
  },
  {
    id: 5,
    scenario:
      "Durante una transmisión en vivo importante, un servidor web falla inesperadamente. Sin embargo, los usuarios no experimentan ninguna interrupción ya que un servidor idéntico asume el tráfico de inmediato en cero segundos.",
    options: [
      "Tolerancia a Fallos (Fault Tolerance)",
      "Alta Disponibilidad (High Availability)",
      "Elasticidad",
      "Escalabilidad Vertical",
    ],
    correct: 0,
    kw: "Cero interrupción, degradación imperceptible, con mutación automática.",
    reason:
      "Fault Tolerance garantiza funcionamiento ininterrumpido a través de componentes totalmente duplicados/redundantes sin caída visible.",
    whyNot:
      "HA puede admitir un breve margen de reconexión/downtime. Elasticidad es ajustar cantidad de recursos a la demanda.",
  },
  {
    id: 6,
    scenario:
      "El equipo de finanzas de una empresa se alegra porque ya no tienen que hacer grandes desembolsos de capital para comprar servidores físicos cada 3 años, pasando a pagar facturas mensuales basadas únicamente en las horas que usan los servicios.",
    options: [
      "Cambio de OpEx a CapEx",
      "Cambio de CapEx a OpEx",
      "Aumento de costos fijos",
      "Modelo de Licenciamiento Tradicional",
    ],
    correct: 1,
    kw: "Sin desembolso inicial, pago mensual por consumo.",
    reason:
      "AWS elimina la inversión en Capital (CapEx) en favor del Gasto Operativo variable (OpEx).",
    whyNot:
      "Es exactamente al revés: se elimina el CapEx e incrementa el beneficio del OpEx.",
  },
  {
    id: 7,
    scenario:
      "Un cliente desplegó su base de datos replicada en dos datacenters independientes separados por 50 km dentro de la misma ciudad para protegerse contra cortes de energía locales.",
    options: [
      "Despliegue Multi-Region",
      "Despliegue Multi-AZ",
      "Despliegue Edge",
      "Modelo Serverless",
    ],
    correct: 1,
    kw: "Datacenters independientes en la misma zona geográfica aislados de desastres.",
    reason:
      "Las Availability Zones están aisladas físicamente dentro de una Región para proporcionar alta disponibilidad frente a fallos locales.",
    whyNot:
      "Multi-Region implica distanciamiento entre continentes o países. Edge es para distribución CDN.",
  },
  {
    id: 8,
    scenario:
      "Una tienda en línea experimenta ráfagas de tráfico masivo únicamente durante las horas del almuerzo. El sistema añade servidores automáticamente a las 12:00 PM y los elimina a las 2:00 PM para ahorrar dinero.",
    options: [
      "Alta Disponibilidad",
      "Elasticidad",
      "Escalabilidad Vertical",
      "Tolerancia a Fallos",
    ],
    correct: 1,
    kw: "Añade y elimina servidores automáticamente según horario/demanda para optimizar costos.",
    reason:
      "La elasticidad permite reducir infraestructura cuando no se necesita, optimizando costos.",
    whyNot:
      "Escalabilidad vertical es cambiar el tamaño de una sola máquina (más RAM/CPU), no agregar/quitar nodos automáticamente.",
  },
];

const preguntasData = [
  {
    id: 1,
    type: "Reconocimiento",
    q: "¿Cuál de los siguientes es un beneficio clave de la agilidad en AWS Cloud?",
    options: [
      "Desplegar recursos en minutos en lugar de semanas",
      "Eliminar la responsabilidad de la seguridad de la aplicación",
      "Garantizar cero costos mensuales",
      "Obtener servidores físicos dedicados sin costo",
    ],
    correct: 0,
  },
  {
    id: 2,
    type: "Reconocimiento",
    q: "¿Qué principio de AWS Cloud permite a los clientes beneficiarse de menores precios a medida que millones de usuarios usan la nube?",
    options: [
      "Economías de Escala",
      "Elasticidad",
      "Global Accelerator",
      "Agilidad Framework",
    ],
    correct: 0,
  },
  {
    id: 3,
    type: "Reconocimiento",
    q: "¿Qué componente de la infraestructura global de AWS se utiliza para la entrega de contenido a través de Amazon CloudFront?",
    options: [
      "Regiones",
      "Availability Zones",
      "Edge Locations",
      "Data Centers locales",
    ],
    correct: 2,
  },
  {
    id: 4,
    type: "Comparación",
    q: "¿Cuál es la diferencia principal entre IaaS y PaaS?",
    options: [
      "En IaaS, el cliente gestiona el sistema operativo; en PaaS, el proveedor gestiona el sistema operativo.",
      "IaaS es más barato que PaaS siempre.",
      "PaaS da acceso total a la configuración de red física.",
      "IaaS no requiere conexión a Internet.",
    ],
    correct: 0,
  },
  {
    id: 5,
    type: "Comparación",
    q: "¿En qué se diferencia una Región de AWS de una Zona de Disponibilidad (AZ)?",
    options: [
      "Una Región consiste en una sola AZ.",
      "Una Región es una ubicación geográfica que contiene dos o más AZs aisladas.",
      "Las AZs están en diferentes países, las Regiones en una sola ciudad.",
      "Las Regiones son operadas por los clientes, las AZs por AWS.",
    ],
    correct: 1,
  },
  {
    id: 6,
    type: "Comparación",
    q: "¿Cómo difieren CapEx y OpEx en la arquitectura AWS?",
    options: [
      "CapEx exige pago por uso; OpEx requiere contratos de 3 años.",
      "CapEx es gasto operativo; OpEx es gasto en infraestructura local.",
      "CapEx requiere inversión inicial fija; OpEx es costo operativo según consumo.",
      "Ambos términos significan exactamente lo mismo en la nube.",
    ],
    correct: 2,
  },
  {
    id: 7,
    type: "Escenario",
    q: "Una empresa necesita alojar su aplicación en dos regiones diferentes para cumplir con las leyes de soberanía de datos de la UE y de EE. UU. ¿Qué concepto describe esta arquitectura?",
    options: [
      "Multi-AZ Deployment",
      "Multi-Region Deployment",
      "Edge Caching",
      "Hybrid Cloud",
    ],
    correct: 1,
  },
  {
    id: 8,
    type: "Escenario",
    q: "Una aplicación requiere que si un servidor físico falla, otro tome el control instantáneamente sin interrumpir ninguna transacción activa. ¿Qué concepto se requiere?",
    options: [
      "Elasticidad",
      "Tolerancia a Fallos",
      "Alta Disponibilidad",
      "Economía de Escala",
    ],
    correct: 1,
  },
];

const simulacroData = [
  {
    id: 1,
    q: "¿Qué beneficio de la nube de AWS se refiere a la capacidad de pagar solo por los recursos que realmente utilizas?",
    options: [
      "Agilidad",
      "Pago por consumo (Pay-as-you-go)",
      "Tolerancia a fallos",
      "Escalabilidad vertical",
    ],
    correct: 1,
    concept: "OpEx / Economías de costo",
  },
  {
    id: 2,
    q: "¿Cuál de las siguientes es una característica de las Availability Zones (AZs)?",
    options: [
      "Están conectadas mediante enlaces de alta velocidad y baja latencia.",
      "Comparten la misma fuente de energía e infraestructura física.",
      "Solo existe una AZ por cada Región de AWS.",
      "Están diseñadas para la entrega de caché estático de CloudFront.",
    ],
    correct: 0,
    concept: "Availability Zones",
  },
  {
    id: 3,
    q: "¿Qué modelo de nube se está utilizando cuando una empresa combina servidores locales con servicios de cómputo en AWS EC2?",
    options: ["Nube Privada", "Nube Pública", "Híbrido", "SaaS"],
    correct: 2,
    concept: "Modelos de despliegue Cloud",
  },
  {
    id: 4,
    q: "Un cliente necesita aprovisionar 50 servidores virtuales en cuestión de minutos usando plantillas. ¿Qué beneficio de la nube describe mejor esto?",
    options: [
      "Global Reach",
      "Agilidad",
      "Tolerancia a Fallos",
      "Economías de Escala",
    ],
    correct: 1,
    concept: "Agilidad en AWS",
  },
  {
    id: 5,
    q: "¿Qué concepto describe el escalado automático de recursos hacia arriba y hacia abajo según las variaciones de tráfico?",
    options: [
      "Escalabilidad horizontal fija",
      "Elasticidad",
      "Alta disponibilidad",
      "Tolerancia a fallos",
    ],
    correct: 1,
    concept: "Elasticidad",
  },
];

const cierreConceptos = [
  "Cloud Computing elimina el gasto de inversión en capital (CapEx) por gastos operativos (OpEx).",
  "Agilidad te permite aprovisionar recursos en minutos con solo un par de clics.",
  "Economías de escala se traducen en precios más bajos a medida que AWS crece.",
  "Elasticidad significa escalar dinámicamente recurso arriba/abajo según la demanda instantánea.",
  "Escalabilidad es la preparación de tu arquitectura para absorber el crecimiento del negocio a largo plazo.",
  "High Availability busca minimizar el downtime usando múltiples AZs.",
  "Fault Tolerance busca CERO tiempo de inactividad con redundancia total.",
  "Las Regiones están aisladas geográficamente para cumplir soberanía y reducir latencia.",
  "Las AZs son datacenters aislados dentro de una misma región con conexiones de alta velocidad.",
  "Las Edge Locations reducen la latencia entregando contenido distribuido vía CloudFront.",
];

const cierreTrampas = [
  "No confundas Elasticidad (subir/bajar automático) con Escalabilidad (capacidad de crecer).",
  "Una Región NO es una sola AZ; una región contiene múltiples AZs (mínimo 3).",
  "Edge Locations NO alojan servidores de cómputo principal como EC2; son para almacenamiento en caché (CloudFront).",
  "En PaaS no tienes control sobre el Sistema Operativo, solo sobre la aplicación.",
  "Fault Tolerance admite cero interrupción; Alta Disponibilidad admite breves tiempos de conmutación sin caída severa.",
];

// INITIALIZATION & EVENT LISTENERS
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

// NAVIGATION SYSTEM
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

// SECTION 1: CHECKPOINT
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
        <p>${score >= 4 ? "¡Excelente preparación inicial! Estás listo para avanzar." : "Repasa los conceptos base antes de continuar el examen."}</p>
    `;
}

// SECTION 2: REPASO EXPRESS
function renderExpress() {
  const container = document.getElementById("express-grid");
  container.innerHTML = expressData
    .map(
      (item) => `
        <div class="card">
            <h3>${item.t}</h3>
            <p><strong>¿QUÉ ES?</strong><br>${item.def}</p>
            <span class="kw-badge">🔑 ${item.kw}</span>
        </div>
    `,
    )
    .join("");
}

// SECTION 3: COMPARACIONES
function renderComparaciones() {
  const container = document.getElementById("comparaciones-list");
  container.innerHTML = comparacionesData
    .map(
      (item) => `
        <div class="card">
            <h3>${item.title}</h3>
            <p style="margin-bottom:8px;"><strong>¿En qué se diferencian?</strong> ${item.diff}</p>
            <p style="margin-bottom:8px;"><strong>🔑 Palabras Clave:</strong> <span style="color:var(--aws-blue);">${item.kw}</span></p>
            <p><strong>📝 ¿Cómo aparece en el examen?</strong> <em>"${item.exam}"</em></p>
        </div>
    `,
    )
    .join("");
}

// SECTION 4: ESCENARIOS
function renderEscenarios() {
  const container = document.getElementById("escenarios-container");
  container.innerHTML = escenariosData
    .map(
      (sc, idx) => `
        <div class="card" id="sc-card-${sc.id}">
            <h4>Escenario ${idx + 1}</h4>
            <p style="margin-bottom:12px;">${sc.scenario}</p>
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
            <strong>✓ Respuesta correcta:</strong> ${sc.options[sc.correct]}<br>
            <strong>🧠 Razonamiento:</strong> ${sc.reason}<br>
            <strong>❌ Por qué otras no:</strong> ${sc.whyNot}
        `;
  }
}

// SECTION 5: PREGUNTAS
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
                    <div class="option-item" onclick="checkPregunta(this, ${p.correct}, '${opt.replace(/'/g, "\\'")}')">${opt}</div>
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

function checkPregunta(el, correctIdx, optionText) {
  const parent = el.parentElement;
  const fb = parent.nextElementSibling;
  const selectedIdx = Array.from(parent.children).indexOf(el);

  fb.classList.remove("hidden", "correct", "incorrect");
  if (selectedIdx === correctIdx) {
    fb.classList.add("correct");
    fb.innerHTML = `<strong>✓ Correcto.</strong> La opción seleccionada refleja perfectamente los criterios del examen AWS.`;
  } else {
    fb.classList.add("incorrect");
    fb.innerHTML = `<strong>❌ Incorrecto.</strong> Repasa los conceptos clave asociados a esta pregunta.`;
  }
}

// SECTION 6: MINI SIMULACRO
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
  let incorrects = [];

  simulacroData.forEach((item) => {
    const selected = document.querySelector(
      `[onclick*="sim-${item.id}"].selected`,
    );
    if (selected) {
      const val = parseInt(selected.getAttribute("data-value"));
      if (val === item.correct) {
        score++;
      } else {
        incorrects.push(item.concept);
      }
    } else {
      incorrects.push(item.concept);
    }
  });

  const percentage = (score / simulacroData.length) * 100;
  const res = document.getElementById("simulacro-resultado");
  res.classList.remove("hidden");

  res.innerHTML = `
        <h3>Diagnóstico del Mini Simulacro</h3>
        <p><strong>Puntaje:</strong> ${score} / ${simulacroData.length}</p>
        <p><strong>Porcentaje:</strong> ${percentage}%</p>
        ${
          incorrects.length > 0
            ? `
            <p style="margin-top:10px; color:var(--accent-red);"><strong>Conceptos a reforzar:</strong> ${[...new Set(incorrects)].join(", ")}</p>
            <p><strong>Recomendación:</strong> Vuelve a revisar la sección de Comparaciones Críticas y Escenarios antes del examen oficial.</p>
        `
            : `
            <p style="margin-top:10px; color:var(--accent-green);"><strong>¡Excelente!</strong> Tienes un dominio completo de este bloque.</p>
        `
        }
    `;
}

// SECTION 7: CIERRE
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

// TIMER GLOBAL (60 MINUTOS)
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
