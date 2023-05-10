import axios from "axios"

const fetchData = async(URL) => {
    const { data } = await axios.get(URL)
    return data
}

export default fetchData