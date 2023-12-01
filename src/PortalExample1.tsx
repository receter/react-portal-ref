import { useRef } from "react";
import { createPortal } from "react-dom";

export function PortalExample1() {

  const refPortalContainer = useRef<HTMLDivElement>(null);

  return <>
    <div className="portal_container" ref={refPortalContainer} />
    {refPortalContainer.current !== null && createPortal("Traveller 1", refPortalContainer.current)}
  </>
}