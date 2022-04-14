import React from "react";

interface CountdownProps {}

const Breadcrumb: StorefrontFunctionComponent<CountdownProps> = ({}) => {
  const path = window.location?.pathname;

  return <div>{path}</div>;
};

Breadcrumb.schema = {
  title: "editor.countdown.title",
  description: "editor.countdown.description",
  type: "object",
  properties: {},
};

export default Breadcrumb;
