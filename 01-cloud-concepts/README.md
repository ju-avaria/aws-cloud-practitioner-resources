
# Cloud Concepts

Fundamentos de **Cloud Computing** orientados a **AWS Cloud Practitioner**.

Este módulo busca comprender los conceptos fundamentales de la computación en la nube y cómo estos se aplican en AWS.

El objetivo no es comenzar memorizando servicios, sino comprender primero **qué problema resuelve la nube, qué características la definen y por qué una organización puede decidir utilizarla**.

---

## 🎯 Objetivos

Al finalizar este módulo deberías poder:

* Explicar qué es Cloud Computing.
* Comprender las características fundamentales de la nube.
* Diferenciar infraestructura tradicional, virtualización y cloud computing.
* Comprender los principales modelos de servicio.
* Diferenciar los modelos de implementación de la nube.
* Comprender el concepto de elasticidad y escalabilidad.
* Explicar alta disponibilidad, tolerancia a fallos y resiliencia.
* Comprender el modelo de pago por uso.
* Identificar los beneficios y consideraciones de adoptar servicios cloud.
* Relacionar estos conceptos con AWS.

---

# 🧭 Ruta de aprendizaje

El contenido sigue una progresión desde los fundamentos hasta su aplicación en AWS.

```text
¿Qué es Cloud Computing?
          │
          ▼
Características de la nube
          │
          ▼
Infraestructura tradicional
          │
          ▼
Virtualización
          │
          ▼
Modelos de servicio
 IaaS / PaaS / SaaS
          │
          ▼
Modelos de implementación
 Public / Private / Hybrid
          │
          ▼
Escalabilidad y Elasticidad
          │
          ▼
Alta disponibilidad y resiliencia
          │
          ▼
Pago por uso
          │
          ▼
AWS y sus servicios
```

---

# ☁️ 1. ¿Qué es Cloud Computing?

Comprender el concepto de computación en la nube y la diferencia entre consumir infraestructura tradicionalmente y consumir recursos tecnológicos como servicios.

### Conceptos

* Cloud Computing
* Recursos bajo demanda
* Infraestructura
* Centros de datos
* Recursos computacionales
* Almacenamiento
* Networking
* Servicios administrados
* Acceso bajo demanda

### Preguntas fundamentales

* ¿Qué significa "la nube"?
* ¿Dónde están realmente los recursos?
* ¿Quién administra la infraestructura?
* ¿Qué significa consumir infraestructura como servicio?

---

# 🏢 2. Infraestructura tradicional vs Cloud

Comprender cómo cambia el modelo cuando una organización pasa de administrar infraestructura propia a consumir recursos cloud.

### Infraestructura tradicional

* Data centers propios
* Compra de hardware
* Capacidad limitada
* Mantenimiento físico
* Planificación de capacidad
* Costos iniciales de infraestructura

### Cloud Computing

* Recursos bajo demanda
* Provisionamiento rápido
* Capacidad flexible
* Servicios administrados
* Pago según consumo
* Acceso global

### Comparación

```text
Infraestructura tradicional

Planificar
    ↓
Comprar hardware
    ↓
Esperar entrega
    ↓
Instalar
    ↓
Configurar
    ↓
Utilizar


Cloud

Necesidad
    ↓
Seleccionar servicio
    ↓
Provisionar
    ↓
Utilizar
    ↓
Escalar según necesidad
```

---

# 🖥️ 3. Virtualización

Comprender el concepto de virtualización y su relación con la evolución hacia la computación en la nube.

### Conceptos

* Hardware físico
* Hypervisor
* Máquina virtual
* CPU virtual
* Memoria
* Disco virtual
* Sistema operativo
* Aislamiento

### Relación

```text
Servidor físico
       │
       ▼
   Hypervisor
       │
 ┌─────┼─────┐
 ▼     ▼     ▼
 VM    VM    VM
```

La virtualización permite abstraer recursos físicos y crear múltiples entornos aislados sobre una misma infraestructura.

---

# 🧩 4. Modelos de servicio

Comprender qué parte de la infraestructura administra el proveedor y qué parte queda bajo responsabilidad del cliente.

## IaaS — Infrastructure as a Service

El proveedor ofrece infraestructura virtualizada.

Ejemplos:

* Amazon EC2
* Amazon VPC
* Amazon EBS

El cliente mantiene mayor control sobre el sistema operativo y la configuración de sus recursos.

---

## PaaS — Platform as a Service

El proveedor administra una mayor parte de la plataforma necesaria para ejecutar aplicaciones.

Ejemplos dentro de AWS pueden incluir:

* AWS Elastic Beanstalk
* Amazon RDS

El cliente se concentra principalmente en la aplicación y sus datos.

---

## SaaS — Software as a Service

El usuario consume una aplicación completa administrada por el proveedor.

```text
          Control del cliente
                │
                ▼
IaaS ────────► Más control
PaaS ────────► Control intermedio
SaaS ────────► Menos administración
                │
                ▼
          Más administración
          del proveedor
```

---

# 🌎 5. Modelos de implementación

Comprender las distintas formas en que una organización puede estructurar su infraestructura.

### Public Cloud

Infraestructura proporcionada por un proveedor cloud y compartida entre distintos clientes mediante aislamiento lógico.

### Private Cloud

Infraestructura cloud dedicada a una organización.

### Hybrid Cloud

Combinación de infraestructura local o privada con recursos de cloud público.

```text
                 Hybrid Cloud
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
   Infraestructura          Cloud Público
      privada                    │
          │                       │
          └───────────┬───────────┘
                      ▼
                 Integración
```

---

# 📈 6. Escalabilidad y Elasticidad

Estos conceptos son fundamentales para comprender una de las ventajas principales de los entornos cloud.

## Escalabilidad

Capacidad de aumentar o disminuir los recursos disponibles para una aplicación.

### Vertical Scaling

```text
┌─────────────┐
│     VM      │
│  2 CPU      │
│  4 GB RAM   │
└─────────────┘
       ↓
┌─────────────┐
│     VM      │
│  4 CPU      │
│  8 GB RAM   │
└─────────────┘
```

### Horizontal Scaling

```text
    VM
     │
     ▼
 ┌───┴───┐
 ▼       ▼
VM      VM
 │       │
 └───┬───┘
     ▼
    VM
```

---

## Elasticidad

Capacidad de ajustar dinámicamente los recursos en respuesta a la demanda.

```text
Demanda
  ▲
  │       /\ 
  │      /  \
  │  /\ /    \
  │ /  V      \
  └────────────────► Tiempo

Recursos
  ▲
  │       /\ 
  │      /  \
  │  /\ /    \
  │ /  V      \
  └────────────────► Tiempo
```

La elasticidad busca que los recursos puedan adaptarse a cambios en la demanda.

---

# 🛡️ 7. Alta disponibilidad, resiliencia y tolerancia a fallos

Comprender cómo diseñar sistemas capaces de continuar funcionando ante problemas.

### Conceptos

* Availability
* High Availability
* Fault Tolerance
* Resilience
* Redundancia
* Failover
* Recuperación
* Single Point of Failure

### En AWS

Estos conceptos se relacionan con componentes como:

* Availability Zones
* Load Balancers
* Auto Scaling
* Multi-AZ architectures
* Amazon S3
* Amazon RDS

---

# 💰 8. Economía de la nube

Comprender cómo cambia la estructura de costos al utilizar cloud computing.

### Conceptos

* CapEx
* OpEx
* Pago por uso
* Economías de escala
* Costos variables
* Costos fijos
* Planificación de capacidad

### Modelo tradicional

```text
Comprar infraestructura
        ↓
Alta inversión inicial
        ↓
Mantener capacidad
        ↓
Pagar aunque no se utilice completamente
```

### Cloud

```text
Necesidad
    ↓
Consumir recursos
    ↓
Pagar por el uso
    ↓
Ajustar capacidad
```

---

# 🌍 9. Infraestructura global de AWS

Comprender cómo AWS organiza físicamente su infraestructura para proporcionar servicios globales.

### Conceptos

* AWS Regions
* Availability Zones
* Edge Locations
* Global infrastructure
* Latencia
* Redundancia geográfica

### Relación

```text
AWS Global Infrastructure
            │
            ▼
         Region
            │
      ┌─────┼─────┐
      ▼     ▼     ▼
     AZ    AZ    AZ
      │
      ▼
 Recursos AWS
```

---

# 🔐 10. Responsabilidad en Cloud

Comprender que utilizar servicios cloud no significa transferir toda la responsabilidad de seguridad al proveedor.

### Conceptos

* Shared Responsibility Model
* Responsabilidad de AWS
* Responsabilidad del cliente
* Seguridad de la infraestructura
* Seguridad dentro de la nube

```text
             AWS
              │
     Infraestructura física
              │
              ▼
     ───────────────────
       Responsabilidad
          compartida
     ───────────────────
              │
              ▼
           Cliente
              │
       Datos / configuración
       Identidades / acceso
       Aplicaciones / etc.
```

Este concepto se estudia con mayor profundidad en el módulo correspondiente de **Security**.

---

# 🧱 11. AWS Well-Architected Framework

Introducción a los principios utilizados para evaluar arquitecturas en AWS.

### Seis pilares

* Operational Excellence
* Security
* Reliability
* Performance Efficiency
* Cost Optimization
* Sustainability

El objetivo de esta sección es comprender qué problemas busca abordar cada pilar y cómo se relacionan con las decisiones de arquitectura.

---

# 🧠 12. Conceptos clave para Cloud Practitioner

Al estudiar para AWS Cloud Practitioner, presta especial atención a las diferencias entre conceptos que suelen confundirse:

| Concepto          | Idea principal                                |
| ----------------- | --------------------------------------------- |
| Scalability       | Capacidad de aumentar/disminuir recursos      |
| Elasticity        | Adaptación dinámica a la demanda              |
| High Availability | Diseñar para mantener disponibilidad          |
| Fault Tolerance   | Continuar funcionando ante fallos             |
| Resilience        | Capacidad de recuperarse y continuar operando |
| CapEx             | Inversión inicial en infraestructura          |
| OpEx              | Gasto operativo                               |
| IaaS              | Infraestructura como servicio                 |
| PaaS              | Plataforma como servicio                      |
| SaaS              | Software como servicio                        |
| Region            | Ubicación geográfica de infraestructura AWS   |
| Availability Zone | Zona aislada dentro de una Region             |

---

# 🧪 13. Material interactivo y práctica

Los conceptos pueden complementarse con materiales interactivos para visualizar:

* Infraestructura tradicional vs Cloud.
* Virtualización.
* IaaS / PaaS / SaaS.
* Public / Private / Hybrid Cloud.
* Escalabilidad vertical y horizontal.
* Elasticidad.
* Alta disponibilidad.
* Regiones y Availability Zones.
* CapEx vs OpEx.
* Shared Responsibility Model.

El objetivo es utilizar la interacción para **comprender relaciones y tomar decisiones**, no solamente para memorizar definiciones.

---

# 📚 Recursos

### AWS

* AWS Cloud Computing Concepts
* AWS Global Infrastructure
* AWS Well-Architected Framework
* AWS Shared Responsibility Model
* AWS Cloud Adoption Framework
* AWS Pricing

### Conceptos fundamentales

* Cloud Computing
* Virtualización
* IaaS / PaaS / SaaS
* Public / Private / Hybrid Cloud
* Scalability
* Elasticity
* High Availability
* Fault Tolerance
* Resilience
* CapEx / OpEx

---

# 📌 Relación con AWS Cloud Practitioner

Este módulo proporciona la base conceptual necesaria para comprender posteriormente servicios específicos de AWS.

La progresión propuesta es:

```text
Concepto
   ↓
Problema que resuelve
   ↓
Principio de Cloud Computing
   ↓
Aplicación en AWS
   ↓
Servicio AWS relacionado
```

Por ejemplo:

```text
Necesidad de capacidad variable
            ↓
       Elasticidad
            ↓
     Auto Scaling
            ↓
       Amazon EC2
```

De esta manera, los servicios de AWS se estudian como **herramientas que implementan conceptos de cloud**, en lugar de aprenderlos únicamente como una lista de nombres.

---
## 📖 Enfoque

> **Comprender Cloud Computing antes de memorizar servicios AWS.**

El objetivo de este módulo es construir una base conceptual que permita entender posteriormente por qué AWS ofrece determinados servicios y cómo estos pueden combinarse para construir soluciones en la nube.

**Cloud Concepts → AWS Services → AWS Architecture**
