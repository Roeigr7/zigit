import React from 'react';
import { Table } from 'react-bootstrap';

interface Props {
  details: any;
}

const UserDetails: React.FC<Props> = ({ details }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Team</th>
          <th>Joined At</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='d-flex justify-content-center'>
            <img
              style={{ width: '50px', height: '50px', margin: '0 auto' }}
              src={details.avatar}
              alt={details.avatar}
            />
          </td>
          <td>{details.name}</td>
          <td>{details.Team}</td>
          <td>{details.joinedAt}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UserDetails;
