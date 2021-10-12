import { forwardRef } from "react";
import { useMaxPanelHeight } from "./useMaxPanelHeight";

const Panel = forwardRef((props, ref) => {
  const { panelRef, getPanelHeight } = useMaxPanelHeight();

  const panelHeight = getPanelHeight();

  return (
    <div className="panel-wrapper" ref={ref}>
      <ul className="panel" ref={panelRef}>
        <li className="panel__item" tabIndex="0">
          {`panelHeight is ${panelHeight}px`}
        </li>
        <li className="panel__item" tabIndex="0">
          Two
        </li>
        <li className="panel__item" tabIndex="0">
          Three
        </li>
        <li className="panel__item" tabIndex="0">
          Four
        </li>
        <li className="panel__item" tabIndex="0">
          Five
        </li>
        <li className="panel__item" tabIndex="0">
          Six
        </li>
        <li className="panel__item" tabIndex="0">
          Seven
        </li>
        <li className="panel__item" tabIndex="0">
          Eight
        </li>
        <li className="panel__item" tabIndex="0">
          Nine
        </li>
        <li className="panel__item" tabIndex="0">
          Ten
        </li>
      </ul>
    </div>
  );
});

Panel.displayName = "Panel";

export default Panel;
