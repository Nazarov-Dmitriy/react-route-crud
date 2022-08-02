import React from "react";

export default function WrapperItem(props) {
  const { className } = props;

  return <div className={className}>{props.children}</div>;
}
