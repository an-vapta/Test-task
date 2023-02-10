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



const CardComponent = ({ item, index }) => {
    const imageUrl = "https://image.tmdb.org/t/p/"
    return (
        <>
            <div className="col-md-3 my-2">
                <Card sx={{ maxWidth: 345, height: 480 }} onClick={() => {
                    console.log("hiiii")
                }} >
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
                                {/* {`${imageUrl}/w500/${item.backdrop_path}`} */}
                             <img src={`${imageUrl}/w200/${item.backdrop_path}`}/>
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings" >
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={item.original_title}
                        subheader={item.release_date}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        // image={`${imageUrl}${item?.poster_path}`}
                        image={`${imageUrl}/w500/${item.poster_path}`}
                        alt="Paella dish"
                    />
                    <span>Popularity : {item.popularity}</span>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {(item.overview.slice(0, 100))}.........
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>



        </>
    );
}
export default CardComponent;   