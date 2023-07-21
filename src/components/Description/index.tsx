interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {

  return (
    <div>
      <h3>Transcrição</h3>
      <span style={{ display: "block", textAlign: "justify" }}>{text}</span>
    </div>
  );
};

export default Description;
