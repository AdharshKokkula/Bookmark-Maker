// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkForm = document.getElementById("bookmarkForm");
let bookmarksList = document.getElementById("bookmarksList");

let siteNameInput = document.getElementById("siteNameInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");

let siteUrlInput = document.getElementById("siteUrlInput");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");

siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
})

siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
})

function validateDetails() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }

    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
}

function addBookmark() {
    console.log("hiii");
    let url = siteUrlInput.value;
    let siteName = siteNameInput.value;

    let bookmarkItem = document.createElement("li");
    bookmarkItem.classList.add("bookmark-list-item");
    bookmarkItem.style.color = "black";

    let bookmarkName = document.createElement("h1");
    bookmarkName.textContent = siteName;
    bookmarkItem.appendChild(bookmarkName);

    let bookmarkUrl = document.createElement("a");
    bookmarkUrl.textContent = url;
    bookmarkUrl.href = url;
    bookmarkUrl.target = "_blank";
    bookmarkItem.appendChild(bookmarkUrl);

    bookmarksList.appendChild(bookmarkItem);
}

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateDetails();
    addBookmark();
})
