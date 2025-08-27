export default function Footer({ studentNumber, studentName }: { studentNumber: string, studentName: string }) {
  return (
    <footer style={{ padding: '10px', marginTop: '40px', borderTop: '1px solid #ccc', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} {studentName} ({studentNumber})</p>
    </footer>
  )
}
