# Buscador de Palabras en PDFs

Este script en Python permite buscar una lista de palabras clave dentro de archivos PDF en un directorio especificado, extrayendo y guardando las oraciones que contienen estas palabras clave en un archivo de texto. Es ideal para quienes necesitan analizar documentos y extraer información relevante automáticamente.

## Requisitos

Para ejecutar este script, necesitarás Python instalado en tu sistema. Además, el script depende de las siguientes bibliotecas de Python:

- PyMuPDF (también conocido como `fitz`)
- argparse

Puedes instalar estas dependencias utilizando `pip`:

```bash
pip install PyMuPDF argparse
```

## Uso

Para utilizar este script, sigue los pasos a continuación:

1. Prepara un archivo JSON que contenga las palabras clave que deseas buscar. El formato del archivo debe ser una lista de objetos con la clave `id`, donde cada `id` es una palabra clave. Por ejemplo:

```json
[
   { "id": "Gestión de Campañas de Marketing" },
   { "id": "Desarrollo de Planes de Comunicaciones de Marketing" }
]
```

2. Coloca los archivos PDF en los que deseas buscar en un directorio.

3. Ejecuta el script desde la línea de comandos, especificando la ruta al archivo JSON, el directorio de los PDFs, la ruta al archivo de salida donde se guardarán las oraciones encontradas, y opcionalmente, el número de palabras antes y después de la palabra clave que deseas incluir en la extracción. Aquí tienes un ejemplo de cómo ejecutar el script:

```bash
python generateTxt.py /ruta/al/archivo/keywords.json /ruta/al/directorio/pdfs /ruta/al/archivo/salida.txt -n 5
```

## Argumentos

- `json_path`: Ruta al archivo JSON que contiene las palabras clave.
- `folder_path`: Ruta al directorio que contiene los archivos PDF a analizar.
- `output_file`: Ruta al archivo de texto donde se guardarán las oraciones encontradas.
- `-n`, `--number_of_words`: (Opcional) Número de palabras antes y después de la palabra clave para incluir en la extracción. El valor predeterminado es 5.
