import { useRef } from "react";
import { createPortal } from "react-dom";

export function PortalExample1() {

  const refPortalContainer1 = useRef<HTMLDivElement>(null);

  return <>
    <div className="portal_container" ref={refPortalContainer1} />
    {refPortalContainer1.current !== null && createPortal("Travaller1", refPortalContainer1.current)}
  </>
}