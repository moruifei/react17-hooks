// 长列表优化
import React from 'react';
import { AutoSizer, List, CellMeasurer, CellMeasurerCache } from 'react-virtualized'; // VariableSizeList 可变高度itemSize列表  FixedSizeList 固定高度itemSize列表
// import AutoSizer from 'react-virtualized-auto-sizer';
const cache = new CellMeasurerCache({ defaultHeight: 40, fixedWidth: true })
function cellRenderer({ index, key, parent, style }) {
    console.log(index)
    return (
        <CellMeasurer
            cache={cache}
            columnIndex={0}
            key={key}
            parent={parent}
            rowIndex={index}
        >
            <div
                style={style}
            >
                {
                    list[index].includes("https") ? <img src={list[index]} /> : list[index]
                }
            </div>
        </CellMeasurer>
    );
}
const getColorRandom = () => { // 获取随机颜色
    let color = "#" + (Math.floor(Math.random() * 0xFFFFFF)).toString(16).toUpperCase();
    if (color.length === 7) {
        return color;
    } else {
        getColorRandom();
    }
}
const Rows = ({ index, style }) => { // 要渲染的
    return <div key={index} style={{ ...style, background: getColorRandom() }}>
        <img style={{ height: '40px' }} src="https://gw-office.alipayobjects.com/bmw-prod/19a97753-3424-4b25-86ea-e2395d585868.svg" />
    </div>
}
const getSizeRandom = () => {
    return Math.ceil(Math.random() * 40) + 40;
}
const rowRender = ({ key, index, style }) => {
    return (
        <div key={key} style={{ ...style }}>
            {
                list[index].includes("https") ? <img src={list[index]} /> : list[index]
            }
        </div>
    );
}
const list = [
    'Brian Vaughnergwertwerewtwrtwetwrtwetwegger',
    // And so on...
    "moruifeitwetwtewetweeeeeeeeeeeeeeeeeeeeeee",
    "quwenfangwrtrwwteeeeeeeeeeeeeeeeeeeeeee",
    "liqingwteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "金天是2020年12月24日平安夜",
    "2142145342345",
    'Brian Vaughnergwertwerewtwrtwetwrtwetwegger',
    // And so on...
    "moruifeitwetwtewetweeeeeeeeeeeeeeeeeeeeeee",
    "quwenfangwrtrwwteeeeeeeeeeeeeeeeeeeeeee",
    "liqingwteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    'Brian Vaughnergwertwerewtwrtwetwrtwetwegger',
    "https://gw-office.alipayobjects.com/bmw-prod/19a97753-3424-4b25-86ea-e2395d585868.svg",
    // And so on...
    "moruifeitwetwtewetweeeeeeeeeeeeeeeeeeeeeee",
    "quwenfangwrtrwwteeeeeeeeeeeeeeeeeeeeeee",
    "liqingwteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "https://gw-office.alipayobjects.com/bmw-prod/19a97753-3424-4b25-86ea-e2395d585868.svg",
    // And so on...
    "moruifeitwetwtewetweeeeeeeeeeeeeeeeeeeeeee",
    "quwenfangwrtrwwteeeeeeeeeeeeeeeeeeeeeee",
    "liqingwteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
];
const RenderList = (props) => {
    return (
        <div>
            
            <AutoSizer>
                {({ height, width }) => <List
                    height={200} // 列表可视区域高度
                    rowCount={list.length} // 数据总数
                    deferredMeasurementCache={cache}
                    rowHeight={cache.rowHeight}
                    // itemSize={getSizeRandom} // 列表行高
                    width={width} // 列表可视区域宽度
                    rowRenderer={cellRenderer}
                >
                </List>}

            </AutoSizer>
            {/* 不优化页面渲染太多dom会相当卡顿 而且占用内存开销较大 */}
            {/* <div>
            {Array.from({length: 10000}, (e, k)=>k+1).map((e1, k1)=><div key={k1}><img src="https://gw-office.alipayobjects.com/bmw-prod/19a97753-3424-4b25-86ea-e2395d585868.svg" /></div>)}
        </div> */}
        </div>
    )
}
export default RenderList;