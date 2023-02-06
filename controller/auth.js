const { db } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
  const q = 'SELECT * FROM users WHERE email = ? OR username = ?';
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json('User already exists!');

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = 'INSERT INTO users(`username`,`email`,`password`) VALUES(?,?,?)';

    db.query(q, [req.body.username, req.body.email, hash], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json('User has been created');
      3;
    });
  });
};
const login = (req, res) => {
  // CHECK USER EXISTED

  const q = 'SELECT * FROM users WHERE username = ?';
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(400).json('User not found');

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json('Wrong username or password!');
    }

    const token = jwt.sign({ id: data[0].id }, 'jwtKey');
    let { password, ...other } = data[0];
    other = { ...other, access_token: token };
    res
      .cookie('access_token', token, {
        httpOnly: false,
        secure: false,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json(other);
  });
};

const logout = (req, res) => {
  res
    .clearCookie('access_token', {
      sameSite: 'none',
      secure: true,
    })
    .status(200)
    .json('User has been logged out.');
};

module.exports = {
  login,
  register,
  logout,
};
