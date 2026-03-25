const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello Nishank 🚀 Vercel Deployment Success");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running");
});
