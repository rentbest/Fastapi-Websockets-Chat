// Получаем данные из скрытого элемента
const roomData = document.getElementById("room-data");
const roomId = roomData.dataset.roomId;
const username = roomData.dataset.username;
const userId = roomData.dataset.userId;

// Устанавливаем WebSocket соединение
const ws = new WebSocket(
  `ws://localhost:8000/ws/chat/${roomId}/${userId}?username=${username}`
);

// Обработчики событий WebSocket
ws.onopen = () => console.log("Соединение установлено");
ws.onclose = () => console.log("Соединение закрыто");

ws.onmessage = (event) => {
  const messages = document.getElementById("messages");
  const messageData = JSON.parse(event.data);
  const message = document.createElement("div");

  // Определяем стили в зависимости от отправителя
  message.className = messageData.is_self
    ? "p-3 my-2 bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-lg self-end max-w-xs ml-auto shadow-lg"
    : "p-3 my-2 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 rounded-lg self-start max-w-xs shadow-lg";

  message.textContent = messageData.text;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight; // Автопрокрутка вниз
};

// Функция отправки сообщения
const sendMessage = () => {
  const input = document.getElementById("messageInput");
  if (input.value.trim()) {
    ws.send(input.value);
    input.value = "";
  }
};

// Отправка сообщения по нажатию Enter
document.getElementById("messageInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});