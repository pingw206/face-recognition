const handleSignin = (req, res,db, bcrypt) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json('登录信息不完整！')
  }
  db.select('email','hash').from('login')
    .where('email','=',email)  
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email','=',email)
          .then(user => {
            res.json(user[0])
          })
          .catch(err => res.status(400).json('该用户不存在！'))
      } else {
        res.status(400).json('密码错误！请重试')
      }
    })
    .catch(err => res.status(400).json('该用户不存在！'))
}

module.exports = {
  handleSignin: handleSignin
}