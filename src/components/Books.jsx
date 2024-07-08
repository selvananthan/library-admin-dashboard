import React, { useContext } from 'react';
import { Card, Container, DashboardHeader } from '../styles/styles';
import LibraryContext from '../context/LibraryContext';

const Books = () => {
  const { state } = useContext(LibraryContext);

  return (
    <Container>
      <DashboardHeader>
        <h1>Books</h1>
        <button>Add Book</button>
      </DashboardHeader>
      {state.books.map((book) => (
        <Card key={book.id}>
          <div>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Publication Date:</strong> {book.publicationDate}</p>
          </div>
          <div className="actions">
            <button>Edit</button>
            <button className="delete">Delete</button>
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default Books;
