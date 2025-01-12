function search(event){
    event.preventDefault();
    alert("Searching");
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);