const collection: Array<any> = require('./sorted_collection.json')

export function find_item(name: string) {
    let nft_rank = collection.findIndex(nft => nft.name === name)
    if(nft_rank === -1) return console.log(`Sorry, an NFT with name ${name} doesn't exist`)
    return console.log(`Rank for ${collection[nft_rank].name} is ${nft_rank + 1}`)
}

find_item('Alien #20')