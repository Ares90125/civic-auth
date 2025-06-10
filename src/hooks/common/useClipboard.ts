"use client";

import { useState } from "react";

export const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (content: string) => {
    try {
      if (document.hasFocus()) {
        await navigator.clipboard.writeText(content);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 800);
      } else {
        console.warn("Document is not focused. Clipboard operation aborted.");
      }
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  return { isCopied, copyToClipboard };
};

export default useClipboard;
