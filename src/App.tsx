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

  return (
    <div className="bg-green-100 flex h-full overflow-hidden">
      <div
        className={`text-grey-100 absolute top-3 right-1 font-ch text-xs opacity-50 duration-300 ease-in-out ${
          showList ? 'hidden' : ''
        }`}
      >
        2022.07.24
        <span className="ml-2 text-xs opacity-80 font-bold">星期日 13:38</span>
      </div>
      <section className="bg-grey-100 w-16 z-20 flex flex-col items-center justify-center">
        <div
          className="p-1 cursor-pointer hover:bg-grey-200"
          onClick={() => setShowList((prev) => !prev)}
        >
          <img src={list} alt="list" />
        </div>
        <div className="p-1 cursor-pointer">
          <img src={analysis} alt="analysis" />
        </div>
      </section>
      <div
        className={`w-3/5 h-full text-grey-100 fixed z-10 flex flex-col left-[25px] p-5 bg-green-100 shadow-[0px_0px_10px_rgba(0,0,0,50%)] ${
          showList ? '' : 'translate-x-[-350px]'
        } duration-300 ease-in-out`}
      >
        <div className="flex items-center font-ch justify-between">
          <div className="text-lg font-bold">待辦清單</div>
          <div className="flex text-grey-100 text-xs gap-3">
            <button className="p-1">已完成</button>
            <button className="border-[0.5px] rounded-sm p-1 opacity-50">
              未完成
            </button>
          </div>
        </div>
        <div className="rounded-xl flex items-center justify-between bg-grey-0 w-full h-6 mt-3 text-xs p-2">
          <input
            className="focus: outline-0 text-grey-400 placeholder-opacity-10"
            placeholder="新增代辦事項"
          />
          <div className="cursor-pointer flex items-center justify-center rounded-lg w-3 h-3 text-grey-0 bg-orange p-2 text-center">
            +
          </div>
        </div>
        <div className="mt-3 border-y-[0.5px] border-green-300 p-3 flex items-cent justify-between">
          <div className="flex items-center gap-2">
            <div className="border w-3 h-3 rounded-full" />
            <div className="text-xs">設計番茄鐘 UI 介面</div>
          </div>
          <div className="flex items-center">
            <button className="cursor-pointer p-1 w-5 h-5 hover:bg-green-200">
              <img src={edit} alt="edit" />
            </button>
            <button className="cursor-pointer p-1 w-5 h-5 hover:bg-green-200">
              <img src={remove} alt="edit" />
            </button>
          </div>
        </div>
      </div>
      <section
        className={`px-12 pt-12 h-screen text-grey-100 overflow-hidden duration-300 ease-in-out ${
          showList ? 'translate-x-[270px]' : ''
        } `}
      >
        <div className="flex gap-8">
          <div className="flex flex-col font-en text-7xl gap-2">
            <div>25:00</div>
            <div className="flex items-center justify-center gap-2">
              <button className="border w-5 h-5 rounded-full p-1 hover:shadow-sm hover:shadow-grey-100">
                <img src={bell} alt="bell" />
              </button>
              <button className="bg-grey-100 w-7 h-7 p-2 rounded-full hover:shadow-sm hover:shadow-grey-100">
                <img src={playOrange} alt="play" />
              </button>
              <button className="border w-5 h-5 rounded-full p-1 hover:shadow-sm hover:shadow-grey-100">
                <img src={cancel} alt="cancel" />
              </button>
            </div>
          </div>
          <div className="flex flex-col font-ch text-grey-100">
            <div className="flex items-center gap-2">
              <div className="border w-4 h-4 rounded-full" />
              <div className="text-lg font-bold">構思番茄鐘 UI 介面</div>
            </div>
            <div className="flex flex-col mt-2 ml-1 gap-1">
              <div className="flex items-center gap-2">
                <div className="border w-2 h-2 rounded-full" />
                <div className="text-xs">學習 Javascript</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="border w-2 h-2 rounded-full" />
                <div className="text-xs">學習網頁切版</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="border w-2 h-2 rounded-full" />
                <div className="text-xs">設計番茄鐘 UI 介面</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-2">
          <img src={tomatoOrange} alt="tomato" />
        </div>
      </section>
    </div>
  );
}

export default App;
