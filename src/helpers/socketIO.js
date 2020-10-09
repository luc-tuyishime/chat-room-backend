// Sending and receiving event
import socket from "socket.io";
import models from "../../models";

export default (server) => {
    const io = socket(server);
    io.on("connection", (socket) => {
        console.log("socket io connected");
        socket.on("join", async (room) => {
            socket.join(room);
            io.emit("roomJoined", room);
        });

        // Process message receive with the message event
        socket.on("message", async (data) => {
            const {
                chatRoomName,
                author,
                message
            } = data;
            const chatRoom = await models.ChatRoom.findAll({
                where: {
                    name: chatRoomName
                }
            });
            const chatRoomId = chatRoom[0].id;
            const chatMessage = await models.ChatMessage.create({
                chatRoomId,
                author,
                message: message
            });

            // SEND BACK TO THE FRONT AFTER AFTER SAVING IN THE DB
            io.emit("newMessage", chatMessage);
        });
    });
};