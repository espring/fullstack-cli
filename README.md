
# NodeJS 命令行工具的模板工程.

  - 使用commander 的入口函数, cli/cli_example.js 为例子.
  - 使用inquirer 的input form: cli/actions/form_example.js

## install

```
  git clone https://github.com/espring/fullstack-cli.git

  cd fullstack-cli
  rm -rf .git
  git init

  touch .env
  echo 'DEBUG=cli' > .env

  npm init

```


## run command line

show cli command usage.
```
$> node cli/cli_example.js

Usage: cli_example [options]

Options:
  -1, --test1  Calling local action.
  -2, --test2  Calling input form action.
  -h, --help   output usage information
```

```
$> node cli/cli_example.js -1
```
