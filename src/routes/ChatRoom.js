import express from "express";
import models from "../../models";

const router = express.Router();

// GET ALL CHAT ROOM FROM DATABASE
router.get("/chatrooms", async (req, res, next) => {
    const chatRooms = await models.ChatRoom.findAll();
    res.send(chatRooms);
});

// CREATE A NEW CHAT ROOM IF IT DOES NOT EXIST
router.post("/chatroom", async (req, res, next) => {
    const room = req.body.room;
    const chatRooms = await models.ChatRoom.findAll({
        where: { name: room }
    });
    const chatRoom = chatRooms[0];
    if (!chatRoom) {
        await models.ChatRoom.create({ name: room });
    }
    res.send(chatRooms);
});

// GET MESSAGES FOR A GIVEN CHAT ROOM BY CHAT ROOM NAME
router.get("/chatroom/messages/:chatRoomName", async (req, res, next) => {
    try {
        const chatRoomName = req.params.chatRoomName;
        const chatRooms = await models.ChatRoom.findAll({
            where: {
                name: chatRoomName
            }
        });
        const chatRoomId = chatRooms[0].id;
        const messages = await models.ChatMessage.findAll({
            where: {
                chatRoomId
            }
        });
        res.send(messages);
    } catch (error) {
        res.send([]);
    }
});

export default router;
