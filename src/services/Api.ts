import axios from "axios"

interface CheckAvailabilityProps {
    id: number;
}

const host = "http://localhost:8080"

export const checkAvailability = async (datetime: string, {id}: CheckAvailabilityProps) => {
    const url = `${host}/resource/${id}/available?datetime=${datetime}`
    const res = await axios.get(url)
    return res.data
}