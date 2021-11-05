import { useEffect, useRef, useState } from "react";

/**
 * @description Utility to set the max-block-size of a panel like those found
 * in a combobox based on the visual viewport. Visual viewport size changes when
 * user open the mobile keyboard by focusing on the combobox input
 *
 // * @returns {object <object|function|number>}
 */
export const useMaxPanelHeight = () => {
  const panelRef = useRef(null);
  const [visualViewportHeight, setVisualViewportHeight] = useState(
    Math.round(window.visualViewport.height)
  );

  /**
   * @returns {number}
   */
  const getPanelHeight = () => {
    return panelRef?.current?.offsetHeight;
  };

  /**
   * @returns {number}
   */
  const getVisualViewportHeight = () => visualViewportHeight;

  /**
   * @description Handles visual Viewport resize event
   * @return {undefined}
   */
  const handleVisualViewportResize = () => {
    setVisualViewportHeight(Math.round(window?.visualViewport?.height));
    setMaxPanelHeight();
  };

  /**
   * @returns {number}
   */
  const getMaxPanelHeight = () => {
    const visualViewport = window?.visualViewport;

    // Eventually get directly from CSS to avoid magic number
    const arbitraryBlockMarginEndValue = 16;

    /**
     * @returns {number}
     */
    // iOS 15 has a bug when the address bar is at the bottom of the screen and the mobile keyboard is open. The VisualViewport is incorrectly not including the height of the floating address bar. This causes the floating address bar to overlay the last 30(ish) pixels of the  open panel.
    const getAvailableSpaceForPanel = () => {
      return (
        visualViewport?.height -
        arbitraryBlockMarginEndValue -
        panelRef?.current?.getBoundingClientRect().top
      );
    };

    return Math.round(getAvailableSpaceForPanel());
  };

  // TODO: Add check for --panel-max-block-size. If missing, add it with a default value.
  /**
   * @description Sets the css custom property, --panel-max-block-size,
   * to the max-block-size available for the panel
   * @returns {undefined}
   */
  const setMaxPanelHeight = () => {
    return (
      panelRef &&
      panelRef?.current?.style.setProperty(
        "--panel-max-block-size",
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

  useEffect(() => {
    console.count("Initial load useEffect");
    setMaxPanelHeight();
  }, []);

  return {
    panelRef,
    getPanelHeight,
    getVisualViewportHeight,
    visualViewportHeight
  };
};
