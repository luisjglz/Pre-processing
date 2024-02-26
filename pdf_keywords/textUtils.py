import jsonlines
from num2words import num2words
import contractions
from spellchecker import SpellChecker
from unidecode import unidecode
import spacy
import re
from tqdm import tqdm

# Load Spacy model for lemmatization
nlp = spacy.load("en_core_web_lg")
spell = SpellChecker()


def word_lemmatizer(text):
    doc = nlp(text)
    return ' '.join([token.lemma_ for token in doc])


def convert_numbers_to_words(text):
    return ' '.join([num2words(word) if word.isdigit() else word for word in text.split()])


def expand_contractions(text):
    return contractions.fix(text)


def convert_emojis_to_words(text):
    return text.encode('ascii', 'ignore').decode('ascii')


def convert_accented_to_ascii(text):
    return unidecode(text)


def correct_spelling(text):
    corrected_words = [spell.correction(word) for word in text.split()]
    return ' '.join(corrected_words)


def clean_text(text):
    text = expand_contractions(text)
    text = convert_accented_to_ascii(text)
    text = convert_emojis_to_words(text)
    text = convert_numbers_to_words(text)
    return text


def process_txt_file(file_path, output_file):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read().replace('\n', ' ').replace('\r', ' ')

    # Clean the entire content
    cleaned_content = clean_text(content.strip())

    # Splitting the cleaned content into sentences
    sentences = re.split(r'(?<=\w\.)\s', cleaned_content)

    # Write each sentence as a separate object in a .jsonl file
    with jsonlines.open(output_file, mode='w') as writer:
        for sentence in tqdm(sentences, desc="Writing sentences"):
            writer.write({"text": sentence})


if __name__ == "__main__":
    import sys

    if len(sys.argv) != 3:
        print("Usage: python script.py <input_txt_file> <output_jsonl_file>")
        sys.exit(1)

    txt_file_path = sys.argv[1]
    jsonl_output_file = sys.argv[2]

    process_txt_file(txt_file_path, jsonl_output_file)


# python textUtils.py path/to/input.txt path/to/output.jsonl
