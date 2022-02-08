import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"

//selecting the location you want it to display
const mainContainer = document.querySelector("#container")

//What do I need to add here?
//You need to fetch the data from the API and store it in application state before you can convert the data structures to HTML representations. 
const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()