document.querySelector('#login-button').addEventListener('click',function(){
    loginUser()
})

function loginUser(){
    console.log("click")
    
    let url = "https://sebasrestapi.azurewebsites.net/"

    const api = new XMLHttpRequest();

    let email = document.querySelector('#emailAddress').value
    let pwd = document.querySelector('#pass').value

    if(email == "" || pwd == ""){
        alert("Please enter a valid email and password")
    }else{
        let model = {
            "email": `${email}`,
            "pwd":`${pwd}`
        }
    
        api.open('POST', url+"login", true)
        api.setRequestHeader('Content-Type', 'application/json');
        api.send(JSON.stringify(model))
    
        api.onreadystatechange = function(){
            if(this.status == 200){
                window.location.href = "landing.html"
            }else{
                if(this.status == 401){
                    alert("Wrong email or password, please retry")
                }
            }
        }
    }
}