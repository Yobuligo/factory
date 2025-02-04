import { useEffect, useState } from "react";

export const useInitialize = (block: () => void) => {
  const [needsInit, setNeedsInit] = useState(true);

  useEffect(() => {
    if (needsInit) {
      block();
      setNeedsInit(false);
    }
  }, [block, needsInit]);
};
