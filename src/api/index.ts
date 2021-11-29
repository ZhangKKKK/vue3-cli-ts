import { axios } from '@/utils/request'
const baseUrl = '/api'

/**
 * 查询客户列表
 * {"AccountId":"String","AccountName":"String","PageIndex":0,"PageSize":0,"OrdereBy":"String","IsDesc":0,"UserId":0,"SystemType":0,"Source":0}
 * @param parameter
 * @returns {*}
 */
export function getAccountList (parameter: any) {
  return axios({
    url: baseUrl + '/json/reply/QueryCustomerInfoPageReq',
    method: 'post',
    data: parameter
  })
}

