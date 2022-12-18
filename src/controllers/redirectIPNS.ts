import IPFSClient from '../libs/ipfs';
import dns from 'dns';

export default async function addToIPNS(req, res) {
    let domainSrch: string = req.hostname;
    let ipnsAddrCheck: boolean = false;

    // Check if IPNS key is present
    await IPFSClient.get(process.env.IPFS_PUBLIC_GATEWAY_URL + "/ipns/" + domainSrch)
        .then((resp) => {
            if(resp.status === 200){
                ipnsAddrCheck = true;
                return res.redirect(process.env.IPFS_PUBLIC_GATEWAY_URL + "/ipns/" + domainSrch);
            }
        }).catch((err) => {
            console.log(err.message);
        })
    let ipfsCid
    dns.resolveTxt('_ipfsaddr.' + req.hostname, (err, addresses) => {
        if (err) {
            console.log(err);
        }
        ipfsCid = addresses[0][0]
    })

    res.redirect(process.env.IPFS_PUBLIC_GATEWAY_URL + "/ipfs/"+ipfsCid)
}