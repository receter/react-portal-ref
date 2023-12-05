import { useRef } from "react";
import { createPortal } from "react-dom";

export function PortalExample1() {

  const refPortalDomNode = useRef<HTMLDivElement>(null);

  return <>
    <div className="portal_container" ref={refPortalDomNode} />
    {refPortalDomNode.current !== null && createPortal("Traveller 1", refPortalDomNode.current)}
  </>
}