import { useEffect, useImperativeHandle, useRef } from "react";
import * as echarts from 'echarts';
import { useDeepCompareEffect, useMount, useSize, useUnmount, useUpdateEffect } from "ahooks";
import classNames from 'classnames';

const EchartsModule = ({
  // https://echarts.apache.org/zh/api.html#echarts.init
  // 初始化传入的 opts
  opts = { renderer: 'svg' },
  // 配置项
  options = {},
  // 数据集合
  seriesData = [],
  // 自动切换的时间跨度
  intervalTime = 1500,
  // 是否自动播放
  autoPlay = true,
  // 是否自动添加鼠标上移事件
  isAddOn = true,
  onRef,
  className = ''
}) => {
  
  const echartsRef = useRef(null);
  let myChart = useRef(null);
  let echartsOptions = useRef({});
  let myChartEventTime = useRef(null);
  let currentSeriesIndex = useRef(0);
  let currentDataIndex = useRef(-1);
  let timer = useRef(intervalTime);

  // 是否调用过 echartsPlay
  let isEchartsPlay = useRef(false);
  // echarts初始化
  function init() {
    destroyEchart() //判断是否有echart实例，如果有，先销毁
    myChart.current = echarts.init(echartsRef.current, null, opts)
    update()

    if (isAddOn) {
      addEventFn()
    }
  }

  // 绑定事件
  function addEventFn() {
    // 鼠标移上查看的时候，暂停动画
    myChart.current.on('mouseover', 'series', event => {
      // 取消之前高亮的图形
      myChart.current.dispatchAction({
        type: 'downplay',
        seriesIndex: currentSeriesIndex.current,
        dataIndex: currentDataIndex.current
      })
      echartsPause()
    })
    // 鼠标移出的时候打开动画
    myChart.current.on('mouseout', 'series', event => {
      // 自动播放 或者 调用过 echartsPlay
      if (autoPlay || isEchartsPlay.current) echartsPlay(true, event.seriesIndex, event.dataIndex - 1)
    })
  }

  // 移除事件
  function removeEventFn() {
    myChart.current.off('mouseover')
    myChart.current.off('mouseout')
  }

  // 数据更新
  function update() {
    // 逻辑处理组件options参数
    const curOptions = {
      ...options,
      series: seriesData
      // other options here ...
    }
    echartsOptions.current = curOptions
    // 调用ECharts组件setOption更新
    myChart.current.setOption(curOptions, true)
    if (curOptions.series.length && autoPlay) {
      myChart.current.dispatchAction({
        type: 'highlight',
        seriesIndex: currentSeriesIndex.current,
        dataIndex: currentDataIndex.current
      })
      // 显示 tooltip
      myChart.current.dispatchAction({
        type: 'showTip',
        seriesIndex: currentSeriesIndex.current,
        dataIndex: currentDataIndex.current
      })
      echartsPlay(false, currentSeriesIndex.current, currentDataIndex.current <= seriesData[currentSeriesIndex.current].data.length - 1 ? currentDataIndex.current : -1)
    }
  }

  // 销毁echarts
  function destroyEchart() {
    if (myChart.current) {
      if (isAddOn) {
        removeEventFn()
      }
      if (typeof myChart.current.clear === 'function') myChart.current.clear()
      if (typeof myChart.current.dispose === 'function') myChart.current.dispose()
      myChart.current = null
    }
  }

  /**
   * echarts开启动画，可手动调用
   * clear: 是否立即开始动画，并清除上个定时器，开启下个定时器，默认为 false
   * seriesIndex: series 中的第几项数据，默认为 0
   * dataIndex: series[seriesIndex].data 中的第几项，默认为 -1
   */
  function echartsPlay(clear = false, seriesIndex = 0, dataIndex = -1) {
    if (clear) {
      echartsPause()
    }
    isEchartsPlay.current = true
    currentSeriesIndex.current = seriesIndex
    currentDataIndex.current = dataIndex
    if (!myChartEventTime.current) {
      echartsEventPlay(seriesIndex)
    }
  }

  function echartsTimeout(seriesIndex = 0) {
    myChartEventTime.current = setTimeout(() => {
      echartsEventPlay(seriesIndex)
    }, timer.current)
  }

  function echartsEventPlay(seriesIndex = 0) {
    const dataLen = echartsOptions.current.series[seriesIndex].data.length
    if (myChart.current && myChart.current.dispatchAction) {
      // 取消之前高亮的图形
      myChart.current.dispatchAction({
        type: 'downplay',
        seriesIndex,
        dataIndex: currentDataIndex.current
      })
      currentDataIndex.current = (currentDataIndex.current + 1) % dataLen
      // 高亮当前图形
      myChart.current.dispatchAction({
        type: 'highlight',
        seriesIndex,
        dataIndex: currentDataIndex.current
      })
      // 显示 tooltip
      myChart.current.dispatchAction({
        type: 'showTip',
        seriesIndex,
        dataIndex: currentDataIndex.current
      })
    }
    echartsTimeout(seriesIndex)
  }

  // echarts关闭动画，可手动调用
  function echartsPause() {
    if (myChart.current && myChart.current.dispatchAction) {
      // 取消之前高亮的图形
      myChart.current.dispatchAction({
        type: 'downplay',
        seriesIndex: currentSeriesIndex.current,
        dataIndex: currentDataIndex.current
      })
      // 取消显示 tooltip
      myChart.current.dispatchAction({
        type: 'hideTip'
      })
    }
    if (myChartEventTime.current) {
      clearTimeout(myChartEventTime.current)
      myChartEventTime.current = null
    }
  }

  // 重置大小
  const echartsResize = () => {
    if (myChart.current) myChart.current.resize()
  }

  useMount(() => {
    init()
  })
  useUnmount(() => {
    echartsPause()
    destroyEchart()
  })

  useDeepCompareEffect(() => {
    update()
  }, [seriesData])

  useUpdateEffect(() => {
    if (autoPlay) {
      echartsPlay(false, currentSeriesIndex.current, currentDataIndex.current)
    } else {
      echartsPause()
    }
  }, [autoPlay])

  useUpdateEffect(() => {
    timer.current = intervalTime
  }, [intervalTime])

  useUpdateEffect(() => {
    if (isAddOn) {
      addEventFn()
    } else {
      removeEventFn()
    }
  }, [isAddOn])

  const size = useSize(echartsRef)
  useEffect(() => {
    echartsResize()
  }, [size])

  useImperativeHandle(onRef, () => {
    return {
      echartsInstance: () => myChart.current,
      echartsPlay,
      echartsPause
    }
  });

  return (
    <div ref={echartsRef} className={classNames('w-full h-full', className)}></div>
  );
};

export default EchartsModule;
