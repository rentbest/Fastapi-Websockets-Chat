from fastapi import WebSocket
from typing import Dict


class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[int, Dict[int, WebSocket]] = {}

    async def connect(self, websocket: WebSocket, room_id: int, user_id: int) -> None:
        """
        Opens connections with user.
        websocket.accept() - confirmes connection.
        """
        await websocket.accept()
        if room_id not in self.active_connections:
            self.active_connections[room_id] = {}
        self.active_connections[room_id][user_id] = websocket

    async def disconnect(self, room_id: int, user_id: int) -> None:
        """
        Closes connection and removes it from active connections
        If there is no more users in room, deletes room
        """
        if room_id in self.active_connections and user_id in self.active_connections[room_id]:
            del self.active_connections[room_id][user_id]
        if not self.active_connections[room_id]:
            del self.active_connections[room_id]

    async def broadcast(self, message: str, room_id: str, sender_id: int) -> None:
        """
        Sends message to all users in the room
        """
        if room_id in self.active_connections:
            for user_id, connection in self.active_connections[room_id].items():
                message_with_class = {
                    "text": message,
                    "is_self": user_id == sender_id
                }
                await connection.send_json(message_with_class)


manager = ConnectionManager()
