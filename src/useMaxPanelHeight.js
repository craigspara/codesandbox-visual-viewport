import { useEffect, useRef, useState } from "react";

export const useMaxPanelHeight = () => {
  const panelRef = useRef(null);
  const [visualViewportHeight, setVisualViewportHeight] = useState(
    Math.round(window.visualViewport.height)
  );

  const getPanelHeight = () => {
    return panelRef?.current?.offsetHeight;
  };

  const getVisualViewportHeight = () =>
    setVisualViewportHeight(Math.round(window?.visualViewport?.height));

  function handleVisualViewportResize() {
    console.log("Handling visualViewportResize");

    setVisualViewportHeight(Math.round(window?.visualViewport?.height));
    setMaxpanelHeight();
  }
  const getMaxPanelHeight = () => {
    const visualViewport = window?.visualViewport;

    // Eventually get directly from CSS to avoid magic number
    const arbitraryBlockMarginEndValue = 16;

    const getAvailableSpaceForPanel = () => {
      return (
        visualViewport?.height -
        arbitraryBlockMarginEndValue -
        panelRef?.current?.getBoundingClientRect().top
      );
    };

    const availableSpaceForPanel = getAvailableSpaceForPanel();

    /* 
    // eslint-disable-next-line no-console
    console.groupCollapsed("useMaxPanelBlockSize");
    console.log("panelRef", panelRef);
    // eslint-disable-next-line no-console
    console.log("availableSpaceForPanel", availableSpaceForPanel);
    // eslint-disable-next-line no-console
    console.groupEnd();
    */

    return availableSpaceForPanel;
  };

  const setMaxpanelHeight = () => {
    return (
      panelRef &&
      panelRef?.current?.style.setProperty(
        "max-block-size",
        `${getMaxPanelHeight()}px`
      )
    );
  };

  useEffect(() => {
    window.visualViewport.addEventListener(
      "resize",
      handleVisualViewportResize
    );
  });

  return {
    panelRef,
    getPanelHeight,
    getVisualViewportHeight,
    visualViewportHeight
  };
};
