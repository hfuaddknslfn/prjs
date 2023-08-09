function msg () {
    let div = document.createElement("div")
    div.className = "custom-div"
    div.innerHTML = `
    <div class="sign-secsess">
    <h2>sucsess</h2>
    </div>
   
    `
    document.body.appendChild(div)
}


let signInForm = document.querySelector('#signIn')
signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let username = signInForm.querySelector('#username')
    let password = signInForm.querySelector('#password')

    fetch('http://localhost:8080/users')
    .then(response => response.json())
    .then(data => {
    let user = data.find(u => u.username == username.value && u.password == password.value)
    if(user) {
    msg("jfiasnd");
    
    
        // alert(`welcome ${user.username}`)
        // localStorage.setItem('user', JSON.stringify(user))
    } else {
        alert('неверные данные')
    }
    })
})

let signUpForm = document.querySelector('#signUp')
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = signInForm.querySelector('#username')
    let password = signInForm.querySelector('#password')
    let newUser = {
        username: username.value,
        password: password.value,
    }
    fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        } ,
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        console.log('You sucsecfully sign up', data);
    })
})