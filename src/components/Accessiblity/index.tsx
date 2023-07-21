import focus from '../../assets/focus.svg';
import audio from '../../assets/audio.svg';
import text from '../../assets/text.svg';
import reset from '../../assets/reset.png';
import styles from "./styles.module.scss";

interface AccessibilityProps {
  handleFocus: () => void;
  handleOnlyAudio: () => void;
  handleOnlyText: () => void;
  focusStatus: boolean;
  videoStatus: boolean;
  descriptionStatus: boolean;
  onReset: () => void;
}

const Accessibility: React.FC<AccessibilityProps> = ({ 
  handleFocus,
  handleOnlyAudio,
  handleOnlyText,
  focusStatus,
  videoStatus,
  descriptionStatus,
  onReset
}) => {
  return (
    <div className={styles.container}>
      <button onClick={handleFocus} aria-label="Foco"><img src={focus} alt="Foco" style={{ background: focusStatus ? "#F1F1F1" : "#878787", borderRadius: "30%", padding: "0"}}/></button>
      <button onClick={handleOnlyAudio}><img src={audio} alt="Áudio" style={{ background: videoStatus ? "#F1F1F1" : "#878787", borderRadius: "30%", padding: ".8rem"}}/></button>
      <button onClick={handleOnlyText}><img src={text} alt="Texto" style={{ background: descriptionStatus ? "#F1F1F1" : "#878787", borderRadius: "30%", padding: "1rem"}}/></button>
      <button onClick={onReset}><img src={reset} alt="Texto" style={{ width: "1.2rem", borderRadius: "30%", padding: ".5rem"}}/></button>
    </div>
  );
};

export default Accessibility;
