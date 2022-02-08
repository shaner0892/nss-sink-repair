const applicationState = {
    //the requests array will store the external data in your application state when you fetch it
    requests: []
}


//need clarification on what this variable and function are doing ********
//it's pulling/fetching requests from the provided url? then adding them to the array above?
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
    .then(response => response.json())
    .then(
        (serviceRequests) => {
            // Store the external state in application state
            applicationState.requests = serviceRequests
        }
        )
}

//creates a copy of the above array and exports it
export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}

const mainContainer = document.querySelector("#container")

//The POST method on any HTTP request means "Hey API!! I want you to create something new!"
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    //fetch call dispatches the custom event after the POST operation has been completed.
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

//When you use the DELETE method on an HTTP request, you must identify a single resource.
//Therefore, the function whose responsibility it is to initiate the fetch request for DELETE must have the primary key sent to it as an argument.
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, {method: "DELETE"})
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}