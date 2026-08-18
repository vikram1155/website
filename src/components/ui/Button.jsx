export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles = variant === 'secondary' ? 'button button-secondary' : 'button button-primary'

  return (
    <button className={`${styles} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}
