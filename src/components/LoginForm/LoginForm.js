import './LoginForm.css'
import React, { useState } from 'react';
import { Button } from '@backyard/react'
import { Typography } from '@backyard/react'
import { TextField } from '@backyard/react'
import { Dropdown } from '@backyard/react'
import { Option } from '@backyard/react'
import { Password } from '@backyard/react'
import axios from "axios";
import Alert from '@backyard/react/Alert'
import { useLocation, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function LoginForm(props) {
    const [empId, setEId] = useState("");
    const [empPassword, setPassword] = useState("");

    const navigate = useNavigate();

    const location = useLocation()
    const role = location.state.role

    async function handleSubmit(e) {
        console.log("inside handle submit")
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/" + role,
                {
                    "userName": empId,
                    "password": empPassword
                }
            ).then((res) => {
                let token = res.data["jwt"]
                localStorage.setItem("token", token)

                console.log("token made =", localStorage.getItem("token"))
                console.log("response =", res)

                if (role == "designer") {
                    navigate("/designer", { state: { userName: empId } });
                } else {
                    navigate("/approver", { state: { userName: empId } });
                }
            }
            ).catch(err => {
                console.log("err = ", err)
                window.location.reload(false);
            });

            setEId("");
            setPassword("");

        }
        catch (err) {
            alert("Error occured");
        }
    }

    function func(e) {
        console.log("ran")
    }

    return (
        <div>
            <form data-testid="login-form" className="login page" onSubmit={handleSubmit}>
                <div className="form-inner">
                    <center>

                        <h2>Welcome</h2>
                    </center>
                    <Typography variant="body_1">
                        SalesId
                    </Typography>
                    <div className="form-group">
                        <TextField type="text" maxLength={10} placeholder="Enter 7-Digit sale " size="medium" onChange={e => setEId(e.target.value)} />
                    </div>
                    <Password type="text" label="Password" onChange={e => setPassword(e.target.value)} />
                    <br></br>
                    <br></br>
                    <br></br>
                    <center>
                        <Button type="submit" fullWidth elevation>Login</Button>
                    </center>
                </div>
            </form>
        </div>
    )
}
export default LoginForm;