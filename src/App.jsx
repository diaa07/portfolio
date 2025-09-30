import { useState, useEffect } from "react";
import Splash from "./components/Splash";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    if (!loading) {
      setTimeout(() => {
        scrollToTop();
        setShowContent(true);
      }, 300);
    }

    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        window.scrollTo(0, 0);
      });
    };
  }, [loading]);

  return <>{loading && <Splash onFinish={() => setLoading(false)} />}</>;
}
