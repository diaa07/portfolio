import React, { useEffect, useState } from "react";
import "./Splash.css";

export default function Splash({ onFinish }) {
  const [text, setText] = useState("");
  const fullText = "<Hello World!/>";
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
  }, [index, isDeleting]);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".splash").classList.add("hidden");
      setTimeout(onFinish, 500);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash">
      <div className="splash-text">{text}</div>
      <div className="underline-loader"></div>
    </div>
  );
}
