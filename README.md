# Bajaj BFHL API

This is a RESTful API developed for the Bajaj Campus Hiring Assignment (Full Stack Round) using Node.js and Express.

## Hosted API Endpoint

**URL:** [https://bajaj-bfhl-api-fexd.onrender.com/bfhl](https://bajaj-bfhl-api-fexd.onrender.com/bfhl)  
**Method:** POST

## Features

- Parses an input array of strings and returns:
  - Even numbers (as strings)
  - Odd numbers (as strings)
  - Alphabets (converted to uppercase)
  - Special characters
  - Sum of all numeric values (as a string)
  - Concatenated alphabets in reverse order with alternating capitalization
- Includes user-specific metadata: `user_id`, `email`, and `roll_number`

## Request Example (POST Body)

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
````

## Response Example

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

## Routes Summary

| Route   | Method | Description                           |
| ------- | ------ | ------------------------------------- |
| `/`     | GET    | Base route with a welcome message     |
| `/bfhl` | GET    | Info route explaining the endpoint    |
| `/bfhl` | POST   | Primary logic as per assignment specifications |

## Tech Stack

* Node.js
* Express.js
* Render (Hosting)
