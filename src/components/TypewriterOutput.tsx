import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterOutputProps {
  text: string;
  speed?: number; // Characters per second
  onComplete?: () => void;
  className?: string;
}

export const TypewriterOutput: React.FC<TypewriterOutputProps> = ({ text, speed = 20, onComplete, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  // useMemo will prevent re-splitting the text on every render unless 'text' prop changes.
  const characters = React.useMemo(() => text.split(''), [text]);

  useEffect(() => {
    setDisplayedText(''); // Reset when text or other relevant props change

    if (text.length === 0) {
      if (onComplete) onComplete();
      return;
    }

    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(prev => prev + characters[i]);
      i++;
      if (i >= characters.length) {
        clearInterval(intervalId);
        if (onComplete) onComplete();
      }
    }, 1000 / speed);

    return () => clearInterval(intervalId);
  }, [text, speed, characters, onComplete]);

  // For accessibility and to show full text if JS fails or for copy-pasting.
  const srOnlyStyle: React.CSSProperties = {
     position: 'absolute',
     width: '1px',
     height: '1px',
     padding: '0',
     margin: '-1px',
     overflow: 'hidden',
     clip: 'rect(0, 0, 0, 0)',
     whiteSpace: 'nowrap',
     border: '0',
  };

  return (
    <div className={className}>
      <span aria-hidden="true">{displayedText}</span>
      <span style={srOnlyStyle}>{text}</span>
      {/* Optional: Blinking cursor at the end of typing line */}
      {displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-primary ml-0.5 align-baseline" // Adjusted styling
        >
        </motion.span>
      )}
    </div>
  );
};
