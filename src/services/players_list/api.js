import {PlayersListServicePromiseClient} from './players_list_grpc_web_pb'
import {PlayersListRequest} from './players_list_pb'




const getPlayersList=async ()=>{
    const client = new PlayersListServicePromiseClient('http://localhost:8080')
    const req = new PlayersListRequest()
    const resp = await client.getPlayersList(req,{})
    return resp.getNamesList()
}


export default getPlayersList