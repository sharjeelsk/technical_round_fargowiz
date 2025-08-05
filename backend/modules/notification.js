const websocket = require('ws')

class NotificationModel{}; // consider notification model as a database collection

class Notification{

    constructor(){
        this.wss = new websocket.Server({port: 3001})
    }
    init(){
        this.wss.on('connection', (ws)=>{
            console.log("Client connected", ws.on);
            // here i am considering that notification object is going to get received in notification socket
            ws.on('message', async (notification)=>{
                const notificationPayload = new NotificationModel({
                    userId: notification?.userId, 
                    message: notification?.message
                })
                await notificationPayload.save() 
                const data = JSON.parse(notification.toString())
                ws.send(data)
            })
        })

    }


}

module.exports = Notification;