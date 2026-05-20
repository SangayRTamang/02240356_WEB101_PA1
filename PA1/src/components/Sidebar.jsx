import './Sidebar.css'

export function Sidebar({ currentUser, suggestions }) {
  return (
    <aside className="sidebar" aria-label="Account suggestions">
      <div className="me">
        <img
          className="avatarLg"
          src={currentUser.avatarUrl}
          alt=""
          width={56}
          height={56}
          loading="lazy"
        />
        <div>
          <p className="uname">{currentUser.username}</p>
          <p className="full">{currentUser.fullName}</p>
        </div>
        <button type="button" className="switch">
          Switch
        </button>
      </div>

      <div className="suggestHead">
        <span>Suggested for you</span>
        <button type="button" className="seeAll">
          See All
        </button>
      </div>

      <ul className="list">
        {suggestions.map((s) => (
          <li key={s.id} className="row">
            <img
              className="avatarSm"
              src={s.avatarUrl}
              alt=""
              width={32}
              height={32}
              loading="lazy"
            />
            <div className="meta">
              <p className="unameSm">{s.username}</p>
              <p className="reason">{s.reason}</p>
            </div>
            <button type="button" className="follow">
              Follow
            </button>
          </li>
        ))}
      </ul>

      <footer className="footer">
        <p>About · Help · Press · API · Jobs · Privacy · Terms · Locations</p>
        <p>© 2026 Instagram clone (student project)</p>
      </footer>
    </aside>
  )
}