import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./SpinnerStyles";

function Spinner() {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
}

export default Spinner;
