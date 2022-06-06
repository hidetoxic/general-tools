/*
 * @Author: hidetodong
 * @Date: 2022-06-06 22:04:48
 * @LastEditTime: 2022-06-06 22:28:31
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /general-tools/src/modules/sensorDpmParser.ts
 * HIDETOXIC - 版权所有
 */

/** 解析埋点数据 */
function parseDpmData(source: string):string {   
    const sourceDataArr = source.split('?')
    
    const params = sourceDataArr[1]

    const paramsArr = params.split('&')

    const encodedData = paramsArr[1]?.split('=')[1]

    const base64Data = decodeURIComponent(encodedData)

    const normalData = Buffer.from(base64Data,'base64').toString()

    return normalData
}

module.exports = {
    parseDpmData
}