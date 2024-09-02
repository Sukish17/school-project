import {Grid, Paper } from '@mui/material'
import SeeNotice from '../../components/SeeNotice';
//import Students from "../../assets/img1.png";
//import Classes from "../../assets/img2.png";
//import Teachers from "../../assets/img3.png";
//import Fees from "../../assets/img4.png";
import styled from 'styled-components';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';
import './admin.css'

const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { studentsList } = useSelector((state) => state.student);
    const { sclassesList } = useSelector((state) => state.sclass);
    const { teachersList } = useSelector((state) => state.teacher);

    const { currentUser } = useSelector(state => state.user)

    const adminID = currentUser._id

    useEffect(() => {
        dispatch(getAllStudents(adminID));
        dispatch(getAllSclasses(adminID, "Sclass"));
        dispatch(getAllTeachers(adminID));
    }, [adminID, dispatch]);

    const numberOfStudents = studentsList && studentsList.length;
    const numberOfClasses = sclassesList && sclassesList.length;
    const numberOfTeachers = teachersList && teachersList.length;

    return (
        <>
            <div  className='bg1'>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WCzTuZ9YjUY9i4RD5R14aevv7ZRGtrS4BEXvVxJQvq_0utssB86ChMTfOyNqDwQTYl0&usqp=CAU" 
                            alt="Students"
                            className='student' />
                            <Title>
                                Total Students
                            </Title>
                            <Data start={0} end={numberOfStudents} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src="https://lh4.googleusercontent.com/y21ybStA7qb71YGVr-hzQ63Zqv5t1rhCz9yijCOeYZj1QvLPE7ESdNYP62jcm8nVA3Z7ZbkHJf6Q0d2XCMvFQrZXDwskTEVULY7IkfG5uXMpKp8i_wC2OG7MJ_95K21QgA=w1280"
                            className='student' alt="Classes" />
                            <Title>
                                Total Classes
                            </Title>
                            <Data start={0} end={numberOfClasses} duration={5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src="https://thumbs.dreamstime.com/b/portrait-young-female-teacher-white-portrait-young-female-teacher-white-background-157216197.jpg"
                            className='student'
                            alt="Teachers" />
                            <Title>
                                Total Teachers
                            </Title>
                            <Data start={0} end={numberOfTeachers} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src="https://netto.co.za/wp-content/uploads/2007/08/investment-costs.jpg" className='student' alt="Fees" />
                            <Title>
                                Fees Collection
                            </Title>
                            <Data start={0} end={70000} duration={1.5} prefix="₹" />                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <SeeNotice />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};


const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.25rem;
`;

const Data = styled(CountUp)`
  font-size: calc(1.3rem + .6vw);
  color: green;
`;

export default AdminHomePage