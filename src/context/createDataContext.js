import React, {useReducer} from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions

    const boundActions = {};
    for (let index in actions) {
      boundActions[index] = actions[index](dispatch);
    }

    return (
      <Context.Provider value={{state: state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };
  return {Context, Provider};
};
