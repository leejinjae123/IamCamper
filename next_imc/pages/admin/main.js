import Admin_Sidebar from '../../com/Admin_Sidebar';
import { Box, Container, Grid, Stack } from "@mui/material";
import Admin_Navbar from '../../com/Admin_Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from "@emotion/styled";
import Admin_Footer from '../../com/Admin_Footer';
import Dash_Chart1 from '../../com/Dash_Chart1';
import Dash_Chart2 from '../../com/Dash_Chart2';
import Dash_Chart3 from '../../com/Dash_Chart3';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dash_Chart4 from '../../com/Dash_Chart4';
import Dash_Chart5 from '../../com/Dash_Chart5';
import { ConstructionOutlined } from '@mui/icons-material';



export default function main(){

    const API_URL = "/admin/main/data";

    const [todayReg, setTodayReg] = useState(''); //오늘 가입한 회원 수
    const [totalReg, setTotalReg] = useState('');
    const [regData, setRegData] = useState([]); //최근 5일 가입한 회원 수 배열

    function getData(){

        Axios.post(
            API_URL, null,
        ).then(json => {
            setRegData(json.data.regList);
            setTotalReg(json.data.totalReg);
            setTodayReg(json.data.todayReg);
        });


    }

    useEffect(()=>{
        getData();
    },[]);


    return(
        <Box>
            <Admin_Navbar/>
            <Stack direction="row" spacing={2} justifyContent="space-between">  
                <Admin_Sidebar/>
                <Box flex={4} p={2} sx={{display:{xs:'none', sm:'block', backgroundColor:'lightgray'}}}>
                    <h3>대시보드</h3>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Paper elevation={3} sx={{textAlign: 'center', height: '160px'}}>
                                <Dash_Chart1/>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper elevation={3} sx={{textAlign: 'center', height: '160px'}}>
                                <Dash_Chart2 regCount={todayReg} totalReg={totalReg}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper elevation={3} sx={{textAlign: 'center', height: '160px'}}>
                                <Dash_Chart3/>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Paper elevation={3} sx={{textAlign: 'center', height: '320px'}}>
                                <Dash_Chart5 regData={regData}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper elevation={3} sx={{textAlign: 'center', height: '320px'}}>
                                <Dash_Chart4/>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Paper elevation={3} sx={{textAlign: 'center', height: '200px'}}>
                                <Dash_Chart3/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper elevation={3} sx={{textAlign: 'center', height: '200px'}}>
                                <Dash_Chart3/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
            <Admin_Footer/>
        </Box>
    );

}