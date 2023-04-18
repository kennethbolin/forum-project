//The base url of the API, can be changed in the .env file
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'


/**
 * Sends a login request to the api for a user with the provided username and password.
 *
 * @async
 * @function
 * @param {Object} data - An object containing the user's login credentials.
 * @param {string} data.username - The user's username.
 * @param {string} data.password - The user's password.
 * @returns {Promise<Object>} - A promise that resolves with the user's data.
 * @throws {Error} - Throws an error if there was an issue with the login request.
 */
// export const login = async (data) => {
  
//   const {
//     username,
//     password
//   } = data

//   const response = await fetch(`${baseUrl}/auth/login`, {
//     method: "POST",
//     headers: new Headers({
//       "Authorization": `Basic ${btoa(`${username}:${password}`)}` //btoa is only deprecated in Node.js not in browser environments!
//     }),
//   })

//   const responseData = await response.json()

//   if (!response.ok) {
//     throw new Error(`Status Code: ${response?.status} - ${responseData?.message}`)
//   }

//   return responseData
// }

/**
 * Sends a registration request to the api for a user with the provided data.
 *
 * @async
 * @function
 * @param {Object} data - An object containing the user's data require to create an account.
 * @param {string} data.username - The user's username
 * @param {string} data.password - The user's password  
 * @param {*} data.[...] - Any additional user data required for account creation
 * @returns {Promise<Object>} - A promise that resolves with the user's data.
 * @throws {Error} - Throws an error if there was an issue with the login request.
 */
// export const register = async(data) => {

//   const response = await fetch(`${baseUrl}/auth/register`, {
//     method: "POST", 
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(data),
//   })

//   if (!response.ok) {
//     throw new Error(response.error)
//   }

//   const responseData = await response.json()

//   return responseData
// }

// export const getUserProfile = async (username) => {

//   console.log(`${baseUrl}/user/${username}`)
//   const response = await fetch(`${baseUrl}/user/${username}`, {
//     method: "GET",
//   })

//   const responseData = await response.json()

//   if (!response.ok) {
//     throw new Error(`Status Code: ${response?.status} - ${responseData?.message}`)
//   }

//   return responseData
// }

// export const getUser = async(token) => {

//   const response = await fetch(`${baseUrl}/user/token`, {
//     method: "GET", 
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//     },
//   })

//   const responseData = await response.json()

//   if (!response.ok) {
//     throw new Error(`Status Code: ${response?.status} - ${responseData?.message}`)
//   }
  
// }

// export const updatePassword = async(token, data) => {

//   const response = await fetch(`${baseUrl}/auth/updatePassword`, {
//     method: "post", 
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//     },
//     body: JSON.stringify(data),
//   })

//   const responseData = await response.json()

//   if (!response.ok) {
//     throw new Error(`Status Code: ${response?.status} - ${responseData?.message}`)
//   }
  
//   return responseData
// }



////getThread, deleteThread, updateThread  for the ThreadCard in './ForumThread'///

export const getThread = async() => {

  const response = await fetch(`${baseUrl}/thread`, {
    method: "GET", 
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const responseData = await response.json()

  if (!response.ok) {
    throw new Error(`Status Code: ${response?.status} - ${responseData?.message}`)
  }

  return responseData

}

export const deleteThread = async (thread_id) => {
  try {
    const response = await fetch(`${baseUrl}/thread/${thread_id}`, {
      method: 'DELETE',
    })
    return await response.json()
  } catch (error) {
    console.log('Error deleting thread:', error)
  }
}



export const updateThread = async (thread_id, updatedThreadData) => {
  try {
    const response = await fetch(`${baseUrl}/thread/${thread_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedThreadData),
    });

    if (!response.ok) {
      throw new Error(`Error updating thread: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error updating thread:', error)
    throw error;
  }
}


//createThread for the PostForm-------------------
export const createThread = async ({ title, subject }) => {
  const response = await fetch(`${baseUrl}/thread`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, subject }),
  })

  if (!response.ok) {
    const responseData = await response.json()
    throw new Error(`Status Code: ${response.status} - ${responseData.message}`)
  }

  return response.json()
};

//////////--'./ThreadComments/index.js'--////////////

export const getComments = async(thread_id) => {

  const response = await fetch(`${baseUrl}/thread/${thread_id}/comments`, {
    method: "GET", 
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseData = await response.json()

  if (!response.ok) {
    throw new Error(`Status Code: ${response?.status} - ${responseData?.message}`)
  }

  return responseData

}


// Update a comment
export const updateComment = async (thread_id, comment_id, updatedComment) => {
  // console.log('updateComment Fetch params:', thread_id, comment_id, updatedComment)
  const response = await fetch(`${baseUrl}/thread/${thread_id}/comment/${comment_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedComment),
  })

  if (!response.ok) {
    throw new Error(`Error updating comment: ${response.statusText}`)
  }

  return await response.json()
}

// Delete a comment
export const deleteComment = async (thread_id, comment_id) => {
  // console.log(thread_id, comment_id)
  const response = await fetch(`${baseUrl}/thread/${thread_id}/comment/${comment_id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Error deleting comment: ${response.statusText}`)
  }
}

export const createComment = async (thread_id, newComment) => {
  console.log('createComment:', thread_id, newComment)
  const response = await fetch(`${baseUrl}/thread/${thread_id}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  })

  if (!response.ok) {
    throw new Error(`Error creating comment: ${response.statusText}`)
  }

  return await response.json()
}