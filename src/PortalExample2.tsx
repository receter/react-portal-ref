import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function PortalExample2() {
  const refPortalContainer2 = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return <>
    <div className="portal_container" ref={refPortalContainer2} />
    {isMounted && refPortalContainer2.current && createPortal("Travaller2", refPortalContainer2.current)}
  </>
}