import React from 'react';
import { Person } from '../../types';
import { PeopleTableRow } from '../PeopleTableRow';

type Props = {
  people: Person[];
};

export const PeopleTable: React.FC<Props> = ({ people }) => {
  if (!people.length) {
    return <p data-cy="noPeopleMessage">There are no people on the server</p>;
  }

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => (
          <PeopleTableRow person={person} people={people} key={person.slug} />
        ))}
      </tbody>
    </table>
  );
};