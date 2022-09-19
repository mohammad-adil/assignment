const http = require("http");
const app = require("./src/app");
const pusage = require("node-os-utils");

const port = process.env.PORT || 7000;

const server = http.createServer(app);

server.listen(port);

server.on("close", function () {
  console.log("restarting server");
  server.listen(port);
});

console.log("Server Runnning on Port " + port);
const cpu = pusage.cpu;
setInterval(async () => {
  const usage = await cpu.usage();
  if (usage > 70.0) {
    //server.close();
  }
}, 5000);
