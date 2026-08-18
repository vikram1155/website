export default function SectionHeading({ eyebrow, title, subtext, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'center' : ''}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtext ? <p className="section-subtext">{subtext}</p> : null}
    </div>
  )
}
