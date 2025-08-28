export default function AboutPage() {
  return (
    <section style={{ padding: '20px', lineHeight: 1.6 }}>
      <h1>About This Project</h1>

      <p><strong>Name:</strong> Yuvraj Singh Bassi</p>
      <p><strong>Student Number:</strong> 21910858</p>

      <p>
        This website was built for Assignment 1. It demonstrates a navigation bar with hamburger menu,
        dark/light themes, an interactive Tabs builder (up to 15 tabs, saved with localStorage),
        and an Output button that generates standalone HTML + JS with inline CSS that can be pasted
        into <code>Hello.html</code> and opened in a web browser.
      </p>

      <h2>How to Use This Website (Video)</h2>
      <p>
        Watch this short walkthrough of the features. The video is hosted on YouTube as
        <em> Unlisted</em> for assessment.
      </p>

      {/* Responsive 16:9 video wrapper */}
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
      >
        {/* Replace VIDEO_ID_HERE with your YouTube video ID */}
        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID_HERE"
          title="Assignment 1 Walkthrough – Tabs Generator"
          aria-label="Embedded video: Assignment 1 Walkthrough"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
        />
      </div>

      <h3 style={{ marginTop: '20px' }}>What the video covers</h3>
      <ul>
        <li>Navigation bar, hamburger menu, and theme toggle</li>
        <li>Creating 1, 3, and 5 tabs; editing headings and content</li>
        <li>Tabs persistence via localStorage</li>
        <li>Generating output and pasting into <code>Hello.html</code></li>
      </ul>

      <p style={{ marginTop: '16px' }}>
        If the video does not load, you can open it directly on YouTube using the same link.
      </p>
    </section>
  )
}
