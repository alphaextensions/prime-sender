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
import { useNavigate } from 'react-router-dom';

export function AvatarMenu() {
    const [controller, dispatch] = primeSenderController();
    const [isOpen, setIsOpen] = useState(false);
    const [avatars, setAvatars] = useState([]);
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!controller.credentials) {
            navigate("/login");
        } else if (controller.credentials.data) {
            const data = controller.credentials.data;
            const newAvatars = data.map((item, index) => ({
                id: index,
                text: `+${item.phone}`
            }));

            setAvatars(newAvatars);

            if (newAvatars.length > 0) {
                setSelectedAvatar(newAvatars[0]);
            }
        }
    }, [controller.credentials, navigate]);

    return (
        <Menu open={isOpen} handler={setIsOpen}>
            <MenuHandler className="cursor-pointer font-bold px-[10px] py-1 text-[#009a88] border-solid border-2 rounded-lg border-gray-500 flex justify-around items-center">
                <div className='flex justify-around items-center'>
                    <Typography variant="small" className="font-semibold mr-1">
                        {selectedAvatar ? selectedAvatar.text : "Select an Avatar"}
                    </Typography>
                    {avatars.length > 1 ? <FaAngleDown
                        className={isOpen ? 'transform transition-transform duration-200 rotate-180' : 'transform transition-transform duration-200 rotate-0'}
                    /> : ""}
                </div>
            </MenuHandler>
            <MenuList className="flex flex-col gap-2 max-h-[200px]">
                {avatars.map(avatar => (
                    <MenuItem
                        key={avatar.id}
                        className="flex items-center gap-4 py-2 pl-2 pr-8 border-none"
                        onClick={() => { setSelectedAvatar(avatar); setProfile(dispatch, avatar.id); }}
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
