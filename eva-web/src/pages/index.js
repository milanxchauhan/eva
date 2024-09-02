import { useState } from "react"

const SYSTEM_MESSAGE = "You are Eva. An AI agent built by Milan Chauhan using state of the art large language models.";

export default function Home() {
  const[apiKey, setApiKey] = useState('');
  const[botMessage, setBotMessage] = useState("");

  const API_URL = "https://api.openai.com/v1/chat/completions";

  async function sendRequest() {
    const response = await fetch(API_URL,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          // {
          //   "role": "system",
          //   "content": "You are a helpful assistant."
          // },
          { role: "system", content: SYSTEM_MESSAGE },
          { role: "user", content: "Hello! Please introduce yourself!" },
        ],
      }),
    });

    const responseJson = await response.json();
    setBotMessage(responseJson.choices[0].message.content);

    console.log("botMessage", botMessage);
  }

  return <div className="flex flex-col h-screen">
    <nav className="shadow px-4 py-2 flex flex-row justify-between items-center">
      <div className="text-xl font-bold">Eva</div>
      <div>
        <input 
        type="password" 
        className="border p-1 rounded" 
        onChange={e => setApiKey(e.target.value)}
        value={apiKey}
        placeholder="Paste API key here"/>
      </div>
    </nav>

    <div className="p-4">
      <button 
      className="border rounded-md p-2 bg-blue-500 hover:bg-blue-600 text-white"
      onClick={sendRequest}>
        Send Request
      </button>
      <div className="text-lg mt-4">{botMessage}</div>
    </div>
  </div>
}
