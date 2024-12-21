import React, { useState, useEffect } from "react";

// Chat component to handle chat functionality
const ChatConsults = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: "", symptoms: "" });

  // Simulate sending and receiving messages
  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        text: message,
        sender: "User",
        timestamp: new Date().toLocaleTimeString(),
      };
      setChatHistory([...chatHistory, newMessage]);
      setMessage("");
      setIsLoading(true);

      // Simulate AI or Doctor response
      setTimeout(() => {
        const responseMessage = {
          text: "Please describe your symptoms in detail so I can assist you better.",
          sender: "Doctor",
          timestamp: new Date().toLocaleTimeString(),
        };
        setChatHistory((prev) => [...prev, responseMessage]);
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleInputChange = (e) => setMessage(e.target.value);

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleConsultationForm = (e) => {
    e.preventDefault();
    if (userDetails.name && userDetails.symptoms) {
      // Proceed to start chat with user details
      sendMessage();
    } else {
      alert("Please fill in your name and symptoms.");
    }
  };

  return (
    <div className="p-6 bg-blue-50 min-h-screen mt-16">
      <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">
        Chat Consultation
      </h2>

      {/* Pre-chat form */}
      <form onSubmit={handleConsultationForm} className="mb-6">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={userDetails.name}
            onChange={handleUserDetailsChange}
            className="w-1/2 p-3 rounded-lg border border-gray-300"
            required
          />
          <input
            type="text"
            name="symptoms"
            placeholder="Symptoms (e.g., Fever, Cough)"
            value={userDetails.symptoms}
            onChange={handleUserDetailsChange}
            className="w-1/2 p-3 rounded-lg border border-gray-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Start Consultation
        </button>
      </form>

      {/* Chat window */}
      <div className="mb-6 h-80 overflow-y-auto p-4 bg-white border rounded-lg shadow-lg">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`mb-4 ${chat.sender === "User" ? "text-right" : "text-left"}`}>
            <p
              className={`inline-block p-2 rounded-lg ${
                chat.sender === "User"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {chat.text}
            </p>
            <span className="block text-sm text-gray-500">{chat.timestamp}</span>
          </div>
        ))}
        {isLoading && (
          <div className="text-center text-blue-500">
            <p>Doctor is typing...</p>
          </div>
        )}
      </div>

      {/* Message input */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={handleInputChange}
          className="w-full p-3 rounded-lg border border-gray-300"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatConsults;
