import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function PortalExample3() {
  const refPortalContainerA = useRef<HTMLDivElement>(null);
  const refPortalContainerB = useRef<HTMLDivElement>(null);
  const [currentPortalContainer, setCurrentPortalContainer] = useState(refPortalContainerA);

  return <>
    <Portal refPortalContainer={currentPortalContainer}>Traveller 3</Portal>
    <div
      className="portal_container"
      ref={refPortalContainerA}
      onClick={() => setCurrentPortalContainer(refPortalContainerA)}
    />
    <div
      className="portal_container"
      ref={refPortalContainerB}
      onClick={() => setCurrentPortalContainer(refPortalContainerB)}
    />
  </>
}

function Portal({
  refPortalContainer,
  children
}: {
  refPortalContainer: React.RefObject<HTMLDivElement>,
  children: React.ReactNode
}) {
  const refPortalCreated = useRef(false);

  const [, setRerenderedForPortalRefNotToBeNull] = useState(0);

  useLayoutEffect(() => {
    if (refPortalCreated.current === false) {
      setRerenderedForPortalRefNotToBeNull((v) => v + 1);
    }
  }, [refPortalCreated, refPortalContainer]);

  if (refPortalContainer.current === null) {
    refPortalCreated.current = false;
    return null;
  } else {
    refPortalCreated.current = true;
    return createPortal(children, refPortalContainer.current);
  }
}