import { useState } from 'react';
import tomatoGreen from './assets/tomato--green.svg';
import tomatoOrange from './assets/tomato--orange.svg';
import analysis from './assets/icon-analysis.svg';
import list from './assets/icon-list.svg';
import bell from './assets/icon-bell.svg';
import playGreen from './assets/icon-play--green.svg';
import playOrange from './assets/icon-play--orange.svg';
import cancel from './assets/icon-cancel.svg';
import edit from './assets/icon-edit.svg';
import remove from './assets/icon-delete.svg';

function App() {
  const [showList, setShowList] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleShowList = () => {
    setShowList((prev) => !prev);
    if (showAnalysis) {
      setShowAnalysis((prev) => !prev);
    }
  };

  const handleShowAnalysis = () => {
    setShowAnalysis((prev) => !prev);
    if (showList) {
      setShowList((prev) => !prev);
    }
  };

  return (
    <div className="bg-green-100 flex h-full overflow-hidden">
      <div
        className={`text-grey-100 absolute top-3 right-4 font-ch opacity-50 duration-300 ease-in-out 
        ${showList ? 'hidden' : ''}
        ${showAnalysis ? 'hidden' : ''}
        `}
      >
        2022.07.24
        <span className="ml-2 opacity-80 font-bold">星期日 13:38</span>
      </div>
      <section className="bg-grey-100 w-16 z-20 flex flex-col items-center justify-center">
        <div
          className={`p-1 cursor-pointer hover:bg-grey-0 ${
            showList ? 'bg-grey-0' : ''
          }`}
          onClick={handleShowList}
        >
          <img src={list} alt="list" />
        </div>
        <div
          className={`p-1 cursor-pointer hover:bg-grey-0 ${
            showAnalysis ? 'bg-grey-0' : ''
          }`}
          onClick={handleShowAnalysis}
        >
          <img src={analysis} alt="analysis" />
        </div>
      </section>
      <section
        className={`w-2/5 h-full text-grey-100 fixed z-10 flex flex-col left-[50px] py-20 px-10 bg-green-100 shadow-[0px_0px_10px_rgba(0,0,0,50%)] ${
          showList ? '' : 'translate-x-[-100%]'
        } duration-300 ease-in-out`}
      >
        <div className="flex items-center font-ch justify-between">
          <div className="text-4xl font-bold">待辦清單</div>
          <div className="flex text-grey-100 gap-8">
            <button className="p-1">已完成</button>
            <button className="border-[0.5px] rounded-sm p-1 opacity-50">
              未完成
            </button>
          </div>
        </div>
        <div className="rounded-[180px] flex items-center mt-10 justify-between bg-grey-0 w-full h-14 p-6">
          <input
            className="focus: outline-0 text-grey-400 placeholder-opacity-10"
            placeholder="新增代辦事項"
          />
          <div className="cursor-pointer flex text-lg items-center justify-center rounded-[70px] w-12 h-10 text-grey-0 bg-orange p-2 text-center">
            +
          </div>
        </div>
        <div className="mt-10 border-y border-green-300 border-opacity-50 p-3 flex items-cent justify-between">
          <div className="flex items-center gap-2">
            <div className="border w-4 h-4 rounded-full" />
            <div>設計番茄鐘 UI 介面</div>
          </div>
          <div className="flex items-center">
            <button className="cursor-pointer p-1 w-7 h-7 hover:bg-green-200">
              <img src={edit} alt="edit" />
            </button>
            <button className="cursor-pointer p-1 w-7 h-7 hover:bg-green-200">
              <img src={remove} alt="edit" />
            </button>
          </div>
        </div>
        <div className="border-b border-green-300 border-opacity-50 p-3 flex items-cent justify-between">
          <div className="flex items-center gap-2">
            <div className="border w-4 h-4 rounded-full" />
            <div>學習 Javascript</div>
          </div>
          <div className="flex items-center">
            <button className="cursor-pointer p-1 w-7 h-7 hover:bg-green-200">
              <img src={edit} alt="edit" />
            </button>
            <button className="cursor-pointer p-1 w-7 h-7 hover:bg-green-200">
              <img src={remove} alt="edit" />
            </button>
          </div>
        </div>
      </section>
      <section
        className={`w-1/2 h-full text-grey-100 fixed z-10 flex flex-col left-[50px] py-12 lg:py-20 xl:py-24 px-14 xl:px-24 bg-green-100 shadow-[0px_0px_10px_rgba(0,0,0,50%)] ${
          showAnalysis ? '' : 'translate-x-[-100%]'
        } duration-300 ease-in-out`}
      >
        <div className="font-ch">
          <div className="text-4xl font-bold">專注度分析</div>
        </div>
        <div className="flex gap-8 mt-10">
          <div className="flex flex-col gap-4 w-[265px]">
            <div>
              <div className="text-grey-0 font-ch">
                今日
                <span className="text-grey-0 opacity-50 ml-6">2022.07.24</span>
              </div>
              <div className="border border-grey-0 border-opacity-20 flex items-center justify-between py-5 px-8 mt-4 rounded-lg">
                <div className="flex flex-col items-center">
                  <div className="font-en text-green-200 text-[80px]">9</div>
                  <div className="font-ch text-grey-0">代辦事項</div>
                </div>
                <div className="flex flex-col items-center ml-5 border-l border-grey-0 border-opacity-20 pl-5">
                  <div className="font-en text-orange text-[80px]">7</div>
                  <div className="font-ch text-grey-0">已完成</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[265px]">
            <div>
              <div className="text-grey-0 font-ch">本週</div>
              <div className="border border-grey-0 border-opacity-20 flex items-center justify-between py-5 px-8 mt-4 rounded-lg">
                <div className="flex flex-col items-center">
                  <div className="font-en text-green-200 text-[80px]">54</div>
                  <div className="font-ch text-grey-0">代辦事項</div>
                </div>
                <div className="flex flex-col items-center ml-5 border-l border-grey-0 border-opacity-20 pl-5">
                  <div className="font-en text-orange text-[80px]">48</div>
                  <div className="font-ch text-grey-0">已完成</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col font-ch">
          <div className="text-grey-0 m-auto">2022.07.18 ~ 2019.07.24</div>
          <div className="flex items-end">
            <div className="flex flex-col gap-2 text-grey-0 items-center border-r border-grey-0 pr-2">
              <div>14</div>
              <div>12</div>
              <div>10</div>
              <div>8</div>
              <div>6</div>
              <div>4</div>
              <div>2</div>
              <div>0</div>
            </div>
            <div className="flex gap-10 items-baseline">
              <div className="w-5 h-24 bg-green-200 ml-16" />
              <div className="w-5 h-14 bg-green-200" />
              <div className="w-5 h-28 bg-green-200" />
              <div className="w-5 h-10 bg-green-200" />
              <div className="w-5 h-20 bg-green-200" />
              <div className="w-5 h-16 bg-green-200" />
              <div className="w-5 h-20 bg-orange" />
            </div>
          </div>
          <div className="flex gap-[29px] border-t border-grey-0 items-baseline ml-[25px] w-[88%]">
            <div className="ml-14">7/18</div>
            <div>7/19</div>
            <div>7/20</div>
            <div>7/21</div>
            <div>7/22</div>
            <div>7/23</div>
            <div>7/24</div>
          </div>
        </div>
      </section>
      <section
        className={`px-32 pt-20 h-screen flex flex-col justify-between text-grey-100 overflow-hidden duration-300 ease-in-out 
        ${
          showList
            ? 'translate-x-[50%] lg:translate-x-[55%] xl:translate-x-[65%]'
            : ''
        }
        ${
          showAnalysis
            ? 'translate-x-[50%] lg:translate-x-[55%] xl:translate-x-[65%]'
            : ''
        } 
            `}
      >
        <div className="flex items-center">
          <div className="flex flex-col font-en text-[200px] gap-2">
            <div>25:00</div>
            <div className="flex items-center justify-center gap-4 mt-[-20px]">
              <button className="border w-12 h-12 flex items-center justify-center rounded-full p-1 hover:shadow-md hover:shadow-green-300">
                <img src={bell} alt="bell" />
              </button>
              <button className="bg-grey-100 w-16 h-16 flex items-center justify-center rounded-full hover:shadow-md hover:shadow-grey-300">
                <img src={playOrange} alt="play" />
              </button>
              <button className="border w-12 h-12 rounded-full flex items-center justify-center p-1 hover:shadow-md hover:shadow-grey-300">
                <img src={cancel} alt="cancel" />
              </button>
            </div>
          </div>
          <div className="flex flex-col font-ch text-grey-100 ml-28">
            <div className="flex items-center gap-2">
              <div className="border-2 w-10 h-10 font-medium rounded-full" />
              <div className="text-3xl font-bold">構思番茄鐘 UI 介面</div>
            </div>
            <div className="flex flex-col mt-10 ml-2 gap-6">
              <div className="flex items-center gap-2">
                <div className="border-2 w-6 h-6 rounded-full" />
                <div>學習 Javascript</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="border-2 w-6 h-6 rounded-full" />
                <div>學習網頁切版</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="border-2 w-6 h-6 rounded-full" />
                <div>設計番茄鐘 UI 介面</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={tomatoOrange} alt="tomato" />
        </div>
      </section>
    </div>
  );
}

export default App;
