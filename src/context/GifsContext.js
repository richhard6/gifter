import React, { useState } from 'react';

const Context = React.createContext({});

export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);
  const [counter, setCounter] = useState(0);

  return (
    <Context.Provider value={{ gifs, setGifs, counter, setCounter }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
