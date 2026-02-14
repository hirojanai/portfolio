"use client";

import { useEffect, useState } from "react";

const getRandomBinary = (length: number): string =>
  Array.from({ length }, () => (Math.random() > 0.5 ? "1" : "0")).join("");

type TextBinaryDecodeProps = {
  text: string;
  binaryDurationMs?: number; // How long the binary keeps flipping before decode starts
  decodeStaggerMs?: number; // Delay between revealing each character
  binaryFlipIntervalMs?: number; // How often the binary digits change during the first phase
  className?: string;
};

export default function TextBinaryDecode({
  text,
  binaryDurationMs = 500,
  decodeStaggerMs = 25,
  binaryFlipIntervalMs = 80,
  className = "",
}: TextBinaryDecodeProps) {
  const [displayedText, setDisplayedText] = useState(() =>
    "0".repeat(text.length),
  );

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    setDisplayedText(getRandomBinary(text.length));
    const binaryInterval = setInterval(() => {
      setDisplayedText(getRandomBinary(text.length));
    }, binaryFlipIntervalMs);

    const stopBinaryAt = setTimeout(() => {
      clearInterval(binaryInterval);
      text.split("").forEach((char, i) => {
        timeouts.push(
          setTimeout(() => {
            setDisplayedText(
              (prev) => prev.slice(0, i) + char + prev.slice(i + 1),
            );
          }, i * decodeStaggerMs),
        );
      });
    }, binaryDurationMs);

    return () => {
      clearInterval(binaryInterval);
      clearTimeout(stopBinaryAt);
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [text, binaryDurationMs, decodeStaggerMs, binaryFlipIntervalMs]);

  return <span className={className}>{displayedText}</span>;
}
