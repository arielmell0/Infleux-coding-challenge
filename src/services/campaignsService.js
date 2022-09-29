import fetch from 'node-fetch'

export const getCampaign = fetch('http://localhost:3333/fetch')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.log('ops, um erro ocorreu'))