import * as React from 'react';
import style from './PostingInternship.css'
import { useState } from 'react';
const PostingInternship = () => {

    const host = "http://localhost:5000";
    const initialInternships = [];
    const [internships, setinternships] = useState(initialInternships)
    // const [notes, setNotes] = useState(initialNote);

    //Add a Internship
    const addInternship = async (jobTitle, description, organizationName, workType, organizationUrl, stipend, skills, duration, experienceRequired) => {
        console.log("adding a internship");
        //API CAll
        const response = await fetch(`${host}/api/internship/addinternship`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWN1bHR5Ijp7ImlkIjoiNjI2YWU5NTQxNTA0NTMwY2NiZDllZGRhIn0sImlhdCI6MTY1MTI0OTczN30.LwKV-UfC04hyqO1pjRTosVDZIRkrm1bB3z-8HethhgQ"
            },
            body: JSON.stringify({ jobTitle, description, organizationName, workType, organizationUrl, stipend, skills, duration, experienceRequired })
        });
        // console.log(auth-token);
        const internship = await response.json();
        console.log(internship);
        setinternships(internships.concat(internship));
    }


    const [internshipform, setinternshipform] = useState({ jobTitle: "", description: "", organizationName: "", workType: "", organizationUrl: "", stipend: 0, skills: [], duration: "", experienceRequired: 0 })



    const handleClick = (e) => {
        e.preventDefault();
        let skillArray = [];
        let skills = document.querySelectorAll('input[type=checkbox]:checked');
        for (let i = 0; i < skills.length; i++) {
            skillArray.push(skills[i].value)
        }
        internshipform.skills = skillArray;
        addInternship(internshipform.jobTitle, internshipform.description, internshipform.organizationName, internshipform.workType, internshipform.organizationUrl, internshipform.stipend, internshipform.skills, internshipform.duration, internshipform.experienceRequired);
        console.log(internshipform);
        // document.getElementsByClassName("skillinput").checked = false;
        // showAlert("Note added successfully", "success");
        setinternshipform({
            jobTitle: "", description: "", organizationName: "", workType: "", organizationUrl: "", stipend: "", skills: [], duration: "", experienceRequired: ""
        });
    };




    const onChange = (e) => {
        setinternshipform({ ...internshipform, [e.target.name]: e.target.value });
    };



    return (
        <section className="vh-100 gradient-custom" style={style}>
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{ "borderRadius": "15px" }}>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Enter Details of Internship</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="organizationName" name="organizationName" value={internshipform.organizationName} className="form-control form-control-lg" onChange={onChange} />
                                                <label className="form-label" htmlFor="organizationName">Organization Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="organizationUrl" name="organizationUrl" value={internshipform.organizationUrl} className="form-control form-control-lg" onChange={onChange} />
                                                <label className="form-label" htmlFor="organizationUrl">Organization URL</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="jobTitle" name="jobTitle" value={internshipform.jobTitle} className="form-control form-control-lg" onChange={onChange} />
                                                <label className="form-label" htmlFor="jobTitle">Job Title</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="description" name="description" value={internshipform.description} className="form-control form-control-lg" onChange={onChange} />
                                                <label className="form-label" htmlFor="description">Job Description</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4 d-flex align-items-center">
                                            <select className="select form-control-lg" id="workType" name="workType" value={internshipform.workType} onChange={onChange}>
                                                <option value="Remote">Remote</option>
                                                <option value="Online">Online</option>
                                            </select>
                                            <label className="form-label mx-2 select-label" htmlFor="workType" >Work Type</label>
                                        </div>
                                        <div className="col-md-6 mb-4 d-flex align-items-center">
                                            <div className="form-outline datepicker w-100">
                                                <input type="number" className="form-control form-control-lg" id="stipend" name="stipend"
                                                    value={internshipform.stipend} onChange={onChange} />
                                                <label htmlFor="stipend" className="form-label">PayRole (&#8377;)</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4 d-flex align-items-center">
                                            <div className="form-outline datepicker w-100">
                                                <input type="number" className="form-control form-control-lg" id="duration" name="duration" value={internshipform.duration} onChange={onChange} />
                                                <label htmlFor="duration" className="form-label">Duration(Months)</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4 d-flex align-items-center">
                                            <div className="form-outline datepicker w-100">
                                                <input type="number" className="form-control form-control-lg" id="experienceRequired" name="experienceRequired" value={internshipform.experienceRequired} onChange={onChange} />
                                                <label htmlFor="experienceRequired" className="form-label">Experience Required</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <h5 className="mb-2 pb-1">Skills Required:</h5>
                                            <ul className="ks-cboxtags">
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="one" value="HTML" />
                                                    <label htmlFor="one">HTML</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="two" value="CSS" />
                                                    <label htmlFor="two">CSS</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="three" value="JavaScript" />
                                                    <label htmlFor="three">JavaScript</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="four" value="ReactJs" />
                                                    <label htmlFor="four">ReactJs</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="five" value="VueJs" />
                                                    <label htmlFor="five">VueJs</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="six" value="Angular" />
                                                    <label htmlFor="six">Angular</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="seven" value="Python" />
                                                    <label htmlFor="seven">Python</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="eight" value="C" />
                                                    <label htmlFor="eight">C</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="nine" value="C++" />
                                                    <label htmlFor="nine">C++</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="ten" value="C#" />
                                                    <label htmlFor="ten">C#</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="eleven" value="MySQL" />
                                                    <label htmlFor="eleven">MySQL</label>
                                                </li>
                                                <li className="mx-1">
                                                    <input type="checkbox" className="skillinput" id="twelve" value="Java" />
                                                    <label htmlFor="twelve">Java</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="thirteen" value="Rust" />
                                                    <label htmlFor="thirteen">Rust</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="forteen" value="Kotlin" />
                                                    <label htmlFor="forteen">Kotlin</label>
                                                </li>
                                                <li className="mx-1">
                                                    <input type="checkbox" className="skillinput" id="fifteen" value="Swift" />
                                                    <label htmlFor="fifteen">Swift</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="sixteen" value="PHP" />
                                                    <label htmlFor="sixteen">PHP</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="seventeen" value="Ruby" />
                                                    <label htmlFor="seventeen">Ruby</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="eighteen" value="TypeScript" />
                                                    <label htmlFor="eighteen">TypeScript</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="nineteen" value="Dart" />
                                                    <label htmlFor="nineteen">Dart</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="twenty" value="Perl" />
                                                    <label htmlFor="twenty">Perl</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="twentyone" value="Machine Learning" />
                                                    <label htmlFor="twentyone">Machine Learning</label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="skillinput" id="twentytwo" value="Artificial Intelligence" />
                                                    <label htmlFor="twentytwo">Artificial Intelligence</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <button className="btn btn-primary btn-lg" type="submit" onClick={handleClick}>Post</button>
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