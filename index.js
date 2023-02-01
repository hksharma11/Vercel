const express = require('express');
const SocialPost = require("social-post-api");

const app = express();

const port = 9000;


app.use("/data/", (req, res) => {
    run(req.query.Key,req.query.Media,req.query.Caption);
    res.send("Ok")
})

const run = async (key,media,caption) => {
    /** post */
    const social = new SocialPost(key);
    const post = await social.post({
        post: caption,
        platforms: ["instagram"],
        mediaUrls: [media]
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

app.listen(port, () => {
    console.log(`Running server on port ${port}`)
})