import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function DesignerDashboard(props) {
    const location = useLocation()
    console.log("dd location =", location.state)
    console.log("dd token =", localStorage.getItem("token"))

    const [empId, setEmpId] = useState('')

    useEffect(() => {
        setEmpId(location.state.userName)
    })

    return (
        <>
            <Link to={"authoritydetails"} state={{ role: "designer", userName: location.state.userName, nlStatus: "0" }}>
                Create Newsletter
            </Link>
            <br />
            <Link to={"status"} state={{ role: "designer", userName: location.state.userName  }}>
                Check Status
            </Link>
        </>
    )
}

export default DesignerDashboard;