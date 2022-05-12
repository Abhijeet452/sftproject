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
import AppliedInternships from './AppliedInternships';
let applied = [];

const AllInternships = (props) => {
    let { internship } = props;


    return (
        <>
            <div className="card container my-3">
                <div className="card-header d-flex justify-content-between">
                    <h5 className="mx-3"><strong>{internship.organizationName}</strong></h5>
                    <a href={internship.organizationUrl} target="_blank" rel="noopener noreferrer" className="mx-3"><strong>{internship.organizationUrl}</strong></a>
                </div>
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <h5 className="card-title">{internship.jobTitle}</h5>
                        <p className="card-text">{internship.description}</p>
                        <button className="btn btn-primary" onClick={() => {
                            applied = applied.concat(internship);
                            console.log(applied);
                        }}>Apply Internship</button>
                        <p className="card-text mt-2"><small><strong className="text-muted">Posted At: {new Date(internship.createdAt).toGMTString().slice(0, -4)}</strong></small></p>
                    </div>
                    <div>
                        <h6 className="card-title"><strong>Skills Required</strong></h6>
                        {internship.skills.map((skill) => {
                            return <button type="button" key={skill} className="btn btn-primary btn-sm mx-1 my-1" disabled>{skill}</button>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllInternships