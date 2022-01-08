const base_api_url = "/api"
async function getDestinations(){
    let response = await fetch(`${base_api_url}/destinations`)
    let data = await response.json()
    return data;
}

async function renderDestinations(){
    let destinations = await getDestinations();
    let searchResultsUL = document.querySelector("#searchResults")
    for (let index = 0; index < destinations.length; index++) {
        let d = destinations[index];
        let dLi = document.createElement("li")
        dLi.textContent = d.city
        searchResultsUL.appendChild(dLi)
    }
}

renderDestinations()