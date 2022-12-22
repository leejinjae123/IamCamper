import styles from '../../styles/Home.module.css'

import EditIcon from '@mui/icons-material/Edit';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Main1 from '../../com/Main1';
import Main1_Menu from '../../com/Main1_Menu';
import Main_Bottom from '../../com/Main_Bottom';
import Main_top from '../../com/Main_top';
import { Box, Button, CardActions, CardContent, CardHeader, CardMedia, Fab, Grid, Link, Pagination, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import  Axios  from 'axios';
import { useRouter } from 'next/router';



export default function buy_bbs() {
    const [list, setList] = useState([]);
    const [cPage, setCpage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const router = useRouter();

    const API_URL = "/bbs/list";
    console.log(list);

    function getList(){
        Axios.post(
            API_URL, null,
            {params:{bname:'RESELL', cPage:cPage}}
          ).then((json) =>{
            
            if(json.data.list == null){
                alert("데이터가 없습니다.");
                setList([]);
              }else{
              setList(json.data.list);
              }setTotalPage(json.data.totalPage);
          });
      }

      useEffect(() => {
        getList();
      },[cPage]);

      function linkview(){
        router.push({
                        pathname: '/bbs/view_bbs',
                        query: { idx: list.b_idx },
                       })
      }
      function edit(){
        router.push({
            pathname:'/bbs/edit_bbs',
        });
    }
    const pageChange = (event, value) => {
        setCpage(value);
      };

  return (
    <>  <div className={styles.container}>
          <Main_top />
          <Main1 />
            <Main1_Menu />
            <div>
                <Typography variant="h3" color="text.secondary" sx={{width:1600, textAlign:'left', margin:'auto', padding:2}}>
                        중고 거래 게시판
                </Typography>
            </div>
            <Grid container my={8} style={{textAlign:'center', margin:'auto', width:'1600px'}}>
                <Grid item xs><Button variant="outlined" style={{width:'100%',height:"100%"}} onClick={()=>router.push("/bbs/free_bbs")} > 자유 게시판 </Button></Grid>
                <Grid item xs><Button variant="outlined" style={{width:'100%',height:"100%"}} onClick={() => router.push("/bbs/campreview")}>후기 게시판</Button></Grid>
                <Grid item xs><Button variant="outlined" style={{width:'100%',height:"100%"}} onClick={() => router.push("/bbs/rest_bbs")}> 맛집 게시판</Button></Grid>
                <Grid item xs><Button variant="outlined" style={{width:'100%',height:"100%"}} onClick={() => router.push("/bbs/QNA")}>자주 하는 질문</Button></Grid>
          </Grid>
             <Box sx={{ flexGrow: 1, width: '1600px', margin:'auto', padding:'30px' }}>
            <Grid container spacing={1}>
            {list != null && list.map((bbs, b_idx) => (
            <Grid item xs={4} key ={bbs.b_idx}>
                <CardHeader
                    title={bbs.subject}
                    subheader={bbs.write_date} />
                <CardActions onClick={() =>  router.push({
                        pathname: '/bbs/view_bbs',
                        query: { idx: bbs.b_idx },
                       })
                       }>
                <CardMedia
                    component="img"
                    image={bbs.thum_img}
                    sx={{width: 280, height: 290, objectFit: 'scale-down'}}
                     /></CardActions>
                <CardContent>
                    <Typography variant="h3" color="text.secondary">
                        {bbs.price} 원
                    </Typography>
                </CardContent>
            </Grid>))}
            </Grid>
        </Box>
        <div className="bottom-div">
          <Grid item xs style={{ width: '1600px', textAlign: 'right', padding: '30px', float: 'right' }}>
            <Fab color="secondary" aria-label="edit" onClick={edit}><EditIcon /></Fab>
          </Grid>
          <form className="search-form">
            <input type="text" placeholder="Search" className="search-input" />
            <button type="submit" className="search-button">
              <img src={'/images/search_icon.png'} />
            </button>
          </form>
          <Stack spacing={2} sx={{display:'inline-block'}}>
          <Pagination count={totalPage} variant="outlined" shape="rounded" color='primary'
                            page={cPage}
                            onChange={pageChange}/>
          </Stack>
        </div>
        <div>
            <Main_Bottom />
        </div></div></>
  )
                    }
