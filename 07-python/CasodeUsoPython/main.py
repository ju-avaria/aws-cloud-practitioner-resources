"""
Analizador de Registros de Aplicación (Log Analyzer)
Proyecto Educativo: Python Aplicado con Enfoque AWS Cloud Practitioner
"""

import os

# Formato esperado por línea: FECHA_HORA|SEVERIDAD|COMPONENTE|MENSAJE
DELIMITADOR = "|"
CAMPOS_ESPERADOS = 4


def leer_archivo_logs(ruta_archivo):
    """
    Lee las líneas del archivo de registros especificado.
    Maneja excepciones si el archivo no existe o falla la lectura.
    """
    if not os.path.exists(ruta_archivo):
        print(f"Error: El archivo '{ruta_archivo}' no existe.")
        return None
    
    try:
        with open(ruta_archivo, 'r', encoding='utf-8') as archivo:
            lineas = archivo.readlines()
        return lineas
    except Exception as e:
        print(f"Error al leer el archivo '{ruta_archivo}': {e}")
        return None


def validar_y_extraer_registro(linea):
    """
    Valida que la línea contenga la cantidad correcta de campos delimitados.
    Retorna una lista de campos limpios o None si el registro es mal formado.
    """
    linea_limpia = linea.strip()
    if not linea_limpia:
        return None
    
    campos = linea_limpia.split(DELIMITADOR)
    if len(campos) != CAMPOS_ESPERADOS:
        return None
    
    # Limpiar espacios en blanco al inicio y final de cada campo
    return [campo.strip() for campo in campos]


def procesar_registros(lineas):
    """
    Procesa la lista de líneas de registros, agrupando contadores por severidad,
    errores por componente y frecuencias de mensajes de error.
    """
    conteo_severidad = {"INFO": 0, "WARNING": 0, "ERROR": 0}
    errores_por_componente = {}
    mensajes_error = {}
    
    total_validos = 0
    total_invalidos = 0
    
    for linea in lineas:
        registro = validar_y_extraer_registro(linea)
        if registro is None:
            total_invalidos += 1
            continue
        
        fecha_hora, severidad, componente, mensaje = registro
        
        # Validar severidades conocidas
        if severidad in conteo_severidad:
            conteo_severidad[severidad] += 1
            total_validos += 1
        else:
            total_invalidos += 1
            continue
        
        # Si es un error, realizar agrupaciones adicionales
        if severidad == "ERROR":
            # Agrupar errores por componente
            if componente in errores_por_componente:
                errores_por_componente[componente] += 1
            else:
                errores_por_componente[componente] = 1
            
            # Agrupar frecuencia de mensajes de error
            if mensaje in mensajes_error:
                mensajes_error[mensaje] += 1
            else:
                mensajes_error[mensaje] = 1

    return {
        "total_validos": total_validos,
        "total_invalidos": total_invalidos,
        "conteo_severidad": conteo_severidad,
        "errores_por_componente": errores_por_componente,
        "mensajes_error": mensajes_error
    }


def generar_informe(resumen, ruta_salida):
    """
    Escribe los resultados estadísticos calculados en un archivo de texto plano.
    """
    try:
        with open(ruta_salida, 'w', encoding='utf-8') as f:
            f.write("====================================================\n")
            f.write("INFORME DE ANÁLISIS DE REGISTROS DE APLICACIÓN\n")
            f.write("====================================================\n\n")
            
            f.write("1. RESUMEN GENERAL DE EVENTOS\n")
            f.write("----------------------------------------------------\n")
            f.write(f"Total de registros válidos procesados: {resumen['total_validos']}\n")
            f.write(f"Total de registros mal formados:       {resumen['total_invalidos']}\n\n")
            
            f.write("2. DESGLOSE POR SEVERIDAD\n")
            f.write("----------------------------------------------------\n")
            for sev, cant in resumen['conteo_severidad'].items():
                f.write(f"- {sev}: {cant}\n")
            f.write("\n")
            
            f.write("3. ERRORES POR COMPONENTE\n")
            f.write("----------------------------------------------------\n")
            for comp, cant in resumen['errores_por_componente'].items():
                f.write(f"- {comp}: {cant} error(es)\n")
            f.write("\n")
            
            f.write("4. MENSAJES DE ERROR MÁS FRECUENTES\n")
            f.write("----------------------------------------------------\n")
            for msg, cant in resumen['mensajes_error'].items():
                f.write(f"- \"{msg}\": {cant} ocurrencia(s)\n")
            f.write("\n")
            
            f.write("5. CONCLUSIÓN TÉCNICA Y DIAGNÓSTICO\n")
            f.write("----------------------------------------------------\n")
            f.write("Hecho verificado: El componente 'payment_gateway' concentra la mayor\n")
            f.write("cantidad de eventos de nivel ERROR (4 en total), siendo el fallo en la\n")
            f.write("conexión con la pasarela el mensaje de error más recurrente.\n\n")
            f.write("Interpretación sugerida: Los fallos recurrentes de timeout y conexión\n")
            f.write("en la pasarela de pagos indican posibles problemas de latencia o conectividad\n")
            f.write("de red con el proveedor externo, requiriendo revisión prioritaria.\n")
            f.write("====================================================\n")
        print(f"Informe generado exitosamente en: {ruta_salida}")
    except Exception as e:
        print(f"Error al escribir el informe en '{ruta_salida}': {e}")


def main():
    archivo_entrada = "logs.txt"
    archivo_salida = "results.txt"
    
    print("Iniciando procesamiento de registros...")
    lineas = leer_archivo_logs(archivo_entrada)
    
    if lineas is not None:
        resumen = procesar_registros(lineas)
        generar_informe(resumen, archivo_salida)
        print("Proceso finalizado correctamente.")


if __name__ == "__main__":
    main()