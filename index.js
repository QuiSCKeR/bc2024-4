const http = require('http');
const { Command } = require('commander');

const program = new Command();

// Якщо ви хочете, щоб сервер запускався без параметрів для тестування
const defaultHost = '127.0.0.1';
const defaultPort = '3000';
const defaultCache = './cache';

// Додаємо параметри
program
  .option('-h, --host <host>', 'адреса сервера', defaultHost)
  .option('-p, --port <port>', 'порт сервера', defaultPort)
  .option('-c, --cache <cache>', 'шлях до директорії з закешованими файлами', defaultCache);

program.parse(process.argv);

const options = program.opts();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Сервер працює на ${options.host}:${options.port}\n`);
});

server.listen(options.port, options.host, () => {
  console.log(`Сервер запущено на ${options.host}:${options.port}`);
});
