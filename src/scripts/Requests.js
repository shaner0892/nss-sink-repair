import { getRequests } from "./dataAccess.js"

//creates and exports a new function that prints the list of requests
export const Requests = () => {
    //invokes the imported function and assigns it to a variable (it's an array of requests)
    const requests = getRequests()
    const convertRequestToListElement = (request) => {
        return `
        <li>
            ${request.description}
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