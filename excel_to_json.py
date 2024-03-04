import pandas as pd
import jsonlines
import os
import re

def clean_text(text):
    # Aplicar expresión regular para mantener solo caracteres alfanuméricos y espacios
    cleaned_text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    return cleaned_text

def excel_to_jsonl(excel_directory, jsonl_directory):
    # Iterar sobre cada archivo Excel en el directorio
    for filename in os.listdir(excel_directory):
        if filename.endswith(".xlsx"):
            excel_path = os.path.join(excel_directory, filename)
            jsonl_filename = os.path.join(jsonl_directory, f"{os.path.splitext(filename)[0]}.jsonl")
            # Obtener el valor utc del nombre del archivo
            utc = extract_utc(filename)
            # Leer el archivo Excel
            df = pd.read_excel(excel_path)
            # Crear el archivo JSONL correspondiente
            with jsonlines.open(jsonl_filename, 'w') as writer:
                # Iterar sobre cada fila del DataFrame y escribir el texto en el archivo JSONL
                for _, row in df.iterrows():
                    # Convertir la fila a un diccionario y obtener el texto
                    text = row.to_json()
                    # Limpiar el texto
                    cleaned_text = clean_text(text)
                    # Escribir el texto limpio en el archivo JSONL
                    writer.write({"text": cleaned_text, "utc": utc})

def extract_utc(filename):
    # Obtener el valor utc del nombre del archivo si está presente
    if "Sfw_dataset-" in filename:
        parts = filename.split("-")
        try:
            return int(parts[-1])
        except ValueError:
            pass
    # Valor predeterminado si no se encuentra utc en el nombre del archivo
    return None

if __name__ == "__main__":
    excel_directory = "excel_directory"
    jsonl_directory = "jsonl_directory"
    
    excel_to_jsonl(excel_directory, jsonl_directory)