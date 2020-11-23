
const Promise = require('bluebird');
const inquirer = require('inquirer');
inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'));

const debug = require('../../lib/debug')


const requireLetterAndNumber = value => {
  if (/\w/.test(value) && /\d/.test(value)) {
    return true;
  }
  return 'Password need to have at least a letter and a number'
}

const OrderForm = async () => {
  const questions = [
    {
      type: 'input', name: 'name', message: '请输入订单名', default: `order-${new Date().getTime()}`,
    },
    { // editor
      type: 'input', name: 'description', message: '请输入订单内容', default: '',
    },
    {
      type: 'datetime',
      name: 'createtime',
      message: '订单时间',
      format: ['mm', '/', 'dd', '/', 'yyyy', ' ', 'hh', ':', 'MM', ' ', 'TT'],
    },
  ]
  const form = await inquirer.prompt(questions);

  const confirm = await inquirer.prompt(
    [{
      type: 'confirm', name: 'confirm', message: JSON.stringify(form), default: true,
    }],
  )
  if (confirm) {
    // console.log(form);
    return Promise.resolve(form);
  }
  return Promise.reject()
}



module.exports = () => {

  return OrderForm()
}
