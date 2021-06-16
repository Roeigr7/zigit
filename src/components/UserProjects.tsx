import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import '../App.css';
interface Props {
  token?: string;
}

const UserProjects: React.FC<Props> = ({ token }) => {
  const [projects, setProjects] = useState<Object[]>([]);
  useEffect(() => {
    const fetchProjectsList = async () => {
      const { data } = await axios.get(
        'https://private-052d6-testapi4528.apiary-mock.com/info',
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      setProjects(data);
    };
    fetchProjectsList();
  });

  return (
    <Table size='sm' bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>name</th>
          <th>score</th>
          <th>durationInDays</th>
          <th>bugsCount</th>
          <th>madeDadeline</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((proj: any, idx: number) => (
          <tr
            className={
              proj.score < 70
                ? 'lessThen70'
                : proj.score > 90
                ? 'greaterThen90'
                : ''
            }
            key={idx}
          >
            <td>{idx}</td>
            <td>{proj?.id}</td>
            <td>{proj.name}</td>
            <td>{proj.score}</td>
            <td>{proj.durationInDays}</td>
            <td>{proj.bugsCount}</td>
            <td>{proj.madeDadeline ? 'true' : 'false'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserProjects;
