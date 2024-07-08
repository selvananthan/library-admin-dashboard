import React, { useReducer } from 'react';
import LibraryContext from './LibraryContext';
import libraryReducer from './libraryReducer';

const LibraryProvider = ({ children }) => {
  const initialState = {
    books: [
      { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565', publicationDate: '1925' },
      { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780061120084', publicationDate: '1960' },
      { id: 3, title: '1984', author: 'George Orwell', isbn: '9780451524935', publicationDate: '1949' },
    ],
    authors: [
      { id: 1, name: 'F. Scott Fitzgerald', birthDate: '1896-09-24', biography: 'An American novelist and short story writer.' },
      { id: 2, name: 'Harper Lee', birthDate: '1926-04-28', biography: 'An American novelist best known for To Kill a Mockingbird.' },
      { id: 3, name: 'George Orwell', birthDate: '1903-06-25', biography: 'An English novelist, essayist, journalist and critic.' },
    ],
  };

  const [state, dispatch] = useReducer(libraryReducer, initialState);

  return (
    <LibraryContext.Provider value={{ state, dispatch }}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
