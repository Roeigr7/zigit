import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';

const MenuNavbar = () => {
  const { user } = useSelector((state) => state.login);
  const { logout } = useActions();
  console.log('cs', user);
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>ZIGIT</Navbar.Brand>
      <Nav className='mr-auto'>
        {!user.token && <Nav.Link>Hi Guest</Nav.Link>}
        {user.token && <Nav.Link onClick={() => logout()}>Logout</Nav.Link>}
      </Nav>
    </Navbar>
  );
};

export default MenuNavbar;
