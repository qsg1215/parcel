const originData = {
  enterpriseCode: '91510500204912335K',
  deviceId: '190e76db8120406c81287849a29306e4',
  collectItemConfig: [
    {
      statType: 0,
      equipmentCode: '00',
      dataUsageCode: '80',
      energyClassCode: '02',
      used: false,
      energyTypeCode: '3400',
      dataCode: '00-00-0000023400-80',
      equipmentUnitCode: '00',
      processCode: '00',
      scope: 1,
      name: 'A 相电流',
      inputType: 4,
      processUnitCode: '00',
      collectSystemName: 'MES',
    },
  ],
  enterprise: {
    energyOfficialPosition: '',
    energyRespName: '',
    zipCode: '',
    code: '91510500204912335K',
    fieldName: '工业',
    energyConsumeLevel: 2,
    corporationName: '陆相东',
    regionName: '',
    latitude: 28.51,
    leadingProduct: '',
    typeName: '国有企业',
    remark: '',
    deviceId: '190e76db8120406c81287849a29306e4',
    energyOfficial: '',
    industryCode: 'C4190',
    group_address: '',
    regionCode: '510522',
    productionLine: '',
    passOrg: '',
    jgzh: false,
    fax: '',
    energyRespPhone: '',
    email: '',
    longitude: 105.55,
    registerDate: null,
    enterpriseCode: '91510500204912335K',
    address: '',
    corporationCode: '91510500204912335K',
    group_name: '',
    fieldCode: '100',
    center: false,
    energyPass: false,
    passDate: null,
    group_remark: '',
    url: '',
    typeCode: '110',
    energyOffice: '',
    phone: '0830--5482213',
    name: '四川天华股份有限公司',
    energyOfficialPhone: '',
  },
  group: {
    name: '',
    address: '',
    remark: '',
  },
  process: [
    {
      system: true,
      processName: '全厂',
      processCode: '00',
      remark: '',
      industryCode: 'C31',
    },
    {
      system: true,
      processName: '全厂',
      processCode: '00',
      remark: '',
      industryCode: 'D44',
    },
    {
      system: true,
      processName: '全厂',
      processCode: '00',
      remark: '',
      industryCode: 'C25',
    },
    {
      system: true,
      processName: '炼油装置',
      processCode: '01',
      remark: '',
      industryCode: 'C25',
    },
    {
      system: true,
      processName: '乙烯装置',
      processCode: '02',
      remark: '',
      industryCode: 'C25',
    },
    {
      system: true,
      processName: '聚丙烯装置',
      processCode: '03',
      remark: '',
      industryCode: 'C25',
    },
    {
      system: true,
      processName: 'PX联合装置',
      processCode: '04',
      remark: '',
      industryCode: 'C25',
    },
    {
      system: true,
      processName: 'PTA装置',
      processCode: '05',
      remark: '',
      industryCode: 'C25',
    },
    {
      system: true,
      processName: '合成橡胶装置',
      processCode: '06',
      remark: '',
      industryCode: 'C25',
    },
    {
      system: true,
      processName: '焦化工序',
      processCode: '01',
      remark: '',
      industryCode: 'C31',
    },
    {
      system: true,
      processName: '烧结工序',
      processCode: '02',
      remark: '',
      industryCode: 'C31',
    },
    {
      system: true,
      processName: '球团工序',
      processCode: '03',
      remark: '',
      industryCode: 'C31',
    },
    {
      system: true,
      processName: '高炉炼铁工序',
      processCode: '04',
      remark: '',
      industryCode: 'C31',
    },
    {
      system: true,
      processName: '转炉工序',
      processCode: '05',
      remark: '',
      industryCode: 'C31',
    },
    {
      system: true,
      processName: '电路工序',
      processCode: '06',
      remark: '',
      industryCode: 'C31',
    },
    {
      system: true,
      processName: '连铸工序',
      processCode: '07',
      remark: '',
      industryCode: 'C31',
    },
    {
      system: true,
      processName: '热轧工序',
      processCode: '08',
      remark: '',
      industryCode: 'C31',
    },
    {
      system: true,
      processName: '冷轧工序',
      processCode: '09',
      remark: '',
      industryCode: 'C31',
    },
  ],
  processUnit: [
    {
      commDate: '2021-08-26',
      code: '00',
      processName: '全厂',
      processCode: '00',
      name: '全厂',
      designedCapacity: '设计产能30万吨/年',
    },
  ],
}

function cloneDeep(data){
    function digui(orginData){
        let result = {};
        Object.keys(orginData).map( function(key){
            const type = Object.prototype.toString.call(orginData[key]);
            console.log(type, 'xx')
            switch (type){
                case '[object Array]':
                    result[key] = orginData[key].map(function (item){return  digui(item)} )
                break;
                case '[object Object]':
                    result[key] = digui( orginData[key])
                    break;
                default:
                    result[key] = orginData[key]
                    break
            }
        })
        return  result
    }
   return digui(data)
}
var ss = cloneDeep(originData)
console.log(ss, 'xxx')

