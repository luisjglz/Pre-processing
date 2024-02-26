import os
import json
import fitz  # PyMuPDF
import argparse


def convert_pdf_to_text(pdf_path):
    """Convert a PDF file to text."""
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    doc.close()
    return text


def find_sentences(text, keyword, n=5):
    """Find sentences with the keyword, including n words before and after."""
    words = text.split()
    sentences = []
    for i, word in enumerate(words):
        if keyword.lower() in word.lower():  # Case-insensitive match
            start = max(i - n, 0)
            end = min(i + n + 1, len(words))
            sentence = " ".join(words[start:end])
            sentences.append(sentence)
    return sentences


def process_pdfs(folder_path, keywords, n):
    """Process all PDFs in the folder, searching for the keywords."""
    sentences = []
    for filename in os.listdir(folder_path):
        if filename.endswith(".pdf"):
            pdf_path = os.path.join(folder_path, filename)
            text = convert_pdf_to_text(pdf_path)
            for keyword in keywords:
                sentences += find_sentences(text, keyword, n)
    return sentences


def main():
    parser = argparse.ArgumentParser(
        description='Search PDFs for keywords and extract surrounding sentences.')
    parser.add_argument('json_path', type=str,
                        help='Path to the JSON file containing keywords.')
    parser.add_argument('folder_path', type=str,
                        help='Path to the folder containing PDF files.')
    parser.add_argument('output_file', type=str,
                        help='Path to the output text file.')
    parser.add_argument('-n', '--number_of_words', type=int, default=5,
                        help='Number of words before and after the keyword to include in the output.')

    args = parser.parse_args()

    # Load keywords from JSON
    with open(args.json_path, 'r') as json_file:
        data = json.load(json_file)
    keywords = [item['id'] for item in data]

    # Process PDFs and find sentences
    sentences = process_pdfs(args.folder_path, keywords, args.number_of_words)

    # Write sentences to the output file
    with open(args.output_file, 'w') as out_file:
        for sentence in sentences:
            out_file.write(sentence + "\n")


if __name__ == "__main__":
    main()

# python script.py /path/to/your/keywords.json /path/to/your/pdfs/ /path/to/your/output.txt -n 5
