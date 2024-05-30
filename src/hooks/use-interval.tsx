import React, { useEffect, useRef } from "react";

export function useInterval<C extends CallableFunction>(
  callback: C,
  delay: number | null
): void {
  const savedCallback = useRef<C>();

  // Remember the last callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }
  }, [delay]);
}
