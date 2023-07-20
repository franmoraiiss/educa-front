import styles from './styles.module.scss'

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <video className={styles.video} controls>
      <source src={url} type="video/mp4"></source>
    </video>
  );
}

export default VideoPlayer;
