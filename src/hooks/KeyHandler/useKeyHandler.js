import React from 'react';

export const useEscapeKeyHandler = (callback) => {
  React.useEffect(() => {
    const keyHandler = (e => {
      if (e.key === 'Escape') {
        e.preventDefault();
        callback();
      }
    })

    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  })
}