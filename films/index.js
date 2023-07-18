const server = require("./src/server");

const PORT = 8002;

server.listen(8002, () => {
  console.log(`Films services listening on port ${PORT}`);
});
