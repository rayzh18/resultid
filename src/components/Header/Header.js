import React, { useEffect, useState } from 'react';
import { Menu24, Search24, Asleep24, Notification24, UserAvatar24, SettingsAdjust24, Sun24 } from "@carbon/icons-react";
import img_logo_white from './../../assets/img/logo_white.png';
import img_logo_black from './../../assets/img/logo_black.png';
import { getCurrentTheme, setCurrentTheme } from '../../helpers/Utils';

const HeaderComponent = props => {

    const [theme_mode, setThemeMode] = useState('light');

    useEffect(() => {
        const current_theme = getCurrentTheme();
        setThemeMode(current_theme);
    }, []);

    const switchColor = () => {
        console.log('switch color ====>')
        if(theme_mode == 'dark') {
            setCurrentTheme('light');
        }
        else {
            setCurrentTheme('dark');
        }
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }

    return (
        <div className='header-contain'>
            <div className='header-logo'>
                <div className='btn-menu'>
                    <Menu24 />
                </div>
                <div className='logo-part'>
                    <img src={ theme_mode == 'light' ? img_logo_black : img_logo_white}></img>
                </div>
            </div>
            <div className='header-search'>
                <Search24 className='search-icon' />
                <div className='divide'></div>
                <input type='text' className='search-input' placeholder='Search here...'></input>
                <SettingsAdjust24 className='setting-adjust-icon' />
            </div>
            <div className='header-config'>
                <div className='header-config-item' onClick={() => switchColor()}>
                    {theme_mode == 'light' ? <Sun24/> : <Asleep24/>}
                </div>
                <div className='header-config-item'>
                    <Notification24/>
                </div>
                <div className='header-config-item'>
                    <UserAvatar24/>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;