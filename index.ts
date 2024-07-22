// write your NFT miner here

import {Address, TonClient} from "ton"


async function main () {
        const wallet = Address.parse(
            "UQD5Lk4F3Bz7BVLZaRVs5ctt_qqMYe24LuVO5Q9jSBf8Y7wn"
        );
        const collection = Address.parse(
            "EQDk8N7xM5D669LC2YACrseBJtDyFqwtSPCNhRWXU7kjEptX"
        );


        const client = new TonClient({
            endpoint: "https://testnet.toncenter.com.api/v2/jsonRPC"
        })

  const miningData = await client.callGetMethod(collection, 'get_mining_data');

  console.log(miningData);
}

main();