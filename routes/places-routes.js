const express=require('express');

const router= express.Router();


const DUMMY_PLACES=[
    {
        id:1,
        title:"ezmeazae",
        description:'one of ras alzdmazdldaz',
        location:{
            at:16.1222,
            lng:10.6875657
        },
        address:'30 rue gabes',
        creator:'1'
    }
]

router.get('/:pid',(req, res, next)=>{
    const placeId = req.params.pid;
    console.log("placeId",placeId)
    const place = DUMMY_PLACES.find(p=>{
        return p.id == placeId
    })
    if(!place){
        const error= new Error('Could not find a place for the proivided id');
        error.code =400;
        throw error;
    } 
    res.json({place});   
    
});

router.get('/user/:uid',(req, res, next)=>{
    const userId = req.params.uid;
    console.log("userId",userId)
    const place=DUMMY_PLACES.find(p=>{
        return p.creator == userId
    })

    if(!place){
        const error= new Error('Could not find a place for the proivided id');
        error.code =404;
        next(error);
    }
    res.json({place});
});


module.exports=router;