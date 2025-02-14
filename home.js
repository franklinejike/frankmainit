function displayNav(){
    let mobileNav = document.querySelector(".mobileNav")
    mobileNav.style.display= "block"
}

function removeNav(){
    let mobileNav = document.querySelector(".mobileNav")
    mobileNav.style.display= "none"
}

//the subject attribute is to have no spaces between the words
let books = [
    {
        name: "Introduction to Computer Science",
        author: "David Evans",
        subject: "ComputerScience",
        image: "agric.jpeg",
        link: "https://www.computerscienceforeveryone.com"
    },
    {
        name: "Calculus Made Easy",
        author: "Silvanus P. Thompson",
        subject: "Mathematics",
        image: "book2.jpg",
        link: "https://www.calculusmadeeasy.org"
    },
    {
        name: "Maths Made Easy",
        author: "Silvanus P. Thompson",
        subject: "ComputerScience",
        image: "book2.jpg",
        link: "https://www.calculusmadeeasy.org"
    },
    {
        name: "Basic Physics: A Self-Teaching Guide",
        author: "Karl F. Kuhn",
        subject: "Physics",
        image: "book1.jpg",
        link: "https://www.basicphysics.org"
    },
    {
        name: "University Physics",
        author: "clinton c. rofus",
        subject: "Physics",
        image: "UniversityPhysics.png",
        link: "UniversityPhysics.pdf"
    },
    {
        name: "Biology for Beginners",
        author: "Tracy I. Storer",
        subject: "Biology",
        image: "bio.jpeg",
        link: "https://www.biologyforbeginners.com"
    },
    {
        name: "University Biology",
        author: "John Richard",
        subject: "Biology",
        image: "https://wallpapercave.com/wp/wp3059252.png",
        link: "UniversityPhysics.pdf"
    }
]


function displayBooks(){
    // do everything in here
    // create a subject array
    let subjects = []
    // loop through the books array
    books.forEach((book)=>{
        // for every book in the books array, check if the subject is in the subject array
        if(!subjects.includes(book.subject)){
            // if the subject is not in the subject array, add the subject to the subject array
            subjects.push(book.subject)
            // console.log(subjects)
        }
    })
    // WE STOPPED HERE

    // get the bigBookSection element
    let bigBookSection = document.querySelector(".bigBookSection");
    // set the innerHTML of the bigBookSection to an empty string
    bigBookSection.innerHTML = ""

    //----------------------------------------------------------------
    // THERE ARE TWO METHODS OF DOM MANIPULATION WE ARE GOING TO USE HERE.
    // The first method is the innerHTML method also known as using template literals and
    // the second method is the createElement method where we create elements and append them to the DOM
    // The innerHTML method is easier to use but it is not the best practice because it is not very efficient
    // The createElement method is the best practice because it is more efficient and it is the recommended way to manipulate the DOM
    //----------------------------------------------------------------
    // loop through the subjects array and create a section under bigBookSection for each subject
    subjects.forEach((subject)=>{
        // create a section element
        let section = document.createElement("section")
        // add a class of smallBookSectiont to the section
        section.classList.add("smallBookSection")
        //also add a class of the subject to the section
        section.classList.add(subject)
        // create a section with the class of subject and add to smallBookSection. add a paragraph with the class of subjectName inside the section with the class of subject and add the subject name to the paragraph. 
        section.innerHTML = `
            <section class="subject">
                <p class="subjectName">${subject}</p>
            </section>
        `
        // append the section to the bigBookSection
        bigBookSection.appendChild(section)
    })

    // for every book in the books array, use the innerHTML method to add:
    // 1. an article
    // 2. an image with the src of the book image and the alt of the book name in the article
    // 3. a div with the class of bookDetails also in the article
    // 4. a h3 with the class of bookTitle in the div. add the book name to the h3
    // 5. a p with the class of bookAuthor in the div. add the book author to the p
    // 6. lastly, an a with the href of the book link also in the div. add the text "Read Now" to the a
    books.forEach((book)=>{
        let article = document.createElement("article")
        article.innerHTML = `
            <img src="${book.image}" alt="${book.name}">
            <div class="bookDetails">
                <h3 class="bookTitle">${book.name}</h3>
                <p class="bookAuthor">${book.author}</p>
                <a href="${book.link}">Read Now</a>
            </div>
        `
        //using the class of the subject to get the section with the className of the subject 
        // and append the article to the section with the className of "subject" under that section
        document.querySelector(`.${book.subject}>.subject`).appendChild(article)
    })

}
displayBooks()


// function to fetch books from the server
// async function fetchBooks(){
//     // fetch the books from the server
//     let response = await fetch("https://example-api.com/books")
//     // convert the response to json
//     let data = await response.json()
//     // set the books array to the data gotten from the server
//     books = data
//     // call the displayBooks function
//     displayBooks()
// }

// to filter books by search
//----------------------------------------------------------------
// let searchInput = document.querySelector(".search input[type=search]")
// searchInput.addEventListener("input", ()=>{
//     let searchValue = searchInput.value.toLowerCase()
//     fetch("https://example-api.com/books")
//         .then(response => response.json())
//         .then(data => {
//             let filteredBooks = data.filter((book) => {
//                 return book.name.toLowerCase().includes(searchValue) || 
//                        book.author.toLowerCase().includes(searchValue) || 
//                        book.subject.toLowerCase().includes(searchValue);
//             });
//             books = filteredBooks;
//             displayBooks();
//         })
//         .catch(error => console.error('Error fetching books:', error));
// })



// to filter books by search
// ----------------------------------------------------------------
let searchInput = document.querySelector(".search input[type=search]")
searchInput.addEventListener("input", ()=>{
    let searchValue = searchInput.value.toLowerCase()
    let filteredBooks = books.filter((book) => {
        return book.name.toLowerCase().includes(searchValue) || 
               book.author.toLowerCase().includes(searchValue) || 
               book.subject.toLowerCase().includes(searchValue);
    });
    books = filteredBooks;
    displayBooks();
})