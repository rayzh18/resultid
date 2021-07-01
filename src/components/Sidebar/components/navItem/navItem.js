import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

const NavItem = (props) => {

    const history = useHistory();
    const location = useLocation();
    const { icon } = props;

    return (
        <div 
            className={(location.pathname == props.url ? 'active side-bar-item' : 'side-bar-item') + ( props.order == 'last' ? ' last' : '' )}
            onClick={() => history.push(props.url)}
        >
            {icon}
        </div>
    );
}
export default NavItem;