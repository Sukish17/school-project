import React from 'react';
import { Link } from 'react-router-dom';
import {Grid,Box } from '@mui/material';
import styled from 'styled-components';
//mport { LightPurpleButton } from '../components/buttonStyles';
import './home.css'

const Homepage = () => {
    return (
        <div className='bg1'>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src="https://png.pngtree.com/thumb_back/fw800/background/20220920/pngtree-my-preferred-study-buddy-two-youthful-students-collaborating-in-a-classroom-photo-image_48792434.jpg" 
                    alt="students"
                    className='img1' />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to
                            <br />
                            School Management
                            <br />
                            System
                        </StyledTitle>
                       
                        <StyledBox>
                            <StyledLink to="/choose">
                                <button className='b1'>Login</button>
                                    
                                
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <button className='b2'>
                                
                                    Login as Guest</button>
                                
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Homepage;


const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
  background-image:url('https://wallpapers.com/images/featured/sky-mvehfqz6w2ges2dj.jpg');
  width:100%;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  shadow:1px solid #000;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
