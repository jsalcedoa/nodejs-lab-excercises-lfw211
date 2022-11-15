'use strict'
const os = require('os')
const { heapTotal } = process.memoryUsage()

setTimeout(() => {
  console.log(process.uptime()) // TODO output uptime of process
  console.log(os.uptime()) // TODO output uptime of OS
  console.log(os.totalmem()) // TODO output total system memory
  console.log(heapTotal) // TODO output total heap memory
}, 1000)