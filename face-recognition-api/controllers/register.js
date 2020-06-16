const handleRegister = (req, res, db, bcrypt) => {   //引入db,bcrypt的形式，就不用在开头声明了
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json('注册信息不完整！')
  }
  const hash = bcrypt.hashSync(password);
    db.transaction(trx => {
      trx.insert({
        hash: hash,
        email: email
      })
      .into('login')
      .returning('email')
      .then(loginEmail =>{
        return db('users')
          .returning('*')
          .insert({
            email: loginEmail[0],
            name: name,
            joined: new Date()
          })
          .then(user => {
            res.json(user[0]);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
    }) 
  .catch(err => res.status(400).json('注册失败'))
}

module.exports = {
  handleRegister: handleRegister
}