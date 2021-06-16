import { Container, Row, Col } from 'react-bootstrap';
import UserProjects from '../components/UserProjects';
import { useSelector } from '../hooks/useTypedSelector';
import UserDetails from '../components/UserDetails';

const UserInfoPage: React.FC = () => {
  const { user } = useSelector((state) => state.login);

  return (
    <Container className='py-5'>
      <h1 className='text-center py-2'>User Info</h1>
      <Row>
        <Col>
          <UserDetails details={user.details} />
        </Col>
      </Row>
      <Row>
        <Col>
          <UserProjects token={user.token} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfoPage;
