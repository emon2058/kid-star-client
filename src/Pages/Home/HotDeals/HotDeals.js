import React, { useEffect,useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import HotDeal from '../HotDeal/HotDeal';

const HotDeals = () => {
    const [hotDeals,setHotDeals] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setHotDeals(data))
    },[])
    return (
        <Container>
            <Typography variant="h3">Hot Deal</Typography>
            <Grid container spacing={2}>
                {hotDeals.map(hotDeal=>hotDeal.id<4?
                <HotDeal
                key={hotDeal.id}
                hotDeal={hotDeal}/>:''
                )}
            </Grid>
        </Container>
    );
};

export default HotDeals;