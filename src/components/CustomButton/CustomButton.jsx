import React from "react";

import { CustomButtonContainer } from "./CustomButtonStyles";

function CustomButton({ children, ...props }) {
  return (
    <div>
      <CustomButtonContainer {...props}>

        {children}{" "}
   </CustomButtonContainer>
    </div>
  );
}
export default CustomButton;
