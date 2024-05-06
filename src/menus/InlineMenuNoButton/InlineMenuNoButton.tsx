import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { NavbarContainer, NavbarLinkContainer, NavbarLink } from '../styles';
import { InlineMenuNoButtonProps } from 'types';

const InlineMenuNoButton = ({
  // userType,
  menu,
  editing,
}: InlineMenuNoButtonProps) => {
  const navigate = useNavigate();
  const { user, part } = useParams<{ user: string; part: string }>();

  const handleClick = (item: string) => {
    if (!editing) {
      const param = item.toLocaleLowerCase();
      navigate(`/administration/${user}/${param}`);
    }
  };
  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        {menu.map((item, i) => {
          return (
            <NavbarLink
              className={
                part === item.toLocaleLowerCase() ? 'active line' : 'line'
              }
              onClick={() => handleClick(item)}
              disabled={editing}
              key={i}
            >
              {item}
            </NavbarLink>
          );
        })}
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

export default InlineMenuNoButton;
