const book = {
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  isAvailable: true,
};

// JSON stringify
const bookToJSON = JSON.stringify(book);
console.log(bookToJSON);

// JSON parse
const jsonObjt =
  '{"title":"Eloquent JavaScript","author":"Marijn Haverbeke","isAvailable":true}';
const book1 = JSON.parse(jsonObjt);
console.log(book1.title);
