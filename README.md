# 社群媒體概論｜期末闖關複習網頁

這是一個可部署到 GitHub + Vercel 的 React/Vite 專案，用於《社群媒體概論》期末遊戲式課程回顧。

## 功能

- 10 個主題，對應課程核心章節
- 每主題 2 關，每關 8 題，共 160 題
- 即時答題回饋與章節對應
- 主題徽章、完成紀錄、錯題回顧
- 使用 localStorage 保存進度，不需要登入

## 本機執行

```bash
npm install
npm run dev
```

## 建置

```bash
npm run build
```

## 部署到 Vercel

1. 到 Vercel 新增 Project，選擇本 GitHub repository。
2. Framework Preset 選 `Vite`。
3. Build Command：`npm run build`。
4. Output Directory：`dist`。
5. Deploy。

## 題庫維護

題庫位於：

```text
src/questions.js
```

每題格式：

```js
{
  q: '題目',
  options: ['選項A', '選項B', '選項C', '選項D'],
  answer: 0,
  explanation: '解析文字',
  ref: '對應章節'
}
```

`answer` 使用 0 起算，0 代表第一個選項。
