import app from './server'

const port = process.env.PORT || 3333

app.on('databaseConnected', () => {
    app.listen(port, () => {
        console.log(`Ads Server running at port ${port}`)
    })
})