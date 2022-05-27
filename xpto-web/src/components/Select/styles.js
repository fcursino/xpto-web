import styled from 'styled-components'

export const SelectStyle = styled.div`
  
  
  width: 33%;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  margin: 20px;
 
select {
    align-self: center;
    background: #ffffff;
    border-radius: 5px;
    border: 2px solid #acb8c2;
    flex: 1;
    background: transparent;
    height: 30px;
    
    :focus{
        outline-color: transparent;
    }
  }
`;