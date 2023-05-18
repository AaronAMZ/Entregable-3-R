import axios from "axios";

const url = "https://rickandmortyapi.com/api"

export const getLocationById = async (locationId) => {
    try {
        const res = await axios.get(`${url}/location/${locationId}`);

        return res.data;
    } catch (error) {
        console.error(error);
    }
}