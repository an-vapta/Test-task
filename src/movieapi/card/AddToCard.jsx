import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useSelector } from 'react-redux';
import CardComponent from './Cardcomponent';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddToCard(props) {
    const { handleClickOpen, open } = props;
    const { cart } = useSelector(state => state.movieReducer);


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open full-screen dialog
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClickOpen}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClickOpen}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Add_To_Card
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClickOpen}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                {/* <CardComponent item="NIL" index="NIL" key="NIL" /> */}
                {/* {comp } */}
                {/* {console.log(comp.props ,"comp")} */}
                {cart.length > 0 && cart.map((item, index) => (
                    <CardComponent item={item} index={index} key={index} />
                ))}
            </Dialog>
        </div>
    );
}