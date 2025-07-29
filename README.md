# Bajaj BFHL API

This is a REST API built for the Bajaj Campus Hiring assignment (Full Stack Round) using Node.js and Express.

## Hosted API Endpoint

`https://bajaj-bfhl-api-fexd.onrender.com/bfhl`  
**Method**: POST

## Features

- Extracts and returns:
  - Even numbers
  - Odd numbers
  - Alphabets (uppercase)
  - Special characters
  - Sum of all numbers (as string)
  - Reversed concatenated alphabets in alternating caps
- Includes personal user details

## Sample Input (POST Body)

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

## Sample Output

```json
{
  "is_success": true,
  "user_id": "gracy_gulati_29072005",
  "email": "your_email@example.com",
  "roll_number": "211099XXXX",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Tech Stack
- Node.js
- Express.js
- Render (for hosting)
