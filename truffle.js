var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "tiny uncle decorate say spell fruit sniff skate soccer decide credit sword";
var accessToken = "ea3a3760d7ca463bb366b5a1d2f5dacb";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
  	development: {
  		host: "localhost",
  		port: 8545,
  		network_id: "10",
		gas: 2000000,
		gasPrice: 100
  	},
  	ropsten: {
  		provider: function() {
  			return new HDWalletProvider(
  				mnemonic,
  				"https://ropsten.infura.io/" + acceaaToken
  				);
  		},
  		network_id: 3,
  		gas: 500000
  	}
  }
};
