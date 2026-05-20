import './StoriesBar.css'

/** Stories row. */
export function StoriesBar({ stories }) {
  return (
    <section className="wrap" aria-label="Stories">
      <div className="track">
        {stories.map((story) => (
          <StoryRing key={story.id} story={story} />
        ))}
      </div>
    </section>
  )
}

function StoryRing({ story }) {
  const { user, viewed } = story
  const ringClass = viewed ? 'ringViewed' : 'ringNew'

  return (
    <button type="button" className="storyBtn">
      <span className={`ringOuter ${ringClass}`}>
        <span className="ringInner">
          <img
            className="avatar"
            src={user.avatarUrl}
            alt=""
            width={56}
            height={56}
            loading="lazy"
          />
        </span>
      </span>
      <span className="username">{user.username}</span>
    </button>
  )
}