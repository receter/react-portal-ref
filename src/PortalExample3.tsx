import { useEffect, useReducer, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function PortalExample3() {
  const refPortalNodeA = useRef<HTMLDivElement>(null);
  const refPortalNodeB = useRef<HTMLDivElement>(null);
  const [currentPortalNode, setCurrentPortalNode] = useState(refPortalNodeA);

  return <>
    <Portal refPortalNode={currentPortalNode}>Traveller 3</Portal>
    <div
      className="portal_container"
      ref={refPortalNodeA}
      onClick={() => setCurrentPortalNode(refPortalNodeA)}
    />
    <div
      className="portal_container"
      ref={refPortalNodeB}
      onClick={() => setCurrentPortalNode(refPortalNodeB)}
    />
  </>
}

function Portal({
  refPortalNode,
  children
}: {
  refPortalNode: React.RefObject<HTMLDivElement>,
  children: React.ReactNode
}) {
  const refPortalCreated = useRef(false);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    if (refPortalCreated.current === false) {
      forceUpdate();
    }
  }, [refPortalNode]);

  if (refPortalNode.current === null) {
    refPortalCreated.current = false;
    return null;
  } else {
    refPortalCreated.current = true;
    return createPortal(children, refPortalNode.current);
  }
}