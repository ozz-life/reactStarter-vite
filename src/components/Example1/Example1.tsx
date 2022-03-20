import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ROCKETS, ADD_USER } from '../../gql/example1';
import {
RocketData,
RocketsResult,
UserDetails,
AddUserResponse } from '../../gql/example1';

const Exp1 = () => {


    const { loading, error, data } = useQuery<RocketsResult>(ROCKETS);
    const [name, setName] = useState('');
    
    const [addUser, { data: userData }] = useMutation<
      { insert_users: AddUserResponse }
    >(ADD_USER);
    
    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
      setName(e.target.value);
    }
    
    async function handleOnSubmit(e: React.FormEvent) {
      e.preventDefault();
      await addUser({ variables: { name }});
      setName('');
    }

    return (
        <>
        <div>
          <h1>SpaceX Rockets</h1>
          {loading || !data ? <p>Loading...</p> :
            data.rockets.map(rocket => (
              <div key={rocket.id}>
                <h2><a href={rocket.wikipedia}>{rocket.name}</a></h2>
                <p>{rocket.description}</p>
              </div>
            ))
          }
        </div>
        <div>
          <h1>Users</h1>
          <form onSubmit={handleOnSubmit}>
            <label htmlFor="username">Name: </label>
            <input required name="username" type="text" onChange={handleOnChange} value={name} autoComplete="off"/>
            <button type="submit">Add User</button>
            <p>
              New User ID: {userData && userData.insert_users.returning[0].id}
            </p>
          </form>
        </div>
      </>
    )
}

export default Exp1