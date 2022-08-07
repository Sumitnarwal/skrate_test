
import axios from "axios"

import React, { useState } from 'react'

function OverView({ detail }) {

    return (
        <div>
            <p>OverView</p>
            <div>
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
            <p>Upcoming Sessions</p>
            <div>
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