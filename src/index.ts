import app from './server'

const port = process.env.PORT || 3000

app.on('databaseConnected', () => {
    app.listen(port, () => {
        console.log(`Ads Server running at port ${port}`)
    })
})