import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import style from './PostingInternship.css'
import { useState } from 'react';
const PostingInternship = () => {

    const host = "http://localhost:5000";
    const initialNote = [];
    const [notes, setNotes] = useState(initialNote);





    return (
        <section className="vh-100 gradient-custom" style={style}>
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{ "border-radius": "15px" }}>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Enter Details of Internship</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="orgname" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="orgname">Organization Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="orgurl" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="orgurl">Organization URL</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="title" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="title">Job Title</label>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="lastName" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="lastName">Last Name</label>
                                            </div>

                                        </div> */}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="description" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="description">Job Description</label>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="lastName" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="lastName">Last Name</label>
                                            </div>

                                        </div> */}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4 d-flex align-items-center">
                                            <select className="select form-control-lg">
                                                <option value="1">Remote</option>
                                                <option value="2">Online</option>
                                                {/* <option value="3">Subject 2</option> */}
                                                {/* <option value="4">Subject 3</option> */}
                                            </select>
                                            <label className="form-label mx-2 select-label">Work Type</label>
                                        </div>
                                        <div className="col-md-6 mb-4 d-flex align-items-center">
                                            <div className="form-outline datepicker w-100">
                                                <input type="number" className="form-control form-control-lg" id="stipend" placeholder="" />
                                                <label htmlFor="stipend" className="form-label">PayRole (&#8377;)</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4 d-flex align-items-center">
                                            <div className="form-outline datepicker w-100">
                                                <input type="number" className="form-control form-control-lg" id="duration" placeholder="" />
                                                <label htmlFor="duration" className="form-label">Duration(Months)</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4 d-flex align-items-center">
                                            <div className="form-outline datepicker w-100">
                                                <input type="number" className="form-control form-control-lg" id="experiencerequired" placeholder="" />
                                                <label htmlFor="experiencerequired" className="form-label">Experience Required</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-4">

                                            <h5 className="mb-2 pb-1">Skills Required</h5>
                                            <FormControlLabel control={<Checkbox />} label="HTML" />
                                            <FormControlLabel control={<Checkbox />} label="CSS" />
                                            <FormControlLabel control={<Checkbox />} label="JavaScript" />
                                            <FormControlLabel control={<Checkbox />} label="ReactJs" />
                                            <FormControlLabel control={<Checkbox />} label="Vue" />
                                            <FormControlLabel control={<Checkbox />} label="Angular" />
                                            <FormControlLabel control={<Checkbox />} label="Python" />
                                            <FormControlLabel control={<Checkbox />} label="C" />
                                            <FormControlLabel control={<Checkbox />} label="C++" />
                                            <FormControlLabel control={<Checkbox />} label="C#" />
                                            <FormControlLabel control={<Checkbox />} label="SQL" />
                                            <FormControlLabel control={<Checkbox />} label="Java" />
                                            <FormControlLabel control={<Checkbox />} label="Rust" />
                                            <FormControlLabel control={<Checkbox />} label="Kotlin" />
                                            <FormControlLabel control={<Checkbox />} label="Swift" />
                                            <FormControlLabel control={<Checkbox />} label="PHP" />
                                            <FormControlLabel control={<Checkbox />} label="Ruby" />
                                            <FormControlLabel control={<Checkbox />} label="TypeScript" />
                                            <FormControlLabel control={<Checkbox />} label="Dart" />
                                            <FormControlLabel control={<Checkbox />} label="Perl" />
                                            <FormControlLabel control={<Checkbox />} label="ML" />
                                            <FormControlLabel control={<Checkbox />} label="AI" />
                                            <FormControlLabel control={<Checkbox />} label="Figma" />
                                        </div>
                                        {/* <div className="col-md-12 mb-4">

                                            <div className="form-check form-check-inline" multiple>
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                    value="option1" checked />
                                                <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                    value="option2" />
                                                <label className="form-check-label" htmlFor="maleGender">Male</label>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                    value="option3" />
                                                <label className="form-check-label" htmlFor="otherGender">Other</label>
                                            </div>

                                        </div> */}
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <input type="email" id="emailAddress" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="emailAddress">Email</label>
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                            </div>

                                        </div>
                                    </div> */}

                                    {/* <div className="row">
                                        <div className="col-12">
                                            <select className="select form-control-lg">
                                                <option value="1" disabled>Choose option</option>
                                                <option value="2">Subject 1</option>
                                                <option value="3">Subject 2</option>
                                                <option value="4">Subject 3</option>
                                            </select>
                                            <label className="form-label select-label">Choose option</label>
                                        </div>
                                    </div> */}

                                    <div className="pt-2">
                                        <input className="btn btn-primary btn-lg" type="submit" value="Post" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PostingInternship