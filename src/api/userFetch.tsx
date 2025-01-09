import axios from 'axios'; 

const API_BASE_URL = "https://dummyjson.com/users";

export const fetchingAllUsers = async() => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data.users;
    }
    catch (error){
        console.error("Error fetching the users: ", error);
        throw new Error ("Failed to fetch the users")
    }
};