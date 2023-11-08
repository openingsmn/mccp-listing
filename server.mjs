import { parse } from "url";
import next from "next";
import express from "express";
import path from "path";
import cors from "cors";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 4000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cors());
  server.use(express.static("public"));

  server.get("*", async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname.startsWith("/api")) {
        await handle(req, res, parsedUrl);
      } else {
        res.sendFile(
          path.resolve(process.cwd(), "public", "frontend", "index.html")
        );
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  });
  server.get("/static/:path", async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname.startsWith("/api") || pathname.startsWith("/listing")) {
        await handle(req, res, parsedUrl);
      } else {
        res.sendFile(path.join(process.cwd(), "frontend-build", "index.html"));
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  });
  server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
