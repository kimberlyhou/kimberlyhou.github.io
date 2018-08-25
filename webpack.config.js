var path = require('path');

module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: "./webpack/entry.js",
  output: {
    path: path.join(__dirname, "assets/javascripts"),
    filename: "bundle.js",
  },
  module: {
  	rules: [
	  	{
	        test: /\.jsx?$/,
	        loader: 'babel-loader',
	        exclude: /node_modules/,
	        query: {
	          cacheDirectory: true,
	          presets: ['react', 'es2015']
	        }
	     }
     ]
  }
};
