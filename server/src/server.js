import express from "express";
import { Sequelize } from "sequelize/dist";
import cors from "cors";
import process from "process";
import axios from "axios"


const dotenv = require('dotenv').config({ path: '.env' })

export function launch(port) {

  const sequelize = new Sequelize('search-github', 'postgres', 'admin', {
    dialect: 'postgres',
  })
  
  const application = express();
  
  application.use(cors());


  const searchGithub = sequelize.define('searchGithub', {
    login: Sequelize.STRING,
    node_id: Sequelize.STRING,
    avatar_url: Sequelize.STRING,
    gravatar_id: Sequelize.STRING,
    url: Sequelize.STRING,
    html_url: Sequelize.STRING,
    followers_url: Sequelize.STRING,
    following_url: Sequelize.STRING,
    gists_url: Sequelize.STRING,
    starred_url: Sequelize.STRING,
    subscriptions_url: Sequelize.STRING,
    organizations_url: Sequelize.STRING,
    repos_url: Sequelize.STRING,
    events_url: Sequelize.STRING,
    received_events_url: Sequelize.STRING,
    type: Sequelize.STRING,
    site_admin: Sequelize.STRING,
    name: Sequelize.STRING,
    company: Sequelize.STRING,
    blog: Sequelize.STRING,
    location: Sequelize.STRING,
    email: Sequelize.STRING,
    hireable: Sequelize.STRING,
    bio: Sequelize.STRING,
    twitter_username: Sequelize.STRING,
    public_repos: Sequelize.STRING,
    public_gists: Sequelize.STRING,
    followers: Sequelize.STRING,
    following: Sequelize.STRING,
    created_at: Sequelize.STRING,
    updated_at: Sequelize.STRING,
    searchGithub_pke: Sequelize.STRING
  });


  sequelize.sync().then(function() {
    return 0
  }).then(function() {
    console.log("is sync")
  });







  application.get('/users/:username', async function (req, res) {
    //res.send('GET req to the homepage');
   // searchGithub.findAll().then(notes => res.send(notes));
    const {username} = req.params

    const [user] = await searchGithub.findAll({
      where: {
        login: username,
      }
    })

    if(!user){
    
      const response = await axios.get(`http://api.github.com/users/${username}`)

      await searchGithub.create(response.data)
        
      console.log(response.data)
        res.json(response.data)
        return

    }


    res.json(user)
     
    })
    


  application.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });

}
