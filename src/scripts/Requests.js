import { getRequests } from "./dataAccess.js"

//need clarification on what this function is doing

//creates and exports a new function
export const convertRequestToListElement = () => {
    //invokes the imported function and assigns it to a variable (it's an array of requests)
    const requests = getRequests()
    //defines a new variable and prints a list of requests in an unordered list
    let html = `
        <ul>
            ${requests.map(
                    (request) => {
                        return convertRequestToListElement(request)
                    }
                ).join("")
            }
        </ul>
    `
    
    return html
}