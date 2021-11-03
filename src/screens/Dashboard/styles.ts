import styled from 'styled-components/native'

export const Container = styled.View `
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
    
`

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: 24px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.title};
`