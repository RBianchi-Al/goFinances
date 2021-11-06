import styled, {css} from 'styled-components/native'
import {Feather} from '@expo/vector-icons'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'

interface TransactionTypeProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View `

    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
    padding: 17px 24px;
    margin-bottom: 16px;
`

export const Title = styled.Text `
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text_dark};
    font-family: ${({theme}) => theme.fonts.regular};
`


export const Value = styled.Text <TransactionTypeProps> `
  font-size: ${RFValue(20)}px;
  color: ${({theme, type}) => type === 'positive' ? theme.colors.success : theme.colors.atention  };
  font-family: ${({theme}) => theme.fonts.regular};
  
`

export const TypeTransation = styled.View `
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 19px;
`

export const DateTransation = styled.Text `
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};
  margin-left: 7px;
`

export const TitleType = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
  margin-left: 7px;
  `

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
`

export const Category = styled.View ` 
 flex-direction: row;
    justify-content: space-between;
    align-items: center;`