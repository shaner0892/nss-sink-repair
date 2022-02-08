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
