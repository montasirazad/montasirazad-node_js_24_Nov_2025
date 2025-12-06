// const fs = require("fs");
// const path = require("path");
// const os = require("os");

// // Create logs folder path
// const logsFolder = path.join(__dirname, "logs");

// // Create folder if it doesn't exist
// if (!fs.existsSync(logsFolder)) {
//   fs.mkdirSync(logsFolder);
// }

// // Log file path
// const logFile = path.join(logsFolder, "system-log.txt");

// // Get system info
// const logData = `
// --------- LOG ENTRY ---------
// Time: ${new Date().toLocaleString()}
// Platform: ${os.platform()}
// CPU Cores: ${os.cpus().length}
// Free Memory: ${os.freemem()}
// Total Memory: ${os.totalmem()}
// Home Directory: ${os.homedir()}
// Uptime (seconds): ${os.uptime()}
// ------------------------------

// `;

// // Append log entry
// fs.appendFile(logFile, logData, (err) => {
//   if (err) throw err;
//   console.log("Log entry added!");
// });

// setInterval(()=>fs.appendFile(logFile, logData, (err) => {
//   if (err) throw err;
//   console.log("Log entry added!");
// }),60000)

// console.log(logData);

 