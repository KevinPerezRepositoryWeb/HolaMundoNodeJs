const { response } = require("express");

const loginPost = async (req, res) => {
  res.json({
    ok: true,
    msg: "Mi login",
  });
};

module.exports = {
  loginPost,
};
