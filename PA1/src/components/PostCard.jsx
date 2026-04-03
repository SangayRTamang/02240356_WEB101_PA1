import { useState } from 'react'
import styles from './PostCard.module.css'

export function PostCard({ post }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const likeCount = post.likes + (liked ? 1 : 0)

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.userRow}>
          <img
            className={styles.avatar}
            src={post.user.avatarUrl}
            alt=""
            width={32}
            height={32}
            loading="lazy"
          />
          <div className={styles.names}>
            <span className={styles.username}>
              {post.user.username}
              {post.user.verified ? (
                <span className={styles.verified} title="Verified">
                  ✓
                </span>
              ) : null}
            </span>
          </div>
        </div>
        <button type="button" className={styles.more} aria-label="More options">
          ···
        </button>
      </header>

      <div className={styles.media}>
        <img src={post.imageUrl} alt={post.alt} loading="lazy" />
      </div>

      <div className={styles.body}>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.actionBtn}
            aria-pressed={liked}
            aria-label={liked ? 'Unlike' : 'Like'}
            onClick={() => setLiked((v) => !v)}
          >
            {liked ? <HeartFilled /> : <HeartOutline />}
          </button>
          <button type="button" className={styles.actionBtn} aria-label="Comment">
            <CommentIcon />
          </button>
          <button type="button" className={styles.actionBtn} aria-label="Share">
            <ShareIcon />
          </button>
          <button
            type="button"
            className={`${styles.actionBtn} ${styles.save}`}
            aria-pressed={saved}
            aria-label={saved ? 'Unsave' : 'Save'}
            onClick={() => setSaved((v) => !v)}
          >
            {saved ? <BookmarkFilled /> : <BookmarkOutline />}
          </button>
        </div>

        <p className={styles.likes}>
          <strong>{likeCount.toLocaleString()}</strong> likes
        </p>

        <p className={styles.caption}>
          <strong>{post.user.username}</strong> {post.caption}
        </p>

        {post.commentsPreview && post.commentsPreview.length > 0 ? (
          <button type="button" className={styles.viewComments}>
            View all comments
          </button>
        ) : null}

        {post.commentsPreview?.slice(0, 2).map((c, i) => (
          <p key={i} className={styles.comment}>
            <strong>{c.user.username}</strong> {c.text}
          </p>
        ))}

        <time className={styles.time} dateTime="2026-04-03">
          {post.timeAgo}
        </time>
      </div>
    </article>
  )
}

function HeartOutline() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M12 21s-6-4.35-9-8.5C1.5 9.36 3 6 6.5 6 9 6 12 9 12 9s3-3 5.5-3C21 6 22.5 9.36 21 12.5 18 16.65 12 21 12 21z"
      />
    </svg>
  )
}

function HeartFilled() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path fill="#ed4956" d="M12 21s-6-4.35-9-8.5C1.5 9.36 3 6 6.5 6 9 6 12 9 12 9s3-3 5.5-3C21 6 22.5 9.36 21 12.5 18 16.65 12 21 12 21z" />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M21 12a8 8 0 0 1-8 8H6l-4 3v-9a8 8 0 0 1 8-8h9a8 8 0 0 1 8 8z"
      />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path fill="none" stroke="currentColor" strokeWidth="2" d="M22 2 9 15M16 2h6v6" />
      <path fill="none" stroke="currentColor" strokeWidth="2" d="M15 9H6a4 4 0 0 0-4 4v7" />
    </svg>
  )
}

function BookmarkOutline() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M6 4h12v16l-6-4-6 4V4z"
      />
    </svg>
  )
}

function BookmarkFilled() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path fill="currentColor" d="M6 4h12v16l-6-4-6 4V4z" />
    </svg>
  )
}
