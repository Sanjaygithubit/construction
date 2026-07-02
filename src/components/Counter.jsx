import { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';

export default function Counter({ end, duration = 1800, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.6);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / end), 12);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}
