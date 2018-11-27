exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ 'title': 'First post', 'content': 'This is my first post!'}]
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    console.log("Title : "+title+"\nContent : "+content);

    //Insert post to DB

    res.status(201).json({
        message: 'Success!',
        post: {id: new Date().toISOString(), title: title}
    });
};