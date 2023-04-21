import styles from './feed-post.module.css'

export interface FeedPostValues {
    poster: string
    post: string;
    likes: string;
}

export default function FeedPost(values: FeedPostValues) {
    return (
      <div className={styles.top_level_container + ' p-3'}>
        <div className="mb-3">
            <p>
                <b>{values.poster}</b>
            </p>
            <p>
                {values.post}
                </p>
            <p>
                ❤️ {values.likes}
            </p>
        </div>
    </div>
    );
  };