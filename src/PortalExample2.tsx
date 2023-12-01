import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function PortalExample2() {
  const refPortalContainer = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return <>
    <div className="portal_container" ref={refPortalContainer} />
    {isMounted && refPortalContainer.current && createPortal("Traveller 2", refPortalContainer.current)}
  </>
}