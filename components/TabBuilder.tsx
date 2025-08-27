'use client'
import { useEffect, useState } from 'react'

type Tab = {
  id: number
  title: string
  content: string
}

export default function TabBuilder() {
  const [tabs, setTabs] = useState<Tab[]>([{ id: Date.now(), title: 'Tab 1', content: 'Content for Tab 1' }])

  // Load saved tabs from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem('tabs')
    if (saved) {
      setTabs(JSON.parse(saved))
    }
  }, [])

  // Save tabs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tabs', JSON.stringify(tabs))
  }, [tabs])

  // Add a new tab (max 15)
  const addTab = () => {
    if (tabs.length < 15) {
      setTabs([...tabs, { id: Date.now(), title: `Tab ${tabs.length + 1}`, content: `Content for Tab ${tabs.length + 1}` }])
    }
  }

  // Remove the last tab (keep at least 1)
  const removeTab = () => {
    if (tabs.length > 1) {
      setTabs(tabs.slice(0, -1))
    }
  }

  // Update tab title
  const updateTitle = (index: number, title: string) => {
    const newTabs = [...tabs]
    newTabs[index].title = title
    setTabs(newTabs)
  }

  // Update tab content
  const updateContent = (index: number, content: string) => {
    const newTabs = [...tabs]
    newTabs[index].content = content
    setTabs(newTabs)
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Tab Generator</h2>
      <button onClick={addTab} disabled={tabs.length >= 15}>＋ Add Tab</button>
      <button onClick={removeTab} disabled={tabs.length <= 1} style={{ marginLeft: '10px' }}>－ Remove Tab</button>

      <p>Tabs: {tabs.length} / 15</p>

      {tabs.map((tab, i) => (
        <div key={tab.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <label>
            Title: <input value={tab.title} onChange={(e) => updateTitle(i, e.target.value)} />
          </label>
          <br />
          <label>
            Content: <textarea value={tab.content} onChange={(e) => updateContent(i, e.target.value)} />
          </label>
        </div>
      ))}
    </div>
  )
}
