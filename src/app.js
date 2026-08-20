import chalk from 'chalk';
import os from 'node:os';

console.log(chalk.green.bold("=== Inicio del sistema ===\n"));

const usuarios = [
  { nombre: "Rodrigo", rol: "Admin" },
  { nombre: "Juan", rol: "User" },
  { nombre: "roberto", rol: "Mod" }
];

console.log(chalk.green("____________Bienvenido___________"))

console.log(chalk.yellow("Opciones: datos, hola, sistema, fin"))

process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  const input = data.trim().toLowerCase();

  switch (input) {
    case 'hola':
      console.log(chalk.green.bold('¡Hola! ¿Cómo estás?'));
      break;
    case 'datos':
      console.log(chalk.cyan('\n📋 Lista de usuarios conectados:'));
      console.table(usuarios)
      break;
    case 'sistema':
      function mostrarInformacion() {
        console.clear();

        console.log(chalk.cyan('🖥️  Monitor de Sistema'));
        console.log(chalk.red.bold('========================'));
        console.log(chalk.yellowBright(`Sistema: ${os.platform()} (${os.arch()})`));
        console.log(chalk.yellowBright(`CPU: ${os.cpus()[0].model}`));
        console.log(chalk.yellowBright(`Cores: ${os.cpus().length}`));
        console.log(chalk.yellowBright(`Memoria Libre: ${(os.freemem() / (1024 * 1024)).toFixed(2)} MB`));
        console.log(chalk.yellowBright(`Memoria Total: ${(os.totalmem() / (1024 * 1024)).toFixed(2)} MB`));
        console.log(chalk.yellowBright(`Uptime: ${(os.uptime() / 60).toFixed(2)} minutos`));
        console.log(chalk.yellowBright(`Usuario: ${os.userInfo().username}`));
        console.log(chalk.red.bold('========================\n'));
      }

      mostrarInformacion();
      break
    case 'fin':
      console.log(chalk.cyan('finalizando...'));
      process.exit(0);
      break;
    default:
      console.log(chalk.red('❌ Comando no reconocido ❌'));
  }

  process.stdout.write(chalk.green('Ingresa un nuevo comando: '));
});
