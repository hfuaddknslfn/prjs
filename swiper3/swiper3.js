let movieId3 = JSON.parse(localStorage.getItem('movie3'))
const getData3 = () => {
    fetch(`http://localhost:8080/films3/${movieId3}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
    })
}
getData3()