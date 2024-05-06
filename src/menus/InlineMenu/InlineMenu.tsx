import { NavbarContainer, NavbarLink, NavbarLinkContainer } from '../styles';
import { capitalizeFirstLetter } from '../utils';
import React from 'react';

export interface InlineMenuProps {
  userType?: string;
  menuItems: string[];
  activeFilter: string | string[] | null;
  isDisabled?: boolean;
  setActiveFilter: (value: string | string[] | null) => void;
}

const InlineMenu = ({
  // userType,
  menuItems,
  activeFilter,
  isDisabled,
  setActiveFilter,
}: InlineMenuProps) => {
  const isActive = (item: string) => {
    if (Array.isArray(activeFilter)) {
      return activeFilter.includes(item);
    }
    return activeFilter === item;
  };

  const handleClick = (item: string) => {
    if (Array.isArray(activeFilter)) {
      if (activeFilter.includes(item)) {
        setActiveFilter(activeFilter.filter(filterItem => filterItem !== item));
      } else {
        setActiveFilter([...activeFilter, item]);
      }
    } else {
      setActiveFilter(item);
    }
  };

  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        {menuItems.map((item, i) => (
          <NavbarLink
            key={i}
            className={isActive(item) ? 'active' : ''}
            onClick={() => handleClick(item)}
            disabled={isDisabled}
          >
            {capitalizeFirstLetter(item)}
          </NavbarLink>
        ))}
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

export default InlineMenu;
