const router = require('express').Router();
const { Blogp } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogp = await Blogp.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogp);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogpData = await Blogp.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogpData) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }

    res.status(200).json(blogpData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
