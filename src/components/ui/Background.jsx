function Background({ children }) {
  return (
    <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="relative h-full w-full overflow-auto">{children}</div>
    </div>
  )
}

export default Background
