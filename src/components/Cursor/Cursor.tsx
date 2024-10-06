'use client';
import React, { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.pageY}px`;
        cursorRef.current.style.left = `${e.pageX}px`;
      }
    };

    const handleClick = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add(styles.expand);
        setTimeout(() => {
          if (cursorRef.current) {
            cursorRef.current.classList.remove(styles.expand);
          }
        }, 500);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <div className={styles.cursor} ref={cursorRef}></div>;
};

export default Cursor;
