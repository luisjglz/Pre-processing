
# Pre-procesing

Este github contiene el pre-procesing para lemantización de PDFs y de jsonl.

- [@sofhdez](https://github.com/sofhdez)
- [@AbielBorja](https://github.com/AbielBorja)
## JSONL Lemantizado

A continuación se explica el procesamiento de lemantización de los jsonl.

### Paso 1: Clonar el repositorio
Clona este repositorio en tu máquina local utilizando Git:
```bash
  git clone https://github.com/luisjglz/Pre-processing.git
```

### Paso 2: Instalar las dependencias
Navega hasta el directorio del proyecto e instala las dependencias necesarias ejecutando:
```bash
  pip install -r requirements.txt
```

Si para esto vamos todo correcto deberias tener un directorio parecido a lo siguiente:

#### Directorio

```
- jsonl_directory/
    - corpus1.jsonl
    - corpusFiltered.jsonl
    - ...
- jsonl_lemanticized/
    - ...
- lemmantizerJsonl.py
- jsonl_utils_package/
    - __init__.py
    - jsonlUtil.py
```
El archivo de  `jsonlUtil.py` realiza todo el proceso de lemantización.

El archivo de `jsonLemmantizer.py` realiza el proceso verificar si la ruta de entrada es un directorio, recorrer el directorio en busca de archivos JSONL y guardar el resultado en el directorio de salida

### Paso 3: Ejecutar el script

Ejecuta el script `lemmantizerJsonl.py` proporcionando la ruta al directorio que contiene tus archivos JSONL y la ruta al directorio donde deseas guardar los archivos lematizados.

Si deseas probar le ejecución del codigo y tienes el directorio igual al repositorio deberas ejecutar el siguiente comando en terminal en la del directorio raiz:

```bash
  python jsonLemmantizer.py jsonl_directory jsonl_lemanticized 
```


Si deseas ejecutar la lemantización pero no tienes el mismo directorio deberas seguir el siguiente formato en terminal:


```bash
  python lemmantizerJsonl.py path/to/jsonl_directory path/to/jsonl_lemanticized_directory
```

Reemplaza `path/to/jsonl_directory` con la ruta al directorio que contiene tus archivos JSONL, y `path/to/jsonl_lemanticized_directory` con la ruta al directorio donde deseas guardar los archivos lematizados.
