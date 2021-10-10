require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remind minor imitate private frame taste'; 
let testAccounts = [
"0xf98a51e0344d03fc70eba127d6eb889fa203e8685b4fc007a5c6d78a3c5696c9",
"0xb6dc4e7974926b06e2cefa5bd8f0ecddba5109a272c4ad9ca3d1faf39cab549e",
"0x254b24006b7f84e5712a11c910c39bf5737b11ad1efd11c2ba9ea275095a3e43",
"0x51f6cd376416b9bc505dc592ecdc3fa9a3a1db08cb549981ad4de8bab45539fd",
"0xd31f6faf15cb149825c9508da316f8e394cc677a1b7cfbf8df0c038d284010dd",
"0x08bb6e55a51a17d6e9176b6bcdada4e2b5ccf29ab98a0d2c845d2f20ca202945",
"0xbf53247ae0454f01da7b12d68472084fada06e9d8393e5155187b2bc35da5ec3",
"0xd7fd5957e155052f6d3656cb36b509c886779fa304ca6262eb56581ac1db6581",
"0xb2560c2f1b9df10c011dcc4faadb13bf27dbb7b845c453095fdb0465eb9a5dc8",
"0xce82aece5ab583a21346d7e1533d32fad519680a15eeb891d34ff379e099134e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

