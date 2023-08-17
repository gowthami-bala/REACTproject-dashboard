// Reference: https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/

import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// import axios from 'axios';
import moment from 'moment/moment';
export const WeatherReport = () => {
    const [country, setCountry] = useState('');
    const [data, setData] = useState([]);
    const API_URL = 'https://api.openweathermap.org/data/2.5';
    const API_KEY = '4f8e795dcd6dbf7b9f5276bff095ffc1';

    useEffect(() => {
        // axios.get(`${API_URL}/weather/?q=${country}&units=metric&APPID=${API_KEY}`)
        //   .then((res) => setData(res.data))
        //   .catch((error) => {
        //     console.log(error);
        //     // setloadError(error)
        //   })

        const fetchData = async () => {
            await fetch(`${API_URL}/weather/?q=${country}&units=metric&APPID=${API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }
        fetchData()
    }, [country])

    const handleChange = (e) => {
        console.log(e.target.value);
        setCountry(e.target.value)
    }
    const myStyle = {
        backgroundImage:
            "url('../../weather.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    return (
        <div style={{ width: 250 }}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={country}
                        label="Country"
                        onChange={
                            handleChange}
                    >
                        <MenuItem value="London">London</MenuItem>
                        <MenuItem value="India">India</MenuItem>
                        <MenuItem value="China">China</MenuItem>
                        <MenuItem value="America">America</MenuItem>
                    </Select>
                </FormControl>
            </Box><br></br>
            {/* <input type='text' onChange={handleChange}></input> */}
            {data.name ? <Card style={myStyle}>
                <CardContent>
                    
                    {data.name === 'Innichen' ? <p>Country: India</p> : <p>Country: {data.name}</p>}
                    <p>Humidity: {data.main.humidity} %</p>
                    <p>Temprature: {data.main.temp} &deg;C</p>
                    {/* <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p> */}
                    <p>Description: {data.weather[0].description}</p>
                    <p>Date: {moment().format('LL dddd')}</p>
                </CardContent>
            </Card> :
                <Card style={{ backgroundImage: "paper.gif" }}>
                    <p>select country for weather report</p>
                </Card>

            }
        </div>
    )
}

// api.openweathermap.org/data/2.5/weather?q=INDIA&APPID=62564ba3722acf51bd191c4084de1154