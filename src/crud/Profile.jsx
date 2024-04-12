import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch the JSON data file
        fetch('/register.json')
            .then(response => response.json())
            .then(data => {
                // Find the user with id 1 (assuming it's the logged-in user)
                const loggedInUser = data.registeruser.find(user => user.id === '1');
                setUser(loggedInUser);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <main>
            <h1>Profile</h1>
            {user ? (
                <div>
                    <div>
                        <strong>Email:</strong> {user.email}
                    </div>
                    <div>
                        <strong>Profile Picture:</strong>{' '}
                        <img src={user.prof_pic} alt="Profile" />
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </main>
    );
};

export default Profile;
