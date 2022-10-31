import {createContext} from 'react';

  const UserContext = createContext({
    card: 0,
    setCard: () => {},
  });

  export default UserContext;