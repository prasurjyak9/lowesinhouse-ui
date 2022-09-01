import React, { useState } from "react";
import { Button } from '@backyard/react'
import { Typography } from '@backyard/react'
import { TextField } from '@backyard/react'
import { Dropdown } from '@backyard/react'
import { Option } from '@backyard/react'
import { Password } from '@backyard/react'
import axios from "axios";
import Alert from '@backyard/react/Alert'
import { useNavigate, useLocation } from "react-router-dom";

function AuthorityDetailsForm(props) {
    const location = useLocation()
    const navigate = useNavigate()

    const [reviewerId, setReviewerId] = useState('')
    const [approverId, setApproverId] = useState('')

    function handleReviewerIdChange(e) {
        setReviewerId(e.target.value)
    }

    function handleApproverIdChange(e) {
        setApproverId(e.target.value)
    }

    function handleSubmit(e) {
        navigate("/designer/authoritydetails/design", { state: { reviewerId: reviewerId, approverId: approverId, userName: location.state.userName } });
    }

    return (
        <form data-testid="login-form" className="login page" onSubmit={handleSubmit}>
        <div className="form-inner">
            <Typography variant="body_1">
                ReviewerId
            </Typography>
            <div className="form-group">
                <TextField type="text" maxLength={10} placeholder="Enter Reviewer Id" size="medium" onChange={e => setReviewerId(e.target.value)} />
            </div>
            <Typography variant="body_1">
                ApproverId
            </Typography>
            <div className="form-group">
                <TextField type="text" maxLength={10} placeholder="Enter Approver Id" size="medium" onChange={e => setApproverId(e.target.value)} />
            </div>

            <br></br>
            <br></br>
            <center>
                <Button type="submit" fullWidth elevation>
                    Submit Authority Details
                </Button>
            </center>
        </div>
    </form>
)
}

export default AuthorityDetailsForm;
