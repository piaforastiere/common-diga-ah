import React from 'react';

import { NavbarContainer, NavbarLinkContainer, NavbarLink } from '../styles';
import { capitalizeFirstLetter } from '../utils';

export interface InlineMenuProps {
  // userType?: string; // Removido por no utilizarse.
  menuItems: string[];
  activeFilter: string | string[];
  isDisabled?: boolean;
  setActiveFilter: (value: string | string[]) => void;
}

const InlineMenu: React.FC<InlineMenuProps> = React.memo(
  ({ menuItems, activeFilter, isDisabled, setActiveFilter }) => {
    const handleClick = (item: string) => {
      let newActiveFilter: string | string[] = item;
      if (Array.isArray(activeFilter)) {
        const isActive = activeFilter.includes(item);
        newActiveFilter = isActive
          ? activeFilter.filter(filterItem => filterItem !== item)
          : [...activeFilter, item];
      }

      setActiveFilter(newActiveFilter);
    };

    return (
      <NavbarContainer>
        <NavbarLinkContainer>
          {menuItems.map(
            (
              item // Removemos 'i' y usamos 'item' como 'key'.
            ) => (
              <NavbarLink
                key={item}
                className={
                  Array.isArray(activeFilter)
                    ? activeFilter.includes(item)
                      ? 'active'
                      : ''
                    : activeFilter === item
                      ? 'active'
                      : ''
                }
                onClick={() => handleClick(item)}
                disabled={isDisabled}
              >
                {capitalizeFirstLetter(item)}
              </NavbarLink>
            )
          )}
        </NavbarLinkContainer>
      </NavbarContainer>
    );
  }
);

export default InlineMenu;
