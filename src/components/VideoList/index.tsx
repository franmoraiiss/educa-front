import styles from "./styles.module.scss";

interface VideoListProps {
  list: Array<{
    id: string;
    title: string;
    url: string;
    description: string;
  }>;
}

const VideoList: React.FC<VideoListProps> = ({ list }) => {
  return (
    <div className={styles.videoList}>      
      <span className={styles.titleList}>Próximas aulas</span>       
      <hr />     
      {list.map((item) => (
        <a href={item.url}>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.description}>{item.description}</span>
        </a>
      ))}
    </div>
  );
}

export default VideoList;
