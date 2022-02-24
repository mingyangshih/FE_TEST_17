# FE_TEST_17

## 程式碼執行步驟

1. 先將程式抓下來
2. 執行 `npm install`
3. 執行 `npm run dev`
4. 開啟連結：http://localhost:3000/

## 本次測驗規定之項目

* 請使用 Nuxt.js 完成一個 Todo List(完成)
* 請用 Vuex 處理資料邏輯的部分: 已完成，本次測驗有接到 Firebase Realtime Database
* 排版請使用 css： flex box 進行排版(flex-grow, flex-shrink 和 flex-basis 且不能用框架)：本次專案有使用 `display: flex` 進行畫面排版，雖然有引用Vuetify但只拿來使用l
oading畫面，並未使用排版功能。

|  Header   | 請使用 position: fixed 實作, Icon不需要設定任何動作  |
|  Input  | 不一定要綁在最下方，可跟著 Todo list 長, 可使用鍵盤的 enter 鍵或是點 button 送出  |
| 右側送出按鈕 | 送出時，請顯示出 loading 或 skeleton 後等待數秒後 |
| 垃圾桶  | 需模擬刪除時使用 API 進行刪除的狀況 |

## 其他
* 加上 i18n : 目前公司已有實作，因此沒特別實作但知道Nuxt Module有支援，主要是透過先設定好對應的字串內容，透過`$t('...')`做不同國家語言切換。
* 將 icons 加到 component 中：有加入，並使用SVG。
* 使用 scss 並使用 mixin 或是 global styles：有設定global變數，並將 `border` 的設定設為 `mixin`。
* 納入 Vuetify 框架使用 loading 特效。
* 使用 Nuxt Firebase Module 將 Todo List 內容新增到 Firebase 上。
