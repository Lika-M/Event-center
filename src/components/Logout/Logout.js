import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import {logout} from '../../services/authService.js'
import { AuthContext } from '../../contexts/AuthContext.js';

export const Logout = () => {
    const {deleteUserInfo } = useContext(AuthContext);
    const navigate = useNavigate();

        logout()
            .then(() => {
                deleteUserInfo();
                navigate('/', { replace: true })
            });


    return null;
}