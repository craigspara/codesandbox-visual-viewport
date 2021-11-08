import { useEffect, useRef } from "react";

/**
 * @description Utility to set the max-block-size of a panel like those found
 * in a combobox based on the visual viewport. Visual viewport size changes when
 * user open the mobile keyboard by focusing on the combobox input
 *  @param {number} panelBlockMarginEndValue The value of the space between the cross-axis end side of the panel ond the bottom of the visual viewport.
 * @returns {object}
 */
export const useMaxPanelHeight = (panelBlockMarginEndValue) => {
  const panelRef = useRef(null);

  /**
   * @description Handles visual Viewport resize event
   * @return {undefined}
   */
  const handleVisualViewportResize = () => {
    setMaxPanelHeight();
  };

  /**
   * @description The value of the space between the cross-axis end side of the panel ond the bottom of the visual viewport.
   *
   * @constant
   * @default 16
   *
   * Returns panelBlockMarginEndValue from props if provided
   * If not, then uses css var --panel-block-margin-end-value
   * If neither are defined, returns default value of 16
   * @returns {number}
   */
  const getPanelBlockMarginEndValue = () => {
    const defaultValue = 16;

    if (panelBlockMarginEndValue) {
      return panelBlockMarginEndValue
    }

    const documentBodyStyles = getComputedStyle(document.documentElement);
    const cssPanelBlockMarginEndValue =  documentBodyStyles.getPropertyValue('--panel-block-margin-end-value');

    return cssPanelBlockMarginEndValue || defaultValue;
  };

  /**
   * @description Determines the vertical space available within the visual viewport that the panel can fit in without extending beyond the bottom of the visual viewport.
   * @returns {number | string}
   *
   * iOS 15 has a bug when the address bar is at the bottom of the screen and the mobile keyboard is open. The VisualViewport is incorrectly not including the height of the floating address bar. This causes the floating address bar to overlay the last 30(ish) pixels of the  open panel.
   */
  const getMaxPanelHeight = () => {
    const visualViewportHeight = window?.visualViewport?.height;
    const panelBlockMarginEndValue = getPanelBlockMarginEndValue();
    // getBoundingClientRect() provides position relative to the viewport. offsetTop provides position relative to the closest positioned parent (offsetParent) element. In a complex layout, these may not be the same value.
    const panelOffsetFromViewport = panelRef?.current?.getBoundingClientRect().top || 0;

    return Math.round(visualViewportHeight -
        panelBlockMarginEndValue -
        panelOffsetFromViewport
        );
  };

  /**
   * @description Sets the css custom property, --panel-max-block-size,
   * to the max-block-size available for the panel.
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
    setMaxPanelHeight();
  });

  return panelRef;
};
