const express = require('express');
const SocialPost = require("social-post-api");
const social = new SocialPost('JG9E1HP-FFGMVTV-P621DAC-1Y5P09V');

const app = express();

const port =9000;


app.use("/",(req,res)=>{
    run();
    res.json({message:"Hello from express app"})
})

const run = async () => {
    /** post */
    const post = await social.post({
      post: "Who you gonna call?",
      platforms: ["instagram"],
      mediaUrls: ["https://img.ayrshare.com/012/gb.jpg"]
    }).catch(console.error);
    console.log(post);
  
    /** history */
    // const history = await social.history()
    //    .catch(console.error);
    // console.log(history);
  
    // /** delete */
    // const deletePost = await social.delete({ id: post.id })
    //    .catch(console.error);
    // console.log(deletePost);
  };

app.listen(port, ()=>{
    console.log(`Running server on port ${port}`)
})