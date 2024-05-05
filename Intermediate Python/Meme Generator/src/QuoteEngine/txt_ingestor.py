"""The class does not depend on any 3rd party library to complete the defined."""
import pandas as pd
from models.quote_model import QuoteModel
from QuoteEngine.ingestor_interface import IngestorInterface


class TxtIngestor(IngestorInterface):
    """Read data from text file."""

    allowed_extensions = ['txt']

    @classmethod
    def parse(cls, path: str):
        """Abstract method signatures to parse Text files."""
        quotes = []
        with open(path, 'r') as file:
            quotes = [QuoteModel(*line.strip().split(' - ')) for line in file]
        return quotes
