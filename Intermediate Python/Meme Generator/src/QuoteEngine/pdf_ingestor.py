"""The PDFIngestor class utilizes the subprocess module to call the pdftotext CLI utility—creating a pipeline that converts PDFs to text and then ingests the text."""
import os
import subprocess
import random
from models.quote_model import QuoteModel
from QuoteEngine.ingestor_interface import IngestorInterface


class PdfIngestor(IngestorInterface):
    """Parse data from pdf file."""

    allowed_extensions = ['pdf']

    @classmethod
    def parse(cls, path: str):
        """Abstract method signatures to parse PDF files."""
        tmp = f'./_data/{random.randint(0,1000000)}.txt'
        call = subprocess.call(['pdftotext', '-layout', '-nopgbrk', path, tmp])
        file_ref = open(tmp, 'r')
        quotes = []
        for line in file_ref.readlines():
            line = line.strip('\n\r').strip()
            if len(line) > 0:
                parsed = line.split('-')
                quote = QuoteModel(parsed[0], parsed[1])
                quotes.append(quote)
        file_ref.close()
        os.remove(tmp)
        return quotes
