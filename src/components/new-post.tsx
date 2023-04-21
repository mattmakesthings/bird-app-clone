import styles from './new-post.module.css'

export interface FeedPostValues {
    poster: string
    post: string;
    likes: string;
}

export default function NewPost() {
    return (
      <div className={styles.top_level_container + ' p-3'}>
        <form className="mb-3">
        <div className={styles.container}>
            <p>
                
                    <textarea
                        name="post"
                        maxLength={256}
                        className={styles.text}
                    />
                    
            </p>
            </div>
            <input type="submit" value="Submit" />
        </form>
    </div>
    );
  };