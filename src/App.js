import React from 'react';
import styled from 'styled-components';

import Header from './Blocks/Header';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  height: 200vh;
  color: #FFF;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
      </Wrapper>
    );
  }
}

export default App;
