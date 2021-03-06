import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AllInternships from '../AllInternships/AllInternships';

let AppliedInternships = [];
const drawerWidth = 260;

const StudentDashboard = (props) => {



    const host = "http://localhost:5000";
    const initialInternships = [];
    const [internships, setinternships] = useState(initialInternships)
    let history = useHistory();

    // Get All Notes
    const GetAllInternships = async () => {
        // API call
        const response = await fetch(`${host}/api/internship/fetchinternships`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            // body: JSON.stringify({title,description, tag})
        });
        const json = await response.json();
        // console.log(json);
        setinternships(json);
    };


    useEffect(() => {
        if (localStorage.getItem('token')) {
            GetAllInternships();
        }
        else {
            history.push('/login');
        }
        //eslint-disable-next-line
    }, [])



    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem>
                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" height="70"></img>
                    <ListItemText />
                </ListItem>
            </List>
            <List>
                {['Name', 'Course', 'Year', 'Drafts'].map((text, index) => (
                    <ListItem key={text}>
                        {/* <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon> */}
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                <ListItem button key={"Home"} onClick={() => {
                    history.push('/');
                }}>
                    <ListItemText primary={"Home"} />
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" Wrap component="div">
                        Dashboard-Student
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography variant="h4" Wrap component="div" textAlign="center">
                    Available Internships
                </Typography>
                {internships.map((internship) => {
                    return <AllInternships key={internship._id} internship={internship} AppliedInternships={AppliedInternships} />
                })}
                <Typography variant="h4" Wrap component="div" textAlign="center">
                    Applied Internships
                </Typography>
            </Box>
        </Box>
    );
}
StudentDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default StudentDashboard