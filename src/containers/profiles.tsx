import { appRoutes } from 'app/routes'
import React from 'react'

import {
    Header,
    HeaderFrame,
    HeaderLogo,
    MainProfilesPicture,
    ProfilesContainer,
    ProfilesItem,
    ProfilesList,
    ProfilesName,
    ProfilesTitle
} from '../components'
import logo from '../logo.svg'

export function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header bg={false}>
                <HeaderFrame>
                    <HeaderLogo to={appRoutes.HOME} src={logo} alt='Netflix' />
                </HeaderFrame>
            </Header>

            <ProfilesContainer>
                <ProfilesTitle>Who's watching?</ProfilesTitle>
                <ProfilesList>
                    <ProfilesItem
                        onClick={() =>
                            setProfile({
                                displayName: user.userdisplayName,
                                photoURL: user.userphotoURL
                            })
                        }
                        data-testid='user-profile'
                    >
                        <MainProfilesPicture src={user.userphotoURL} />
                        <ProfilesName>{user.userdisplayName}</ProfilesName>
                    </ProfilesItem>
                </ProfilesList>
            </ProfilesContainer>
        </>
    )
}
