const handler = require("serve-handler");
const http = require("http");

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: "build",
    headers: [
      {
        source: "**/*.@(jpg|jpeg|gif|png|webp|css|js)",
        headers: [{
          key: "Cache-Control",
          value: "public, max-age=31536000"
        }]
      }
    ]
  });
});

server.listen(3003, () => {
  console.log("Running at http://localhost:3003");
});
