'use client'
import { useEffect, useState } from 'react'
import { useTheme } from './ThemeContext'

type Tab = { id: number; title: string; content: string }

export default function TabBuilder() {
  const [tabs, setTabs] = useState<Tab[]>([{ id: Date.now(), title: 'Step 1', content: 'Step 1 details...' }])
  const [activeIndex, setActiveIndex] = useState(0)
  const [output, setOutput] = useState('')
  const { theme } = useTheme()

  // Theme-based colors
  const bgColor = theme === 'light' ? '#ffffff' : '#121212'
  const textColor = theme === 'light' ? '#000000' : '#f5f5f5'
  const boxBg = theme === 'light' ? '#f9f9f9' : '#1e1e1e'
  const borderColor = theme === 'light' ? '#000000' : '#888'
  const activeBtnBg = theme === 'light' ? '#e0e0e0' : '#333'
  const inactiveBtnBg = theme === 'light' ? '#f9f9f9' : '#555'
  const btnTextColor = theme === 'light' ? '#000' : '#fff'

  // Load saved tabs
  useEffect(() => {
    const saved = localStorage.getItem('tabs')
    if (saved) setTabs(JSON.parse(saved))
  }, [])

  // Save tabs
  useEffect(() => {
    localStorage.setItem('tabs', JSON.stringify(tabs))
  }, [tabs])

  const addTab = () => {
    if (tabs.length < 15) {
      setTabs([...tabs, { id: Date.now(), title: `Step ${tabs.length + 1}`, content: `Step ${tabs.length + 1} details...` }])
    }
  }

  const removeTab = () => {
    if (tabs.length > 1) {
      const newTabs = tabs.slice(0, -1)
      setTabs(newTabs)
      setActiveIndex(Math.max(0, activeIndex - 1))
    }
  }

  const updateTitle = (index: number, title: string) => {
    const newTabs = [...tabs]
    newTabs[index].title = title
    setTabs(newTabs)
  }

  const updateContent = (index: number, content: string) => {
    const newTabs = [...tabs]
    newTabs[index].content = content
    setTabs(newTabs)
  }

  // ✅ Generate standalone HTML
  const generateOutput = () => {
    const uid = `tabs_${Date.now()}` // use underscore

    const buttons = tabs.map((t, i) =>
      `<button onclick="select_${uid}(${i})" style="margin:4px;padding:6px 10px;border:1px solid #999;border-radius:4px;cursor:pointer;background:${i===0?'#ddd':'#f9f9f9'}">${t.title}</button>`
    ).join('')

    const panels = tabs.map((t, i) =>
      `<div id="${uid}_panel_${i}" style="border:1px solid #ccc;margin-top:10px;padding:10px;${i===0?'':'display:none'}">${t.content}</div>`
    ).join('')

    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Tabs Output</title>
</head>
<body style="font-family:Arial, sans-serif; padding:20px;">

  <!-- Header with student info -->
  <header style="border-bottom:2px solid black; padding-bottom:10px; margin-bottom:20px;">
    <strong>Yuvraj Singh Bassi (21910858)</strong>
  </header>

  <h1>Generated Tabs</h1>
  <div>${buttons}</div>
  ${panels}

  <!-- Footer -->
  <footer style="border-top:2px solid black; margin-top:30px; padding-top:10px; text-align:center;">
    © ${new Date().getFullYear()} Yuvraj Singh Bassi (21910858)
  </footer>

  <script>
    function select_${uid}(i){
      var buttons=document.querySelectorAll('button');
      var panels=document.querySelectorAll('div[id^="${uid}_panel_"]');
      buttons.forEach((b,idx)=>b.style.background=(idx===i)?'#ddd':'#f9f9f9');
      panels.forEach((p,idx)=>p.style.display=(idx===i)?'block':'none');
    }
  </script>
</body>
</html>`

    setOutput(html)
  }

  // Copy output to clipboard
  const copyOutput = async () => {
    if (output) {
      await navigator.clipboard.writeText(output)
      alert('Copied HTML! Paste it into Hello.html and open in your browser.')
    }
  }

  return (
    <div style={{ marginTop: '20px', color: textColor, background: bgColor }}>
      <h2>Tabs</h2>
      <div style={{ display: 'flex', gap: '40px' }}>
        {/* Left: Tab headers */}
        <div>
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>Tabs Headers: </span>
            <button onClick={addTab}>[+]</button>
            <button onClick={removeTab} style={{ marginLeft: '5px' }}>[-]</button>
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tabs.map((tab, i) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveIndex(i)}
                  style={{
                    display: 'block',
                    margin: '5px 0',
                    padding: '5px 10px',
                    border: `1px solid ${borderColor}`,
                    background: activeIndex === i ? activeBtnBg : inactiveBtnBg,
                    color: btnTextColor
                  }}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Active Tab Content */}
        <div style={{ border: `1px solid ${borderColor}`, padding: '10px', width: '300px', background: boxBg }}>
          <h3>Tabs Content</h3>
          <input
            type="text"
            value={tabs[activeIndex].title}
            onChange={(e) => updateTitle(activeIndex, e.target.value)}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
          <textarea
            value={tabs[activeIndex].content}
            onChange={(e) => updateContent(activeIndex, e.target.value)}
            style={{ width: '100%', height: '100px' }}
          />
        </div>
      </div>

      {/* Output Section */}
      <div style={{ marginTop: '20px' }}>
        <h3>Output</h3>
        <button onClick={generateOutput}>Generate Output</button>
        <button onClick={copyOutput} style={{ marginLeft: '10px' }} disabled={!output}>
          Copy to Clipboard
        </button>

        <div
          style={{
            border: `2px solid ${borderColor}`,
            marginTop: '10px',
            padding: '10px',
            background: boxBg,
            color: textColor,
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            overflowX: 'auto',
            maxHeight: '300px'
          }}
        >
          <pre><code>{output || 'Generated HTML will appear here...'}</code></pre>
        </div>
      </div>
    </div>
  )
}
