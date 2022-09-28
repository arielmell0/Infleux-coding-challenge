export const getCampaign = () => fetch(process.env.REACT_APP_API)
    .then(response => response.json())