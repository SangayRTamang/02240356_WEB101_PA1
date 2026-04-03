import { BottomNav } from './components/BottomNav'
import { PostCard } from './components/PostCard'
import { Sidebar } from './components/Sidebar'
import { StoriesBar } from './components/StoriesBar'
import { TopNav } from './components/TopNav'
import { currentUser, posts, stories, suggestions } from './data/feedData'
import styles from './App.module.css'

/**
 * Home feed layout: recreates Instagram’s main feed (stories + posts + sidebar).
 * Data is supplied from `src/data/feedData.js` for reusable child components.
 */
function App() {
  return (
    <div id="top" className={styles.page}>
      <TopNav />
      <main className={styles.main}>
        <div className={styles.feedColumn}>
          <StoriesBar stories={stories} />
          <div className={styles.posts}>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        <Sidebar currentUser={currentUser} suggestions={suggestions} />
      </main>
      <BottomNav />
    </div>
  )
}

export default App
