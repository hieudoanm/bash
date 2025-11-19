build:
	uvx ruff check
	uvx ruff format
	python3 -m main

docsify:
	pnpx docsify-cli init ./docs
