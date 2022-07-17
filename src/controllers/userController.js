class UserController{
    async index(req, res){
      res.status(200).send("homePage")
    }
    async register(req, res){
        res.status(200).send("register")
    }
    async routerDefault(req, res){
        res.status(404).send("routes not found 404")
    }
}
export default new UserController();