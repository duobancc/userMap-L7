const { useState, useRef, useEffect, memo, Fragment } = React
console.log(this)
const { Scene, GaodeMap, District, Popup } = L7
const { DrillDownLayer } = District

// 商家排行
const RegionalRanking = memo(() => {

  // const selectRef = useRef()
  const { Column, Rose } = charts
  const [ranking, setRanking] = useState([])
  const [regional, setRegional] = useState([])


  useEffect(() => {
    const getRanking = request({
      data: {
        action: 'Regional_ranking',
        code: "",
        type: 1,
      }
    })
    const getRegional = request({
      data: {
        action: 'area_sort',
        type: 0
      }
    })

    axios.all([getRanking, getRegional]).then(axios.spread((ran, reg) => {
      reg.status === 200 && setRegional(reg.data)
      reg.status !== 200 && alert('接口错误')
      ran.status === 1002 && setRanking(ran.data)
      ran.status !== 1002 && alert('接口错误')
    }))

    return () => {

    }
  }, [])

  const color = ['#fff', '#1578ED', '#01F1E8', '#05C6FF', '#E66784', 'red']

  const roseConfig = {
    data: regional.filter(item => item.type !== '未知'),
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 1,
    innerRadius: .3,
    legend: false,
    sectorStyle: {
      stroke: '#161d31'
    },
    color: color,
    label: {
      style: {
        fill: '#01F1E8',
        opacity: 0,
        fontSize: 12
      },
      rotate: true
    }
  };

  const columnConfig = {
    data: ranking,
    autoFit: true,
    xField: 'name',
    yField: 'memberNum',
    point: {
      size: 5,
      shape: 'diamond',
    },
    columnStyle: {
      fill: 'l(270) 0:#1e3945 1:#47d6d9',
      fillOpacity: 1,
      lineOpacity: .5,
    },
    xAxis: {
      grid: null,
      label: {
        style: {
          fill: '#fff',
          fontSize: 14,
          fontWeight: 400
        },
        autoRotate: false
      }
    },
    yAxis: {
      grid: {
        line: {
          style: {
            stroke: '#00FBFF',
            opacity: .6
          }
        }
      },
      label: {
        style: {
          fill: '#00FBFF',
          fontSize: 8,
          fontWeight: 400
        }
      }
    },
    scrollbar: {
      type: 'horizontal',
      backgroundStyle: {
        fill: '#fff',
        color: '#fff',
        backgroundColor: '#fff'
      },
      handlerStyle: {
        fill: '#fff',
        color: '#fff',
        backgroundColor: '#fff'
      }
    }


  };

  return (
    regional.length > 1 && ranking.length > 1 &&
    <div className="regional-ranking" id="regional-ranking">
      <div className="regional">
        <p className="regional-title">区域排名</p>
        <div className="regional-container flex-row">
          <div className="account-for-regional">
            {regional.length > 1 && <Rose {...roseConfig} />}
          </div>
          <ul className="regional-legend ">
            <li> <span className="light-point c1"  ></span> 华南区： <span className="regional-value" style={{ color: '#fff' }} > {regional[0].value} </span></li>
            <li> <span className="light-point c2" ></span>华东区： <span className="regional-value" style={{ color: '#1578ED' }}> {regional[1].value} </span></li>
            <li> <span className="light-point c3"></span>西南区： <span className="regional-value" style={{ color: '#01F1E8' }}> {regional[2].value} </span></li>
            <li> <span className="light-point c4" ></span>华中区： <span className="regional-value" style={{ color: '#05C6FF' }}> {regional[3].value} </span></li>
            <li> <span className="light-point c5" ></span>华北区： <span className="regional-value" style={{ color: '#E66784' }}> {regional[4].value} </span></li>
            <li> <span className="light-point c6" ></span>未知区： <span className="regional-value" style={{ color: 'red' }}> {regional[5].value} </span></li>
          </ul>
        </div>
      </div>

      <div className="ranking">
        <div className="ranking-top flex-row">
          <p className="ranking-title">地区排名(Top10)</p>

          <select className='select-area' id="" onChange={(e) => {
            console.log(e.target.value)

            request({
              data: {
                action: 'Regional_ranking',
                code: "",
                type: e.target.value,
              }
            }).then(ran => {
              ran.status === 1002 && setRanking(ran.data)
              ran.status !== 1002 && alert('接口错误')
            })

          }}
          >
            <option value="0">请选择</option>
            <option value="1">省份</option>
            <option value="2">城市</option>
            <option value="3">区域</option>
          </select>
        </div>
        <div className="top10">
          <Column {...columnConfig} />
        </div>
      </div>


    </div>
  )
})

// 商家分布图 
const BusinessDistribution = memo(() => {

  const timer = useRef()
  const dataLenth = useRef()
  const [data, setData] = useState([])
  const [number, setNumber] = useState({ start: -1, end: 6 })

  useEffect(() => {
    request({
      data: {
        action: 'area_distributed',
        code: "",
        type: 1,
      }
    }).then(res => {
      dataLenth.current = res.data.length
      res.status === 1002 && setData(res.data)
      res.status !== 1002 && alert('接口错误')
    })


    timer.current = setInterval(() => {
      setNumber((pre) => {
        // console.log(pre, new Date().getTime(), dataLenth.current)
        let update = {}
        update.start = pre.start
        update.end = pre.end

        if (dataLenth.current > update.end) {
          update.start += 1
          update.end += 1
          return { ...pre, ...update }
        } else {
          update.start = -1
          update.end = 6
          return { ...pre, ...update }
        }
      })
    }, 1000)

    return () => {
      clearInterval(timre.current)
    }
  }, [])


  // console.log('渲染商家分布', number)

  return (
    <div className="business-distribution">
      <p className="bd-title">商家分布</p>
      <div className="bd-box">
        <table>
          <thead>
            <tr>
              <th>省份</th>
              <th>市</th>
              <th>区</th>
              <th>商家名称</th>
              <th>活跃用户</th>
            </tr>
          </thead>
          <tbody>
            {
              data.length > 1 &&
              data.slice(number.start, number.end).map((item, key) => {
                return <tr key={key + item.uniacid}>
                  <td>{item.province ? item.province : '未知'}</td>
                  <td>{item.city ? item.city : '未知'}</td>
                  <td>{item.district ? item.district : '未知'}</td>
                  <td>{item.name.replace( item.name.substr(2,2), '**')}</td>
                  <td> {item.num} </td>
                </tr>
              })
            }
          </tbody>

        </table>
      </div>
    </div>
  )
})

// 顶部大标题
const Title = memo(() => {
  let timer
  const textGradient = useRef()

  useEffect(() => {
    let s = 0;
    let e = 12;
    timer = setInterval(function () {
      s++
      e++
      textGradient.current.style.background = 'linear-gradient(109deg, #04d8ee ' + s + '%, #fff, #04d8ee ' + e + '%)';
      if (e >= 100) {
        s = 0
        e = 12
      }
    }, 50)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <p className="user-title" ref={textGradient}>火蝶云用户分布图</p>
  )
})

// 左上角日期
const Timer = memo(props => {
  let timer = null
  const [date, setDate] = useState('')
  useEffect(() => {
    timer = setInterval(() => {
      const date = `${moment().format('YYYY年MM月DD日')}
          ${moment().format('HH:mm:ss dddd')}`
      setDate(date)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="timer-date">
      {date}
    </div>
  )
})

// 页面top 内容
const Header = memo(() => {

  const [title, setTitle] = useState(false)
  return (
    <div className="header flex-row">
      <Timer />
      <Title />
      <div className="menu flex-row">
        <button className="fullScreen btn" onClick={fullScreen}>
          {title ? '退出全屏' : '全屏'}
        </button>
        <button className="back btn" onClick={() => {
          location.href = `https://www.lexiangpingou.cn/web/index.php?c=site&a=entry&m=lexiangpingou&do=data&ac=visualization_data&op=dashuju&uniacid=${getParamsString('uniacid')}&mode=${getParamsString('mode')}`
        }}>
          首页
				</button>
      </div>
    </div>

  )

  function fullScreen() {
    if (!document.fullscreenElement) {
      setTitle(true)
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        setTitle(false)
        document.exitFullscreen();
      }
    }
  }


})

const Maps = memo(props => {

  const getAreaData = async config => {
    let res = await request({
      params: {},
      data: {
        action: 'area_statistics',
        ...config
      }
    })
    if (res.status === 1002) {
      return res.data
    } else {
      return false
    }
  }

  const color = [
    "#071A75",
    "#0929A5",
    "#1947D9",
    "#243DC9",
  ]
  // const color = [
  //   "rgb(255,255,217)",
  //   "rgb(237,248,177)",
  //   "rgb(199,233,180)",
  //   "rgb(127,205,187)",
  //   "rgb(65,182,196)",
  //   "rgb(29,145,192)",
  //   "rgb(34,94,168)",
  //   "rgb(12,44,132)"
  // ];
  // const color = ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'];

  // 计算区间
  const getSection = (array) => {
    const max = Math.max.apply(Math, array.map(item => item.memberNum))
    const min = Math.min.apply(Math, array.map(item => item.memberNum))
    const colorSection = parseInt((max - min) / color.length)
    return { max, min, colorSection }
  }



  useEffect(() => {

    // 计算颜色分布
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        center: [106.58657982223511, 38],
        pitch: 0,
        style: 'blank',
        zoom: 4.25,
        dragEnable: false,
        zoomEnable: true
      }),
      logoVisible: false
    });

    scene.on('loaded', () => {
      const drillLayer = new DrillDownLayer(scene, {
        customTrigger: false,
        data: [],
        joinBy: ['NAME_CHN', 'name'],
        depth: 0,
        province: {
          // chinaNationalStroke: '#474747', // 国界线
          // chinaNationalWidth: 2,
          // coastlineStroke: '#ff762e', //海岸线
          // coastlineWidth: 1,
          // nationalStroke: '#ff762e',
          depth: 1,
          provinceStroke: 'white', // 省界线
          autoFit: false,
          data: props.provinceData
        },
        city: {
          cityStroke: 'white',
          cityStrokeWidth: 1,
          autoFit: true,
          // fill: {
          // 	color: {
          // 		file: 'member'
          // 	}
          // }
        },
        country: {
          cityStroke: 'white',
          cityStrokeWidth: 1,
          autoFit: true,
        },
        viewStart: 'Country',
        viewEnd: 'City',
        fill: {
          color: {
            field: 'memberNum',
            values: (memberNum) => {
              let d = memberNum
              return d > 62 ?
                color[0] :
                d > 31 ?
                  color[1] :
                  d > 0 ?
                    color[2] :
                    color[3];
            }
          },
          activeColor: '#00fbff',
        },
        label: {
          size: 16,
        },
        popup: {
          enable: true,
          Html: props => {
            return `
    					<div class="popup-html">
    						<p>${props.NAME_CHN} </p>
    						<p>${props.memberNum ? props.memberNum : 0} 家</p>
    					</div>
    					`
          },
        }
      })

      // drillLayer.provinceLayer.on('undblclick', (e) => {
      //   console.log(e)
      // })

      drillLayer.cityLayer.on('undblclick', (e) => {
        if (props.chinaRef.current.style.display === 'none') {
          props.chinaRef.current.style.display = 'flex'
          props.chinaRef.current.style.left = '500px'

        } else {
          console.log('-_-')
        }
      })

      drillLayer.provinceLayer.on('click', async (e) => {

        props.chinaRef.current.style.display = 'none'

        let areacode = e.feature.properties.areacode
        let cityData = await getAreaData({
          type: 2,
          code: areacode
        })

        if (cityData) {
          drillLayer.drillDown([areacode], cityData)
        } else {
          alert('该地区无数据')
        }
      })

      drillLayer.cityLayer.on('click', async (e) => {

        props.chinaRef.current.style.display = 'none'

        let areacode = e.feature.properties.areacode
        let countryData = await getAreaData({
          type: 3,
          code: areacode
        })

        if (countryData) {
          drillLayer.drillDown([areacode], countryData)
        } else {
          alert('该地区无数据')
        }

      })

    })

    return () => {

    }
  }, [props.provinceData])


  return (
    <div className="map" id="map"></div>
  )

})

const TotalNumberOfFans = memo(() => {

  const [totalNumberOfFans, setTotalNumberOfFans] = useState("")
  const addFans = useRef()
  const randomNumberRef = useRef()
  // const cleanRef = useRef()


  useEffect(() => {
    request({ data: { action: 'member_total' } }).then(res => {
      if (res.status === 200) {

        console.log(res.data.length, res.data.split(""))

        setTotalNumberOfFans(res.data)
        addFans.current = setInterval(() => {
          setTotalNumberOfFans((pre) => {
            return parseInt(pre) + 1
          })
        }, 3000)
      } else {
        alert('获取粉丝数据出错')
      }
    })

    // cleanRef.current = setInterval(() => {
    //   let random = getRandomNumber(0, 9)
    //   console.log(randomNumberRef)
    //   randomNumberRef.current.style.transform = `translate(-50%, -${random * 10}%)`
    // }, 6000)

    return () => {
      clearInterval(addFans.current)
      // clearInterval(cleanRef.current)
    }
  }, [])
  return (
    <Fragment>
      <div className="box flex-row" >
        {
          totalNumberOfFans && totalNumberOfFans.toString().split("").map((item, index) => {
            if (!isNaN(item)) {
              return <p className="box-item" key={item + index}>
                <span ref={randomNumberRef} style={{ transform: `translate(-50%, -${parseInt(item) * 10}%)` }} num={item}>0123456789</span>
              </p>
            } else {
              return <span key={index}></span>
            }
          })
        }

      </div>
    </Fragment>

  )



  // 设置每一位数字的偏移
  function setNumberTransform() {
    let numberItems = randomNumberRef.current
    let numberArr = TotalNumberOfFans.filter(item => !isNaN(item))
    for (let index = 0; index < numberItems.length; index++) {
      let elem = numberItems[index]
      elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
    }
  }



  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

})

const UserMap = memo(() => {

  const [mapData, setMapData] = useState({})
  const chinaRef = useRef()




  useEffect(() => {

    const initMapData = request({ data: { action: 'area_statistics', type: 1, code: '' } })
    const totalNumberOfUser = request({ data: { action: 'uniacid_total' } })
    axios.all([initMapData, totalNumberOfUser]).then(axios.spread((map, total) => {

      if (map.status === 1002) {
        // let sum = 0
        // map.data.forEach(item => {
        //   return sum += parseInt(item.memberNum)
        // })
        setMapData({ provinceData: map.data, totalNumberOfUser: total.data })
      } else {
        alert('获取地图数据出错')
      }

    }))



    return () => {
    }
  }, [])




  return (

    <div id="user-map">

      { mapData.provinceData && <Maps {...mapData} chinaRef={chinaRef} />}

      {/* <!-- 地图四角 --> */}
      <img className="rahmen-top-left rahmen" src="./img/rahmen-icon.png" />
      <img className="rahmen-top-right rahmen" src="./img/rahmen-icon.png" />
      <img className="rahmen-bottom-left rahmen" src="./img/rahmen-icon.png" />
      <img className="rahmen-bottom-right rahmen" src="./img/rahmen-icon.png" />
      {/* <!-- 图例 --> */}
      <div className="map-lengen flex-row">
        <div className="lengen-text flex-column">
          <span>高</span>
          <span>低</span>
        </div>
        <ul>
          <li style={{ background: "#071A75" }}></li>
          <li style={{ background: "#0929A5" }}></li>
          <li style={{ background: "#1947D9" }}></li>
          <li style={{ background: "#243DC9" }}></li>
        </ul>
      </div>


      <div className="flex-row map-top">
        <div className="service-businesses-num flex-column">
          <p className="sbn-text">火蝶云已服务商家</p>
          <div className="sbn-line"></div>
          <p className="sbn-num" id="allBusinessNum"> {mapData.totalNumberOfUser} <span>家</span> </p>
        </div>



        <TotalNumberOfFans />
      </div>

      {/* <!-- 中华人民共和国 --> */}
      <div className="china flex-row" ref={chinaRef}>
        <img className="location-icon" src="./img/location-icon.png" />
        <p className="china-text">中华人民共和国</p>
      </div>
    </div>
  )

})

// 入口
const App = () => {
  return (
    <Fragment>
      <Header />
      <BusinessDistribution />
      <RegionalRanking />
      <UserMap />
    </Fragment>
  )

}

ReactDOM.render(<App />, document.getElementById('app'))