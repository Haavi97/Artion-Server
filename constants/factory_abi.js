const CollectionFactoryContract = {
    MAINNET_721_PRIVATE: '0xdb97189CB4be936919594Ba5b6e8DA0c6649313c', //FantomNFTFactoryPrivate
    MAINNET_721_PUBLIC: '0xc389b01A6b56e9Ba23e8F201a257168a51f14762', //FantomNFTFactory
    TESTNET_721_PRIVATE: '0xdb97189CB4be936919594Ba5b6e8DA0c6649313c', //FantomNFTFactoryPrivate
    TESTNET_721_PUBLIC: '0xc389b01A6b56e9Ba23e8F201a257168a51f14762', //FantomNFTFactory
    MAINNET_1155_PRIVATE: '', //FantomArtFactoryPrivate
    MAINNET_1155_PUBLIC: '', //FantomArtFactory
    TESTNET_1155_PRIVATE: '', //FantomArtFactoryPrivate
    TESTNET_1155_PUBLIC: '', //FantomArtFactory
    ABI: [{
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'exists',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
    }]
};

module.exports = CollectionFactoryContract;