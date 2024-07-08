import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LibraryContext = createContext();

const initialState = {
  books: [
    { id: uuidv4(), title: 'Book 1', author: 'Author 1', isbn: '1234567890', publicationDate: '2023-01-01' },
    { id: uuidv4(), title: 'Book 2', author: 'Author 2', isbn: '0987654321', publicationDate: '2023-02-01' },
    { id: uuidv4(), title: 'Book 3', author: 'Author 3', isbn: '1122334455', publicationDate: '2023-03-01' },
  ],
  authors: [
    { id: uuidv4(), name: 'Author 1', birthDate: '1980-01-01', biography: 'Biography of Author 1' },
    { id: uuidv4(), name: 'Author 2', birthDate: '1985-02-01', biography: 'Biography of Author 2' },
    { id: uuidv4(), name: 'Author 3', birthDate: '1990-03-01', biography: 'Biography of Author 3' },
  ],
};

const libraryReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, { id: uuidv4(), ...action.payload }],
      };
    case 'EDIT_BOOK':
      return {
        ...state,
        books: state.books.map((book) => (book.id === action.payload.id ? action.payload : book)),
      };
    case 'DELETE_BOOK':
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case 'ADD_AUTHOR':
      return {
        ...state,
        authors: [...state.authors, { id: uuidv4(), ...action.payload }],
      };
    case 'EDIT_AUTHOR':
      return {
        ...state,
        authors: state.authors.map((author) => (author.id === action.payload.id ? action.payload : author)),
      };
    case 'DELETE_AUTHOR':
      return {
        ...state,
        authors: state.authors.filter((author) => author.id !== action.payload),
      };
    default:
      return state;
  }
};

const LibraryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(libraryReducer, initialState);

  return (
    <LibraryContext.Provider value={{ state, dispatch }}>
      {children}
    </LibraryContext.Provider>
  );
};

export { LibraryProvider, LibraryContext as default };
