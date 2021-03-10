import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
    manofkimchi: {
        name: 'KJT',
        description: 'A man like Kimchi',
    },
    gd: {
        name: 'SJG',
        description: 'Dick Hair',
    },
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>Lee jong beom</div>;
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample></WithRouterSample>
        </div>
    );
};

export default Profile;
