import styles from './StoriesBar.module.css'

/** stories row. */
export function StoriesBar({ stories }) {
  return (
    <section className={styles.wrap} aria-label="Stories">
      <div className={styles.track}>
        {stories.map((story) => (
          <StoryRing key={story.id} story={story} />
        ))}
      </div>
    </section>
  )
}

function StoryRing({ story }) {
  const { user, viewed } = story
  const ringClass = viewed ? styles.ringViewed : styles.ringNew

  return (
    <button type="button" className={styles.storyBtn}>
      <span className={`${styles.ringOuter} ${ringClass}`}>
        <span className={styles.ringInner}>
          <img
            className={styles.avatar}
            src={user.avatarUrl}
            alt=""
            width={56}
            height={56}
            loading="lazy"
          />
        </span>
      </span>
      <span className={styles.username}>{user.username}</span>
    </button>
  )
}
