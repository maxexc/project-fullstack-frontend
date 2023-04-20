import { Box, Videlka, Knifik, WrapperLoader } from './Loader.styled';

// size - common size in px, by default = 300px
// t - animation time in ms, by default 1000ms

export const Loader = ({ size = 115, t = 750 }) => {
  let w = size / 3;
  let h = size - w;
  return (
    <WrapperLoader>
      <Box square={size}>
        <Videlka width={w} height={h} t={t} />
        <Knifik width={w} height={h} t={t} />
      </Box>
    </WrapperLoader>
  );
};
