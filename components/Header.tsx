'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from './ThemeContext'

export default function Header({ studentNumber, studentName }: { studentNumber: string, studentName: string }) {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // Choose line color based on theme
  const lineColor = theme === 'light' ? 'black' : 'white'

  return (
    <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      {/* Student number top-left */}
      <div>
        <strong>{studentNumber}</strong> | {studentName}
      </div>

      {/* Hamburger + Theme Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
        {/* Hamburger menu button with CSS transform */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: '30px',
            height: '24px',
            position: 'relative',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
          }}
          aria-label="Menu"
        >
          {/* 3 lines of hamburger */}
          <span
            style={{
              position: 'absolute',
              width: '100%',
              height: '4px',
              background: lineColor,
              borderRadius: '2px',
              top: open ? '10px' : '0px',
              transform: open ? 'rotate(45deg)' : 'none',
              transition: 'all 0.3s ease',
            }}
          />
          <span
            style={{
              position: 'absolute',
              width: '100%',
              height: '4px',
              background: lineColor,
              borderRadius: '2px',
              top: '10px',
              opacity: open ? 0 : 1,
              transition: 'all 0.3s ease',
            }}
          />
          <span
            style={{
              position: 'absolute',
              width: '100%',
              height: '4px',
              background: lineColor,
              borderRadius: '2px',
              bottom: open ? '10px' : '0px',
              transform: open ? 'rotate(-45deg)' : 'none',
              transition: 'all 0.3s ease',
            }}
          />
        </button>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      {/* Menu links */}
      {open && (
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}
