// [file name]: components/Splash.jsx
import React, { useEffect, useState } from "react";
import "./Splash.css";

export default function Splash({ className }) {
  const [text, setText] = useState("");
  const fullText = "<Hello world!/>";
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (!isDeleting && index <= fullText.length) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, index));
        setIndex(index + 1);
      }, 80);
    } else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, index));
        setIndex(index - 1);
      }, 40);
    } else if (!isDeleting && index > fullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 600);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setIndex(0);
    }
    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <div className={`splash-screen ${className}`}>
      <div className="splash-text">
        {text}
        <span className="caret">|</span>
      </div>
    </div>
  );
}
