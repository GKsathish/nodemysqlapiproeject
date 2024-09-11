

const { Post } = require('../models'); // Adjust path if necessary

//create 
function save(req, res) {
  console.log('Received POST request');
  console.log('Request body:', req.body);

  const PostData = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    categoryid: req.body.categoryid,
    userid: 1
  };

  Post.create(PostData)
    .then(result => {
      res.status(201).json({
        message: "Post created successfully",
        postdata: result
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Something went wrong",
        postdata: error
      });
    });
}

// select one
function show(req, res){
  const id= req.params.id;
  Post.findByPk(id).then(result=>{
    res.status(200).json(
    
       result
    );
  }).catch(error => {
    res.status(500).json({
      message: "Something went wrong",
      postdata: error
    });
})
}

// select all
function showall(req, res){
  const id= req.params.id;
  Post.findAll().then(result=>{
    res.status(200).json(
       result
    );
  }).catch(error => {
    res.status(500).json({
      message: "Something went wrong",
      postdata: error
    });
})
}

// update

function update(req, res) {
  
const id=req.params.id;
  const UpdatedData = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    categoryid: req.body.categoryid,
  
  };
const userid = 1;
  Post.update(UpdatedData,{where :{id:id,userid:userid}})
    .then(result => {
      res.status(201).json({
        message: "Post created successfully",
        postdata: UpdatedData
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Something went wrong",
        postdata: error
      });
    });
}
module.exports = {
  save,
  show,
  showall,
  update
};
