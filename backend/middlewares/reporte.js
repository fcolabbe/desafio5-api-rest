import fs from 'fs';

export const middleware = (req, res, next) => {
  const logEntry = `Ruta consultada: ${req.originalUrl} - ${new Date().toISOString()}\n`;

  // Imprimir en la consola
  console.log(logEntry);

  // Guardar en un archivo de log
  fs.appendFile('log.txt', logEntry, (err) => {
    if (err) {
      console.error('Error al escribir en el archivo de log', err);
    }
  });

  next();
};
