import React, { useState } from 'react'

import { IoPersonOutline, IoLogOutOutline } from 'react-icons/io5'

import notificationIcon from '../assets/Notification.svg'
import annabel from '../assets/annabel.png'

import { HeaderProps } from '../types'

import {
  HeaderContainer,
  HeaderRow,
  HeaderTitle,
  HeaderNotificationsContainer,
  HeaderNotifications,
  HeaderProfile,
  ProfileContainer,
} from './styled'
import { InlineMenuHeader } from 'menus'

const adminMenu = ['administracion', 'alumnos', 'profesores', 'bono']

const Header = ({
  title,
  profileImage,
  modalStatus,
  editionMode,
  setModalStatus,
}: HeaderProps) => {
  const [profileOptions, setProfileOptions] = useState(false)
  return (
    <HeaderContainer>
      <HeaderRow>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderNotificationsContainer>
          <HeaderNotifications>
            <img src={notificationIcon} alt="notifications" />
          </HeaderNotifications>

          <HeaderProfile
            profileImage={profileImage ? profileImage : annabel}
            onClick={() => setProfileOptions(!profileOptions)}
          />

          {profileOptions && (
            <ProfileContainer>
              <div className="list">
                <div>
                  <IoPersonOutline /> Perfil
                </div>
                <div>
                  <IoLogOutOutline /> Cerrar Sesión
                </div>
              </div>
            </ProfileContainer>
          )}
        </HeaderNotificationsContainer>
      </HeaderRow>
      <HeaderRow>
       <InlineMenuHeader userType="admin" menu={adminMenu} editionMode={editionMode}
  modalStatus={modalStatus}
  setModalStatus={setModalStatus} />
      </HeaderRow>
    </HeaderContainer>
  )
}

export default Header
