import React from "react";
import clsx from "clsx";

import classes from "./Tabs.module.scss";

export const Tabs = ({ value, onChange, className, children }) => {
  const [tabIndex, setTabIndex] = React.useState(value ?? 0);
  const containerRef = React.useRef(null);
  const indicatorRef = React.useRef(null);
  const handleTabClick = (index) => () => {
    setTabIndex(index);
    onChange?.(index);
  };

  const handleIndicator = React.useCallback(() => {
    if (containerRef.current && indicatorRef.current) {
      const width = containerRef.current.clientWidth;
      indicatorRef.current.style.width = `${
        width / React.Children.count(children)
      }px`;
      indicatorRef.current.style.left = `${
        tabIndex * (width / React.Children.count(children))
      }px`;
    }
  }, [tabIndex, children]);

  React.useLayoutEffect(() => {
    handleIndicator();
  }, [tabIndex, handleIndicator]);

  React.useLayoutEffect(() => {
    window.addEventListener("resize", handleIndicator);

    return () => {
      window.removeEventListener("resize", handleIndicator);
    };
  }, [handleIndicator]);

  React.useEffect(() => {
    if (value !== tabIndex) {
      setTabIndex(value ?? 0);
    }
  }, [value, tabIndex]);

  return (
    <div
      className={clsx(classes.container, className)}
      ref={containerRef}
      role="tablist"
    >
      {React.Children.map(children, (child, i) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              onClick: handleTabClick(i),
              selected: i == tabIndex,
            })
          : child
      )}
      <span className={classes.indicator} ref={indicatorRef}></span>
    </div>
  );
};
