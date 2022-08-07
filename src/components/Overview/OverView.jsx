
import axios from "axios"
import "./OverView.css"
import React, { useState } from 'react'

function OverView({ detail }) {

    return (
        <div className="overviwtopdiv">
            <p>OverView</p>
            <div className="overViewdiv">
                <div>
                    <span>Profile Views</span>
                    <span>{detail?.dashboard_stats?.profile_views}</span>
                </div>
                <div>
                    <span>Mentorship Sessions</span>
                    <span>{detail?.dashboard_stats?.mentorship_sessions}</span>
                </div>
                <div>
                    <span>Jobs Applied</span>
                    <span>{detail?.dashboard_stats?.jobs_applied}</span>
                </div>
                <div>
                    <span>Skills Verified</span>
                    <span>{detail?.dashboard_stats?.skills_verified}</span>
                </div>
            </div>
            <div className="upcomingSession">
                <p>Upcoming Sessions</p>
                {detail?.upcoming_sessions?.map((el) => (
                    <div>
                        <span>{el.mentor_name}</span>
                        <span>{el.timings}</span>
                        <span>{el.date}</span>
                        <span>{el.session_type}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OverView