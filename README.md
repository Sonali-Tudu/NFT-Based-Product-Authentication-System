# NFT-Based-Product-Authentication-System

![A product's Supply Chain Journey](journey_of_a_product.png)

## Project Overview
Consumers usually prefers the product with cheaper price given the product has an acceptable quality. Using this insight, scammers or even the factory with the knowledge of producing the same type of product will try to produce a counterfeit product trying to achieve a lower price than the market to gain sales. Hence we proposed a project titled "NFT-Based Product Authentication System" which is a decentralized application (dApp) designed to ensure the authenticity of pharmaceutical products in their supply chain using Non-Fungible Tokens (NFTs). Each product is linked to a unique NFT stored on a blockchain, allowing consumers and businesses to verify the authenticity and ownership of products. This system aims to combat counterfeit goods and provide a transparent method for product verification.


## Highlights
- An NFT token is created out of the product's details which is then splitted into an Essential Share(ES) and many Non-Essential Shares(NES) to be distributed to the different members of the supply chain.
- The ES is shared with the Manufacturer and the NES's are shared with the rest of the supply chain members.
- The ES is converted to a QR Code which is pasted on the product.
- For verification, the QR code is scanned by rest of the members of the supply chain and a linking is done with the ES on the product with the NES they have received personally.
- If they have given the correct NES the product is verified and moved forward.
- Towards the last till the customer, the timestamp and location is marked which can be checked by the customer when he/she scans the QR code on the product.
- If the product is fake at any stage then the supply process is stopped there itself and the product is announced fake.

## STAGE A (MANUFACTURER)
- The manufacturer will signup into our website after which he will be asked to sign in.
- After the sign in process is validated, he will be shared with a PRIVATE SHARE for two-factor authentication through which he can proceed to the next phase.
- The manufacturer will then be redirected to the company registration page.
- He chooses between 'Registered' or 'Not Registered.' If not, he needs to add company details first; otherwise, he can proceed to add product details.
- On clicking the upload button, the product details will be submitted back to the backend.

## STAGE B (DISTRIBUTOR, RETAILER, WHOLESALER)
- They will  also signup into our website after which they will be asked to sign in.
- After the sign in process is validated, they too will be shared with a PRIVATE SHARE for two-factor authentication through which they can proceed to the next phase.
- These recipients will then scan the QR and then they will be redirected to a page where they will have to put the NES.
- They will receive their respective NES in their respective Knuct wallet-chat sent by their manufacturer.
- The NES put will be recombined with ES associated to the QR to check the product’s authenticity.
- If the combination matches, a verified page will be shown with the existing product history made of product id and timestamp at which the product was successfully authenticated.
- If the combination doesn’t match, the process will stop there itself and the fake product is identified.

## STAGE C (CONSUMER)
- The consumer can scan the QR code to access  the history of the product in the supply chain alongwith with location and timestamp details at each stage.

## Contributing
Contributions are welcome! If you have suggestions or improvements, please create a pull request or open an issue.
