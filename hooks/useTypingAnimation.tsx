import { useState, useEffect } from 'react'

export function useTypingEffect(text, speed = 100) {
    
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    
    if(!text) return

    let i = 0
    setDisplayedText('')

    const interval = setInterval(() => {
        i++;
        setDisplayedText(text.slice(0, i));
  
        if (i >= text.length) {
          clearInterval(interval);
        }
      }, speed);

    return () => clearInterval(interval)
  }, [text, speed])

  return displayedText
}