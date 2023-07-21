import { useEffect, useState } from "react";
import Description from "../../components/Description";
import VideoList from "../../components/VideoList";
import VideoPlayer from "../../components/VideoPlayer"
import styles from "./styles.module.scss";
import Accessibility from "../../components/Accessiblity";
import audioUrl from '../../assets/audio.mp3';
import axios from "axios";

const url = "https://www.youtube.com/embed/8x5EyGmmOco";
const videoTitle = "Aula 1 - O que é Git?";
const description = "(INTRO - 10 seconds) Host: Bem-vindos ao nosso vídeo sobre Git! Hoje, vamos aprender o que é Git, por que é tão importante para desenvolvedores e como podemos usá-lo para facilitar a colaboração em projetos de software. Vamos começar!\n (1. O que é Git - 30 segundos) Host: Git é um sistema de controle de versão distribuído usado por desenvolvedores para acompanhar as mudanças em seu código-fonte ao longo do tempo. Ele permite que várias pessoas trabalhem juntas em um projeto, mantendo um histórico detalhado de todas as alterações. Dessa forma, é possível recuperar versões anteriores do código, rastrear quem fez quais mudanças e resolver conflitos de forma eficiente. (2. Principais conceitos - 1 minuto) Host: Vamos falar sobre alguns conceitos fundamentais do Git. O primeiro é o repositório, que é basicamente uma pasta que contém todos os arquivos do projeto e seu histórico de alterações. Em seguida, temos o 'commit', que é uma captura de instantâneo de um conjunto de alterações feitas em seus arquivos. Esses commits formam uma linha do tempo que você pode percorrer. Outro conceito importante é o 'branch' (ramo). Imagine-o como uma linha de desenvolvimento separada, onde você pode trabalhar em recursos ou correções sem afetar a versão principal do projeto. Posteriormente, esses ramos podem ser combinados por meio de um 'merge' (mesclagem). (3. Ciclo básico de trabalho - 1 minuto) Host: O ciclo básico de trabalho com o Git envolve três etapas principais: primeiro, você cria um novo ramo para trabalhar em uma funcionalidade ou correção específica. Em seguida, faz as alterações necessárias nos arquivos do projeto. Por fim, você cria um commit com as mudanças realizadas. (4. Colaboração e GitHub - 40 segundos) Host: Uma das principais vantagens do Git é a facilidade de colaboração. Desenvolvedores podem clonar um repositório, fazer suas modificações em ramos separados e, em seguida, solicitar que o proprietário do repositório original aceite suas alterações por meio de 'pull requests'. Uma plataforma popular para hospedar repositórios Git é o GitHub. Ele oferece uma interface amigável para trabalhar com Git, além de fornecer ferramentas para revisar e discutir mudanças antes de integrá-las ao projeto principal. (5. Resolvendo conflitos - 20 segundos) Host: Às vezes, podem ocorrer conflitos quando duas ou mais pessoas modificam a mesma parte do código simultaneamente. O Git torna fácil resolver esses conflitos, permitindo que você escolha as alterações corretas e consolide-as de maneira adequada. (CONCLUSÃO - 20 segundos) Host: Resumindo, o Git é uma ferramenta essencial para desenvolvedores, pois permite que trabalhem em conjunto de maneira organizada e eficiente, controlando o histórico de alterações de seus projetos. Com o GitHub ou outras plataformas de hospedagem, a colaboração se torna ainda mais poderosa. Então, não deixe de aprender e dominar o Git para melhorar sua experiência de desenvolvimento! (CLOSE - 10 seconds) Host: Isso é tudo para o nosso vídeo de hoje sobre Git. Espero que você tenha aprendido algo novo! Se gostou, deixe o seu like, compartilhe e inscreva-se no canal para mais conteúdo. Obrigado por assistir, e até a próxima!";

const list = [
  {
    id: "1",
    title: "Aula 02",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl",
  },
  {
    id: "2",
    title: "Aula 03",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl",
  }
];


const StudyRoom = () => {
  const [focus, setFocus] = useState(false);
  
  const [showDescription, setShowDescription] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [showAudio, setShowAudio] = useState(false);  

  const handleFocus = () => {
    setFocus(!focus);

    const root = document.documentElement;
    root.style.setProperty('--top', !focus ? "27rem" : "0");
    root.style.setProperty('--bottom', !focus ? "27rem" : "0");
  }

  const handleOnlyAudio = () => {
    setShowVideo(false);
    setShowAudio(true);
  }

  const handleOnlyText = () => {    
    setShowVideo(false);
    setShowAudio(false);
  }

  const handleReset = () => {
    setShowVideo(true);
    setShowAudio(false);
    setShowDescription(true);
  }

  useEffect(() => {
    void axios.get('https://educa-back-production-89a4.up.railway.app/classes/all');
  });

  return (
    <div className={styles.studyRoom}>      
      {focus && <div className={styles.focusDivTop} />}
      
      <div className={styles.mainContainer}>
        <div>
          {showVideo && <VideoPlayer url={url} />}
          {showAudio && <audio controls style={{ marginTop: '10rem', width: '40rem'}}><source src={audioUrl} type="audio/mpeg" /></audio>}
          <h1 className={styles.title}>{videoTitle}</h1>

          {!showVideo && !showAudio && <div style={{ maxWidth: '40rem'}}><Description text={description} /></div>}          
        </div>

        <VideoList list={list}/>        
      </div>
      
      <div className={styles.descriptionContainer}>
        {(showAudio || showVideo) && <Description text={description} />}
      </div>

      <Accessibility 
        focusStatus={focus}
        videoStatus={!showVideo && showAudio}
        descriptionStatus={!showVideo && showDescription && !showAudio}
        handleFocus={handleFocus}
        handleOnlyAudio={handleOnlyAudio}
        handleOnlyText={handleOnlyText}
        onReset={handleReset}
      />

      {focus && <div className={styles.focusDivBottom} />}
    </div>
  );
}

export default StudyRoom;
