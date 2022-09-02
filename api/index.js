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

    let data = {success:true,message:"Founded user!",data:{member,user,activity}};

    return res.send(data);
});

module.exports = app;
