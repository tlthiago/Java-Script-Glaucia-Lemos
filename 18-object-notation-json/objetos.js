// Criando um objeto em JavaScript
const book = {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    isAvailable: true,

    checkIn: function() {
        this.isAvailable = true;
    },

    checkOut: function() {
        this.isAvailable = false;
    }
};

// Uso do construtor: new
const book2 = new Object();
book.title = "1984";
book.author = "George Orwell";
book.isAvailable = false;