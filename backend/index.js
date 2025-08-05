const express = require('express')
const Notification = require('./modules/notification')
const app = express();


//middleware to check if user is admin
const isAdmin = require('./middleware/auth')

const notification = new Notification()
notification.init()


//following is RBAC implementation

app.get('/secured-route', isAdmin, (req,res)=>{
    res.status(200).send('You are authorized to access this route')
})

//Data Prefetching in SSR (Nodejs/Reactjs)

app.get('/data', (req,res)=>{
    Promise.resolve(({ message: 'Hello from server!' })).then((data)=>{
        //here we can render a react component with the data
        // <DataDisplay data={fetchedData} /> 
        const jsx = `
        <DataDisplay data={${data}} />
        `
        res.status(200).send(jsx)
    }).catch((err)=>{
        res.status(403).send(err)
    })
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3001");
})