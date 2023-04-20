import {
  PreparationWrapper,
  InstructionWrapper,
  InstructionTitle,
  InstructionList,
  Item,
  SpanBox,
  Span,
  Text,
  ImageWrapper,
} from './RecipePreparation.styled';
import { nanoid } from 'nanoid';

export const RecipePreparation = ({ imageUrl, instructions }) => {
  const cleanedInstructions = instructions?.replace(/^\d+\)\s*/gm, '');
  const sentences = cleanedInstructions?.split(/(?:\.|\?|!)\s/g);
  const steps = sentences?.map(sentence =>
    sentence.replace(/^\d+\)/, '').trim()
  );
  return (
    <PreparationWrapper>
      <InstructionWrapper>
        <InstructionTitle>Recipe Preparation</InstructionTitle>
        <InstructionList>
          {steps?.map((el, idx) => (
            <Item key={nanoid()}>
              <SpanBox>
                <Span>{idx + 1}</Span>
              </SpanBox>
              <Text>{el}</Text>
            </Item>
          ))}
        </InstructionList>
      </InstructionWrapper>
      <ImageWrapper>
        <img src={imageUrl} alt={imageUrl} />
      </ImageWrapper>
    </PreparationWrapper>
  );
};

export default RecipePreparation;
