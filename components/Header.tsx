'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from './ThemeContext'

export default function Header({ studentNumber, studentName }: { studentNumber: string, studentName: string }) {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const textColor = theme === 'light' ? '#000' : '#fff'
  const bgColor = theme === 'light' ? '#fff' : '#121212'

  return (
    <header
      style={{
        padding: '10px',
        borderBottom: `2px solid ${theme === 'light' ? '#000' : '#888'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: bgColor,
        color: textColor
      }}
    >
      {/* Left: Student Info */}
      <div>
        <strong>{studentNumber}</strong> | {studentName}
      </div>

      {/* Center: Navigation (hidden on small screen, shown on large) */}
      <nav className="desktop-nav" style={{ display: 'flex', gap: '15px' }}>
        <Link href="/">Tabs</Link>
        <Link href="/escape-room">Escape Room</Link>
        <Link href="/coding-races">Coding Races</Link>
        <Link href="/court-room">Court Room</Link>
        <Link href="/about">About</Link>
      </nav>

      {/* Right: Dark/Light toggle + Hamburger */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Dark/Light Mode Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark or light theme"
          style={{
            border: '1px solid #888',
            background: 'transparent',
            color: textColor,
            padding: '4px 8px',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>

        {/* Hamburger Menu */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          style={{
            width: '30px',
            height: '24px',
            position: 'relative',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer'
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: textColor,
              borderRadius: '2px',
              transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              transition: '0.3s'
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: '10px',
              left: 0,
              width: '100%',
              height: '4px',
              background: textColor,
              borderRadius: '2px',
              opacity: open ? 0 : 1,
              transition: '0.3s'
            }}
          />
          <span
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: textColor,
              borderRadius: '2px',
              transform: open ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
              transition: '0.3s'
            }}
          />
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {open && (
        <nav
          style={{
            position: 'absolute',
            top: '60px',
            right: '20px',
            background: bgColor,
            border: `1px solid ${theme === 'light' ? '#ccc' : '#444'}`,
            borderRadius: '6px',
            padding: '10px',
            zIndex: 1000
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link href="/">Tabs</Link></li>
            <li><Link href="/escape-room">Escape Room</Link></li>
            <li><Link href="/coding-races">Coding Races</Link></li>
            <li><Link href="/court-room">Court Room</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}
