import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 350px;

  overflow: auto;
  height: 100%;
  padding: 0 15px;
  & + div {
    border-left: 1px solid rgba(0,0,0,0.05);
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 30px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 15px;

  span {
    width: 30px;
    height: 30px;
    background: #387D7A;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  h2 {
    font-size: 14px;
    color: #333;
  }
`;
