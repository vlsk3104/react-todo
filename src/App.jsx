import React from "react";

export const App = () => {
  return(
    <>
      <div>
        <input type="" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>テスト</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>テスト2</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
        <p>完了のTODO</p>
        <ul>
          <div>
            <li>テスト3</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
      <div></div>
    </>
  );
};
