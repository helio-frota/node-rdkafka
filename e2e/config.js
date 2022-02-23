if (process.env.CLIENT_USERNAME && process.env.CLIENT_PASSWORD) {
  var config = {
    'sasl.username':process.env.CLIENT_USERNAME,
    'sasl.password': process.env.CLIENT_PASSWORD,
    'security.protocol': 'SASL_SSL',
    "sasl.mechanisms": "PLAIN",
  };
  
  module.exports = config;
}