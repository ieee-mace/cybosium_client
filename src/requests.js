const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDY4NDQ2NjE1ZjgwYjYzMjY2M2E0NCIsImVtYWlsIjoicm9zaGFuMTJAZ21haWwuY29tIiwiaWF0IjoxNjY2NjA1ODQ5fQ.gu996RZzsSuam35UXucXlZUiP-wZHaDqaLo1PgzLBUg"
const apiURL = "http://localhost:7000/api";

const fetchEvents = async () => {
    const response = await fetch(apiURL + "/events", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if(!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data.events
}

const fetchEvent = async (id) => {
    const response = await fetch(apiURL + `/events/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if(!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data.event
}

const loginUser = async ({email, password}) => {
    const response = await fetch(apiURL + "/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    if(!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return {
        user: data.user,
        token: data.token
    }
}

const registerUser = async ({firstname, lastname, email, password}) => {
    const response = await fetch(apiURL + "/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstname,
            lastname,
            email,
            password
        })
    });
    if(!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return {
        user: data.user,
        token: data.token
    }
}

const getUser = async (token) => {
    const response = await fetch(apiURL + "/users/whoami", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if(!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data.user
}

export { 
    fetchEvents, 
    fetchEvent,
    loginUser,
    registerUser,
    getUser
};
