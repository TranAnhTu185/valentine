'use client';

import { useEffect, useState } from 'react';
import styles from './ValentineBackground.module.css';

type HeartStyle = {
  left: string;
  animationDelay: string;
  animationDuration: string;
  fontSize: string;
};

export default function ValentinePage() {
  const [hearts, setHearts] = useState<HeartStyle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map(() => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${6 + Math.random() * 6}s`,
      fontSize: `${16 + Math.random() * 24}px`,
    }));

    setHearts(generated);
  }, []);

  return (
    <div className={styles.wrapper}>
      {hearts.map((style, i) => (
        <span key={i} className={styles.heart} style={style}>
          ❤️
        </span>
      ))}
    </div>
  );
}
