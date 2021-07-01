import React, {useEffect, useState} from 'react';
import { Home24, Search24, DocumentBlank24, Settings24, Help24  } from "@carbon/icons-react";

import { NavItem } from './components/navItem';

const Sidebar = props => {

    return (
        <div className='side-bar'>
            <div>
                <NavItem
                    url='/home'
                    title='home'
                    icon={<Home24/>}
                />
                <NavItem
                    url='/search'
                    title='search'
                    icon={<Search24/>}
                />
                <NavItem
                    url='/report'
                    title='report'
                    icon={<DocumentBlank24/>}
                />
            </div>
            <div>
                <NavItem
                    url='/help'
                    title='help'
                    icon={<Help24/>}
                />
                <NavItem
                    url='/settings'
                    title='settings'
                    icon={<Settings24/>}
                />
            </div>
        </div>
    )
}

export default Sidebar;