import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import LibraryContext from '../context/LibraryContext';

const BookForm = ({ book, handleClose }) => {
  const { dispatch } = useContext(LibraryContext);

  const initialValues = {
    title: book ? book.title : '',
    author: book ? book.author : '',
    isbn: book ? book.isbn : '',
    publicationDate: book ? book.publicationDate : '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    if (book) {
      dispatch({ type: 'UPDATE_BOOK', payload: { ...values, id: book.id } });
    } else {
      dispatch({ type: 'ADD_BOOK', payload: { ...values, id: Date.now() } });
    }
    handleClose();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field name="title" type="text" className="form-control" />
          <ErrorMessage name="title" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <Field name="author" type="text" className="form-control" />
          <ErrorMessage name="author" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label htmlFor="isbn">ISBN</label>
          <Field name="isbn" type="text" className="form-control" />
          <ErrorMessage name="isbn" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label htmlFor="publicationDate">Publication Date</label>
          <Field name="publicationDate" type="date" className="form-control" />
          <ErrorMessage name="publicationDate" component="div" className="text-danger" />
        </div>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </Formik>
  );
};

export default BookForm;
