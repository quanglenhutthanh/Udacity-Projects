"""The project defines a MemeGenerator module with the following responsibilities.

Loading of a file from disk.
Transform image by resizing to a maximum width of 500px while maintaining the input aspect ratio.
Add a caption to an image (string input) with a body and author to a random location on the image.
"""
from PIL import Image, ImageDraw, ImageFont
import os
import random


class MemeEngine:
    """MemeGenerator class."""

    def __init__(self, output_dir) -> None:
        """Init method."""
        self.output_dir = output_dir

    def make_meme(self, img_path, text, author, width=500):
        """Generate images."""
        with (Image.open(img_path)) as img:
            """Calculate size of the image with random position."""
            real_width, real_height = img.size
            height = int(real_height * width / real_width)
            img.thumbnail((width, height))
            row_text_position = random.choice(range(10, height-50))
            column_text_position = random.choice(range(10, 100))
            """Draw text on image."""
            draw = ImageDraw.Draw(img)
            body_font = ImageFont.truetype('./_data/fonts/LilitaOne-Regular.ttf', size=20)
            author_font = ImageFont.truetype('./_data/fonts/LilitaOne-Regular.ttf', size=15)
            draw.text((column_text_position, row_text_position), text, font=body_font, fill='white')
            draw.text((column_text_position, row_text_position + 20), author, font=author_font, fill='white')
            outfile = f'{self.output_dir}/temp-{random.randint(0,1000000)}.jpg'
            img.save(outfile)
            return outfile
