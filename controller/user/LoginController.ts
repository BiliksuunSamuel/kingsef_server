async function UserLogin(req, res) {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(404).send("Server Network Error");
  }
}

export default UserLogin;
