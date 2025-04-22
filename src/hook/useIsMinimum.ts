import * as React from "react";

const MINIMUM_BREAKPOINT_DEFAULT = 1200;

export function useIsMinimum(MINIMUM_BREAKPOINT_PASSED?: number) {
  const MINIMUM_BREAKPOINT =
    MINIMUM_BREAKPOINT_PASSED || MINIMUM_BREAKPOINT_DEFAULT;
  const [isMinimum, setIsMinimum] = React.useState<boolean | undefined>(
    undefined
  );
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MINIMUM_BREAKPOINT - 1}px)`);

    const throttledOnChange = () => {
      if (timeoutRef.current) return;

      timeoutRef.current = setTimeout(() => {
        setIsMinimum(window.innerWidth < MINIMUM_BREAKPOINT);
        timeoutRef.current = null;
      }, 300);
    };

    mql.addEventListener("change", throttledOnChange);
    setIsMinimum(window.innerWidth < MINIMUM_BREAKPOINT);

    return () => {
      mql.removeEventListener("change", throttledOnChange);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [MINIMUM_BREAKPOINT]);

  return !!isMinimum;
}
