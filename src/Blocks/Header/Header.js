import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const goGusGo = keyframes`
  0% { margin-left: 0 }
  100% {  margin-left: 2000px }
`

const RoundsContainer = styled.div`
  display: flex;
`;

const PhoneContainer = styled.div`

`;

const Round = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({ background }) => background};
    border-radius: 50%;
    margin-left: 30px;

    &:nth-child(1) {
      margin-left: 0;
    }
`;

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
`;

const MainText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
`;

const DescriptionText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
`;

const Gus = styled.img`
  width: 400px;
`;

const Wrapper = styled.div`
  padding: 30px 20px;
  position: relative;
`;

function Header() {
  return (
    <Wrapper>
      <TopBarContainer>
        <RoundsContainer>
          <Round background='#0063fe' />

          <Round background='#f50003' />
        </RoundsContainer>

        <PhoneContainer>
          +7 (952) 439-19-75
        </PhoneContainer>
      </TopBarContainer>

      <MainContainer>
        <Gus src='https://sun9-45.userapi.com/c855220/v855220160/68a52/7HBZFn_DrcE.jpg' />

        <MainText>
          Ваш сайт - наша работа
        </MainText>
        
        <DescriptionText>
          Создаем сайты для любой задумки
        </DescriptionText>
      </MainContainer>
    </Wrapper>
  )
}

export default Header;