import styles from './BottomNav.module.css'

/** Mobile primary navigation (replaces top icon row on narrow screens). */
export function BottomNav() {
  return (
    <nav className={styles.nav} aria-label="Mobile">
      <a className={styles.item} href="#home" aria-current="page">
        <HomeIcon />
        <span className={styles.visuallyHidden}>Home</span>
      </a>
      <a className={styles.item} href="#search">
        <SearchIcon />
        <span className={styles.visuallyHidden}>Search</span>
      </a>
      <a className={styles.item} href="#reels">
        <ReelsIcon />
        <span className={styles.visuallyHidden}>Reels</span>
      </a>
      <a className={styles.item} href="#shop">
        <ShopIcon />
        <span className={styles.visuallyHidden}>Shop</span>
      </a>
      <a className={styles.item} href="#profile">
        <span className={styles.profileDot} />
        <span className={styles.visuallyHidden}>Profile</span>
      </a>
    </nav>
  )
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path
        fill="currentColor"
        d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997h0A2.997 2.997 0 0 1 15 16.545V22h6V9.428L12 4.64 3 9.428V22h6v-5.455z"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <path stroke="currentColor" strokeWidth="2" d="m20 20-4-4" />
    </svg>
  )
}

function ReelsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <rect x="3" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path fill="currentColor" d="M17 8l2-1v10l-2-1V8z" />
    </svg>
  )
}

function ShopIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M4 10h16l-1 10H5L4 10zm0 0-1-4h18l-1 4"
      />
    </svg>
  )
}
