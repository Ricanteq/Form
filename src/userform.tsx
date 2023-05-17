

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './userform.css'; // Import custom CSS file for additional styling

interface UserFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const UserForm: React.FC = () => {
  const initialValues: UserFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values: UserFormValues) => {
    try {
      const response = await axios.post('https://localhost:7124/User', values);
      console.log(response.data); // Optional: Handle the response from the server
      // Perform any additional actions after successful user creation
      console.log('Registration was successful');
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle the error (e.g., show an error message)
      console.log('Registration was not successful');
    }
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
            <Field type="password" id="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;


