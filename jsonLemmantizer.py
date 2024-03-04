import sys
import os
from tqdm import tqdm  
from jsonl_utils_package.jsonlUtil import process_jsonl_files

# Rutas predeterminadas
JSONL_DIRECTORY = "jsonl_directory"
JSONL_LEMMANTIZED_DIRECTORY = "jsonl_lemanticized"

if __name__ == "__main__":
    if len(sys.argv) > 1:
        print("Usage: python lemmantizerJsonl.py path/to/jsonl_directory path/to/jsonl_lemanticized_directory")
        sys.exit(1)
    
    # Combinar las rutas predeterminadas con los nombres de los directorios
    input_dir = JSONL_DIRECTORY
    output_dir = JSONL_LEMMANTIZED_DIRECTORY
    
    # Verificar si la ruta de entrada es un directorio
    if os.path.isdir(input_dir):
        # Verificar si la ruta de salida es un directorio
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
        
        # Lista para almacenar todos los archivos JSONL encontrados
        all_jsonl_files = []
        # Recorrer el directorio en busca de archivos JSONL
        for file in os.listdir(input_dir):
            if file.endswith(".jsonl"):
                all_jsonl_files.append(os.path.join(input_dir, file))
        
        # Iterar sobre los archivos JSONL
        for jsonl_file in tqdm(all_jsonl_files, desc="Processing JSONL files"):
            # Obtener el nombre del archivo de salida
            output_file = os.path.join(output_dir, os.path.basename(jsonl_file))
            # Procesar el archivo JSONL y guardar el resultado en el directorio de salida
            process_jsonl_files(jsonl_file, output_file)
    
    else:
        print("Error: The input path provided is not a directory.")
        sys.exit(1)
