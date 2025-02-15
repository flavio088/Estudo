class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.published = false;
    }

    publish () {
        this.published = true;
    }
}

const OnePiece = new Book ("One Piece", "Eiichiro Oda", 1000);

OnePiece.publish();

console.log(OnePiece);