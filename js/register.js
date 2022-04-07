document.getElementById('registerButton').addEventListener('click',function(){
    registerUser()
})

function registerUser(){
    console.log("click")
    
    let url = "https://sebasrestapi.azurewebsites.net/"

    const api = new XMLHttpRequest();

    let name = document.querySelector('#nameInput').value
    let lastName = document.querySelector('#lastNameInput').value
    let email = document.querySelector('#emailInput').value
    let pwd = document.querySelector('#pwdInput').value

    if(email == "" || pwd == "" || name == "" || lastName == ""){
        alert("Please type all the information to continue")
    }else{
        let model = {
            "name": `${name}`,
            "last_name": `${lastName}`,
            "email": `${email}`,
            "pwd":`${pwd}`
        }
    
        api.open('POST', url+"user", true)
        api.setRequestHeader('Content-Type', 'application/json');
        api.send(JSON.stringify(model))
    
        api.onreadystatechange = function(){
            console.log(this.status)
            if(this.status == 409){
                alert("User already exists")
            }else{
                if(this.status == 201){
                    window.location.href = "index.html"
                }
            }
        }
    }

}