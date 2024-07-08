import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FrontPageContainer, BookCard, FrontPageHeader } from '../styles/styles';
import LibraryContext from '../context/LibraryContext';

const FrontPage = () => {
  const { state } = useContext(LibraryContext);

  return (
    <FrontPageContainer>
      <FrontPageHeader>Library Management System</FrontPageHeader>
      <Row>
        {state.books.map((book) => (
          <Col key={book.id} md={4}>
            <BookCard>
              <div>
                <h3>{book.title}</h3>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>ISBN:</strong> {book.isbn}</p>
                <p><strong>Publication Date:</strong> {book.publicationDate}</p>
              </div>
              <div className="actions">
                <button>View Details</button>
              </div>
            </BookCard>
          </Col>
        ))}
      </Row>
    </FrontPageContainer>
  );
};

export default FrontPage;
