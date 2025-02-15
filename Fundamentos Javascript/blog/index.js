const Author = require("./Author");

const john = new Author("John Doe");

const post = john.writePost("Hello World", "This is my first post");

post.addComment("Jane Doe", "This is a comment");
post.addComment("John Doe", "This is another comment");

console.log(john);
console.log(post);
