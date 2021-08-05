import {StatsSummaryServicePromiseClient} from './stats_summary_grpc_web_pb'
import {GetStatsSummaryRequest} from './stats_summary_pb'




const getStatsSummary=async (player,statType)=>{
    const client = new StatsSummaryServicePromiseClient('http://localhost:8080')
    const req = new GetStatsSummaryRequest()
    req.setPlayer(player)
    req.setStatType(statType)
    const resp = await client.getStatsSummary(req,{})
    const respObject = resp.toObject()
    let dataObject = {}

    if (resp.hasAllAccuracySummaries()){
        dataObject = respObject.allAccuracySummaries
    } else if (resp.hasAllDamageSummaries()){
        dataObject = respObject.allDamageSummaries
    } else if (resp.hasAllDeathsSummaries()){
        dataObject = respObject.allDeathsSummaries
    }
    const statsSummary = {
        item_fields: respObject.itemFieldsList,
        comparison_fields: respObject.comparisonFieldsList,
        data: dataObject.dataList.map(data=>({category: data.category, items: data.itemsList}))
    }
    return statsSummary
}


export default getStatsSummary