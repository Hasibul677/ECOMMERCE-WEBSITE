import React from 'react';
import { useSelector } from 'react-redux';
import MetaDeta from '../layout/MetaDeta';

const Profile = () => {
    const { loading, user} = useSelector((state) => state.user);
    return (
        <div>
            <MetaDeta title={`${user.name}'s Profile`}/>
        </div>
    );
};

export default Profile;