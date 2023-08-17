
import { AccountCircle } from '@mui/icons-material';
import { Button, Card, CardContent, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import './loginstyle.css';
export const Login = () => {
    const navigate=useNavigate()
    const [username, setusername] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    // const [passwordType, setpasswordType] = useState('password');
    const [nameError, setnameError] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLog = ()=>{
        
        navigate('/sidebar',{state:{username}})
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <Card style={{ marginTop: "100px", width: '25%', borderRadius: '10px',backgroundImage:
            "url('../../login.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"  }}>
                    <CardContent>
                        <h2 style={{color:'white'}}>Login</h2>
                        <FormControl sx={{ m: 1, width: '25ch'}} variant="outlined"  className='MuiFormLabel-root MuiInputLabel-root '>
                            <div>
                                <TextField label="UserName"  id="outlined-adornment-username"
                                    onChange={(e) => setusername(e.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end" style={{color:'white'}} >
                                                <AccountCircle fontSize="small" />
                                            </InputAdornment>
                                        ),
                                    }}></TextField>
                            </div>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className='MuiFormLabel-root MuiInputLabel-root '>
                            <InputLabel htmlFor="outlined-adornment-password"   className="MuiInputBase-root MuiOutlinedInput-root">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end" >
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            style={{color:'white'}}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />

                        </FormControl>
                        <div>
                            <Button variant="contained" onClick={handleLog}> Login </Button>&nbsp;
                            {/* <Button onClick={onforget} variant="text">Forget password?</Button> */}
                        </div>




                    </CardContent>

                </Card>
            </div>
            {/* } */}
        </>
    );
}
