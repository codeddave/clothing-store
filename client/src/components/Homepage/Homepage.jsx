import React from "react";
import "./Homepage.scss";
import Menu from "../Menu/Menu";
import { HomepageContainer } from "./HomepageStyles";
function Homepage() {
  return (
    <HomepageContainer>
      <Menu />
    </HomepageContainer>
  );
}
export default Homepage;
