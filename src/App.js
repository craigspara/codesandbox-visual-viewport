import { useEffect, useLayoutEffect, useRef } from "react";
import Panel from "./panel";
import "./styles.css";
import { useMaxPanelHeight } from "./useMaxPanelHeight";

export default function App() {
  const refRef = useRef(null);

  const { visualViewportHeight } = useMaxPanelHeight();

  return (
    <div className="App">
      <h1>VisualViewport Test</h1>
      <p className="specs">
        Viewport height: {window.innerHeight}px | VisualViewport height:{" "}
        <strong>{visualViewportHeight}</strong>
        px
      </p>
      <div className="wrapper">
        <input type="text" />
        <Panel ref={refRef} />
      </div>
    </div>
  );
}
