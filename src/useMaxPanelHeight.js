import { useEffect, useRef } from "react";

/**
 * @description Utility to set the max-block-size of a panel like those found
 * in a combobox based on the visual viewport. Visual viewport size changes when
 * user open the mobile keyboard by focusing on the combobox input
 *
 *  @param {number} panelBlockMarginEndValue The value of the space between the cross-axis end side of the panel ond the bottom of the visual viewport.
 * @returns {object}
 */
export const useMaxPanelHeight = (panelBlockMarginEndValue = 16) => {
  const panelRef = useRef(null);

  /**
   * @description Handles visual Viewport resize event
   * @return {undefined}
   */
  const handleVisualViewportResize = () => {
    setMaxPanelHeight();
  };

  /**
   * @description Determines the vertical space available within the visual viewport that the panel can fit in without extending beyond the bottom of the visual viewport.
   * @returns {number}
   *
   * iOS 15 has a bug when the address bar is at the bottom of the screen and the mobile keyboard is open. The VisualViewport is incorrectly not including the height of the floating address bar. This causes the floating address bar to overlay the last 30(ish) pixels of the  open panel.
   */
  const getMaxPanelHeight = () => {
    const visualViewportHeight = window?.visualViewport?.height;
    const panelHeight = panelRef?.current?.offsetTop

    return Math.round(visualViewportHeight -
        panelBlockMarginEndValue -
        panelHeight
        );
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
    console.log("offsetTop", panelRef?.current?.offsetTop);

    setMaxPanelHeight();
  }, []);

  return panelRef;
};
