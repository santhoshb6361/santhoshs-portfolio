import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const TypingAnimation = ({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 2000 
}: TypingAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const targetText = texts[currentTextIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && currentText !== targetText) {
      const typingTimer = setTimeout(() => {
        setCurrentText(targetText.substring(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(typingTimer);
    } else if (!isDeleting && currentText === targetText) {
      setIsPaused(true);
    } else if (isDeleting && currentText !== "") {
      const deletingTimer = setTimeout(() => {
        setCurrentText(targetText.substring(0, currentText.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(deletingTimer);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="gradient-neon bg-clip-text text-transparent typing-animation">
      {currentText}
    </span>
  );
};