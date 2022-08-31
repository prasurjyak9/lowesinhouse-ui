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
    //console.log("role =", role)

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
                // if (!res["data"]) {
                //     alert("Wrong authentication");
                //     window.location.reload();
                // }
                // else {
                //     alert("Successful authentication")
                //     window.location.reload();
                // }

                let token = res.data["jwt"]
                console.log("token =", token)
                localStorage.setItem("token", token)

                console.log("response =", res)

                navigate("/designer", {token: "ttookkeenn"});

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
                    {/* <Dropdown
                        defaultValue="3"
                    >
                        <Option value="1" onClick={() => setEmpRole("editor")}>Designer</Option>
                        <Option value="2" onClick={() => setEmpRole("reviewer")}>Reviewer</Option>
                        <Option value="3" onClick={() => setEmpRole("reader")}>Reader</Option>
                    </Dropdown> */}
                    <br></br>
                    <center>
                        <Button type="submit" fullWidth elevation>
                            Login
                        </Button>
                    </center>
                </div>
            </form>
        </div>
    )
}
export default LoginForm;