const API_URL = 'http://localhost:3001';

// Register a new user
export const registerUser = async (name, email, password) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
    }
    const data = await response.json();

    // localStorage
    localStorage('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    return data;
;}

// SignIn user
export const signInUser = async (email, password) => {
  console.log('Front end', email, password)
    const response = await fetch(`${API_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    console.log('Response', response)
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'SignIn failed');
    }
    const data = await response.json();

    // localStorage
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    return data;
}

// Get user profile
export const getUserProfile = async (userId) =>{
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/profile/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch user profile');
    }
    const data = await response.json();
    
    return data;
}

// Update entry count
export const updateEntries = async (userId) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${API_URL}/image`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ id: userId }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to update entries');
  }

  return data;
};

// Detect image using Clarifai API
export const detectFaces = async (imageUrl) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${API_URL}/detect-face`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ imageUrl }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to detect faces');
  }

  return data;
};


// Sign Out user
export const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}