
module.exports = (router,db) => {

  router.post('/register',(req, res) => {

    const userid = req.body.name;
    const empresa  = req.body.empresa;
    const email = req.body.email;
    const msj = req.body.msj;


    if (userid && empresa && email && msj) {
      db.get(userid,(err,record) => {
        if (err && !err.notFound) {
          return res.json({success:false, message: "El nombre ya existe", data: null});
        }
        if (record) {
          return res.json({success:false, message: "El nombre ya existe", data: null});
        }

        const user = Object.assign({},record,{empresa: empresa, email: email, msj:msj});

        db.put(userid,(err) => {
          if (err) return res.json({success: false, message: err, data: null});
        });
        return res.json({success:true, message: "Datos válidos", data: user});
      });
    } else {
      res.json({success: false, message: "Parametros incorrectos", data: req.body});
    }
  });

  return router;
}
