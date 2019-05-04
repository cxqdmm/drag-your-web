
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
})
process.env.NODE_ENV = 'development';
require('./server')