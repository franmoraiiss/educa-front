import VideoList from "../../components/VideoList";
import VideoPlayer from "../../components/VideoPlayer"
import styles from "./styles.module.scss";

const url = "https://www.w3schools.com/html/mov_bbb.mp4";
const videoTitle = "Aula sobre introdução ao desenvolvimento de sistemas web";
const list = [
  {
    id: "1",
    title: "Aula 02",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl",
  },
  {
    id: "1",
    title: "Aula 03",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl",
  },
  {
    id: "1",
    title: "Aula 04",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl",
  },
  {
    id: "1",
    title: "Aula 05",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl",
  },
  {
    id: "1",
    title: "Aula 06",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl",
  },
];


const StudyRoom = () => {

  // TODO: Video Component

  // TODO: Video list Component

  // TODO: Description Component

  // TODO: Accessibility Component   

  return (
    <div className={styles.studyRoom}>      
      <div className={styles.mainContainer}>
        <div>
          <VideoPlayer url={url} />  
          <h1 className={styles.title}>{videoTitle}</h1>
        </div>

          <VideoList list={list}/>        
      </div>

    </div>
  );
}

export default StudyRoom;
