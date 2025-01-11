import React from 'react';
import { Divider, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <React.Fragment>
                <ListItemButton component={Link} to="/">
                    <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton component={Link} to="/Admin/classes">
                    <ListItemText primary="Classes" />
                </ListItemButton>

                <ListItemButton component={Link} to="/Admin/subjects">
                    <ListItemText primary="Subjects" />
                </ListItemButton>

                <ListItemButton component={Link} to="/Admin/teachers">
                    <ListItemText primary="Teachers" />
                </ListItemButton>

                <ListItemButton component={Link} to="/Admin/students">
                    <ListItemText primary="Students" />
                </ListItemButton>

                <ListItemButton component={Link} to="/Admin/notices">
                    <ListItemText primary="Notices" />
                </ListItemButton>

                <ListItemButton component={Link} to="/Admin/complains">
                    <ListItemText primary="Complains" />
                </ListItemButton>
            </React.Fragment>

            <Divider sx={{ my: 1 }} />

            <React.Fragment>
                <ListSubheader component="div" inset>
                    User
                </ListSubheader>

                <ListItemButton component={Link} to="/Admin/profile">
                    <ListItemText primary="Profile" />
                </ListItemButton>

                <ListItemButton onClick={() => navigate('/logout')}>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </React.Fragment>
        </>
    );
};

export default AdminDashboard;




