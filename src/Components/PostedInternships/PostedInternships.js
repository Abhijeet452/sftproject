import React from 'react'

const PostedInternships = (props) => {
    const { internship } = props
    // console.log(internship.organizationName);
    return (
        <div className="card container my-3">
            <div className="card-header d-flex justify-content-between">
                <h5 className="mx-3"><strong>{internship.organizationName}</strong></h5>
                <a href={internship.organizationUrl} target="_blank" rel="noopener noreferrer" className="mx-3"><strong>{internship.organizationUrl}</strong></a>
            </div>
            <div className="card-body d-flex justify-content-between">
                <div>
                    <h5 className="card-title">{internship.jobTitle}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="google.com" rel="nofollow" className="btn btn-primary">Go somewhere</a>
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
    )
}

export default PostedInternships