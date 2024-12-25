import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import api from "@/api/apiKey";


const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages([...messages, { sender: "user", text: input }]);
    setLoading(true);

    try {
      // Make API call to search FAQ or use OpenAI
      const response = await api.post("https://beiyo-admin.in/api/faq/search", { query: input });
      const botReply = response.data.answer || "I'm sorry, I couldn't find an answer.";
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }

    // Clear input
    setInput("");
  };

  return (
    <div className="flex flex-col w-[400px] h-[500px] border border-gray-300 rounded-lg bg-white shadow-md">
      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-lg p-3 max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-primary text-black"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="rounded-lg p-3 max-w-[75%] bg-gray-200 text-black">
              Typing...
            </div>
          </div>
        )}
      </ScrollArea>

      {/* Input Section */}
      <div className="flex items-center p-3 border-t border-gray-300 bg-gray-100">
        <Input
          className="flex-1"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button
          className="ml-2 bg-primary text-black hover:bg-yellow-400"
          onClick={handleSend}
          disabled={loading}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chatbot;
