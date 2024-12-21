import React, { useState } from "react";

const ChatConsults = () => {
  const doctors = [
    { id: 1, name: "Dr. Anjali Sharma", specialty: "Cardiologist", rating: 4.9, fee: 500, gender: "Female", experience: 10, available: true },
    { id: 2, name: "Dr. Rajesh Khanna", specialty: "Neurologist", rating: 4.5, fee: 700, gender: "Male", experience: 8, available: false },
    { id: 3, name: "Dr. Meera Patel", specialty: "Pediatrician", rating: 4.7, fee: 300, gender: "Female", experience: 5, available: true },
    { id: 4, name: "Dr. Suresh Iyer", specialty: "Orthopedic", rating: 4.2, fee: 400, gender: "Male", experience: 12, available: false },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const message = { id: messages.length + 1, text: newMessage, sender: "patient", timestamp: new Date().toLocaleTimeString() };
    setMessages([...messages, message]);
    setNewMessage("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: prev.length + 1, text: "Doctor's reply", sender: "doctor", timestamp: new Date().toLocaleTimeString() }]);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-gray-50 mt-16">
      {/* Left Panel: Doctors List */}
      <div className="w-1/3 bg-gray-100 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Find Your Doctor</h2>
        
        {/* Filters */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Filters</h3>
          <select className="w-full p-2 border mb-2 rounded">
            <option value="">Specialty</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Neurologist">Neurologist</option>
          </select>
          <select className="w-full p-2 border mb-2 rounded">
            <option value="">Rating</option>
            <option value="4.5+">4.5+</option>
            <option value="4.0+">4.0+</option>
          </select>
          <select className="w-full p-2 border mb-2 rounded">
            <option value="">Fee Range</option>
            <option value="300-500">₹300-₹500</option>
          </select>
        </div>

        {/* Doctors List */}
        <div className="space-y-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`p-4 border rounded-lg shadow cursor-pointer ${
                selectedDoctor?.id === doctor.id ? "bg-blue-100" : "bg-white"
              }`}
              onClick={() => setSelectedDoctor(doctor)}
            >
              <div className="flex justify-between">
                <div>
                  <h4 className="text-lg font-bold">{doctor.name}</h4>
                  <p className="text-sm text-gray-500">{doctor.specialty}</p>
                  <p className="text-sm text-gray-500">Fee: ₹{doctor.fee}</p>
                  <p className="text-sm text-gray-500">Experience: {doctor.experience} yrs</p>
                </div>
                <span className={`text-sm font-semibold ${doctor.available ? "text-green-500" : "text-red-500"}`}>
                  {doctor.available ? "Available" : "Offline"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel: Chat Section */}
      <div className="w-2/3 flex flex-col">
        {selectedDoctor ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b bg-white">
              <h4 className="text-lg font-bold">{selectedDoctor.name}</h4>
              <p className="text-sm text-gray-500">{selectedDoctor.specialty}</p>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg.sender === "patient" ? "text-right" : "text-left"}`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      msg.sender === "patient" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block text-xs text-gray-400">{msg.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white flex items-center gap-2 border-t">
              <button className="p-2 text-gray-600 hover:text-gray-800">
                😊
              </button>
              <input
                type="text"
                className="flex-1 p-2 border rounded"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1 text-gray-400">
            Select a doctor to start chatting.
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatConsults;
