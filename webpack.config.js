const path = require('path'); //importo do noe pra pegar o caminho absoluto
const HtmlWebpackPlugin = require('html-webpack-plugin'); //plugin para gerar o html
// const CopyWebpackPlugin = require('copy-webpack-plugin'); //plugin para copiar arquivos (para gerar o css)

module.exports = {
  entry: './app/src/js/app.js', // Entrada onde a partir desse aqruivo é carregados os scritps, libs, etc...
  output: { // Saída do arquivo
    filename: 'bundle.js', // nome do aquitivo gerado (pode ser qualquer um)
    path: path.resolve(__dirname, './app/dist'), // Caminho onde será gerado o arquivo (precisa ser absoluto, por isso o 'path-resolve')
    clean: true // limpa o arquivo antes de gerar um novo
  },
  module: { // chave onde vou configurar meus loaders
    rules: [ // chave onde vou configurar meus loaders
      { test: /\.css$/, use: ['style-loader', 'css-loader']  } 
      // css-loader carregar o css importado no app.js e aplica no bundle e o style-loader extrai o css gerado no bundle para um css
    ]
  },
  plugins: [ // chave onde vou configurar meus plugins
    new HtmlWebpackPlugin({  // nova instância do plugin
      template: './app/src/app.html', // o plugin HtmlWebpackPlugin vai ler o arquivo HTML e criar um a partir deste
      filename: 'app.html', // o nome do arquivo gerado
      hash: true, // gera um hash para cada arquivo gerado
    }),
    // new CopyWebpackPlugin({ // nova instância do plugin
    //   patterns: [
    //     { from: './app/src/css', to: 'css' } // copia os arquivos css para a pasta css
    //   ]
    // })
  ]
};