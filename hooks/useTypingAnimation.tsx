import { useState, useEffect } from 'react'

export function useTypingEffect(text, speed = 100) {
    
  const [displayedText, setDisplayedText] = useState('')
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    
    if(!text) return

    let i = 0
    setDisplayedText('')
    setIsFinished(false)

    const interval = setInterval(() => {
        i++;
        setDisplayedText(text.slice(0, i));
  
        if (i >= text.length) {
          clearInterval(interval);
          setIsFinished(true)
        }
      }, speed);

    return () => clearInterval(interval)
  }, [text, speed])

  return {displayedText, isFinished}
}