import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px ${({ isDragging }) => (isDragging ? "15px" : "2px")} 0
    #0002;
  margin-bottom: 15px;
  cursor: grab;
`;

export const Header = styled.div`
  height: 15px;
  background: #3941fa20;
  border-radius: 3px 3px 0 0;
  position: relative;
`;
export const Status = styled.div`
  position: absolute;
  left: 15px;
  top: 10px;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: ${({ color }) => color};
`;
export const Content = styled.div`
  padding: 15px;
  margin-bottom: 10px;
`;
export const Autor = styled.div`
  width: 100%;
  padding: 15px;
  display: inline-flex;

  img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }
`;
