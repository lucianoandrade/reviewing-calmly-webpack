const path = require('path');

module.exports = {
  entry: './app/src/js/app.js', // Entrada onde a partir desse aqruivo é carregados os scritps, libs, etc...
  output: { // Saída do arquivo
    filename: 'bundle.js', // nome do aquitivo gerado (pode ser qualquer um)
    path: path .resolve(__dirname, '/app/dist') // Caminho onde será gerado o arquivo (precisa ser absoluto, por isso o 'path-resolve')
  }
};