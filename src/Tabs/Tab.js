import React from "react";
import clsx from "clsx";

import classes from "./Tabs.module.scss";

export const Tab = ({ label, badge, onClick, selected }) => {
  return (
    <button
      className={clsx(classes.tab, selected && classes.selected)}
      type="button"
      role="tab"
      onClick={
        onClick ??
        ((e) => {
          e.stopPropagation();
          e.preventDefault();
        })
      }
    >
      <span className={classes.label} data-label={label}>
        {label}
      </span>
      {badge && <span className={classes.badge}>{badge}</span>}
    </button>
  );
};
