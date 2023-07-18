const server = require("./src/server");

const PORT = 8001;

server.listen(8001, () => {
  console.log(`Characters services listening on port ${PORT}`);
});
