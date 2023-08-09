

const getData2 = () => {
  fetch(`http://localhost:8080/films2`)
  .then(resp => resp.json())
  .then(data => {
    let card2 = ''
    data.forEach(item => {
      card2 += createCard2(item.name, item.id, item.img)
    })
    let swiperMovies2 = document.querySelector('#swiperMovies2')
    swiperMovies2.innerHTML = card2
    console.log(data);
  })
}
getData2()
const createCard2 = (name, id, img) => {
  return `
  <swiper-slide class="video-container3" onclick="setLocalStorage2(${id})">
  <a href="./swiper2/swiper2.html" class="container3-img">
  <div class="container3-second_swiper">
  <div class="container3-video_text">
  ${name}
  <img width="200" height="600" src="${img}" alt="${name}">
  </div>
  </div>
  </a>
  </swiper-slide>
  `
}
const setLocalStorage2 = (id) => {
  localStorage.setItem('movie2', id)
}






const getData = () => {
  fetch(`http://localhost:8080/films`)
  .then(resp => resp.json())
  .then(data => {
    let card = ''
    data.forEach(item => {
      card += createCard(item.name, item.id, item.img, item.video)
    })
    let swiperMovies = document.querySelector('#swiperMovies')
    swiperMovies.innerHTML = card
    console.log(data);
  })
}
getData()
const createCard = (name, id, img) => {
  return `
  <swiper-slide class="container5-first_img" onclick="setLocalStorage(${id})">
  <a href="./swiper1/swiper1.html" class="container5-card_img">
  <div class="container5-second_swiper">
  <div class="container5-video_text">
  ${name}
  <img class="jecky" width="225px" src="${img}" alt="${name}">
  </div>
  </div>
  </a>
  </swiper-slide>
  `
}
const setLocalStorage = (id) => {
  localStorage.setItem('movie', id)
}






// const getData3 = () => {
//   fetch(`http://localhost:8080/films3`)
//   .then(resp => resp.json())
//   .then(data => {
//     let card3 = ''
//     data.forEach(item => {
//       card3 += createCard3(item.name, item.id, item.imgPaluch, item.desc, item.age, item.august, item.augustnum)
//     })
//     let swiperMovies3 = document.querySelector('#swiperMovies3')
//     swiperMovies3.innerHTML = card3
//     console.log(data);
//   })
// }
// getData3()
// const createCard3 = (name, id, imgPaluch, desc, age, august, augustnum) => {
//   return `
 
//   <div class="container6-content_first" onclick="setLocalStorage3"(${id})>
//   <h5>${age}</h5>
//   <img src="${imgPaluch}" alt="">
//   <a href="./swiper3/swiper3.html" class="text-none">
//       <div class="container6-text">
//       <div class="container6-text_inside">
//           <div class="container6-boy">
//               <h5>${name}</h5>
//               <h5>${desc}</h5>
//           </div>
//               <div class="container6-izbr">
//                   <div class="container6-izbr_august">
//                       <h3 class="izbr-h3">${augustnum}</h3>
//                       <h4 class="izbr-h4">${august}</h4>
//                   </div>
//                   <a href=""><img src="${img}" alt=""></a>
//               </div>
//           </div>
//           <hr>
//       </div>
//   </a>
//   <a href="./swiper3/swiper3.html" class="text-none"><div class="container6-content" onclick="(${id})">
//       <h5>${age}</h5>
//       <img src="${imgPaluch}" alt="">
//           <div class="container6-text">
//               <div class="container6-text_inside">
//                   <div class="container6-boy">
//                       <h5>${name}</h5>
//                       <h5>${desc}</h5>
//                   </div>
//                       <div class="container6-izbr">
//                           <div class="container6-izbr_august">
//                               <h3 class="izbr-h3">${augustnum}</h3>
//                               <h4 class="izbr-h4">${august}</h4>
//                           </div>
//                           <a href=""><img src="${img}" alt=""></a>
//                       </div>
//                   </div>
//               <hr>
//           </div>
//       </div>
//   </a>
//  </div>

  
//   `
// }
// const setLocalStorage3 = (id) => {
//   localStorage.setItem('movie3', id)
// }






let films = [
  {
    name: "круче некуда",
    age: "2007",
    img: "https://kinobar.vip/uploads/posts/2023-06/1685636995_7.jpg",
    id: 1
  },
  {
    "name": "хвостатый пришелец",
    "age": "2007",
    "img": "",
    "id": 2
  },
    {
      "name": "10 дней без мамы",
      "age": "2007",
      "id":3
  },
  {
      "name": "крошка",
      "age": "2007",
      "id":4
  } ,
  {
      "name": "Gangster",
      "age": "2007",
      "id":5
  } ,
  {
      "name": "Фредерик Маргарет",
      "age": "2007",
       "id":6
  } ,
  {
      "name": "кентавр",
      "age": "2007",
      "id":7
  } ,
  {
      "name": "Переводчик",
      "age": "2007",
      "id":8
  } ,

  {
      "name": "Постучись в мою дверь",
      "age": "2007",
      "id":9
  } ,
  {
      "name": "библиотекарь",
      "age": "2007",
      "id":10
  } ,
  {
      name: "Уикенд с батей",
      age: "2007",
      id:11
  } 
]






function searchProducts() {
    let searchTerm = document.getElementById("searchInput").value.toLowerCase();
    let searchResults = films.filter(films => films.name.toLowerCase().includes(searchTerm));
    displaySearchResults(searchResults);
  }

  function displaySearchResults(results) {
    let searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = "";

    if (results.length === 0) {
      searchResultsContainer.innerHTML = "<li>нет такого фильма даун.</li>";
      return;
    }

    results.forEach(product => {
      let listItem = document.createElement("li");
      listItem.textContent = product.name;
      searchResultsContainer.appendChild(listItem);
    });
  }

  document.getElementById("searchInput").addEventListener("input", searchProducts);






