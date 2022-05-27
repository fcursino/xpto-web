import styled from 'styled-components'

export const InputStyle = styled.div`
  align-self: center;
  background: #ffffff;
  border-radius: 5px;
  border: 2px solid #acb8c2;
  padding: 6px;
  width: 50%;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  margin: 20px;
 
input {
    flex: 1;
    background: transparent;
    border: 0;
    margin-right: 16px;

    
    &:focus{
        outline-color: transparent;
    }
  }
`;