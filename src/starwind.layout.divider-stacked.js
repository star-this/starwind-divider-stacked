// sw-divider-stacked.js
import {
  createStarwindElement,
  defineElement,
} from "./starwind.elements.util.js";

const SwDividerStackedLayout = createStarwindElement({
  gap: { var: "--sw-divider-stacked-gap", type: "space" },
  rule: { var: "--sw-divider-stacked-rule", type: "raw" },
  "rule-gap": { var: "--sw-divider-stacked-rule-gap", type: "space" },
});

export function defineSwDividerStacked() {
  defineElement("sw-divider-stacked", SwDividerStackedLayout);
}
