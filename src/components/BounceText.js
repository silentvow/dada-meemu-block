function BounceText ({ text }) {
  return (
    <div className='relative flex'>
      {text.split('').map((c, idx) => (
        <span key={idx} className='animate-bounce-text' style={{ animationDelay: `${idx * 0.1}s` }}>
          {c}
        </span>
      ))}
    </div>
  )
}

export default BounceText
