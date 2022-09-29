import axios from 'axios'

const url = 'http://localhost:3333/fetch'

export const getCampaign = async () => {
    const response = axios.get(url)

    return console.log(response.data)
}

console.log(getCampaign())