import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function PortalExample2() {
  const refPortalDomNode = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return <>
    <div className="portal_container" ref={refPortalDomNode} />
    {isMounted && refPortalDomNode.current && createPortal("Traveller 2", refPortalDomNode.current)}
  </>
}