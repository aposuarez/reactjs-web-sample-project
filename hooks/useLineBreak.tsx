import { useMemo } from "react"

export function useLineBreak(text: string) {
  return useMemo(() => {
    if (!text) return null

    return text.split('\n').map((line, idx) => (
      <span key={idx}>
        {line}
        <br />
      </span>
    ))
  }, [text])
}