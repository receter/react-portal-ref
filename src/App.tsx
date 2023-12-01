import { useState } from 'react';
import './App.css'
import { PortalExample1 } from './PortalExample1';
import { PortalExample2 } from './PortalExample2';
import { PortalExample3 } from './PortalExample3';

function App() {
  const [, setCount] = useState(0);

  return (
    <>
      <h1>React Portal via Ref</h1>
      <div className="portals">
        <PortalExample1 />
        <PortalExample2 />
        <PortalExample3 />
      </div>

      <div className="explainer">
        <p>Note that <i>Portal 1</i> is empty after the first render. This happens because the ref is not yet available when <code>createPortal()</code> is called. The ref will get set after the DOM mutations are done.</p>
        <p><i>Portal 2</i> uses <code>useLayoutEffect()</code> to rerender after the dom mutations. This time the ref is ready and the portal works as expected.</p>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Rerender
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
