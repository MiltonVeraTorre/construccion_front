"use client";

import React, { useState } from 'react'

// RFC to add or remove users
const UserModifyMenu: React.FC = () => {
  // Set the state to add or remove the users
  const [mode, setMode] = useState<string>("update");

  // Body received from json body
  const [apiResponse, setApiResponse] = useState<string>('');

  // Logic when adding user
  const addUser = () => {
    setApiResponse(`${usernameInputValue} updated`);
  };

  // Logic when removing user
  const removeUser = () => {
    setApiResponse(`${usernameInputValue} deleted`);
  };

  // Username input value
  const [usernameInputValue, setUsernameInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameInputValue(e.target.value);
  };

  // User has clicked the delete mode button
  if (mode === "delete") {
    return (

      //         <input
      //           type="text"
      //           value={usernameInputValue}
      //           onChange={handleInputChange}
      //           className="border-black border-2 rounded lg:w-[400px]"
      //         />

      <div id='user-delete-container' className='flex flex-col'>
        <div className=''>
          <div className='flex justify-center'>
            <button className='bg-gray-500 rounded-t  mr-2 w-[100px]' onClick={() => setMode("update")}>Update user</button>
            <button className='bg-[#343541] text-gray-300 rounded-t mr-2 w-[100px]'>Delete user</button>
          </div>
        </div>

        <div className="mx-[10px]">

          <div className="bg-[#343541] shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <div className="mb-6">

              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
                User id
              </label>
              <input
                className="focus:outline appearance-none rounded w-full py-2 px-3 text-gray-200 leading-tight bg-[#414250]"
                id="username"
                type="text"
                placeholder="Enter the user to delete"
              />

            </div>

            <div>
              <button
                className="bg-gradient-to-r from-red-600 to-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Delete
              </button>
            </div>
            <div className='text-gray-300 font-bold mt-[20px]'>
              Last response from API
            </div>
            <div className='bg-[#414250] min-h-[100px] mt-[10px] text-gray-400 p-[6px]'>
              Waiting for API . . .
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div id='user-update-container' className='flex flex-col'>
      <div className=''>
        <div className='flex justify-center'>
          <button className='bg-[#343541] rounded-t text-gray-300 mr-2 w-[100px]'>Update user</button>
          <button className='bg-gray-500 rounded-t mr-2 w-[100px]' onClick={() => setMode("delete")}>Delete user</button>
        </div>
      </div>

      <div className=" mx-[10px]">

        <div className="bg-[#343541] shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <div className="mb-6">

            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="focus:outline appearance-none rounded w-full py-2 px-3 text-gray-200 leading-tight bg-[#414250]"
              id="username"
              type="text"
              placeholder="Enter the username to update"
            />

            <label className="block text-gray-300 text-sm font-bold mb-2 mt-3" htmlFor="email">
              Email
            </label>
            <input
              className="focus:outline appearance-none rounded w-full py-2 px-3 text-gray-200 leading-tight bg-[#414250]"
              id="email"
              type={"email"}
              placeholder="Enter the username to update"
            />

            <label className="block text-gray-300 text-sm font-bold mb-2 mt-3" htmlFor="password">
              Password
            </label>
            <input
              className="focus:outline appearance-none rounded w-full py-2 px-3 text-gray-200 leading-tight bg-[#414250]"
              id="password"
              type={"text"}
              placeholder="Enter the username to update"
            />

          </div>

          <div>
            <button
              className="bg-gradient-to-r from-orange-300 to-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div className='text-gray-300 font-bold mt-[20px]'>
            Last response from API
          </div>
          <div className='bg-[#414250] min-h-[100px] mt-[10px] text-gray-400 p-[6px]'>
            Waiting for API . . .
          </div>
        </div>
      </div>
    </div>
  )
}

const CoursesModifyMenu: React.FC = () => {
  return (
    <div className=" mx-[10px]">

      <div className="bg-[#343541] shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <h3 className='text-center text-gray-200 font-bold mb-[10px]'>Course update menu</h3>
        <div className="mb-6">

          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
            Course id
          </label>
          <input
            className="focus:outline appearance-none rounded w-full py-2 px-3 text-gray-200 leading-tight bg-[#414250]"
            id="username"
            type="text"
            placeholder="Enter the username to update"
          />

          <label className="block text-gray-300 text-sm font-bold mb-2 mt-3" htmlFor="email">
            New course name
          </label>
          <input
            className="focus:outline appearance-none rounded w-full py-2 px-3 text-gray-200 leading-tight bg-[#414250]"
            id="email"
            type={"email"}
            placeholder="Enter the username to update"
          />

        </div>

        <div>
          <button
            className="bg-gradient-to-r from-orange-300 to-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className='text-gray-300 font-bold mt-[20px]'>
          Last response from API
        </div>
        <div className='bg-[#414250] min-h-[100px] mt-[10px] text-gray-400 p-[6px]'>
          Waiting for API . . .
        </div>
      </div>
    </div>
  )
}

const UpdateUserCourse: React.FC = () => {
  return (
    <div className=" mx-[10px]">

      <div className="bg-[#343541] shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <h3 className='text-center text-gray-200 font-bold mb-[10px]'>Update user course menu</h3>
        <div className="mb-6">

          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
            User id
          </label>
          <input
            className="focus:outline appearance-none rounded w-full py-2 px-3 text-gray-200 leading-tight bg-[#414250]"
            id="username"
            type="text"
            placeholder="Enter the username to update"
          />

          <label className="block text-gray-300 text-sm font-bold mb-2 mt-3" htmlFor="email">
            Course id
          </label>
          <input
            className="focus:outline appearance-none rounded w-full py-2 px-3 text-gray-200 leading-tight bg-[#414250]"
            id="email"
            type={"email"}
            placeholder="Enter the username to update"
          />

          <div className='mt-[10px]'>
            <label htmlFor='user-courses' className='text-gray-200'>Status </label>
            <select name="cars" id="cars" className='rounded bg-[#414250] text-gray-200'>
              <option value="cursado" className='text-gray-200'>Cursado</option>
              <option value="cursando" className='text-gray-200'>Cursando</option>
              <option value="no_cursado" className='text-gray-200'>No cursado</option>
            </select>
          </div>

        </div>

        <div>
          <button
            className="bg-gradient-to-r from-orange-300 to-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className='text-gray-300 font-bold mt-[20px]'>
          Last response from API
        </div>
        <div className='bg-[#414250] min-h-[100px] mt-[10px] text-gray-400 p-[6px]'>
          Waiting for API . . .
        </div>
      </div>
    </div>



  )
}

type AdminProps = {}

const Admin: React.FC = (props: AdminProps) => {
  return (
    <div className='bg-[#202123] h-full w-screen overflow-x-hidden'>
      <div className='text-white text-center font-bold text-[26px]'>
        Ternium Admin
      </div>
      <div className='flex'>

        <div className='bg-gradient-to-r from-orange-300 to-yellow-300 w-full mx-[10px] rounded h-[80px] my-[10px] md:flex-row md:flex md:justify-around md:items-center'>
          <h3 className='text-center md:text-start mt-[10px] md:mt-0'>Total users</h3>
          <p className='text-center md:text-start'>1</p>
        </div>
        <div className='bg-gradient-to-r from-orange-300 to-yellow-300 w-full mr-[10px] rounded h-[80px] my-[10px] md:flex-row md:flex md:justify-around md:items-center'>
          <h3 className='text-center md:text-start mt-[10px] md:mt-0'>Total courses</h3>
          <p className='text-center md:text-start'>1</p>
        </div>

      </div>

      <div className='lg:flex lg:flex-row'>
        <div className='lg:w-1/2'>
          <UserModifyMenu />
        </div>
        <div className='flex flex-col lg:w-1/2'>
          <CoursesModifyMenu />
          <UpdateUserCourse />
        </div>
      </div>

    </div>
  )
}

export default Admin