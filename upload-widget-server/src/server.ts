import "newrelic";
import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { uploadImageRoute } from "./routes/upload-image";
import { fastifyMultipart } from "@fastify/multipart";
import { healthRoute } from "./routes/health";
import { log } from "./infra/logger";
import { vault } from "./infra/secret";

const server = fastify();

server.register(fastifyCors, {
  origin: "*",
});

server.register(fastifyMultipart);
server.register(uploadImageRoute);
server.register(healthRoute);

server.listen({ port: 3333, host: "0.0.0.0" }).then(async () => {
  const response = await vault.read("/secret/data/ftr-pos-devops");
  console.log(response.data);

  log.info("HTTP server running!");
});
