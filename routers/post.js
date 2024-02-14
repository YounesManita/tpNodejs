const express=require("express")
const router=express.Router()

let object = [{ id: 1, nom: "kljdhfjkdf", prenom: "kdjqhjlkdf" }, { id: 2, nom: "kdhfkjdf", prenom: "ldflkdf" }, { id: 3, nom: "dkfnldkf", prenom: "mkfmldf" }]

router.get("/all", (req, res) => {

  res.json(object)
})

router.get("/:id", (req, res) => {
  const objectId = parseInt(req.params.id);
  const Object = object.find(elem => elem.id === objectId);
  res.json(Object)
})


module.exports=router