require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth sad modify guess clock equal gauge'; 
let testAccounts = [
"0x7cfb7fdd9c995712d09a081d829caaf8b2e8d637c8f159b41755a4f2e3df3625",
"0x56c2cc460788b5b565f99377ad5f9f2163303713c478993fa4e68e87eabca26c",
"0x1965c44758cb8940fc7b0d24bcb0ede8e440d0a6b73b3c553d3a9e953cd4c5d0",
"0xd5e4d4bfe63cc6ace91d9cb698fffeeb386b19d8fe9b90e6f6c48e9e8bfc83fd",
"0xd9b557a808367110e8cce7d62fc1a7e4c2dbee63d669ce512245697ec216ff63",
"0x60806f30f2bfdd5ef1d06b5204ebe2e610f9ec17b2d4ae876925e8fc78300ca0",
"0xacb42e813722b394bb1de554d4d65cb5cd9d4cc3f793cc0e2bd069287d7e65bc",
"0xd911acfc8cb3cbe438202882313544570eb6fc79b2e43aa19def195d5ba54c52",
"0x3874f193cebc1e117475eece040e5adb0165d01c124a9612ce1087486493e8eb",
"0xa13bdc1e7e52691b0d1ed4315e74d56884caef6073bea5c479bf7a84eaf0c53e"
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

