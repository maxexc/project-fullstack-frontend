import styled, { keyframes } from 'styled-components';
import { ReactComponent as Fork } from '../../images/Loader/fork-white.svg';
import { ReactComponent as Knife } from '../../images/Loader/knife-white.svg';

export const WrapperLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Box = styled.div`
  width: ${p => p.square}px;
  height: ${p => p.square}px;
  background: #8baa36;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.75;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
`;

const knifeanim = keyframes`
0%{
    transform: translateY(20%);
}
100%{
transform: translateY(-20%);
}
`;

const videlkaanim = keyframes`
0%{
    transform: translateY(-20%);

}
100%{
    transform: translateY(20%);

}
`;

export const Videlka = styled(Fork)`
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  animation: ${videlkaanim} ${p => p.t}ms alternate infinite ease-in-out;
`;

export const Knifik = styled(Knife)`
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  animation: ${knifeanim} ${p => p.t}ms alternate infinite ease-in-out;
`;
