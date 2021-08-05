import {HeatmapServicePromiseClient} from './heatmap_grpc_web_pb'
import {HeatmapRequest} from './heatmap_pb'




const getHeatmapForPlayer=async (player)=>{
    const client = new HeatmapServicePromiseClient('http://localhost:8080')
    const req = new HeatmapRequest()
    req.setPlayer(player)
    const resp = await client.getHeatmapPositions(req,{})
    const respObject = resp.toObject()
    const heatmapPoints ={}
    heatmapPoints["kill"] = respObject.killList.map(pt=>({'X':pt.x, 'Y':pt.y}))
    heatmapPoints["death"] = respObject.deathList.map(pt=>({'X':pt.x, 'Y':pt.y}))
    heatmapPoints["bomb_plant"] = respObject.bombPlantList.map(pt=>({'X':pt.x, 'Y':pt.y}))
    return heatmapPoints
}


export default getHeatmapForPlayer