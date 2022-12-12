import axios from 'axios';
import config from '../config';

const { IPFS_API_URL, IPFS_USERNAME, IPFS_PASSWORD } = config;

const client = axios.create({
    baseURL: `${IPFS_API_URL}/api/v0`,
    timeout: 10000,
    auth: {
        username: IPFS_USERNAME,
        password: IPFS_PASSWORD
    }
});

export default client;