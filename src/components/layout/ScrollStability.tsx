'use client';

import { useEffect } from 'react';

export function ScrollStability() {
  useEffect(() => {
    const previous = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    return () => {
      history.scrollRestoration = previous;
    };
  }, []);

  return null;
}
