import IPFSClient from '../libs/ipfs';

export default async function addToIPNS(req, res) {
    const { cid } = req.body;
    // await IPFSClient.post(`/name/publish?arg=/ipfs/${cid}`).then((response) => {
    //     res.status(200).send(response.data);
    // })
    res.status(200).send({
        status: "W.I.P"
    })
}