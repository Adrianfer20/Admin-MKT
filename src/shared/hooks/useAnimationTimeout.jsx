// hooks/useAnimationTimeout.ts
import { useEffect } from "react";

const useAnimationTimeout = (dependencies, selector, timeout) => {
  useEffect(() => {
    if (!selector) return;

    const element = document.querySelector(selector);
    if (!element) return;

    const animationTimeout = setTimeout(() => {
      element.classList.remove("animacion");
    }, timeout);

    return () => clearTimeout(animationTimeout);
  }, dependencies);
};

export default useAnimationTimeout;
