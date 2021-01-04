const SUMMARY = "https://dev.huodiesoft.com/summary_api.php?action="

/**
 * 总销售占比
 */
const proportion = () => sendPOST({
  url: `${SUMMARY}proportion`,
  data: {},
})

/**
 * 销售同比增长
 * @param {string} startyear
 * @param {string} endyear
 */
const tbUp = ({
  startyear,
  endyear,
}) => sendPOST({
  url: `${SUMMARY}tbUp`,
  data: {
    startyear,
    endyear,
  },
})

/**
 * 销售环比增长
 * @param {string} startyear
 */
const hbUp = ({
  startyear,
}) => sendPOST({
  url: `${SUMMARY}hbUp`,
  data: {
    startyear
  },
})

/**
 * 交易额
 * @param {string} startyear
 */
const turnover = ({
  startyear,
}) => sendPOST({
  url: `${SUMMARY}turnover`,
  data: {
    startyear
  },
})

/**
 * 总成交金额
 */
const overall = () => sendPOST({
  url: `${SUMMARY}overall`,
  data: {

  },
})

/**
 * 销售客单同比增长 百分比
 * @param {string} startyear
 * @param {string} endyear
 */
const ktbUp = ({
  startyear,
  endyear,
}) => sendPOST({
  url: `${SUMMARY}ktbUp`,
  data: {
    startyear,
    endyear,
  },
})

/**
 * 销售客单环比增长
 * @param {string} startyear
 */
const khbUp = ({
  startyear,
}) => sendPOST({
  url: `${SUMMARY}khbUp`,
  data: {
    startyear
  },
})

/**
 * 销售客单同比增长 金额
 * @param {string} startyear
 */
const kmtbUp = ({
  startyear,
}) => sendPOST({
  url: `${SUMMARY}kmtbUp`,
  data: {
    startyear
  },
})

/**
 * 订单占比
 */
const orderamount = () => sendPOST({
  url: `${SUMMARY}orderamount`,
  data: {

  },
})

/**
 * 订单同比增长
 * @param {string} startyear
 * @param {string} endyear
 */
const otbUp = ({
  startyear,
  endyear,
}) => sendPOST({
  url: `${SUMMARY}otbUp`,
  data: {
    startyear,
    endyear,
  },
})

/**
 * 订单环比增长
 * @param {string} startyear
 */
const ohbUp = ({
  startyear,
}) => sendPOST({
  url: `${SUMMARY}ohbUp`,
  data: {
    startyear
  },
})

/**
 * 订单量趋势
 * @param {string} startyear
 */
const orderTrend = ({
  startyear,
}) => sendPOST({
  url: `${SUMMARY}orderTrend`,
  data: {
    startyear
  },
})

/**
 * 初始累计平台的金额
 * @param {string} start
 * @param {string} end
 */
const checkMonth = ({
  start,
  end,
}) => sendPOST({
  url: `${SUMMARY}checkMonth`,
  data: {
    start,
    end
  },
})

/**
 * 获取时间段内的订单
 * @param {string} time
 */
const orderList = ({
  time,
}) => sendPOST({
  url: `${SUMMARY}orderList`,
  data: {
    time
  },
})



////////////////////////////////////////////////////////lllll
/**
 * 统计列表..销售额排名统计
 * @param {year} 时间
 * @param {page} 页码
 * @param {size} 数量
 */
const total_turnover = ({
  year,
  page,
  size,
}) => sendPOST({
  url: `${SUMMARY}total_turnover`,
  data: {
    year,
    page,
    size
  },
})
/**
 * 线上线下销售额..线上线下销售额
 * @param {year} 时间
 * @param {page} 页码
 * @param {size} 数量
 */
const tg_erp_turnover = ({
  year,
  page,
  size
}) => sendPOST({
  url: `${SUMMARY}tg_erp_turnover`,
  data: {
    year,
    page,
    size
  },
})
/**
 * 商品最低售价..商品最低售价
 * @param {year} 时间
 * @param {page} 页码
 * @param {size} 数量
 */
const the_lowest_price = ({
  year,
  page,
  size
}) => sendPOST({
  url: `${SUMMARY}the_lowest_price`,
  data: {
    year,
    page,
    size
  },
})
/**
 * 商品库商品..商品库商品
 *
 */
const get_goods_list = ({
  
}) => sendPOST({
  url: `${SUMMARY}get_goods_list`,
  data: { 
  },
})

/**
 * 商品月份销售额情况..商品月份销售额情况
 *
 */
const total_turnover_by_month = ({
  year,
  page,
  size,
  goodsid
}) => sendPOST({
  url: `${SUMMARY}total_turnover_by_month`,
  data: { 
    year,
    page,
    size,
    goodsid
  },
})

/**
 * 商品平均售价..商品平均售价
 *
 */
const the_average_price = ({
  year,
  page,
  size,
  
}) => sendPOST({
  url: `${SUMMARY}the_average_price`,
  data: { 
    year,
    page,
    size,
    
  },
})
/**
 * 占比统计..占比统计
 *
 */
const total_rate = ({
    year,
    goodsid_list,
    other
}) => sendPOST({
  url:`${SUMMARY}total_rate`,
  data:{
    year,
    goodsid_list,
    other
  }
})
// {
//   "year": "2020",
//   "goodsid_list": [3,5,14],
//   "other":true
// }