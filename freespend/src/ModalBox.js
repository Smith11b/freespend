import React from "react";

import { withModalToggle } from "./ModalProvider";

function ModalBoxContainer({ show, children }) {
  const style = { display: show ? "block" : "none" };
  return <div style={style}>{children}</div>;
}

export default withModalToggle(ModalBoxContainer);
