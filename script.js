let container = document.querySelector('.container');
let arr = [];
let btn = document.querySelector('.add')
let dialog = document.querySelector('dialog')
let submit = document.querySelector('.submit')


function Books(image,title,author,pages,read){
    this.image = image
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

btn.addEventListener("click", ()=>{
    console.log('log in');
    dialog.showModal();
})
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    dialog.close();
    addBookToLibrary()
})
function addBookToLibrary(){
    const image = document.querySelector("#imageurl").value
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value
    const read = document.querySelector("#read").checked
   const book = new Books(image,title,author,pages,read);
   arr.push(book)
   displayBooks();
}
function displayBooks(){
    container.innerHTML = '';
   arr.forEach((book)=>{
    let bookCard = document.createElement('div');
    bookCard.classList.add("bookcard")
        bookCard.innerHTML = `
        <div class="img"><img src = "${book.image}" alt ="Image not available"</div>
        <div class="content">
        <h2>${book.title}</h2>
        <h3>${book.author}</h3>
        <h3>${book.pages} pages</h3>
        <h3>${book.read ? "I have read this book" : " i didn't read this book yet"}</h3>
        </div>
        `
        container.appendChild(bookCard)
        console.log(book)
   })
}
