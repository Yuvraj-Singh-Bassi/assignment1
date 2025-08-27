'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header({ studentNumber, studentName }: { studentNumber: string, studentName: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      {/* Student number top-left */}
      <div>
        <strong>{studentNumber}</strong> | {studentName}
      </div>

      {/* Hamburger menu button */}
      <button onClick={() => setOpen(!open)} style={{ marginTop: '10px' }}>
        ☰
      </button>

      {/* Menu links */}
      {open && (
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}
