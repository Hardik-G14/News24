import React, { useRef, useState } from 'react'
import "./Header.scss";
import { Box, IconButton, TextField, Typography } from '@mui/material';
import logo from "../../assets/logo.jpg";
import { Link } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import { InputBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [val, setVal] = useState("");
    const navigate = useNavigate();

    console.log(val);
    const inputHandler = (e) => {
        setVal(e.target.value);
    }

    return (
        <Box sx={{
            display: "flex",
            justifyContent: 'space-between',
            alignItems: "center",
            backgroundColor: "#e3e3e3",
            padding: "15px 0",
            height: "70px"
        }}>
            <Box className="logo">
                <Typography variant="h4" color="black" sx={{ cursor: "pointer" }}>News</Typography>
            </Box>
            <Box>
                <ul className='nav'>
                    <Link to={'/exp/business'}>
                        <li>
                            Business
                        </li>
                    </Link>
                    <Link to={'/exp/general'}>
                        <li>
                            General
                        </li>
                    </Link>
                    <Link to={'/exp/health'}>
                        <li>
                            health
                        </li>
                    </Link>
                    <Link to={'/exp/sports'}>
                        <li>
                            sports
                        </li>
                    </Link>
                    <Link to={'/exp/science'}>
                        <li>
                            science
                        </li>
                    </Link>
                </ul>
            </Box>
            <Box display="flex" borderRadius="15px" mr="30px" backgroundColor="grey">
                <InputBase sx={{ ml: 2, flex: 1, width: "300px" }} placeholder='Search News' onChange={inputHandler} />
                <IconButton type="button" sx={{ p: 1 }} onClick={() => { navigate(`/search/${val}`) }}>
                    <Search />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Header