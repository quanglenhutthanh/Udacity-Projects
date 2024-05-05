"""The class depends on the pandas library to complete the defined."""
import pandas as pd
from models.quote_model import QuoteModel
from QuoteEngine.ingestor_interface import IngestorInterface


class CsvIngestor(IngestorInterface):
    """Read data from csv file."""

    allowed_extensions = ['csv']

    @classmethod
    def parse(cls, path: str):
        """Abstract method signatures to parse CSV files."""
        quotes = []
        csv = pd.read_csv(path)
        return [QuoteModel(**row) for index, row in csv.iterrows()]
