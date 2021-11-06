import React from 'react'
import HighlightCard from '../../Components/HifhlightCard/HighlightCard'
import TransationCard, { TransationCardProps } from '../../Components/TransationCard'


import { 
    Container, 
    Header, 
    UserInfo, 
    Photo, 
    UserGretting, 
    UserName, 
    User, 
    UserWrapper,
    Icon,
    HighlightCards,
    Transations,
    Title,
    TransactionList
} from './styles'

export interface DataListProps extends TransationCardProps {
    id: string;
}

export function Dashboard({id: string}: DataListProps) {
    const data: DataListProps[] = [ 
        { 
        id: '1',
        type: 'positive',
        title:"Desenvolvimento de sistemas",
        amount: "R$ 5,00",
        category: {
            name: "Vendas",
            icon: "dollar-sign",
        },
        date: "20/02/2021",
    }, 
    { 
        id: '2',
        type: 'negative',
        title:"Pizzaria ",
        amount: "R$ 1200,00",
        category: {
            name: "Casa",
            icon: "coffee",
        },
        date: "20/02/2021",
    },
    { 
        id: '3',
        type: 'negative',
        title:"Salário",
        amount: "R$ 1550,00",
        category: {
            name: "Empresa",
            icon: "shopping-bag",
        },
        date: "20/02/2021",
    }
]

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/48865223?v=4' }}></Photo>
                        <User>
                            <UserGretting>Olá,</UserGretting>
                            <UserName>Renata</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>                
            </Header>
            <HighlightCards 
            > 
              <HighlightCard 
              type="up"
              title="Entradas"
              amount="R$ 17.400,00"
              lastTransation="Última entrada dia 13 de abril"/>
              <HighlightCard
              type="down"
              title="Saídas"
              amount="R$ 1.259,00"
              lastTransation="Última saa dia 03 de abril"
              />
              <HighlightCard
              type="total"
              title="Total"
              amount="R$ 16.141,00"
              lastTransation="01 à 16 de abril"/>
            </HighlightCards>
           
            <Transations>
                <Title>
                Listagem
                </Title>
                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <TransationCard data={item}/>}
                />
           
            </Transations>
        </Container>
    )
}

