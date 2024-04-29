import styled from 'styled-components'
import '@fontsource/plus-jakarta-sans'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 64px 21px 31px;
  background-color: #fdfdfd;
  align-items: center;
  margin-bottom: 7px;
  font-family: 'Plus Jakarta Sans';
`

export const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderTitle = styled.div`
  width: calc(100% - 128px);
  color: #141522;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.72px;
  display: flex;
  justify-content: flex-start;
`

export const HeaderNotificationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 128px;
  align-items: center;
`

export const HeaderNotifications = styled.div`
  width: 52px;
  height: 52px;
  border: 1px solid #8e92bc;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: auto;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  right: 64px;
  top: 88px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  background: #f6f6f6;
  padding: 10px 8px 17px 8px;
  color: #0a0a18;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.12px;

  .list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 8px;

    div {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    svg {
      font-size: 24px;
      margin-right: 8px;
    }
  }
`
export const HeaderProfile = styled.div<{ profileImage: string }>`
  width: 52px;
  height: 52px;
  border-radius: 100px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-image: ${(props: { profileImage: string }) =>
    `url(${props.profileImage})`};
  cursor: pointer;
`
