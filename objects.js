// # 1. Make an object to store a person's first name, last name, and email address. Then print each attribute on separate lines.
var info = {
  "first name": "Mendy",
  last_name: "Cohen",
  email: "mendy@gmail.com"
};
console.log(info["first name"]);
console.log(info["last_name"]);
console.log(info.email);
// # 2. Make an array of objectes to store the first name and last name for 3 different people. Then print out the first person's info.
var people = [
  {
    first_name: "Mendy",
    last_name: "Cohen"
  },
  {
    first_name: "Chanie",
    last_name: "Cohen"
  },
  {
    first_name: "Schneur",
    last_name: "Cohen"
  }
];
console.log(people[0]);
// # 3. Make an object to store prices for 3 different menu items. Then add a new menu item and price and print the object to see the result.
var menu = {
  "soup": 5,
  "appetizer": 4,
  "desert": 7
}; 
menu.main_course = 14;
console.log(menu);
console.log(menu.soup);
console.log(menu.appetizer);
console.log(menu.main_course);
// # 4. Make an object to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.
var book = {
  title: "The Book",
  author: "Steve Singer",
  number_of_pages: 300,
  language: "English"
};
console.log(book["title"]);
console.log(book.author);
console.log(book["number_of_pages"]);
console.log(book.language);
// # 5. Make an array of objectes to store the title and author for 3 different books. Then print out the third book's author.
var books = [
  {
    "title": "The Book",
    "author": "The Author"
  },
  {
    "title": "Another Book",
    "author": "Another Author"
  },
  {
    "title": "Reading",
    "author": "Always Writing"
  }
];
console.log(books[2].author);
// # 6. Make an object to store 3 different states and their captitals. Then add a new state and capital and print the object to see the result.
var states = {
  Pennsylvania: "Harrisburgh", 
  NewYork: "Albany", 
  Massachusetts: "Boston"
};
states.Michigan = "Lansing";
console.log(states);

// # 7. Make an object to store a laptop's brand, model, and year. Then print each attribute on separate lines.
var laptop = {
  "brand": "Apple",
  "model": "MacBook Air",
  "year": 2020
};
console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.year);

// # 8. Make an array of objects to store the brand and model for 3 different laptops. Then print out the second laptop's model.
var laptops = [
  {
    "brand": "Apple",
    "model": "MacBook Air",
    "year": 2020
  },
  {
    "brand": "HP",
    "model": "Magna",
    "year": 2018
  },
  {
    "brand": "Acer",
    "model": "ZC2300",
    "year": 2019
  }
];
console.log(laptops[1].model);
// # 9. Make an object to store definitions for 2 different words. Then add a new word and definition and print the object to see the result.
var definitions = {
  "add": "combine the value of multiple numbers",
  "subtract": "decrease the value from a number"
};
definitions.multiply = "increase value by duplicating the original amount";
console.log(definitions);

// # 10. Make an object to store a shirt's brand, color, and size. Then print each attribute on separate lines.
var shirt = {
  "brand": "Calvin Klein",
  "color": "Purple",
  "size": 17
};
console.log(shirt.brand);
console.log(shirt.color);
console.log(shirt.size);