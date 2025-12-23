// main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'  // 注意大小写要和文件名完全一致

createRoot(document.getElementById('root')).render(<App />)
