import { forwardRef } from "react";
import { useMaxPanelHeight } from "./useMaxPanelHeight";

const Panel = forwardRef((props, ref) => {
  const { panelRef, getPanelHeight } = useMaxPanelHeight();

  const panelHeight = getPanelHeight();

  return (
    <div className="panel-wrapper" ref={ref}>
      <ul className="panel" ref={panelRef}>
        <li className="panel__item" tabIndex="0">
          One: {`panelHeight is ${panelHeight}px`}
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
        <li className="panel__item" tabIndex="0">
          Eleven
        </li>
        <li className="panel__item" tabIndex="0">
          Twelve
        </li>
        <li className="panel__item" tabIndex="0">
          Thirteen
        </li>
        <li className="panel__item" tabIndex="0">
          Fourteen
        </li>
        <li className="panel__item" tabIndex="0">
          Fifteen
        </li>
        <li className="panel__item" tabIndex="0">
          Sixteen
        </li>
        <li className="panel__item" tabIndex="0">
          Seventeen
        </li>
        <li className="panel__item" tabIndex="0">
          Eighteen
        </li>
        <li className="panel__item" tabIndex="0">
          Ninteen
        </li>
        <li className="panel__item" tabIndex="0">
          Twenty
        </li>
        <li className="panel__item" tabIndex="0">
          Twenty one
        </li>
        <li className="panel__item" tabIndex="0">
          Twenty two
        </li>
        <li className="panel__item" tabIndex="0">
          Twenty three
        </li>
        <li className="panel__item" tabIndex="0">
          Twenty four
        </li>
        <li className="panel__item" tabIndex="0">
          Twenty five
        </li>
        <li className="panel__item" tabIndex="0">
          Twenty six
        </li>
        <li className="panel__item" tabIndex="0">
          Twenty seven
        </li>
        <li className="panel__item" tabIndex="0">
          Twenty eight
        </li>
        <li className="panel__item" tabIndex="0">
          Twenty nine
        </li>
        <li className="panel__item" tabIndex="0">
          Thirty
        </li>
      </ul>
    </div>
  );
});

Panel.displayName = "Panel";

export default Panel;
