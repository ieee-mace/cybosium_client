const __DEV__ = document.domain == 'localhost';
const API_URL = __DEV__ ? "http://localhost:8000/api" : "https://api-cybosium.ieeemace.org/api"

const fetchEvents = async (token) => {
    const response = await fetch(API_URL + "/events", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data.events
}

const fetchEvent = async ({ id, token }) => {
    const response = await fetch(API_URL + `/events/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data.event
}

const loginUser = async ({ email, password }) => {
    const response = await fetch(API_URL + "/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    if (!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return {
        user: data.user,
        token: data.token
    }
}

const registerUser = async ({ firstname, lastname, email, password }) => {
    const response = await fetch(API_URL + "/auth/register", {
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
    if (!response.ok) {
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return {
        user: data.user,
        token: data.token
    }
}

const getUser = async (token) => {
    const response = await fetch(API_URL + "/users/whoami", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok) {
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
