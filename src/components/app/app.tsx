import * as React from 'react';
import Main from '../../pages/main/main';

type AppProps = {
  CardsToShow: number;
};

function App(props: AppProps) {
  return <Main CardsToShow={props.CardsToShow} />;
}

export default App;
