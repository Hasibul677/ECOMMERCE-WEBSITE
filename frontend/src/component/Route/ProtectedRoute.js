import React from 'react';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({component: component, ... rest}) => {
    const { loading, isAuthenticated } = useSelector((state) => state.user);
    return (
        <div>
            
        </div>
    );
};

export default ProtectedRoute;