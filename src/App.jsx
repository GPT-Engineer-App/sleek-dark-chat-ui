import { useState } from "react";
import { Button, Input, DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div className="h-screen w-screen bg-black flex flex-col p-4">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className="text-white font-bold text-lg">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={() => {}} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
          Upload
        </Button>
        <Input
          className="flex-1 rounded-full bg-white/10 text-white placeholder-white/50 border-none"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <Button onClick={sendMessage} className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
          Send
        </Button>
      </div>
      <div className="mt-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-white bg-purple-600 hover:bg-purple-700 font-bold py-2 px-4 rounded-full">
              Choose Model
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => console.log("Model 1 Selected")}>
              Model 1
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => console.log("Model 2 Selected")}>
              Model 2
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default App;