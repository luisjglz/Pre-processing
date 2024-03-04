# jsonl_utils_package/jsonlUtil.py
import spacy
import json
import os

# Cargar el modelo de spaCy
nlp = spacy.load("en_core_web_lg")

# Obtener las stopwords de spaCy
stopwords = spacy.lang.en.stop_words.STOP_WORDS

# Función para lematizar un texto dado y eliminar stopwords
def lemmatize_and_remove_stopwords(text):
    # Procesar el texto con spaCy
    doc = nlp(text)
    # Obtener los lemas y eliminar stopwords
    lemmatized_text = ' '.join([token.lemma_ for token in doc if not token.is_stop and token.is_alpha])
    return lemmatized_text

# Función para procesar archivos JSONL
def process_jsonl_files(input_file, output_file):
    # Lista para almacenar datos procesados
    processed_data = []
    
    with open(input_file, "r") as f_in:
        for line in f_in:
            data = json.loads(line)
            text = data.get("text", "")
            lemmatized_text = lemmatize_and_remove_stopwords(text)
            data["text"] = lemmatized_text  # Reemplazar el campo "text" con el texto lematizado y sin stopwords
            processed_data.append(data)
    
    # Escribir los datos procesados en el archivo de salida
    with open(output_file, "w") as f_out:
        for data in processed_data:
            f_out.write(json.dumps(data) + "\n")