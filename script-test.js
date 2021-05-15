/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require('shelljs')

console.log('Ola mundo')

const resultado = shell.exec('git diff --name-only modulo_02-aula_05..main', { silent: true })

console.log(resultado.stdout.split('\n'))
