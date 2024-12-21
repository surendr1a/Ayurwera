import { useState, useEffect } from "react";
import { io } from "socket.io-client"; // For real-time chat

const ChatConsults = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [doctorAvailable, setDoctorAvailable] = useState(true);

  // Initialize socket
  useEffect(() => {
    const socket = io("your_backend_socket_url"); // Socket server URL
    setSocket(socket);

    socket.on("receive_message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message) {
      const msg = { sender: "user", text: message };
      socket.emit("send_message", msg); // Send message to server
      setMessages((prevMessages) => [...prevMessages, msg]);
      setMessage("");
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Chat with Doctor</h2>
        <button
          className={`py-2 px-4 rounded-lg text-white ${doctorAvailable ? "bg-green-500" : "bg-red-500"}`}
        >
          {doctorAvailable ? "Doctor Available" : "Doctor Unavailable"}
        </button>
      </div>

      <div className="bg-gray-100 p-4 rounded-md h-80 overflow-y-scroll">
        <div className="flex flex-col space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center space-x-4">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 p-3 border rounded-lg focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          disabled={!message}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatConsults;
