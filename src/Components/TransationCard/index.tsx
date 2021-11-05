import React from 'react';

import {
    Container,
    Title,
    Value,
    TypeTransation,
    DateTransation,
    TitleType,
    Icon,
    Category
    
} from './styles'
interface Category {
    
    name: string;
    icon: string;
}
interface Props {
   data: {
    title: string;
    amount: string;
    category: Category;
    date: string;
   }
}

export default function TransationCard({data}:Props) {
    return (
        <Container>
            <Title>
               {data.title}
            </Title>
            <Value>
                {data.amount}
            </Value>
            <TypeTransation>
                <Category>
                    <Icon name="dollar-sign"/>
                    <TitleType>{data.category.name}</TitleType>
                </Category>
                <DateTransation>{data.date}</DateTransation>
            </TypeTransation>
        </Container>
    )
}