const applicationState = {
    //the requests property will store the external data in an array in your application state when you fetch it
    requests = []
}

//creates a copy of the above array and exports it
export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}

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
