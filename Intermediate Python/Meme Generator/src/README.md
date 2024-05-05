# Project Meme Generator

The goal of this project is to build a "meme generator" - a multimedia application dynamically generate memes, including an image with a quote.


## Project Description
The Quote Engine module is responsible for ingesting many types of files that contain quotes.
The Meme Engine Module is responsible for manipulating and drawing text onto images.
The project contains a flask app starter code in app.py.

## Setup and Running
Install all dependencies given in the requirements.txt file using pip:
	
	pip install -r requirements.txt

Download and install pdftotext: https://www.xpdfreader.com/download.html
- Unzip the files in a location of your choice.
- Get the full file path to the folder named bin32 (if you have a 32-bit machine) or bin64 (if you have a 64-bit machine).
- Add this path to the Path environment variable. This will allow you to use the xpdf command from the command line. If you've never done this before, check out:https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho 

The application can be started by running the following command:
	
	python app.py
	
	





