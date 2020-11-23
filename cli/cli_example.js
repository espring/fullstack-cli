const program = require('commander');
const Promise = require('bluebird');
const InputForm = require('./actions/form_example')
const debug = require('../lib/debug')

const dumpAsyncFunc = () => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => resolve(), 1000 )
  } )
}


const LocalAction = async () => {
  debug('LocalAction begin...')

  await dumpAsyncFunc()

  console.log('LocalAction done!')
  //
  return Promise.resolve('done')
}


/**
*/
program
  .option('-1, --test1', 'Calling local action. ', LocalAction)
  .option('-2, --test2', 'Calling input form action. ', InputForm)
  .parse(process.argv);

if (process.argv.length < 3) {
  program.outputHelp();
  process.exit(1);
}

