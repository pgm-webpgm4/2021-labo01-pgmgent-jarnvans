/**
 * The Server
 */

const startServer = () => {
  return new Promise((resolve, reject) => {
    console.log("Starting the server...");
    resolve();
  })
}

module.exports = { startServer };