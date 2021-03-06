const { program } = require('commander');

program
    .option('-x, --xxx', 'output xxx debugging')

program
    .command('add <args...>')
    .description('add a task')
    .action((t) => {
        const content = t.join(' ');
        console.log(content);
    });

program
    .command('clear')
    .description('clear all tasks')
    .action(() => {
        console.log('clear all tasks');
    });

program.parse(process.argv);
const options = program.opts();
