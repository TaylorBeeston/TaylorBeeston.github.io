const HtmlWebpackPlugin = require('html-webpack-plugin');

const webPage = ({ filename, chunks }) => {
  const pageName =
    filename === 'index.html'
      ? 'Home'
      : filename[0].toUpperCase() + filename.slice(1).replace(/\..*$/, '');
  const title = `Taylor Beeston | ${pageName}`;

  return new HtmlWebpackPlugin({
    chunks,
    filename,
    title,
    template: './src/layout.hbs',
    inject: 'body'
  });
};

module.exports = webPage;
