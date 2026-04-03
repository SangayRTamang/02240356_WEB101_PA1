import styles from './TopNav.module.css'

/** Top navigation: logo, search, and primary actions (desktop / tablet). */
export function TopNav() {
  return (
    <header className={styles.bar} role="banner">
      <div className={styles.inner}>
        <a className={styles.logo} href="#top" aria-label="Instagram home">
          Instagram
        </a>
        <label className={styles.searchWrap}>
          <span className={styles.visuallyHidden}>Search</span>
          <input
            className={styles.search}
            type="search"
            placeholder="Search"
            autoComplete="off"
          />
        </label>
        <nav className={styles.icons} aria-label="Main">
          <IconHome />
          <IconDm />
          <IconCreate />
          <IconExplore />
          <IconHeart />
          <IconAvatar />
        </nav>
      </div>
    </header>
  )
}

function IconHome() {
  return (
    <button type="button" className={styles.iconBtn} aria-label="Home">
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
        <path
          fill="currentColor"
          d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997h0A2.997 2.997 0 0 1 15 16.545V22h6V9.428L12 4.64 3 9.428V22h6v-5.455z"
        />
      </svg>
    </button>
  )
}

function IconDm() {
  return (
    <button type="button" className={styles.iconBtn} aria-label="Direct messages">
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M2 12v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7M2 8l10 6 10-6M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"
        />
      </svg>
    </button>
  )
}

function IconCreate() {
  return (
    <button type="button" className={styles.iconBtn} aria-label="Create post">
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path stroke="currentColor" strokeWidth="2" d="M12 8v8M8 12h8" />
      </svg>
    </button>
  )
}

function IconExplore() {
  return (
    <button type="button" className={styles.iconBtn} aria-label="Explore">
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path fill="none" stroke="currentColor" strokeWidth="2" d="m16 8-8 8" />
      </svg>
    </button>
  )
}

function IconHeart() {
  return (
    <button type="button" className={styles.iconBtn} aria-label="Activity">
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M12 21s-6-4.35-9-8.5C1.5 9.36 3 6 6.5 6 9 6 12 9 12 9s3-3 5.5-3C21 6 22.5 9.36 21 12.5 18 16.65 12 21 12 21z"
        />
      </svg>
    </button>
  )
}

function IconAvatar() {
  return (
    <button type="button" className={styles.iconBtn} aria-label="Profile">
      <span className={styles.miniAvatar} />
    </button>
  )
}
