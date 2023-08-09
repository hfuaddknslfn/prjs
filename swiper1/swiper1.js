

let movieId = JSON.parse(localStorage.getItem('movie'))
const getData = () => {
    fetch(`http://localhost:8080/films/${movieId}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
    })
}
getData()

