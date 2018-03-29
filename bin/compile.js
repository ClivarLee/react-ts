const childProcess = require('child_process');
const argv = process.argv.slice(2);
const script = argv[0] || 'start';
const clientEnvIndex = argv.findIndex(env => env === '-env')
const clientEnv = clientEnvIndex === -1 ? 'dev' : argv[clientEnvIndex + 1]

// 执行react-app-rewired脚本 
const child = childProcess.exec(
  `cross-env CLIENT_ENV=${clientEnv} react-app-rewired ${script} --scripts-version react-scripts-ts`, { 
  stdio: 'inherit',
  cwd: process.cwd()
})
// 显示子进程的打印信息
child.stdout.on('data', function (data) {
	console.log(data);
});