
# Networking

Fundamentos de redes orientados a **AWS Cloud Practitioner**.

Este módulo busca comprender los conceptos fundamentales de networking y relacionarlos progresivamente con los servicios y componentes de red utilizados en AWS.

La idea es partir desde conceptos generales de redes y avanzar hacia la arquitectura de red en AWS, entendiendo no solo **qué es cada componente**, sino también **por qué existe y cómo se relaciona con los demás**.

---

## 🎯 Objetivos

Al finalizar este módulo deberías poder:

* Comprender los fundamentos básicos de networking.
* Diferenciar los principales dispositivos y componentes de una red.
* Comprender cómo funcionan las direcciones IPv4.
* Identificar la diferencia entre IP pública e IP privada.
* Comprender subredes y bloques CIDR.
* Entender conceptos básicos de routing, NAT, DNS y protocolos de transporte.
* Reconocer los principales componentes de networking en AWS.
* Relacionar los conceptos tradicionales de redes con una VPC de AWS.
* Comprender cómo se controla el tráfico dentro y fuera de una red AWS.

---

# 🧭 Ruta de aprendizaje

El contenido está organizado desde los fundamentos hacia conceptos específicos de AWS.

```text
Fundamentos de Redes
        │
        ▼
Dispositivos y comunicación
        │
        ▼
Direcciones IP
        │
        ▼
Subredes y CIDR
        │
        ▼
Protocolos y puertos
        │
        ▼
Routing, NAT y DNS
        │
        ▼
Networking en AWS
        │
        ▼
VPC
        │
        ├── Subnets
        ├── Route Tables
        ├── Internet Gateway
        ├── NAT Gateway
        ├── Security Groups
        └── Network ACL
        │
        ▼
Servicios de red de AWS
```

---

# 🌐 1. Fundamentos de Networking

Conceptos necesarios para comprender cómo se comunican los dispositivos dentro de una red.

### Conceptos

* ¿Qué es una red?
* LAN y WAN
* Cliente y servidor
* Módem
* Router
* Switch
* Access Point
* Paquetes de datos
* Dirección MAC
* Dirección IP

---

# 🔢 2. Direccionamiento IP

Conceptos relacionados con la identificación y ubicación lógica de dispositivos dentro de una red.

### Conceptos

* IPv4
* Estructura de una dirección IPv4
* IP pública
* IP privada
* Loopback
* Rangos de direcciones privadas
* IPv4 en redes domésticas
* IPv4 en AWS

---

# 🧩 3. Subredes y CIDR

Comprender cómo dividir una red en segmentos más pequeños y cómo AWS utiliza CIDR para definir rangos de direcciones IP.

### Conceptos

* ¿Qué es una subred?
* Máscara de red
* Network Address
* Host Address
* Broadcast
* CIDR
* Prefijos `/8`, `/16`, `/24`, etc.
* Cálculo de hosts
* División de redes
* Ejemplos prácticos

### Aplicación en AWS

* CIDR de una VPC
* CIDR de una Subnet
* Relación entre VPC y Subnets
* Subnets públicas y privadas

---

# 🚦 4. Protocolos, puertos y comunicación

Conceptos necesarios para comprender cómo se establece y controla la comunicación entre aplicaciones.

### Conceptos

* TCP
* UDP
* Puertos
* TCP/IP
* HTTP
* HTTPS
* SSH
* DNS
* ICMP
* Cliente → servidor
* Solicitud → respuesta

---

# 🛣️ 5. Routing, NAT y DNS

Conceptos relacionados con el direccionamiento del tráfico dentro de una red.

### Conceptos

* Routing
* Route Table
* Default Route
* Gateway
* NAT
* DNS
* Resolución de nombres
* Comunicación entre redes
* Comunicación hacia Internet

---

# ☁️ 6. Networking en AWS

Aplicación de los fundamentos de networking dentro de AWS.

## Amazon VPC

Conceptos fundamentales de una Virtual Private Cloud.

* VPC
* CIDR de una VPC
* Subnets
* Availability Zones
* Route Tables
* Internet Gateway
* NAT Gateway

### Arquitectura básica

```text
                    Internet
                       │
                       ▼
              Internet Gateway
                       │
                       ▼
                  ┌─────────┐
                  │   VPC   │
                  └─────────┘
                       │
              ┌────────┴────────┐
              ▼                 ▼
       Public Subnet      Private Subnet
              │                 │
              ▼                 ▼
          EC2 pública       EC2 privada
```

---

# 🔐 7. Seguridad de red

Comprender cómo AWS controla el tráfico hacia y desde los recursos.

### Security Groups

* Control de tráfico a nivel de instancia.
* Stateful.
* Reglas de entrada y salida.
* Puertos y protocolos.

### Network ACL

* Control de tráfico a nivel de subnet.
* Stateless.
* Reglas de entrada y salida.
* Reglas numeradas.
* Allow / Deny.

### Comparación

| Característica | Security Group   | Network ACL      |
| -------------- | ---------------- | ---------------- |
| Asociado a     | Recurso / ENI    | Subnet           |
| Estado         | Stateful         | Stateless        |
| Reglas         | Allow            | Allow / Deny     |
| Tráfico        | Entrada / salida | Entrada / salida |
| Nivel          | Recurso          | Subnet           |

---

# 🌍 8. Servicios relacionados con Networking

Una vez comprendidos los fundamentos de VPC, se pueden estudiar otros servicios de AWS relacionados con conectividad y distribución de tráfico.

* Amazon Route 53
* Elastic Load Balancing
* Amazon CloudFront
* AWS Site-to-Site VPN
* AWS Direct Connect
* AWS Transit Gateway

---

# 🧪 9. Práctica y material interactivo

Los conceptos de este módulo pueden complementarse con material visual e interactivo para facilitar la comprensión de conceptos como:

* Direccionamiento IPv4
* Subnetting
* CIDR
* Routing
* Arquitecturas VPC
* Subnets públicas y privadas
* Security Groups
* Network ACL

> La práctica debe utilizarse para reforzar la comprensión de los conceptos, no solamente para memorizar configuraciones.

---

# 📚 Recursos

### AWS

* [Amazon VPC Documentation](https://docs.aws.amazon.com/vpc/)
* [Amazon Route 53 Documentation](https://docs.aws.amazon.com/route53/)
* [Elastic Load Balancing Documentation](https://docs.aws.amazon.com/elasticloadbalancing/)
* [Amazon CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)

### Fundamentos

* IPv4
* CIDR
* TCP/IP
* DNS
* Routing
* NAT

---

## 📌 Relación con AWS Cloud Practitioner

Para el examen **AWS Certified Cloud Practitioner**, el objetivo no es convertirse en especialista en networking, sino comprender los conceptos necesarios para reconocer cómo AWS proporciona conectividad, aislamiento, direccionamiento y seguridad de red.

Por eso, el módulo prioriza:

```text
Concepto de red
      ↓
¿Por qué existe?
      ↓
¿Cómo funciona?
      ↓
¿Cómo se representa en AWS?
      ↓
¿Qué servicio de AWS lo implementa?
```
---

## 📖 Enfoque

> **Aprender networking primero. Entender AWS después.**

AWS proporciona herramientas para construir redes en la nube, pero comprender qué problema resuelve cada componente requiere primero entender los fundamentos de networking.

Este módulo busca conectar ambos mundos de forma progresiva:

**Networking → Cloud Networking → AWS Networking**
