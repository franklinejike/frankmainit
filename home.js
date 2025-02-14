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
        image: "compintro.jpeg",
        link: "https://www.computerscienceforeveryone.com"
    },
    {
        name: "Programming Language",
        author: "shriram Krishnamurthi",
        subject: "ComputerScience",
        image: "programinglang.jpeg",
        link: "programming lang.pdf"
    },
    {
        name: "Algorithms and Data Structures",
        author: "Jurg Nievergelt",
        subject: "ComputerScience",
        image: "AandD.jpeg",
        link: "algorithms and data structures.pdf"
    },
    {
        name: "Relational Data and Microsoft Acces 365",
        author: "Ron Mcfadyen",
        subject: "ComputerScience",
        image: "database.jpeg",
        link: "Relational-Databases-and-Microsoft-Access-365-1645549943.pdf"
    },
    {
        name: "Linear Algebra",
        author: "Robert A. Beezer",
        subject: "Mathematics",
        image: "linearalgebra.jpeg",
        link: "linear algebra.pdf"
    },
    {
        name: "Introduction to Probability",
        author: "Grindstead and Snell",
        subject: "Mathematics",
        image: "probablilty.jpeg",
        link: "introduction to probability.pdf"
    },
    {
        name: "Principles of Mechanics",
        author: "Salma Alrasheed",
        subject: "Physics",
        image: "principles.jpeg",
        link: "978-3-030-15195-9.pdf"
    },
    {
        name: "University Physics",
        author: "clinton c. rofus",
        subject: "Physics",
        image: "UniversityPhysics.png",
        link: "UniversityPhysics.pdf"
    },
    {
        name: "Mechanics and Relativity",
        author: "Yimon Idema",
        subject: "Physics",
        image: "mechanics.jpeg",
        link: "Idema+-+Mechanics+and+Relativity+Sept2019.pdf"
    },
    {
        name: "General Biology",
        author: "Tracy I. Storer",
        subject: "Biology",
        image: "GBio1.jpeg",
        link: "GeneralBiology.pdf"
    },
    {
        name: "General Biology II",
        author: "Abiodun E. Adams",
        subject: "Biology",
        image: "GBio2.jpeg",
        link: "BIO102 General Biology II.pdf"
    },
    {
        name: "Anatomy and Physiology of Animals",
        author: "Willey Blackwell",
        subject: "Biology",
        image: "anatomy.jpeg",
        link: "Anatomy_and_Physiology_of_Animals.pdf"
    },
    {
        name: "Environmental Biology",
        author: "Matthew R. Fisher",
        subject: "Biology",
        image: "environmentalbio.jpeg",
        link: "Environmental-Biology-1696032563.pdf"
    },
    {
        name: "Weed Management",
        author: "Agrimoon.com",
        subject: "Agriculture",
        image: "weed.jpeg",
        link: "Weed-Management.pdf"
    },
    {
        name: "Field Crops",
        author: "Tamil Nadu",
        subject: "Agriculture",
        image: "field.jpeg",
        link: "Field-Crop-Kharif.pdf"
    },
    {
        name: "Energy Conservation and Management",
        author: "Ashok Sethuraman",
        subject: "Agriculture",
        image: "energy.jpeg",
        link: "ENERGY-CONSERVATION-AND-MANAGEMENT.pdf"
    },
    {
        name: "Nutrition Science and Everyday Application",
        author: "Alice Callahan, PHD",
        subject: "HomeEconomics",
        image: "nutrition.jpeg",
        link: "Nutrition Science and Everyday Application, Alice Callahan, Heather Leonard, Med, Tamberly Powell.pdf"
    },
    {
        name: "Human Nutrition",
        author: "Langara College",
        subject: "HomeEconomics",
        image: "humannutrition.jpeg",
        link: "Human-Nutrition-2020-Edition-1598491699.pdf"
    },
    {
        name: "A Guide for Interior Design",
        author: "A. Bhatia, B.E",
        subject: "HomeEconomics",
        image: "design.jpeg",
        link: "A Guide for Interior Design, A. Bhatia, B.E.pdf"
    },
    {
        name: "Clothing Textiles and Fashion",
        author: "Saskatechewa Education",
        subject: "HomeEconomics",
        image: "clothing.jpeg",
        link: "40542-Clothing_Textiles_and_Fashion_10_30_2000.pdf"
    },
    {
        name: "Introduction to Business",
        author: "lawrence J. Gitman",
        subject: "BusinessEducation",
        image: "businessintro.jpeg",
        link: "IntroductionToBusiness-OP_8D04gAa.pdf"
    },
    {
        name: "Financial Strategy for Public Managers",
        author: "Sharon Kioko and Justin Marlowe",
        subject: "BusinessEducation",
        image: "strategy.jpeg",
        link: "Financial-Strategy-for-Public-Managers-1695337744.pdf"
    },
    {
        name: "eMarketing",
        author: "Red & Yellow",
        subject: "BusinessEducation",
        image: "emarketing.jpeg",
        link: "eMarketing_ed7.pdf"
    },
    {
        name: "Electronic Commerce The Strategic Perspective",
        author: "Richard T. Watson",
        subject: "BusinessEducation",
        image: "commerce.jpeg",
        link: "Electronic-Commerce-The-Strategic-Perspective-1653439969.pdf"
    },
    {
        name: "Introduction to Welding",
        author: "David H. Philips",
        subject: "IndustrialTechnical",
        image: "weld.jpeg",
        link: "Intro to Welding Technology.pdf"
    },
    {
        name: "Building Strategy and Performance",
        author: "David H. Philips",
        subject: "IndustrialTechnical",
        image: "building.jpeg",
        link: "Intro to Welding Technology.pdf"
    },
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