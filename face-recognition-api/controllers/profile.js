const handleProfile = (req, res, db) => {
  const { id } = req.params;
  db.select('*').from('users').where({
    id: id
  }).then(user => {
    if (user.length) {   //没有的用户会显示[]空数组
      res.json(user[0]);
    } else {
      res.status(400).json('Not found')
    }
  })
  .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
  handleProfile: handleProfile
}