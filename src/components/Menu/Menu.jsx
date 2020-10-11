import React from "react";
import { connect } from "react-redux";
import { selectMenuSections } from "../../redux/menu/menuSelectors";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/MenuItem";
import "./Menu.scss";

function Menu({ sections }) {
  return (
    <div className="menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectMenuSections,
});

export default connect(mapStateToProps)(Menu);
