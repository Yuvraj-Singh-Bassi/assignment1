'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from './ThemeContext'

export default function Header({ studentNumber, studentName }: { studentNumber: string, studentName: string }) {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const lineColor = theme === 'light' ? 'black' : 'white'

  return (
    <header 
      style={{ 
        borderBottom: `2px solid ${theme === 'light' ? 'black' : '#888'}`, 
        padding: '10px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}
    >
      {/* Left: Student info + Nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ fontWeight: 'bold' }}>
          {studentNumber} | {studentName}
        </span>
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Tabs</Link>
        <Link href="/escape-room" style={{ color: 'inherit', textDecoration: 'none' }}>Escape Room</Link>
        <Link href="/coding-races" style={{ color: 'inherit', textDecoration: 'none' }}>Coding Races</Link>
        <Link href="/court-room" style={{ color: 'inherit', textDecoration: 'none' }}>Court Room</Link>
        <Link href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
      </div>

      {/* Right: Dark Mode toggle + Hamburger */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button 
          onClick={toggleTheme} 
          style={{ background: 'transparent', border: '1px solid #888', padding: '4px 8px', cursor: 'pointer' }}
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>

        {/* Hamburger */}
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
        >
          <span style={{
            position: 'absolute',
            width: '100%', height: '4px', background: lineColor,
            top: open ? '10px' : '0px', transform: open ? 'rotate(45deg)' : 'none',
            transition: 'all 0.3s ease'
          }} />
          <span style={{
            position: 'absolute',
            width: '100%', height: '4px', background: lineColor,
            top: '10px', opacity: open ? 0 : 1, transition: 'all 0.3s ease'
          }} />
          <span style={{
            position: 'absolute',
            width: '100%', height: '4px', background: lineColor,
            bottom: open ? '10px' : '0px', transform: open ? 'rotate(-45deg)' : 'none',
            transition: 'all 0.3s ease'
          }} />
        </button>
      </div>

      {/* Hamburger Menu */}
      {open && (
        <nav
          style={{
            background: theme === 'light' ? '#f9f9f9' : '#333',
            color: theme === 'light' ? '#000' : '#fff',
            padding: '10px',
            position: 'absolute',
            right: '10px',
            top: '50px',
            border: `1px solid ${theme === 'light' ? '#ccc' : '#666'}`,
            borderRadius: '4px',
            minWidth: '150px',
            zIndex: 1000
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Tabs</Link></li>
            <li><Link href="/escape-room" style={{ color: 'inherit', textDecoration: 'none' }}>Escape Room</Link></li>
            <li><Link href="/coding-races" style={{ color: 'inherit', textDecoration: 'none' }}>Coding Races</Link></li>
            <li><Link href="/court-room" style={{ color: 'inherit', textDecoration: 'none' }}>Court Room</Link></li>
            <li><Link href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}
