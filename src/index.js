import { server } from "./server.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    server.listen(3000, "0.0.0.0", () => {
      console.log("Servidor escuchando en el puerto 3000 :D");
    });
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
}

main();
