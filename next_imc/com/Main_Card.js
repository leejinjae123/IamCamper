
import { Card,CardContent,CardMedia,CardActions,Typography,Button,Box,Stack} from "@mui/material";
import Grid from '@mui/material/Grid';
import { margin } from '@mui/system';

export default function Main_Card(){

    return(
        <div style={{width:'1500px', margin:'auto'}}> 
        <Stack spacing={25} direction='row'>
                <Box style={{width:'400px',marginTop:'60px'}}>
                    <Card>
                        <CardContent>
                            <Typography variant='h5' component='div' textAlign='left' marginBottom='10px'>
                            나이키 공식 온라인스토어
                            </Typography>
                            <CardMedia 
                                component='img'
                                height='140px'
                                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAACpCAMAAACrt4DfAAAAdVBMVEURERH///8AAAAODg4LCwsGBgbU1NTw8PCioqLr6+vj4+P6+voICAhJSUmnp6dFRUW0tLSSkpJSUlKCgoI2NjbDw8NxcXHY2NjPz89ra2sXFxd5eXkiIiL19fU9PT29vb1fX18nJyd/f3+Li4tcXFyQkJAvLy/l3P87AAACiklEQVR4nO3ZiZKqMBCFYdKAgCgK7svVcX3/R7wE3BBch6qh4P8eIGVOpTtNNAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaBir/CU7nfLXrADplpuVKSJRNC91zWoQ1zBLW0zHZAzWQWSXtmR1iBtKOSvpmKyfwPPdpdQyqa2SMg6VHefUDVtKTRZxYCUsWDkSqeDXh0ofp+Fg5Cil1j0pJfnqkY2vhr8qFh2TjPteHJNywrmUVMyVY4qn2t9vztRVt3fbKjEZ17TyEjJSX9dfJ46pF079NKek8sr9cZUiu3iP4y92qKvuuF07p5iUV+PKS0hPb3P1aavSzWnWb6uL1qzOlafpRhVbfrDLpDlF7kTd6K/qeuddSaB36s/fjcrSI8Hu0pxUeudJvSsvkZafUpt3okqa02LtqYzWuP4HSpNTGXVfnoqkOQVtdadf7zvvSn5OO37+BdhJv1f8+5yc0GpIUHFU51PyeATVzem4G+ViiqfN2t95Ny6HSqlFUVa6OS1P3yuNrbyUTK9bH95vXDenfb45JWo/bd6zlje796Ob56X0MWVaUHVa/afNHBlkS2ooZ8PB6F9xTM2YNnP0d3K2rkaB6wajSWFEp8qTWr5tvmCK8ziTh5XXuAOlWZvPgmrYnXfr/FHzFudgNDaoOKr9R5XXsDsvQ6L3cvL1nffXP/Zv2cN3gvJCo4l3XpYpD2eni2nDK+8sN1fda+S0Weh5s2rotPmArJ9WHgfq6vQfRA53Xp5tFjyyTLZUXoGOuNmcWocllVfMFOOQvkv5ztSdCbPBE/rxfLlaHZOHKs7TK5ZtW6QEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4MZ/CngV76LAlSkAAAAASUVORK5CYII=   "
                                alt='unsplash image'
                                />
                            <Typography variant='body1' color='text.secondary' textAlign='left' marginTop='10px'>
                            나이키 멤버가 되어, 특별한 혜택을 누려보세요
                            </Typography>
                            <CardActions>
                                <Button size="small"> 미리 보기</Button>
                                <Button size="small"> 자세히 보기</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Box>
                <Box style={{width:'400px', marginTop:'60px',marginRight:'20px'}}>
                    <Card>
                        <CardContent>
                            <Typography variant='h5' component='div' textAlign='left' marginBottom='10px'>
                            아디다스 공식 온라인 스토어
                            </Typography>
                            <CardMedia 
                                component='img'
                                height='140px'
                                image="data:image/png;base64,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"
                                alt='unsplash image'
                                />
                            <Typography variant='body1' color='text.secondary' textAlign='left' marginTop='10px'>
                            아디다스 멤버가 되어, 특별한 혜택을 누려보세요                            
                            </Typography>
                            <CardActions>
                                <Button size="small"> 미리 보기</Button>
                                <Button size="small"> 자세히 보기</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Box>
                <Box style={{width:'400px', marginTop:'60px'}}>
                    <Card>
                        <CardContent>
                            <Typography variant='h5' component='div' textAlign='left' marginBottom='10px'>
                            아식스 공식 온라인스토어                            
                            </Typography>
                            <CardMedia 
                                component='img'
                                height='140px'
                                image="data:image/jpeg;base64,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09IwV37j4twUnrkBFyPPIjjG9I3LL4p20Uaeyyuq4KyMNNc9ZWuywgitVydw3HGCQAZm8V1DaLhjMXYvVQqB2JLNaQEUk9SS7Ca3iOvGtOl09OnuFRuR7mspepEWn8oKyHAJJKqvLl75nds3f/RlWp7EW9brwilvYqBfp5ndtIXqdvKNdxGjb6cB4wq+DpXS9X8MCp70x42xVDMCSTu/Ow2Dzlb+19KlmCWvSj7LNQqZpRt20885YAnBKggTAvtfXXpZSliV6eu0rZYjVF7rF2IqK4DYXmS2AOk1untN2gr4bVp7ksKJTfvqdEqQYFrl2G1uQbG0nJI+MnjE/wCzcur4j2gSpxSiWXW7Q5SlQxVCcBnYkKoODgZycchNLwntAtmre3c/h2PXpKFIIAtFb3WllJ9kj7p8wUIluh1n2PUatXovZ7bFekpU7iytakVEDgbVKlWGGImt1IbT8P0+qep/E+2DVvWB7e++xxsAOMNi0LiIrHj7Nuw12qqtd9Gd5bw/EsKMybFJ9nLqQysSpwBzwpkeLr7dMvD71axlah31CtY7l3tFdaNhicYsZOQ5DJ98kLs5wxqUL2kG+9vE1DDmN5HJFP6CjCj4Z8zNv4Y9B9JFbRXrzCZjbQ9hS50VXisWsG9XYkkllsdTzPwnQy0LiXTOZ3OyFYiISREQEREBERAREQERECmIxKxApiMSsQKYjErECmIxKxApiMSsQKYnw1WlSxSjqGVvvA9Dg5wR5iZEQKYjErECmIxKxApiMSsQKYjErECmIlYgUImnbgga8XWW2OFbfVUxXwq2xt3KFUEnGcbicZM3MpG9BKxEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED//Z"
                                alt='unsplash image'
                                />
                            <Typography variant='body1' color='text.secondary' textAlign='left' marginTop='10px'>
                            아식스 멤버가 되어, 특별한 혜택을 누려보세요                            
                            </Typography>
                            <CardActions>
                                <Button size="small"> 미리 보기</Button>
                                <Button size="small"> 자세히 보기</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Box>
            </Stack>
        </div>
    );
}