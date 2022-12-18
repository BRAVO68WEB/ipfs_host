import axios from "axios";

const API = axios.create() 

API.interceptors.request.use(
    config => {
      const newConfig : any = { ...config }
      newConfig.metadata = { startTime: new Date() }
      return newConfig
    },
    error => {
      return Promise.reject(error)
    }
  )
  API.interceptors.response.use(
    response => {
      const newRes: any = { ...response }
      newRes.config.metadata.endTime = new Date()
      newRes.duration = newRes.config.metadata.endTime - newRes.config.metadata.startTime
      return newRes
    },
    error => {
      const newError = { ...error }
      newError.config.metadata.endTime = new Date()
      newError.duration =
        newError.config.metadata.endTime - newError.config.metadata.startTime
      return Promise.reject(newError)
    }
  )

export default async () => {
    await API.get(process.env.IPFS_PUBLIC_GATEWAY_URL + '/ipfs/'+ process.env.IPFS_CHECK_HASH)
    .then((response: any) => {
        if(response.status === 200){
            console.log("Connected to ipfs public gateway at " + response.duration + "ms")
        }
    }).catch((errResponse)=>{
        console.error("Unable to connect to ipfs public gateway")
    })

    await API.get(process.env.IPFS_GATEWAY_URL + '/ipfs/'+ process.env.IPFS_CHECK_HASH)
    .then((response: any)=>{
        if(response.status === 200){
            console.log("Connected to " + process.env.IPFS_GATEWAY_URL + " at " + response.duration + "ms")
        }
    }).catch((errResponse)=>{
        console.error("Unable to connect to " + process.env.IPFS_GATEWAY_URL)
    })
}