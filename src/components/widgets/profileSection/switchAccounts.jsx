import React, { useState, useEffect } from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
} from "@material-tailwind/react";
import { primeSenderController, setProfile } from "../../context";
import { FaAngleDown } from "react-icons/fa";


export function AvatarMenu() {
    // const [data, setData] = useState({});
    const [controller, dispatch] = primeSenderController();
    const [isOpen, setIsOpen] = useState(false);

    const avatars = [
        {
            id: 1,
            text: "+91-9023970601"
        },
        {
            id: 2,
            text: "+789-8562485454"
        },
        {
            id: 3,
            text: "+1-545898455654"
        }
    ];
    const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

    // useEffect(() => {
    //     if (!controller.credentials) {
    //         navigate("/login")
    //     }
    //     else {
    //         setData(controller.credentials.data);
    //     }
    // }, []);


    return (
        <Menu open={isOpen} handler={setIsOpen} >
            <MenuHandler className="cursor-pointer font-bold px-[10px] py-1 text-[#009a88] border-solid border-2 rounded-lg border-gray-500 flex justify-around items-center">
                <div className='flex justify-around items-center' >
                    <Typography variant="small" className="font-semibold mr-1">
                        {selectedAvatar.text}
                    </Typography>
                    <FaAngleDown
                        className={isOpen ? 'transform transition-transform duration-200 rotate-180' : 'transform transition-transform duration-200 rotate-0'}
                    />
                </div>
            </MenuHandler>
            <MenuList className="flex flex-col gap-2">
                {avatars.map(avatar => (
                    <MenuItem
                        key={avatar.id}
                        className="flex items-center gap-4 py-2 pl-2 pr-8 border-none"
                        onClick={() => { setSelectedAvatar(avatar), setProfile(dispatch, avatar.id); }}
                    >
                        <div className="flex flex-col gap-1">
                            <Typography variant="small" color="gray" className="font-semibold">
                                {avatar.text}
                            </Typography>
                        </div>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
