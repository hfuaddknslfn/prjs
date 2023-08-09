let movieId2 = JSON.parse(localStorage.getItem('movie2'))
const getData2 = () => {
    fetch(`http://localhost:8080/films2/${movieId2}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
    })
}
getData2()