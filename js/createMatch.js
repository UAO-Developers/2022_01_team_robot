document.getElementById('buttonAddMatch').addEventListener('click',function(){
    addMatch()
})

function addMatch(){
    let url = "https://sebasrestapi.azurewebsites.net/"

    const api = new XMLHttpRequest();

    let group = document.querySelector('#groupSelect').value
    let localTeam = document.querySelector('#localTeam').value
    let visitTeam = document.querySelector('#visitTeam').value
    let matchDay = document.querySelector('#matchDay').value
    let matchMonth = document.querySelector('#matchMonth').value
    let matchHour = document.querySelector('#matchHour').value
    let matchMinutes = document.querySelector('#matchMinutes').value

    if(group == "" || localTeam == "" || visitTeam == "" || matchDay == "" || matchHour == "" || matchMonth == "" || matchMinutes == ""){
        alert("Please type all the information to continue")
    }else{
        let model = {
            "local": `${localTeam}`,
            "visit": `${visitTeam}`,
            "day": `${matchDay}`,
            "month": `${matchMonth}`,
            "hour": `${matchHour}`,
            "group": `${matchMinutes}`
        }
    
        api.open('POST', url+"match", true)
        api.setRequestHeader('Content-Type', 'application/json');
        api.send(JSON.stringify(model))
    
        api.onreadystatechange = function(){
            console.log(this.status)
            if(this.status == 409){
                alert("Match already exists")
            }else{
                if(this.status == 201){
                    alert("Match Successfully Created!")
                    document.location.reload(true)
                }
            }
        }
    }
}