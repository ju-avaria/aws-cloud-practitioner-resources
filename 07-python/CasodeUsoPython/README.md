# Analizador de Registros de Comercio Electrónico (Python + AWS Cloud Practitioner)

Este proyecto educativo enseña fundamentos de programación en Python 3 resolviendo un caso práctico de análisis de logs empresariales y conectando dichas decisiones técnicas con los conceptos esenciales de AWS Cloud.

## Objetivos de Aprendizaje
- Identificar la estructura Entradas -> Procesos -> Salidas de una solución de software.
- Manejar estructuras sintácticas básicas de Python: variables, condicionales, ciclos, listas, diccionarios y funciones.
- Leer y procesar archivos de datos delimitados, aplicando validación básica de registros mal formados.
- Generar informes estructurados en archivos de texto.
- Comprender la transición arquitectónica entre un script local y una solución cloud escalable e inmutable usando **Amazon S3**, **AWS Lambda** y **Amazon CloudWatch**.

## Estructura del Proyecto
- `logs.txt`: Archivo de entrada con registros ficticios de eventos del sistema.
- `main.py`: Código fuente en Python 3 encargado de procesar los datos y generar el análisis.
- `results.txt`: Informe final generado automáticamente tras la ejecución.
- `index.html`: Presentación interactiva y material guiado para estudiar el caso y responder evaluaciones.
- `README.md`: Manual de uso e instrucciones del proyecto.

## Requisitos Previos
- Python 3.7 o superior instalado en el sistema.
- Un navegador web moderno (Edge, Chrome, Firefox, Safari) para visualizar `index.html`.

## Instrucciones de Ejecución

### En Windows (PowerShell / CMD)
```cmd
python main.py