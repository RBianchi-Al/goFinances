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
export interface TransationCardProps  {
    title: string;
    amount: string;
    category: Category;
    date: string;
    type: 'positive' | 'negative';
   }
 interface Props {
    data: TransationCardProps;
}

export default function TransationCard({data}: Props) {
    return (
        <Container>
            <Title>
               {data.title}
            </Title>
            <Value type={data.type}>
                {
                data.type === 'negative' && '- '
                }
                {data.amount}
            </Value>
            <TypeTransation>
                <Category>
                    <Icon name={data.category.icon}/>
                    <TitleType>{data.category.name}</TitleType>
                </Category>
                <DateTransation>{data.date}</DateTransation>
            </TypeTransation>
        </Container>
    )
}