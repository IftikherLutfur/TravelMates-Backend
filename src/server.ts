import app from "./app";

const port = process.env.PORT || 5000;

async function connectServer() {
    try {
        app.listen(port, () => {
            console.log(`Server is running on ${port}`)
        })
    } catch (error) {
        console.log("Connection failed ")
    }
}

connectServer()
