import { useState } from 'react';
import '../App.css';
import {
  Form,
  Card,
  Button,
  Container,
  Spinner,
  Row,
  Col,
} from 'react-bootstrap';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';
import { useHistory } from 'react-router-dom';

export interface ILoginInput {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const history = useHistory();
  const [formInput, setFormInput] = useState<ILoginInput>({
    email: '',
    password: '',
  });

  const { tryLogin } = useActions();
  const { loading, error } = useSelector((state) => state.login);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let fieldName = e.target.name;
    let value = e.target.value;
    setFormInput({ ...formInput, [fieldName]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    tryLogin(formInput, history);
  };
  return (
    <Container className='py-5'>
      <h1 className='text-center py-2'>Login</h1>
      <Row>
        <Col className='d-flex align-center justify-content-center'>
          <Card style={{ width: '100%', padding: '5px' }}>
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name='email'
                    value={formInput.email}
                    onChange={handleChange}
                    size='lg'
                    type='email'
                    placeholder='Enter email'
                  />
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name='password'
                    value={formInput.password}
                    onChange={handleChange}
                    size='lg'
                    type='password'
                    placeholder='Password'
                  />
                </Form.Group>

                {!loading && error && <div>{error}</div>}
                <Button
                  className='login-button'
                  variant='dark'
                  size='lg'
                  type='submit'
                  block
                >
                  {' '}
                  {loading && (
                    <Spinner
                      animation='border'
                      size='sm'
                      role='status'
                      aria-hidden='true'
                    />
                  )}{' '}
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
