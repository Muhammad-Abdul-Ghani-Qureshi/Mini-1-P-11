function handleErrors(error, req, res, next) {
  console.log(error);
  res.status(500).render("shared/500"); //500 is server side error
}


module.exports = handleErrors