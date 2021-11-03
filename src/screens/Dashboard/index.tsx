import React from 'react'
import {Container, Header, UserInfo, Photo, UserGretting, UserName, User, UserWrapper}  from './styles'
export function Dashboard(){
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{uri: 'https://avatars.githubusercontent.com/u/48865223?v=4'}}></Photo>
                        <User>
                            <UserGretting>Olá,</UserGretting>
                            <UserName>Renata</UserName>
                        </User>
                    </UserInfo>
            </UserWrapper>
                </Header>
        </Container>
    )
}