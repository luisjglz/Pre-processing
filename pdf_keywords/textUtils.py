import argparse
import jsonlines
import re
from tqdm import tqdm


def remove_unwanted_characters(text):
    # Remove URLs more aggressively
    text = re.sub(r'https?://\S+|www\.\S+', '', text)
    # Remove any remaining URL parts
    text = re.sub(r'\S+\.\S+', '', text)
    # Remove \ and unicode characters
    text = re.sub(r'\\u[\dA-Fa-f]{4}', '', text)
    text = re.sub(r'\\', '', text)
    return text


def is_valid_sentence(sentence):
    # Check for alphabetic content and discard purely numerical or known non-informative phrases
    if not re.search('[a-zA-Z]', sentence):
        return False
    if sentence.strip().isdigit() or "Ibid." in sentence:
        return False
    return True


def filter_sentences(sentences, min_words=3):
    filtered_sentences = []
    for sentence in sentences:
        # Splitting based on spaces to count words and checking sentence validity
        if len(sentence.split()) >= min_words and is_valid_sentence(sentence):
            filtered_sentences.append(sentence)
    return filtered_sentences


def clean_and_filter_text(content, min_words):
    # Apply cleaning functions
    cleaned_content = remove_unwanted_characters(content)

    # Splitting the cleaned content into sentences
    sentences = re.split(r'(?<=\w\.)\s', cleaned_content)

    # Filter out short and invalid sentences
    filtered_sentences = filter_sentences(sentences, min_words)

    return filtered_sentences


def process_txt_file(file_path, output_file, min_words):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read().replace('\n', ' ').replace('\r', ' ')

    # Clean and filter the content
    filtered_sentences = clean_and_filter_text(content.strip(), min_words)

    # Write each sentence as a separate object in a .jsonl file
    with jsonlines.open(output_file, mode='w') as writer:
        for sentence in tqdm(filtered_sentences, desc="Writing sentences"):
            writer.write({"text": sentence})


def main():
    parser = argparse.ArgumentParser(
        description='Clean and filter text, and write sentences to a JSONL file.')
    parser.add_argument('txt_file_path', type=str,
                        help='Path to the input text file.')
    parser.add_argument('jsonl_output_file', type=str,
                        help='Path to the output JSONL file.')
    parser.add_argument('-n', '--min_words', type=int, default=3,
                        help='Minimum number of words in a sentence to include it in the output.')

    args = parser.parse_args()

    process_txt_file(args.txt_file_path,
                     args.jsonl_output_file, args.min_words)


if __name__ == "__main__":
    main()

# python textUtils.py path/to/input.txt path/to/output.jsonl
