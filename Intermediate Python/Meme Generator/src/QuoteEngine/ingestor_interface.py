"""The project contains an abstract base class, IngestorInterface."""
from abc import ABC, abstractmethod
from pathlib import Path


class IngestorInterface(ABC):
    """Abstract class."""

    allowed_extensions = []

    @classmethod
    def can_ingest(cls, path: str):
        """Check if file can parse or not."""
        ext = path.split('.')[-1]
        return ext in cls.allowed_extensions

    @classmethod
    @abstractmethod
    def parse(cls, path: str):
        """Parse the file content."""
        pass
