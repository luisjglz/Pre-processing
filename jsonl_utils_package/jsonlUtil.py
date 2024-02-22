# jsonl_utils_package/jsonlUtil.py
import spacy
import json
import os

# Cargar el modelo de spaCy
nlp = spacy.load("en_core_web_lg")

# Función para lematizar un texto dado
def lemmatize_text(text):
    doc = nlp(text)
    lemmatized_text = ' '.join([token.lemma_ for token in doc])
    return lemmatized_text

# Función para procesar un archivo JSONL línea por línea
def process_jsonl_file(input_file, output_file):
    # Abrir el archivo de entrada
    with open(input_file, "r") as f_in:
        # Abrir el archivo de salida
        with open(output_file, "w") as f_out:
            # Procesar cada línea del archivo de entrada
            for line in f_in:
                # Cargar la línea JSON
                data = json.loads(line)
                # Obtener el texto del campo "text"
                text = data.get("text", "")
                # Lematizar el texto
                lemmatized_text = lemmatize_text(text)
                # Reemplazar el texto original con el texto lematizado
                data["text"] = lemmatized_text
                # Escribir la línea procesada en el archivo de salida
                f_out.write(json.dumps(data) + "\n")
