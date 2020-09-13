import React from 'react';

import useFetch from './hooks/useFetch';

import GlobalContext from "./contexts/GlobalContext";

import { Container } from "./containers";
import { 
  Header, 
  UsersList 
} from "./components";

interface IUser {
  name: string;
  age: number;
};

type GlobalState = {
  users: IUser[];
  isSearch: boolean;
  isFinded: boolean;
}

function App() {
  const [globalState, setGlobalState] = React.useState({})
  const { isFetchinging, data } = useFetch<IUser>('users');
  React.useEffect(() => {
    console.log(data);

    const states: GlobalState = {
      users: data,
      isSearch: false,
      isFinded: false,
    };

    setGlobalState(states);
  }, [data]);

  return (
    <Container>
      <GlobalContext.Provider value={globalState}>
        <Header />
        <UsersList />
      </GlobalContext.Provider>
    </Container>
  );
}

export default App;
