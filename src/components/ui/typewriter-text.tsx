import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  cursorChar?: string;
  onComplete?: () => void;
  isActive?: boolean;
}

export function TypewriterText({
  text,
  speed = 100,
  delay = 0,
  className,
  showCursor = true,
  cursorChar = "|",
  onComplete,
  isActive = true,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset function
  const resetTypewriter = () => {
    setDisplayedText("");
    setCurrentIndex(0);
    setIsComplete(false);
    setHasStarted(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Start typing effect
  useEffect(() => {
    if (hasStarted && currentIndex < text.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };
    } else if (hasStarted && currentIndex === text.length && !isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [hasStarted, currentIndex, text, speed, isComplete, onComplete]);

  // Delay effect
  useEffect(() => {
    resetTypewriter();

    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setHasStarted(true);
      }, delay);
    } else {
      setHasStarted(true);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [delay, text]);

  return (
    <span className={cn("inline-block", className)}>
      <span className="typewriter-reveal">{displayedText}</span>
      {showCursor && isActive && !isComplete && (
        <span className="typewriter-cursor ml-1">{cursorChar}</span>
      )}
    </span>
  );
}
