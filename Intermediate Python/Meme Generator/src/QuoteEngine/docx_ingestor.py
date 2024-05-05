"""The class depends on the python-docx library to complete the defined."""
import docx
from models.quote_model import QuoteModel
from QuoteEngine.ingestor_interface import IngestorInterface


class DocxIngestor(IngestorInterface):
    """Read data from docx file."""

    allowed_extensions = ['docx']

    @classmethod
    def parse(cls, path: str):
        """Astract method signatures to parse DOCX files."""
        quotes = []
        doc = docx.Document(path)
        for paragraph in doc.paragraphs:
            quotes.append(QuoteModel(*paragraph.text.split(' - ')))
        return quotes
