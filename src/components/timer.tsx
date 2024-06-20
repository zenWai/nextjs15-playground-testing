"use client";

import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 0.1);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Timer: {time.toFixed(2)} seconds</p>
    </div>
  );
}
