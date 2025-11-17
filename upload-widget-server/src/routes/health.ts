import { FastifyInstance } from "fastify";
import { log } from "../infra/logger";

export const healthRoute = async (app: FastifyInstance) => {
  app.get("/health", async (request, reply) => {
    log.debug("Acessei a rota health check");
    // log.error("Erro ao acessar a rota health check");
    return reply.status(200).send({
      status: "ok!!",
    });
  });
};
