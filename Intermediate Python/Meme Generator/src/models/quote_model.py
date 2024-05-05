"""Represent models for Quote objects."""


class QuoteModel:
    """a QuoteMode object, which contains text fields for body and author."""

    def __init__(self, body='', author='') -> None:
        """Construct new Quote entity."""
        self.body = body
        self.author = author

    def __str__(self) -> str:
        """Return readable text."""
        return f'{self.body} - {self.author}'
