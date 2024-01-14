const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/script.js', // Ruta al archivo principal de JavaScript
  output: {
    filename: 'script.js', // Nombre del archivo JS de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '.' }, // Copiar todo desde la carpeta 'public' a 'dist'
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [new TerserPlugin()], // Minimizar JS
  },
};
