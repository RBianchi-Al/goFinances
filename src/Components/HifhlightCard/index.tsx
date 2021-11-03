import React from 'react'
import {Container, Header, Title, Footer, Icon, Amount, LastTransation} from './styles'

export default function HighlightCard(){
    return (
        <Container>
            <Header>
                <Title>
                    Entrada
                </Title>
                <Icon name="arrow-up-circle"/>
            </Header>

            <Footer>
                <Amount>R$ 17. 000</Amount>
                <LastTransation> última transação dia </LastTransation>
            </Footer>
        </Container>
    )
}