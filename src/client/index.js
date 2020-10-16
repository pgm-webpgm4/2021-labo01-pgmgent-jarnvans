/**
 * The Web Client
 */

const startClient = () => {
   return new Promise((resolve, reject) => {
    console.log("Starting the client...");
    resolve();
  })
}

module.exports = { startClient };