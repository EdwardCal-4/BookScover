let searchButton = document.getElementById("btn")

searchButton.addEventListener("click", function(event) {
    document.getElementById("contentHolder").innerHTML = "";
    let bookSearch = document.getElementById("getValue").value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`
    event.preventDefault();
    console.log(bookSearch);
    fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let bookRow = document.getElementById("contentHolder")
        let allBooks = data.items
        console.log(data.items);

        allBooks.map((item) =>{
            let bookColumn = document.createElement("div");
            let carrier = `
            <div>
                <img src="${item.volumeInfo.imageLinks.smallThumbnail}" class="img-fluid myImg">
            </div>
            <div>
                <h5> ${item.volumeInfo.title}</h5>
                <h6> ${item.volumeInfo.authors}<h6>
                <p><a target="blank" href="${  item.volumeInfo.infoLink}">See more</a></p>
            </div>
            `;

            bookColumn.innerHTML = carrier;
            bookRow.appendChild(bookColumn);
            console.log(item.volumeInfo);
        })

    })
    
    .catch((error) => {
        alert("User must type bookname or book category");
     });

     document.getElementById("getValue").value = "";
})
