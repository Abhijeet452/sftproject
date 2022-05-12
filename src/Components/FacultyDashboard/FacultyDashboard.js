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
import PostingInternship from '../PostingInternship/PostingInternship';
import PostedInternships from '../PostedInternships/PostedInternships';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


const drawerWidth = 260;

const FacultyDashboard = (props) => {



    const host = "http://localhost:5000";
    const initialInternships = [];
    const [internships, setinternships] = useState(initialInternships)
    let history = useHistory();



    // Get All Notes
    const GetAllInternships = async () => {
        // API call
        const response = await fetch(`${host}/api/internship/fetchallinternships`, {
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
            history.push('/emplogin');
        }
        //eslint-disable-next-line
    }, [])



    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <Toolbar />
            <Divider />
            <List>
                <ListItem>
                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" height="70"></img>
                    <ListItemText />
                </ListItem>
            </List>
            <List>
                {['Name', 'Company', 'Year', 'Drafts'].map((text, index) => (
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
                        Dashboard-Faculty/Employee
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
                    Post an Internship
                </Typography>
                <PostingInternship />
                <Typography variant="h4" Wrap component="div" textAlign="center">
                    Posted Internships
                </Typography>
                <h3 className="mx-4 text-center">
                    {internships.length === 0 && "No posted internships found"}
                </h3>
                {internships.map((internship) => {
                    return <PostedInternships key={internship._id} internship={internship} />
                })}
            </Box>
        </Box>
    );
}
FacultyDashboard.propTypes = {
    window: PropTypes.func,
};

export default FacultyDashboard