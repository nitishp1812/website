import React from 'react';

import { makeStyles, Card, CardMedia, CardContent } from '@material-ui/core';

const isMobile = window.innerWidth <= 500;

const useStyles = makeStyles(theme => ({
    image: {
        width: '100%',
        height: isMobile ? '300px' : '250px'
    },
    content: {
        height: '160px'
    },
    card: {
        width: '100%'
    }
}));

export default (props) => {
    const classes = useStyles();
    const images = require.context('./imgs', true);
    const logo = images('./' + props.imageAddress);

    return (
        <Card className={classes.card}>
            <CardMedia
              className={classes.image}
              image={logo} />
            <CardContent className={classes.content}>
                {props.children}
            </CardContent>
        </Card>
    );
}
