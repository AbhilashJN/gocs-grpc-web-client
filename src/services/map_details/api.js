import {MapDetailsServicePromiseClient} from './map_details_grpc_web_pb'
import {MapNameRequest} from './map_details_pb'


const getMapName=async ()=>{
    const client = new MapDetailsServicePromiseClient('http://localhost:8080')
    const req = new MapNameRequest()
    const resp = await client.getMapName(req,{})
    return resp.getMapName()
}


export default getMapName