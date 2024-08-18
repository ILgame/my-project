import './App.css';
import React, {useState} from "react";
import fingerImage from './pics/default-finger.png';
import adsImage from './pics/default-abs.png';
import {head,headDetails} from "./data/hand";
import {abdomen,abdomen_details} from "./data/abdomen";

function App() {
    const [selectedPoints, setSelectedPoints] = useState([]);
    const [clickedElement, setClickedElement] = useState(null);
    const [selectedPointsBody, setSelectedPointsBody] = useState([]);
    const [clickedElementBody, setClickedElementBody] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [selectHandAll, setSelectHandAll] = useState(false)

    const togglePoint = (point) => {
        setSelectedPointsBody((prev) =>
            prev.includes(point)
                ? prev.filter((p) => p !== point)
                : [...prev, point]
        );
        setClickedElement(headDetails.filter(p => p.id === point)[0]);
        setSelectHandAll(false);
    }

    const togglePointBody = (point) => {
        setSelectedPoints((prev) =>
            prev.includes(point)
                ? prev.filter((p) => p !== point)
                : [...prev, point]
        );
        setClickedElementBody(abdomen_details.filter(p => p.id === point)[0]);
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
                <h1 className="text-lg font-medium text-gray-800 mb-4 text-gray">
                    จุดไหนที่คุณปวดท้องมากที่สุด ?
                </h1>
                <div className="relative w-64 h-96">
                    <div className="shape absolute inset-0"></div>

                    {!selectAll && (
                        <div className="absolute inset-0">
                            {(clickedElementBody && (
                                <img
                                    className='absolute bg-no-repeat z-10'
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
                    {!selectAll && (
                        <div className="absolute inset-0">
                            {(clickedElementBody && (
                                <img
                                    className={`absolute bg-no-repeat size ${clickedElementBody.class}`}
                                    src={require(`${clickedElementBody.highlight}`)}
                                    alt="Active point"
                                    style={{
                                        top: clickedElementBody.highlight_top,
                                        left: clickedElementBody.highlight_left
                                    }}
                                />
                            ))}
                        </div>
                    )}
                    {selectAll && !clickedElementBody && (
                        <div className="absolute inset-0">
                            {(abdomen_details.map((clickedElementBody) => (
                                <img
                                    className={`absolute bg-no-repeat size ${clickedElementBody.class}`}
                                    src={require(`${clickedElementBody.highlight}`)}
                                    alt="Active point"
                                    style={{
                                        top: clickedElementBody.highlight_top,
                                        left: clickedElementBody.highlight_left
                                    }}
                                />
                            )))}
                        </div>
                    )}
                    <div className="absolute inset-0">
                        {abdomen.map((point) => (
                            <div
                                key={point.id}
                                className={`absolute w-8 h-8 border-sky-500 cursor-pointer rounded-full z-20`}
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
                <h1 className="text-lg font-medium text-gray-800 mb-4 text-gray">
                    จุดไหนที่คุณปวดนิ้วมากที่สุด ?
                </h1>
                <div className="relative w-64 h-96">
                    <div className="absolute inset-0">
                        {!selectHandAll && (clickedElement && (
                            <img className='absolute bg-no-repeat'
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
                        {head.map((point) => (
                            <div
                                key={point.id}
                                className={`absolute w-6 h-6 border-sky-500 cursor-pointer rounded-full x-20
                                    ${clickedElement && clickedElement.id === point.id ? "bg-gradient-to-r from-cyan-500 to-blue-500 outline outline-1 outline-offset-0 outline-blue-500" : ""}`}
                                style={{
                                    top: point.top,
                                    left: point.left,
                                    width: point.width,
                                    height: point.height,
                                    transform: point.transform
                                }}
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
                <button className={`bg-transparent font-semibold py-1 px-4 rounded-full outline outline-1 outline-offset-0 outline-blue-500 hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:border-none hover:shadow-lg z-30
                        ${selectHandAll ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500" : "text-blue-500"}`}
                        onClick={() => actionClear('hand')}>
                    ข้ออื่นๆ หรือไม่ได้ปวดบริเวณข้อ
                </button>
            </div>
        </div>
    );
}

export default App;
