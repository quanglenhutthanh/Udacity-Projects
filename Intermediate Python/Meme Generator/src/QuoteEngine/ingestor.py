"""All ingestors are packaged into a main Ingestor class."""
from .ingestor_interface import IngestorInterface
from .csv_ingestor import CsvIngestor
from .pdf_ingestor import PdfIngestor
from .docx_ingestor import DocxIngestor
from .txt_ingestor import TxtIngestor


class Ingestor(IngestorInterface):
    """This class encapsulates all the ingestors to provide one interface to load any supported file type."""

    ingestors = [CsvIngestor, PdfIngestor, DocxIngestor, TxtIngestor]

    @classmethod
    def parse(cls, path: str):
        """Choose ingester and parse file."""
        for ingestor in cls.ingestors:
            if ingestor.can_ingest(path):
                quotes = ingestor.parse(path)
        return quotes
