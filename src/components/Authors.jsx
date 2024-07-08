import React, { useContext, useState } from 'react';
import { Modal, Row, Col, Button as BootstrapButton } from 'react-bootstrap';
import { Container, DashboardHeader, Card } from '../styles/styles';
import LibraryContext from '../context/LibraryContext';
import AuthorForm from './AuthorForm';

const Authors = () => {
  const { state, dispatch } = useContext(LibraryContext);
  const [show, setShow] = useState(false);
  const [currentAuthor, setCurrentAuthor] = useState(null);

  const handleShow = (author = null) => {
    setCurrentAuthor(author);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_AUTHOR', payload: id });
  };

  return (
    <Container>
      <DashboardHeader>
        <h1>Manage Authors</h1>
        <BootstrapButton onClick={() => handleShow()}>Add Author</BootstrapButton>
      </DashboardHeader>
      <Row>
        {state.authors.map((author) => (
          <Col key={author.id} md={4} lg={3}>
            <Card>
              <div>
                <h3>{author.name}</h3>
                <p><strong>Birth Date:</strong> {author.birthDate}</p>
                <p><strong>Biography:</strong> {author.biography}</p>
              </div>
              <div className="actions">
                <BootstrapButton variant="warning" onClick={() => handleShow(author)}>Edit</BootstrapButton>
                <BootstrapButton className="delete" onClick={() => handleDelete(author.id)}>Delete</BootstrapButton>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currentAuthor ? 'Edit Author' : 'Add Author'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AuthorForm author={currentAuthor} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Authors;
