
#  IPFS Host

Want to host your content on IPFS and have it link your your custom domain? IPFS Host is a simple tool that will help you do just that.

![IPFS Host](https://safe.b68dev.xyz/FRDO0zwP.jpg)

##  How it works

IPFS Host is a simple Node.js application that will run on your server. It will listen for requests to your custom domain and then redirect them to the IPFS gateway.

###  Concept

> It is using 2 ways to connect to IPFS

1.  < Your Domain > -> IPFS Host ->IPFS Gateway -> IPNS -> IPFS Content

2.  < Your Domain > -> IPFS Host -> Fetch CID for DNS Records -> IPFS Gateway -> IPFS Content
 

##  Installation

###  Setup

```bash
git clone https://github.com/BRAVO68WEB/ipfs_host
cd ipfs_host
yarn
```

###  Configuration

```bash
cp .env.example .env
```

Edit the .env file with required Keys and IPFS gateways.
  

###  Run

```bash
yarn start
```

##  License

[MIT](LICENSE)
