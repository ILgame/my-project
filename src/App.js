import './App.css';
import React, {useState} from "react";
import fingerImage from './pics/default-finger.png';
import adsImage from './pics/default-abs.png';

function App() {
    const [selectedPoints, setSelectedPoints] = useState([]);
    const [clickedElement, setClickedElement] = useState(null);
    const [selectedPointsBody, setSelectedPointsBody] = useState([]);
    const [clickedElementBody, setClickedElementBody] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [selectHandAll, setSelectHandAll] = useState(false);

    const points = [
        {id: 1, top: "17%", left: "54%", active: './pics/dip-active.png'}, // นิ้วชี้บนสุด
        {id: 2, top: "14%", left: "36%", active: './pics/dip-active.png'}, // นิ้วกลางบนสุด
        {id: 3, top: "19%", left: "21%", active: './pics/dip-active.png'}, // นิ้วนางบนสุด
        {id: 4, top: "30%", left: "4%", active: './pics/dip-active.png'}, // นิ้วชี้กลาง

        {id: 5, top: "46%", left: "82%", active: './pics/pip-active.png'}, // นิ้วกลางกลาง
        {id: 6, top: "27%", left: "53%", active: './pics/pip-active.png'}, // นิ้วนางกลาง
        {id: 7, top: "26%", left: "38%", active: './pics/pip-active.png'}, // นิ้วก้อยกลาง
        {id: 8, top: "30%", left: "23%", active: './pics/pip-active.png'}, // โคนนิ้วหัวแม่มือ
        {id: 9, top: "37%", left: "10%", active: './pics/pip-active.png'}, // โคนนิ้วหัวแม่มือ

        {id: 10, top: "57%", left: "71%", active: './pics/mcp-active.png'}, // โคนนิ้วก้อย
        {id: 11, top: "40%", left: "52%", active: './pics/mcp-active.png'}, // ข้อมือ
        {id: 12, top: "40%", left: "39%", active: './pics/mcp-active.png'}, // ข้อมือ
        {id: 13, top: "42%", left: "27%", active: './pics/mcp-active.png'}, // ข้อมือ
        {id: 14, top: "46%", left: "16%", active: './pics/mcp-active.png'}, // ข้อมือ
    ];
    const pointDetails = [
        {id: 1, top: "11%", left: "0%", active: './pics/dip-active.png', highlight: ''}, // นิ้วชี้บนสุด
        {id: 2, top: "9%", right: "19%", active: './pics/dip-active.png', highlight: ''}, // นิ้วกลางบนสุด
        {id: 3, top: "13%", right: "33%", active: './pics/dip-active.png', highlight: ''}, // นิ้วนางบนสุด
        {id: 4, top: "23%", right: "50%", active: './pics/dip-active.png', highlight: ''}, // นิ้วชี้กลาง
        {id: 5, top: "33%", left: "29%", active: './pics/pip-active.png', highlight: ''}, // โคนนิ้วหัวแม่มือ
        {id: 6, top: "13%", left: "0%", active: './pics/pip-active.png', highlight: ''}, // นิ้วกลางกลาง
        {id: 7, top: "11%", right: "15%", active: './pics/pip-active.png', highlight: ''}, // นิ้วนางกลาง
        {id: 8, top: "15%", right: "31%", active: './pics/pip-active.png', highlight: ''}, // นิ้วก้อยกลาง
        {id: 9, top: "22%", right: "45%", active: './pics/pip-active.png', highlight: ''}, // โคนนิ้วหัวแม่มือ
        {id: 10, top: "33%", left: "17%", active: './pics/mcp-active.png', highlight: ''}, // โคนนิ้วก้อย
        {id: 11, top: "15%", right: "2%", active: './pics/mcp-active.png', highlight: ''}, // ข้อมือ
        {id: 12, top: "15%", right: "15%", active: './pics/mcp-active.png', highlight: ''}, // ข้อมือ
        {id: 13, top: "17%", right: "28%", active: './pics/mcp-active.png', highlight: ''}, // ข้อมือ
        {id: 14, top: "21%", right: "38%", active: './pics/mcp-active.png', highlight: ''}, // ข้อมือ
    ];

    const points_body = [
        {id: 1, top: "44%", left: "42%", active: './pics/dip-active.png'}, // ลิ้นปี่
        {id: 2, top: "50%", left: "30%", active: './pics/dip-active.png'}, // ท้องขวาบน
        {id: 3, top: "60%", left: "30%", active: './pics/dip-active.png'}, // ท้องขวาล่าง
        {id: 4, top: "65%", left: "42%", active: './pics/dip-active.png'}, // นิ้วชี้กลาง
        {id: 5, top: "60%", left: "53%", active: './pics/pip-active.png'}, // ท้องซ้ายบน
        {id: 6, top: "50%", left: "53%", active: './pics/pip-active.png'}, // ท้องซ้ายล่าง
        {id: 7, top: "55%", left: "42%", active: './pics/pip-active.png'}, // สะดือ
    ];
    const point_body_Details = [
        {
            id: 1,
            top: "20%",
            left: "0%",
            active: './pics/epigastrium-active.png',
            highlight: './pics/epigastrium-highlight.png'
        }, // ลิ้นปี่
        {id: 2, top: "20%", left: "0%", active: './pics/ruq-active.png', highlight: './pics/ruq-highlight.png'}, // ท้องขวาบน
        {id: 3, top: "14%", right: "2%", active: './pics/rlq-active.png', highlight: './pics/rlq-highlight.png'}, // ท้องขวาล่าง
        {
            id: 4,
            top: "20%",
            left: "0%",
            active: './pics/suprapubic-active.png',
            highlight: './pics/suprapubic-highlight.png'
        }, // นิ้วชี้กลาง
        {id: 5, top: "14%", left: "0%", active: './pics/llq-active.png', highlight: './pics/llq-highlight.png'}, // ท้องซ้ายบน
        {id: 6, top: "20%", left: "0%", active: './pics/luq-active.png', highlight: './pics/luq-highlight.png'}, // ท้องซ้ายล่าง
        {
            id: 7,
            top: "20%",
            left: "0%",
            active: './pics/umbilicus-active.png',
            highlight: './pics/umbilicus-highlight.png'
        }, // สะดือ
    ];

    const togglePoint = (point) => {
        setSelectedPointsBody((prev) =>
            prev.includes(point)
                ? prev.filter((p) => p !== point)
                : [...prev, point]
        );
        setClickedElement(pointDetails.filter(p => p.id === point)[0]);
        setSelectHandAll(false);
    }

    const togglePointBody = (point) => {
        setSelectedPoints((prev) =>
            prev.includes(point)
                ? prev.filter((p) => p !== point)
                : [...prev, point]
        );
        setClickedElementBody(point_body_Details.filter(p => p.id === point)[0]);
        setSelectAll(false);

    }

    const actionClear = (action) => {
        if (action === 'body') {
            setSelectAll(true);
            setClickedElementBody(null)
        } else {
            setSelectHandAll(true);
            setClickedElement(null);
        }

    }

    return (
        <div className="w-100 h-100 flex flex-wrap items-center justify-center gap-4 font-sans">
            <div
                className="shadow-lg w-full max-w-80 h-full flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                <h1 className="text-lg font-medium text-gray-800 mb-4">
                    จุดไหนที่คุณปวดท้องมากที่สุด ?
                </h1>
                <div className="relative w-64 h-96">
                    {!selectAll && (
                        <div className="absolute inset-0">
                            {(clickedElementBody && (
                                <img
                                    className='absolute bg-no-repeat'
                                    src={require(`${clickedElementBody.active}`)}
                                    alt="Active point"
                                    style={{
                                        top: clickedElementBody.top,
                                        left: clickedElementBody.left,
                                        right: clickedElementBody.right
                                    }}
                                />
                            ))}
                        </div>
                    )}
                    {/*{selectAll && !clickedElementBody && (*/}
                    {/*    <div className="absolute inset-0" >*/}
                    {/*      {(point_body_Details.map((clickedElementBody) => (*/}
                    {/*          <img*/}
                    {/*              className='absolute bg-no-repeat'*/}
                    {/*              src={require(`${clickedElementBody.highlight}`)}*/}
                    {/*              alt="Active point"*/}
                    {/*              style={{*/}
                    {/*                top: clickedElementBody.top,*/}
                    {/*                left: clickedElementBody.left,*/}
                    {/*                right: clickedElementBody.right*/}
                    {/*              }}*/}
                    {/*          />*/}
                    {/*      )))}*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    <div className="absolute inset-0">
                        {points_body.map((point) => (
                            <div
                                key={point.id}
                                className={`absolute w-8 h-8 border-sky-500 cursor-pointer rounded-full`}
                                style={{top: point.top, left: point.left}}
                                onClick={() => togglePointBody(point.id)}>
                            </div>
                        ))}


                    </div>
                    <div className="flex  h-full items-center">
                        <img
                            src={adsImage}
                            alt="Hand outline"
                            className="w-full"
                        />
                    </div>

                </div>

                <button onClick={() => actionClear('body')}
                        className={`bg-transparent font-semibold py-1 px-4 rounded-full outline outline-1 outline-offset-0 outline-blue-500 hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:border-none hover:shadow-lg
            ${selectAll ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500" : "text-blue-500"}`}>
                    ปวดท้อง
                </button>
            </div>

            <div
                className="shadow-lg w-full max-w-80 h-full flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                <h1 className="text-lg font-medium text-gray-800 mb-4">
                    จุดไหนที่คุณปวดนิ้วมากที่สุด ?
                </h1>
                <div className="relative w-64 h-96">
                    <div className="absolute inset-0">
                        {!selectHandAll && (clickedElement && (
                            <img
                                className='absolute bg-no-repeat'
                                src={require(`${clickedElement.active}`)}
                                alt="Active point"
                                style={{
                                    top: clickedElement.top,
                                    left: clickedElement.left,
                                    right: clickedElement.right
                                }}
                            />
                        ))}
                    </div>
                    <div className="absolute inset-0">
                        {points.map((point) => (
                            <div
                                key={point.id}
                                className={`absolute w-6 h-6 border-sky-500 cursor-pointer rounded-full`}
                                style={{top: point.top, left: point.left}}
                                onClick={() => togglePoint(point.id)}>
                            </div>
                        ))}


                    </div>
                    <div className="flex h-full items-center">
                        <img
                            src={fingerImage}
                            alt="Hand outline"
                            className="w-full h-80 w-100"
                        />
                    </div>
                </div>
                <button className={`bg-transparent font-semibold py-1 px-4 rounded-full outline outline-1 outline-offset-0 outline-blue-500 hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:border-none hover:shadow-lg
                        ${selectHandAll ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500" : "text-blue-500"}`}
                        onClick={() => actionClear('hand')}>
                    ข้ออื่นๆ หรือไม่ได้ปวดบริเวณข้อ
                </button>
            </div>
        </div>

    );
}

export default App;
