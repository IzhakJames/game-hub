import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yello" : "";

  return (
    <Badge colorScheme={color} paddingX={1} fontSize="sm">
      {score}
    </Badge>
  );
};

export default CriticScore;
