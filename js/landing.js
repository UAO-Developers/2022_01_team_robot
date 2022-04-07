window.onload = getMatches()

function getMatches() {
    let url = "https://sebasrestapi.azurewebsites.net/"

    const api = new XMLHttpRequest();


    api.open('GET', url + "match", true)
    api.send()

    api.onreadystatechange = function () {

        let data = JSON.parse(this.responseText)
        console.log(data)
        let resultado = document.querySelector('#matchesContainer')

        resultado.innerHTML = ""
        
        for(let item of data){
            resultado.innerHTML += `<div class="card text-center">
            <div class="card-header">
              <h5 class="card-title">${item.group}</h5>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">${item.local} <input type="text" maxlength="2" size="2"> VS <input type="text" size="2"
                  maxlength="2"> ${item.visit}</h5>
              <a href="#" class="btn btn-primary" id="btn-apply-prediction">Apply Prediction</a>
            </div>
            <div class="card-footer text-muted">
              ${item.day}-${item.month}-2022 ${item.hour}:${item.minutes}
            </div>
          </div>`
        }
    }
}