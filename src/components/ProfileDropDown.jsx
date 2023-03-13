import {
  Avatar,
  AvatarBadge,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';

export default function ProfileDropDown({logout}) {
  return (
    <Menu>
      <MenuButton>
        <Avatar>
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
      </MenuButton>
      <MenuList>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Docs</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <MenuDivider />
        <MenuItem onClick={logout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
