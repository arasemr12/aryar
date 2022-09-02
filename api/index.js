require('dotenv').config();
require('./bot');

const express = require('express');
const app = express();

app.get('/users/:id',async(req,res) => {
    let {id} = req.params;
    if(!id) return res.json({success:false,message:"Required params!"});

    let member = await client.guilds.cache.get("1013497869724033154").members.cache.get(id);
    if(!member) return res.json({success:false,message:"User not found!"});
    
    let activity = member.presence.activities;
    let user = member.user;
    let status = member.presence.status;

    return res.send({success:true,message:"Founded user!",data:{member,status,user,activity}});
});

module.exports = app;
