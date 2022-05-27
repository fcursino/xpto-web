import styled from 'styled-components'
import { FormSelect } from 'react-bootstrap';

export const BudgetContainer = styled.div`
    height: 110vh;
    width: 100%;
`;

export const Content = styled.div`
    margin: 20px;
    background: var(--light-gray);
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const BudgetSection = styled.div`
    margin: 5px;
    height: 85vh;
    width: 300px;
    background: white;
    border-radius: 5px;
    align-items: center;
    justify-content:center ;
    position: relative;
    :hover {
    transition: all 0.3s;
    
    transform: scale(1.07);
    }
    > p {
    text-align: center;
    line-height: 7vh;
    height: 7vh;
    width: 85%;
    border-radius: 7px;
    display: table;
    margin: 0 auto;
    font-size: 12px;
    }

    > h3 {
        color: var(--dark-green);
        height: 50px;
    }
`;

export const BudgetTitleContainer = styled.div`
    height: 7vh;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    text-align: center;
    color: white;
    font-weight: bold;
    background: linear-gradient(to right, var(--cyan), var(--light-green));
`;

export const BudgetPriceContainer = styled.div`
    background: var(--green-gray);
    height: 10vh;
    line-height: 10vh;
    width: 100%;
    border-radius: 7px;
    display: table;
    align-self: center;
    margin: 0 auto;
    position: absolute;
    text-align: center;
    font-size: 20px;
    font-weight:bold ;
    bottom: 2px;
    justify-content: space-around ;
`;

export const BudgetDescContainer = styled.div`
    height: 7vh;
    width: inherit;
    border-radius: 7px;
    display: flex;
    margin: 20px 0px 20px 0px;
    font-size: 11px;
    text-align: justify;
    text-indent: 50px;
    flex-wrap: nowrap;
    

`;

export const BudgetTipContainer = styled.div`
    height: 7vh;
    border-radius: 7px;
    display: flex;
    margin: 20px 10px;
`;

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const QuestionContainer = styled.div`
    max-width: 90%;
    margin: 20px;

    > h4 {
        margin: 0 20px;
    }
`;

export const BudgetSetContainer = styled.div`
    width: auto;
    padding: 20px;
    text-align: left;
    display: flex;
    justify-content: flex-end;
    color: var(--light-green);

    > h2 {
        margin-right: auto;
    }
`;