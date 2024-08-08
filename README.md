# URL Variable Extractor

This project implements a JavaScript function that extracts variable parts from a URL into a hash object.

## Functionality

The function takes two arguments:

1. URL format string: This string defines the expected format of the URL. It can contain constant parts and variable parts separated by `/`. Variable parts are always prefixed with a colon `:`.

2. URL instance: This is the actual URL that needs to be parsed. It must follow the format specified by the URL format string. The URL can additionally contain query parameters.

\
The function extracts the values of the variable parts from the URL instance and creates a hash object. The keys of the hash object are the names of the variable parts (without the colon prefix), and the values are the extracted values. The output is a valid JSON object.

## Example

URL format string:

    /:version/api/:collection/:id

URL instance:

    /6/api/listings/3?sort=desc&limit=10

Extracted hash:

    {
        "version": 6,
        "collection": "listings",
        "id": 3,
        "sort": "desc",
        "limit": 10
    }

## Screenshots
![URL-parser](https://github.com/user-attachments/assets/42951db7-968a-4333-8ea6-58fbdbe67161)
