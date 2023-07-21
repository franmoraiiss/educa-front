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
          <img src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`} />
          <div>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.description}>{item.description}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default VideoList;
