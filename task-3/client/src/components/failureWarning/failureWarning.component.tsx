import { WarningContainer, WarningText } from "./failureWarning.styles";

type FailureWarningProps = {
  text: string;
} 

const FailureWarning = ({text}: FailureWarningProps) => (
  <WarningContainer>
    <WarningText>{text}</WarningText>
  </WarningContainer>
);

export default FailureWarning;
