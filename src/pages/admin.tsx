"use client";

import React, { useState } from 'react'

// RFC to add or remove users
const UserModify: React.FC = () => {
  // Set the state to add or remove the users
  const [mode, setMode] = useState<string>("add");

  // Body received from json body
  const [apiResponse, setApiResponse] = useState<string>('');

  // Logic when adding user
  const addUser = () => {
    setApiResponse(`${usernameInputValue} added`);
  };

  // Logic when removing user
  const removeUser = () => {
    setApiResponse(`${usernameInputValue} removed`);
  };

  // Username input value
  const [usernameInputValue, setUsernameInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameInputValue(e.target.value);
  };

  if (mode === "remove") {
    return (
      <div id='crud-container' className=' mt-[40px]'>
        <div>
          <div className='flex justify-center max-w-[600px]'>
            <button onClick={() => setMode("add")} className="mx-[10px] bg-gray-200 rounded-t">Add User</button>
            <button onClick={() => setMode("remove")} className="mx-[10px] bg-gray-400 rounded-t">Remove User</button>
          </div>
          <div className='bg-gray-400 rounded max-w-[600px]'>
            <div className='pt-[20px] pl-[4px]'>
              <label>Username </label>
              <input
                type="text"
                value={usernameInputValue}
                onChange={handleInputChange}
                className="border-black border-2 rounded lg:w-[400px]"
              />
              <button
                className='ml-[4px] bg-gray-600 rounded'

                onClick={() => removeUser()} >remove</button>
            </div>

            <div>
              API response:
              {apiResponse}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div id='crud-container' className=' mt-[40px]'>
      <div>
        <div className='flex justify-center max-w-[600px]'>
          <button onClick={() => setMode("add")} className="mx-[10px] bg-gray-400 rounded-t">Add User</button>
          <button onClick={() => setMode("remove")} className="mx-[10px] bg-gray-200 rounded-t">Remove User</button>
        </div>
        <div className='bg-gray-400 rounded max-w-[600px]'>
          <div className='pt-[20px] pl-[4px]'>
            <label>Username </label>
            <input
              type="text"
              value={usernameInputValue}
              onChange={handleInputChange}
              className="border-black border-2 rounded lg:w-[400px]"
            />
            <button
              className='ml-[4px] bg-gray-600 rounded'

              onClick={() => addUser()} >add</button>
          </div>

          <div>
            Last API response:
            {apiResponse}
          </div>
        </div>
      </div>
    </div>
  )
}

type AdminProps = {}

const Admin: React.FC = (props: AdminProps) => {
  return (
    <div className='p-[20px]'>
      <div>
        Ternium Admin
      </div>
      <div>
        Barras de los cursos
      </div>
      <div>
        Menu 
        <UserModify />
      </div>
    </div>
  )
}

export default Admin