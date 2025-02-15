function Manga(title, author, chapters) {
    this.title = title;
    this.author = author;
    this.chapters = chapters;
    this.publish = false;
    this.inStock = 0;
    this.addtoStock = function addtoStock(quantity) {
        this.inStock += quantity
    }
    this.save = function save() {

    }
}

const OnePiece = new Manga("One Piece", "Eiichiro Oda", 1000);

const Naruto = new Manga("Naruto", "Masashi Kishimoto", 1000);

const Bleach = new Manga("Bleach", "Tite Kubo", 1000);

console.log(OnePiece);

console.log(Naruto);

console.log(Bleach);
