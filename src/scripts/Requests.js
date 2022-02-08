import { deleteRequest, getRequests } from "./dataAccess.js"

//creates and exports a new function that prints the list of requests
export const Requests = () => {
    //invokes the imported function and assigns it to a variable (it's an array of requests)
    const requests = getRequests()
    const convertRequestToListElement = (request) => {
        return `
        <li>
            ${request.description}
            <button class="request__delete"
                id="request--${request.id}">
                Delete
            </button>
        </li>
        `
    }
    //defines a new variable and prints a list of requests in an unordered list
    let html = `
        <ul>
            ${requests.map(convertRequestToListElement).join("")}
        </ul>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})