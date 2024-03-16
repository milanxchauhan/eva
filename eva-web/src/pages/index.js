import { useState } from "react";

export default function Home() {
  const [apiKey, setApiKey] = useState('');

  const API_URL = "https://api.openai.com/v1/chat/completions";

  return (
    <div className="flex flex-col h-screen">
      <nav className="shadow p-2 flex flew-row justify-between items-center">
        <div className="text-xl font-bold">Eva</div>
        <input 
        type="password" 
        className="border p-2 rounded" 
        onChange={e => setApiKey(e.target.value)}
        value={apiKey}
        placeholder="Paste API key here" />
      </nav>
    </div>
  );
}
  