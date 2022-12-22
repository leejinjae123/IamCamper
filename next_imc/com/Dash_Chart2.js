import { PersonAdd } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";




export default function Dash_Chart2(props){

    const totalReg = props.totalReg;

    return(
        <Box marginTop={2} paddingTop={4}>
            <Typography variant="h5" gutterBottom>누적 가입 회원</Typography>
            {totalReg != null && (
            <Typography component="p" variant="h4">
                {totalReg} 명
            </Typography>
            )}
            {totalReg == null && (
            <Typography component="p" variant="h4">
               데이터가 없습니다.
            </Typography>
            )}
        </Box>
    );


}