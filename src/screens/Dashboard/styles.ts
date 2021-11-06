import styled from 'styled-components/native'
import {FlatList} from 'react-native'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'

import {DataListProps} from './index'

export const Container = styled.View `
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
    
`


export const Header = styled.View `
    background-color: ${({theme}) => theme.colors.primary};
    width: 100%;
    height: ${RFPercentage(42)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
`
export const UserInfo = styled.View `
    flex-direction: row;
    align-items: center;
`

export const  Photo = styled.Image `
    width: ${RFValue(65)}px;
    height: ${RFValue(65)}px;
    
    border-radius: 10px;
`
export const UserWrapper = styled.View `
    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const  UserGretting =  styled.Text `
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};

`

export const  UserName = styled.Text `
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
`
export const  User = styled.View `
    margin-left: 17px;
`

export const Icon = styled(Feather) `
    color: ${({theme}) => theme.colors.secundary};
    font-size: ${RFValue(27)}px;
`
export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal: 24}
}) `
 width: 100%;
 position: absolute;
 margin-top: ${RFPercentage(30)}px;


`



export const Transations = styled.View `
    flex: 1%;
    padding: 0 24px;
    margin-top: ${RFPercentage(23)}px;
    
`;


export const Title = styled.Text `
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    margin-bottom: ${RFValue(18)}px;
`;

export const TransactionList = styled(
    FlatList as new () => FlatList<DataListProps>
).attrs({
    showsVerticalScrollIndicator: false,
}) `

`
