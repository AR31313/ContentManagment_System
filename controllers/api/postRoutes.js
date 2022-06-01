const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

//GET all Blog Posts
router.get('/', (req, res) => {
  Blog.findAll({})
    .then(dbBlogData => res.json(dbBlogData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET One Blog Post
router.get('/:id', (req, res) => {
  Blog.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(dbBlogData => res.json(dbBlogData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

//Create a new Blog Post
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Edit a Blog Post
router.put('/:id', withAuth, (req, res) => {
  Blog.update({
    post_content: req.body.post_content
  }, {
    where: {
      id: req.params.id
    }
  }).then(dbBlogData => {
    if (!dbBlogData) {
      res.status(404).json({ message: 'No Blog found with this id' });
      return;
    }
    res.json(dbBlogData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//Delete a Blog Post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const BlogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!BlogData) {
      res.status(404).json({ message: 'No Blog found with this id!' });
      return;
    }

    res.status(200).json(BlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
