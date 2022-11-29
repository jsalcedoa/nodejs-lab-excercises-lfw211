'use strict'

function exercise (myEnvVar) {
  // TODO return a child process with
  // a single environment variable set 
  // named MY_ENV_VAR. The MY_ENV_VAR 
  // environment variable's value should 
  // be the value of the myEnvVar parameter 
  // passed to this exercise function

  // Both output the same path/value
  // console.log(process.argv[0])
  // console.log(process.execPath);

  return require('child_process').spawnSync(process.argv[0], ['child.js'], {
    env: { MY_ENV_VAR: myEnvVar }
  })
}

console.log('Exec path: ', process.execPath);

module.exports = exercise
