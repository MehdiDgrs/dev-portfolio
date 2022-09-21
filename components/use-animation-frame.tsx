import { useCallback, useRef, useEffect } from "react";
interface Ref {
  current: any;
}
const useAnimationFrame = (enabled: boolean, callback: () => void) => {
  const requestRef: Ref = useRef(null);
  const animate = useCallback(() => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);

  useEffect(() => {
    if (enabled) {
      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) {
          return cancelAnimationFrame(requestRef.current);
        }
      };
    }
  }, [enabled, animate]);
};
export default useAnimationFrame;
