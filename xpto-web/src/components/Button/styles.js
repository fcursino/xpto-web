import styled from 'styled-components'

export const ButtonStyle = styled.div`
 
button {
    flex: 1;
    background: linear-gradient(to right, var(--cyan), var(--light-green));
    border-radius: 5px;
    
    color: white;
    font-size: 15px;
    max-width: 300px;
    min-width: 100px;
    padding: 7px;
    font-weight: bold;
    border: 0;
    margin-top: 12px;
    cursor: pointer;

    :hover {
    transition: all 0.3s;
    
    transform: scale(1.02);
    }

    :focus{
        cursor: pointer;
        padding: red 6px 10px;
    }
  }
`;