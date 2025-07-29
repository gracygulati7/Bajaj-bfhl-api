const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const FULL_NAME = "gracy_gulati";
const DOB = "25052004"; 
const EMAIL = "gracy331.be22@chitkara.edu.in";
const ROLL_NUMBER = "2210990331"; 

const isNumber = (str) => /^[0-9]+$/.test(str);
const isAlphabet = (str) => /^[a-zA-Z]+$/.test(str);
const isSpecialChar = (str) => !isNumber(str) && !isAlphabet(str);

app.post('/bfhl', (req, res) => {
  try {
    const inputData = req.body.data;

    if (!inputData || !Array.isArray(inputData)) {
      return res.status(400).json({
        is_success: false,
        message: "'data' must be a non-empty array."
      });
    }

    const even_numbers = [];
    const odd_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let alphaConcat = "";

    inputData.forEach((item) => {
      if (typeof item !== "string" && typeof item !== "number") {
        return;
      }

      const strItem = String(item);

      if (/^[0-9]+$/.test(strItem)) {
        const num = parseInt(strItem);
        sum += num;
        (num % 2 === 0 ? even_numbers : odd_numbers).push(strItem);
      } else if (/^[a-zA-Z]+$/.test(strItem)) {
        alphabets.push(strItem.toUpperCase());
        alphaConcat += strItem;
      } else {
        special_characters.push(strItem);
      }
    });

    let reversedAlpha = alphaConcat.split("").reverse();
    let concat_string = reversedAlpha
      .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join("");

    const response = {
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    };

    console.log(JSON.stringify(response));
    res.status(200).json(response);
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({
      is_success: false,
      message: "Something went wrong on the server."
    });
  }
});

app.get('/', (req, res) => res.send("BFHL API Running"));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
