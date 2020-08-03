import React from 'react'
import {Menu, MenuItem} from "@dhis2/ui"
import { useHistory, useRouteMatch } from "react-router-dom";
import { PropTypes } from "@dhis2/prop-types";


const NavigationItem = ({ path, label }) => {
    // browser history object
    const history = useHistory();
  
    // "null" when not active, "object" when active
    const routeMatch = useRouteMatch(path);
    // If "isActive" is not null and "isActive.isExact" is true
    const isActive = routeMatch?.isExact;
  
    // Callback called when clicking on the menu item.
    // If the menu item is not active, navigate to the path
    const onClick = () => !isActive && history.push(path);
  
    // @TODO: Use the `MenuItem` component insteaf of the `div`
    return <MenuItem label={label} active={isActive} onClick={onClick} />;
  };
  NavigationItem.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  };
const Sidebar = (props)=>{
    return(
        <Menu>
<NavigationItem
      // Menu item for the FAQ page
      label="List"
      path="/"
    />
    <NavigationItem
      // Menu item for the FAQ page
      label="Form"
      path="/form"
    />
        </Menu>
    )
}
export default Sidebar;
