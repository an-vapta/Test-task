import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeCart } from '../../redux/action'
import DeleteIcon from '@mui/icons-material/Delete';

const CardComponent = ({ item, index }) => {
    // const [state, setState] = useState(false);
    const imageUrl = "https://image.tmdb.org/t/p/"
    const dispatch = useDispatch();

    const { cart } = useSelector(state => state.movieReducer);

    return (
        <>

            <Card sx={{ maxWidth: 345, height: 480 }}  >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
                            <img src={item.backdrop_path ? `${imageUrl}/w200/${item.backdrop_path}` : "no image avaliable"} />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" >
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={item ? item.original_title : "No title Avaliable"}
                    subheader={item ? item.release_date : "No relese Date Avaliable"}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={item.poster_path ? `${imageUrl}/w500/${item.poster_path}` : "no avaliable"}
                    alt="Paella dish"
                />
                <span>Popularity : {item ? item.popularity : "no popularity avaliable"}</span>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {item.overview ? (item.overview.slice(0, 100)) : "......"}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton label="Custom delete icon" onClick={()=>console.log("hi")}>
                        <FavoriteIcon />
                    </IconButton>
                    <DeleteIcon aria-label="share"  onClick={()=>console.log("hi2")}>
                        <ShareIcon />
                    </DeleteIcon>
                </CardActions>
            </Card>



        </>
    );
}
export default CardComponent;   