import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import LibraryContext from '../context/LibraryContext';

const AuthorForm = ({ author, handleClose }) => {
  const { dispatch } = useContext(LibraryContext);

  const initialValues = {
    name: author ? author.name : '',
    birthDate: author ? author.birthDate : '',
    biography: author ? author.biography : '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    birthDate: Yup.string().required('Required'),
    biography: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    if (author) {
      dispatch({ type: 'UPDATE_AUTHOR', payload: { ...values, id: author.id } });
    } else {
      dispatch({ type: 'ADD_AUTHOR', payload: { ...values, id: Date.now() } });
    }
    handleClose();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className="form-control" />
          <ErrorMessage name="name" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Birth Date</label>
          <Field name="birthDate" type="date" className="form-control" />
          <ErrorMessage name="birthDate" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label htmlFor="biography">Biography</label>
          <Field name="biography" as="textarea" className="form-control" />
          <ErrorMessage name="biography" component="div" className="text-danger" />
        </div>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
