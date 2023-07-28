import React, {useState} from "react";

// design
import {
    TextField,
    InputAdornment,
    IconButton,
    OutlinedInput,
    FormControl,
    InputLabel,
    Button,
    FormHelperText,
} from '@mui/material';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";



const Signup = () => {
    // form states
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Password validation
    let hasSixChar = password.length >= 6;
    let hasLowerChar = /(.*[a-z].*)/.test(password);
    let hasUpperChar = /(.*[A-Z].*)/.test(password);
    let hasNumber = /(.*[0-9].*)/.test(password);
    let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);

    return (
        <div className="container my-5 col-10 col-sm-8 col-md-6 col-lg-5">
            <div className="text-center my-5 alert alert-secondary">
                <label htmlFor="" className="h2">
                    Sign Up
                </label>
            </div>
            <div className="form my-2">
                <TextField 
                    size="small" 
                    variant="outlined" 
                    className="form-control" 
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form">
                <TextField 
                    size="small" 
                    variant="outlined" 
                    className="form-control" 
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="div-form my-2">
                <FormControl 
                    variant="outlined" 
                    size="small" 
                    className="form-control"
                >
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput 
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        endAdornment={<InputAdornment>
                            <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? (
                                    <VisibilityIcon />
                                ) : (
                                    <VisibilityOffIcon />
                                )}
                            </IconButton>
                        </InputAdornment>}
                    />
                </FormControl>
                {password && (
                    <div className="ml-1" style={{columns: 2}}>
                        <div>
                            <small 
                                className={
                                    hasSixChar ? "text-success" : "text-danger"
                                }
                            >
                                at least 6 characters
                            </small>
                        </div>
                        <div>
                            <small 
                                className={
                                    hasLowerChar ? "text-success" : "text-danger"
                                }
                            >
                                one lowercase letter
                            </small>
                        </div>
                        <div>
                            <small 
                                className={
                                    hasUpperChar ? "text-success" : "text-danger"
                                }
                            >
                                one uppercase letter
                            </small>
                        </div>
                        <div>
                            <small 
                                className={
                                    hasNumber ? "text-success" : "text-danger"
                                }
                            >
                                one number
                            </small>
                        </div>
                        <div>
                            <small 
                                className={
                                    hasSpecialChar ? "text-success" : "text-danger"
                                }
                            >
                                one special symbol
                            </small>
                        </div>
                    </div>
                    )}
            </div>
            <div className="form my-2">
                <TextField 
                    size="small" 
                    type="password"
                    variant="outlined" 
                    className="form-control" 
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {password && confirmPassword && (
                    <FormHelperText className="my-2">
                    {password === confirmPassword ? <span className="text-success">Password does match</span> : <span className="text-danger">Password does not match</span>}
                    </FormHelperText>
                )}
            </div>
            <div className="text-center mt-4">
                <Button variant="contained" disabled={!username || !email || !password || !confirmPassword || password !== confirmPassword || !hasSixChar || !hasLowerChar || !hasUpperChar || !hasNumber || !hasSpecialChar} >Submit</Button>
            </div>
        </div>
    );
};

export default Signup;