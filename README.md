![Peninsola logo](https://i.imgur.com/Ct76bhy.png)
# Solana statistical rarity tool
A statistical rarity tool for Solana NFTs.\
PRs are welcome!

---

An article explaining the code line by line can be found [here](https://medium.com/@peninsolaio/reverse-engineering-moonranks-absolute-rarity-algorithm-in-typescript-891c09762f44).

---
In order to better understand how statistical rarity works we've created an algorithm in node typescript disecting [moonrank.app](https://moonrank.app/) algorithm.

## Running the project

1. Clone the project \
`git clone https://github.com/emotionalboys2001/solana-nft-statistical-rarity.git`

2. Navigate to the project \
`cd solana-nft-statistical-rarity`

3. Install the project \
`yarn install` or `npm install`

4. Replace meta_aliens.json with your collections metadata \
For a guide on how to do this you can follow [this tutorial](https://medium.com/@peninsolaio/how-to-get-a-mint-list-and-token-metadata-from-any-solana-nft-collection-6bca875fcc31) \
After you've downloaded metadata make sure you put the correct file name in [sort.ts line 39](https://github.com/emotionalboys2001/solana-nft-statistical-rarity/blob/9fb9abb9b57ab72ec5a30b43ffb15d8c06303374/sort.ts#L39)

After that, just run ts-node sort.ts and it will export a file called `sorted_collection.json`. You can then use `get_rank.ts` to find ranks for specific NFTs.

---
If you need any help/support you can reach out to me on twitter [@peninsolaio](https://twitter.com/peninsolaio) or our [discord server](https://discord.gg/YZ3XNGxYP9)
