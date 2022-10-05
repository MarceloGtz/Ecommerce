import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const submit = data => {
    console.log(data);
    axios
      .post(
        'https://ecommerce-api-react.herokuapp.com/api/v1/users/login',
        data
      )
      .then(res => {
        localStorage.setItem('token', res.data.data.token);
        navigate('/');
      })
      .catch(error => {
        if (error.response?.status === 401) {
          alert('Credenciales inválidas');
        }
        console.log(error.response);
      });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(submit)}>
        {/* <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            {...register('firstName')}
            type='text'
            required
            autoFocus
            placeholder='First name'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            {...register('lastName')}
            type='text'
            required
            placeholder='Last name'
          />
        </Form.Group> */}

        {/* <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            {...register('phone')}
            type='text'
            required
            placeholder='Phone number'
          />
        </Form.Group> */}

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register('email')}
            type='email'
            required
            autoFocus
            placeholder='Email address'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register('password')}
            type='password'
            placeholder='Password'
            required
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
