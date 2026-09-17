import { useEffect, useState } from 'react'

function stamp() {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date())
}

export function Clock({ className = '' }: { className?: string }) {
  const [time, setTime] = useState(() => stamp())

  useEffect(() => {
    const id = window.setInterval(() => setTime(stamp()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <time className={`tabular-nums ${className}`} dateTime={time}>
      {time}
    </time>
  )
}
