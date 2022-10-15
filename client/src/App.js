import React ,{useState,useEffect}from 'react';
import {Container,AppBar ,Typography,Grow,Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux'; //dispatch an action
import Posts from './components/Posts/Posts';
import {getPosts} from './actions/posts'
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';
import { set } from 'mongoose';

const App = () => {
    const [currentId,setCurrentId] = useState(null);
    const classes = useStyles();//calling useStyles
    const dispatch = useDispatch();//defineing dispatch,we dispatch an action in useeffect
    useEffect(() => {
        dispatch(getPosts());

    },[dispatch])
    return(
        <Container maxWidth="lg">
            {/* <AppBar className={classes.appBar} popsition="static" color="inherit">
                <Typography  className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar> */}
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;