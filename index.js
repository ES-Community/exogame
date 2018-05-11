// Require Node.JS Dependencies
require("make-promises-safe");
const {
  writeFile,
  access,
  constants: { R_OK }
} = require("fs");
const { createServer } = require("net");
const { promisify } = require("util");

// Require Internal Dependencies
const socketHandler = require("./src/socketHandler");

// Make Async.FS Wrapper
const fsAsync = {
  writeFile: promisify(writeFile),
  access: promisify(access)
}

/**
 * @func main
 * @desc Main handler
 */
async function main() {
  // Require userconfig (or default config).
  let config;
  try {
    await fsAsync.access("./config/userconfig.json", R_OK);
    config = require("./config/userconfig.json");
  }
  catch {
    config = require("./config/default.json");
    await fsAsync.writeFile("./config/userconfig.json", JSON.stringify(config, null, 2));
    console.log("New userconfig properly created in /config/ directory!");
  }

  // Create Socket Server!
  const socketServer = createServer(socketHandler.bind(config));
  socketServer.on("error", console.error);
  socketServer.on("listening", () => {
    console.log(`Socket server is listening on port ${config.port}`);
  });

  // Listen on configured port!
  socketServer.listen(config.port);
}
main().catch(console.error);
