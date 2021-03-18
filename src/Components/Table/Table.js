import React from 'react'
import { Card, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import uesStyles from './styles'
import VisibilityIcon from '@material-ui/icons/Visibility';
const Table = ({table}) => {
    const classes=uesStyles();
    if(table.status)return(
        <Card className={classes.root1}>
        <CardMedia className={classes.media} image='images/tableIcon.png' />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                    {table.name}
                </Typography>
               
            <IconButton color='inherit'>
                <VisibilityIcon />
            </IconButton>
        
            </div>
        </CardContent>
       
    </Card>

    )
    return (

        <Card className={classes.root2}>
            <CardMedia className={classes.media}  image='images/tableIcon.png'/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {table.name}
                    </Typography>
                    <IconButton color='inherit'>
                <VisibilityIcon/>
                </IconButton>
                </div>
            </CardContent>
           
       
        </Card>
    )
}

export default Table
