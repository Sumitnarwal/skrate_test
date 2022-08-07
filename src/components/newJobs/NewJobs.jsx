


import React from 'react'
import { BiImages } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import "./NewJobs.css"
const NewJobs = ({ detail }) => {

    return (
        <div className='jobdiv'>
            <p>New Jobs</p>
            {detail?.job_postings?.map((el) => (
                <div>
                    <BiImages />
                    <div>
                        <span>{el.role}</span>
                        <span>{el.organization_name}</span>
                        <span>{el.location}</span>

                    </div>
                    <BsArrowRight/>
                </div>
            ))}

        </div>
    )
}

export default NewJobs
