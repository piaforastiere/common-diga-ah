import React from 'react';

import { GrAdd } from 'react-icons/gr';
import { useNavigate, useParams } from 'react-router-dom';

import { NavbarContainer, NavbarLinkContainer, NavbarLink } from '../styles';
import { AdminMenu, InlineMenuHeaderProps } from '../../types';
import { capitalizeFirstLetter } from '../utils';

const InlineMenuHeader = ({
  // userType,
  menu,
  editionMode,
  modalStatus,
  setModalStatus,
}: InlineMenuHeaderProps) => {
  const navigate = useNavigate();
  const { user } = useParams<{ user: string }>();
  const openModal = () => {
    setModalStatus(!modalStatus);
  };

  const handleClick = (item: string) => {
    navigate(`/administration/${item}`);
  };

  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        {menu.map((item, i) => {
          if (item !== AdminMenu.bono) {
            return (
              <NavbarLink
                className={user === item ? 'active' : ''}
                onClick={() => handleClick(item)}
                disabled={editionMode}
                key={i}
              >
                {capitalizeFirstLetter(item)}
              </NavbarLink>
            );
          } else {
            return (
              <NavbarLink
                className={user === item ? 'active' : undefined}
                onClick={openModal}
                key={i}
              >
                <GrAdd />
                Agregar Bono
              </NavbarLink>
            );
          }
        })}
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

export default InlineMenuHeader;
