import React from "react";
import { BiLogOut } from 'react-icons/bi';
import { MdOutlinePeopleOutline, MdLoop } from 'react-icons/md';
import { RiHome4Line, RiSettings4Line, RiUserAddLine } from 'react-icons/ri';
import MenuAccordion from './MenuAccordion';
import MenuItem from './MenuItem';
import SideMenu from './SideMenu';

function NavBar() {
    return (
        <SideMenu>
            <MenuAccordion open name={'Lend And Borrow'} title={<MdLoop />}>
                <MenuItem
                    title={<RiHome4Line />}
                    name="Home"
                    to="/home"
                />
                <MenuItem
                    title={< MdOutlinePeopleOutline />}
                    name='Groups'
                    to="/groups"
                />
                <MenuItem
                    name='Settings'
                    title={< RiSettings4Line />}
                    to="/settings"
                />
                <MenuItem
                    name='Invite'
                    title={< RiUserAddLine />}
                    to="/invite"
                />
                <MenuItem
                    name='Logout'
                    title={<BiLogOut />}
                    to="/logout"
                />
            </MenuAccordion>
        </SideMenu>
    );
}

export default NavBar;