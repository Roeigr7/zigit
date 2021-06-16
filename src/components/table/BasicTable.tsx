import React from 'react';

import { Table } from 'react-bootstrap';
import { useSelector } from '../../hooks/useTypedSelector';
interface Props {}

const BasicTable: React.FC = () => {
  const { user } = useSelector<any>((state) => state.login);
  console.log('c', user);

  const renderUserDetails = () => {
    return (
      <tr>
        <td>name</td>
        <td>Team</td>
        <td>joined At</td>
      </tr>
    );
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>{user && user.details ? user.details.name : null}</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>{renderUserDetails()}</tbody>
    </Table>
  );
};

export default BasicTable;
