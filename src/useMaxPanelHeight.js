import { useEffect, useRef, useState } from "react";

export const useMaxPanelHeight = () => {
  let panelRef = useRef(null);
  const [visualViewportHeight, setVisualViewportHeight] = useState(
    Math.round(window.visualViewport.height)
  );

  const getPanelHeight = () => {
    return panelRef?.current?.offsetHeight;
  };

  const getVisualViewportHeight = () =>
    setVisualViewportHeight(Math.round(window?.visualViewport?.height));

  function handleVPResize() {
    getVisualViewportHeight();
  }

  function handleVisualViewportResize() {
    console.log("Handling visualViewportResize");
    // getVisualViewportHeight();
    setVisualViewportHeight(Math.round(window?.visualViewport?.height));
    setMaxpanelHeight();
  }
  const getMaxPanelHeight = () => {
    // Values for calculations
    const visualViewport = window?.visualViewport;
    // const panelHeight = panelRef?.current?.scrollHeight;

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

    // const willPanelFitInViewport = availableSpaceForPanel - panelHeight > 0;

    // eslint-disable-next-line no-console
    // console.groupCollapsed("useMaxPanelBlockSize");
    // console.log("panelRef", panelRef);
    // eslint-disable-next-line no-console
    // console.log("willPanelFitInViewport", willPanelFitInViewport);
    // eslint-disable-next-line no-console
    // console.log("panelHeight", panelHeight);
    // eslint-disable-next-line no-console
    // console.log("willPanelFitInViewport", willPanelFitInViewport);
    // eslint-disable-next-line no-console
    // console.log("availableSpaceForPanel", availableSpaceForPanel);
    // eslint-disable-next-line no-console
    // console.log("autocompletePanelHeight", panelHeight);
    // eslint-disable-next-line no-console
    // console.log("value", availableSpaceForPanel - panelHeight);
    // eslint-disable-next-line no-console
    // console.groupEnd();

    return availableSpaceForPanel;
    // return `${availableSpaceForPanel.toString()}px`;
  };

  const setMaxpanelHeight = () => {
    // console.log("panelRef in setMaxPanelHeight", panelRef?.current?.style);
    // console.count("setMaxpanelHeight");
    panelRef &&
      panelRef?.current?.style.setProperty(
        "max-block-size",
        `${getMaxPanelHeight()}px`
      );
    // panelRef?.current.style["max-block-size"] = getMaxPanelHeight();
  };

  // setMaxpanelHeight();

  // useEffect(() => {
  //   console.log("VisualViewport height changed");
  //   setMaxpanelHeight();
  // }, [visualViewportHeight, setMaxpanelHeight]);

  // window.visualViewport.addEventListener("resize", handleVPResize);
  useEffect(() => {
    console.log("Resize Event attached?");
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
