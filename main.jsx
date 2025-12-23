import React from 'react'
import ReactDOM from 'react-dom/client'
// 修复引用路径，确保与 GitHub 仓库中的文件名一致
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
