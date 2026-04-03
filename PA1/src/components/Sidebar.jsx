import styles from './Sidebar.module.css'

/** Desktop / large tablet: profile summary and suggested accounts. */
export function Sidebar({ currentUser, suggestions }) {
  return (
    <aside className={styles.sidebar} aria-label="Account suggestions">
      <div className={styles.me}>
        <img
          className={styles.avatarLg}
          src={currentUser.avatarUrl}
          alt=""
          width={56}
          height={56}
          loading="lazy"
        />
        <div>
          <p className={styles.uname}>{currentUser.username}</p>
          <p className={styles.full}>{currentUser.fullName}</p>
        </div>
        <button type="button" className={styles.switch}>
          Switch
        </button>
      </div>

      <div className={styles.suggestHead}>
        <span>Suggested for you</span>
        <button type="button" className={styles.seeAll}>
          See All
        </button>
      </div>

      <ul className={styles.list}>
        {suggestions.map((s) => (
          <li key={s.id} className={styles.row}>
            <img
              className={styles.avatarSm}
              src={s.avatarUrl}
              alt=""
              width={32}
              height={32}
              loading="lazy"
            />
            <div className={styles.meta}>
              <p className={styles.unameSm}>{s.username}</p>
              <p className={styles.reason}>{s.reason}</p>
            </div>
            <button type="button" className={styles.follow}>
              Follow
            </button>
          </li>
        ))}
      </ul>

      <footer className={styles.footer}>
        <p>About · Help · Press · API · Jobs · Privacy · Terms · Locations</p>
        <p>© 2026 Instagram clone (student project)</p>
      </footer>
    </aside>
  )
}
