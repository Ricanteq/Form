/*import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


interface UserFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const UserForm: React.FC = () => {
  const initialValues: UserFormValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const handleSubmit = (values: UserFormValues) => {
    console.log(values);
    // You can perform further actions with the form values here
  };

  return (
    <div>
      <h1>User Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;*/

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './userform.css'; // Import custom CSS file for additional styling

interface UserFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const UserForm: React.FC = () => {
  const initialValues: UserFormValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const handleSubmit = (values: UserFormValues) => {
    console.log(values);
    // You can perform further actions with the form values here
  };

  return (
    <div className="user-form-container">
      <h1>User Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" className="form-control" />
            <ErrorMessage name="firstName" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" className="form-control" />
            <ErrorMessage name="lastName" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="text" id="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;

