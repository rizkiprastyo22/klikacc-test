// server.js digunakan agar json placeholder bisa dihost di port 5000 (agar berbeda dengan nuxt)
const jsonServer = require("json-server"); //1
const server = jsonServer.create(); //2
const router = jsonServer.router("db.json"); //3
router.db._.id = "id"; //3a
const middlewares = jsonServer.defaults(); //4
server.use(middlewares); //5

server.use(
  jsonServer.rewriter({
    "/customurl/*": "/$1",
  })
);

server.use(router);

// yang mengatur port json placeholder
server.listen(5000, () => {
  //10 using 5000 port
  console.log("JSON Server is running");
});
