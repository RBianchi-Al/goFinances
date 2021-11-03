# Expo
Conjunto de ferramentas que auxilia no ambiente de desenvolvimento
Integra com plataformas nativas as configura. Cudia da parte do ambiete de desenvolvimento


Iniciando um projeto
expo init <nome projeto>

1. Selecionar o último template para ter liberdade quanto ao desenvolvimento IOs e Android

2. Iniciando um projeto:

```
expo init <nome projeto>
```
3. Adicionando typescript
Insira na raiz do projeto um arquivo tsconfig.json
Rode no terminal
```
    expo start
```
Vai abrir uma página web e lá haverá opção para rodar o projeto no emulador via android ou IOS

3. Adicionando StyledComponent

```
    yarn add styled-components
    yarn add  -D @types/styled-components-react-native
```

4. Adicionar uma fonte usando expo
```
    expo install expo-font @expo-google-fonts/<nome da fonte>
```

4. Segurar o loading enquanto as fontes não carregam ele não exibirá o app
```
    expo install expo-app-loading
```    

5. Trabalhando com proporções: responsive fontsize react native. Tem duas funções, enquanto que no 
RFP porcentagem largura da tela
RFValue, considera a medida da densidade (medida rem)

```
    yarn add react-native-responsive-fontsize
```

5. Trabalhando com ícones usando expo. Quando usa expo tem por padrão uma biblioteca de ícones e já vem instalada por default. Acessando a documentação <link rel="stylesheet" href="https://icons.expo.fyi/">
Basta importar no local que deseja usar:

```
    import {} from '@expo/vector-icons
```