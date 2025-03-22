import { useState } from "react";

export default function Greeting({ messages }: { messages: string[] }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  const handleClick = () => {
    setGreeting(randomMessage());
  };

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={handleClick}>New greeting</button>
    </div>
  );
}
