import React, { useContext } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import LibraryContext from '../context/LibraryContext';

const BookCard = styled(Card)`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 100%;
`;

const MainPage = () => {
  const { state } = useContext(LibraryContext);

  return (
    <div className="container mt-5">
      <h2>Library Books</h2>
      <Row className="mt-3">
        {state.books.map((book) => (
          <Col key={book.id} md={4} lg={3}>
            <BookCard>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <strong>Author:</strong> {book.author}
                </Card.Text>
                <Card.Text>
                  <strong>ISBN:</strong> {book.isbn}
                </Card.Text>
                <Card.Text>
                  <strong>Publication Date:</strong> {book.publicationDate}
                </Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </BookCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MainPage;
