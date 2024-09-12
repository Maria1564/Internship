import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: "'https://dummyjson.com",
    headers: {
        "Content-Type": "application/json",
    }
}
)