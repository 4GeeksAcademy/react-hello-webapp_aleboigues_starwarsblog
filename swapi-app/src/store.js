import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  favorites: [],
  readLater: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter(fav => fav.uid !== action.payload.uid) };
    case 'ADD_READ_LATER':
      return { ...state, readLater: [...state.readLater, action.payload] };
    case 'REMOVE_READ_LATER':
      return { ...state, readLater: state.readLater.filter(item => item.uid !== action.payload.uid) };
    default:
      return state;
  }
};

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
