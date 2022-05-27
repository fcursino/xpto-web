import styled from "styled-components";
import { Row } from "react-bootstrap";

export const HomeContainer = styled.div`
    
    height: 110vh;
    width: 100%;
`;

export const LeftSide = styled.div`
    width: 60%;
    margin-right: 0px;
    padding: 50px;

    @media (max-width: 700px){
        width: 100%;
    }
    
    > p {
        font-size: 30px;
        font-weight: lighter;
        text-indent: 20px;
    }

    > h6 {
        font-size: 13px;
        text-indent: 20px;
    }
    background: linear-gradient(to right, var(--light-green), var(--cyan)) ;
`;

export const RightSide = styled.div`
    width: 40%;
    padding: 50px;
    color: var(--dark-green);
    font-size: 25px;
    background: linear-gradient(to right , var(--green-gray), var(--cyan));

        > hr {
            margin-top: 1rem;
            margin-bottom: 1rem;
            border: 0;
            border-top: 1px solid white;
        }

        > ul {
            font-size: 15px;
            font-weight: bold;
        }

        > h6 {
            margin-top: 50px;
            margin-bottom: 5px;
        }

    @media (max-width: 700px){
        width: 100%;
    }

`;

export const Content = styled(Row)`
    display: flex;
    flex-wrap: no-wrap;
    height: 100%;
    position: inherit;

    @media (max-width: 700px){
        flex-wrap: wrap;
    }
    
`;

export const PlayerContainer = styled.div`
    display: grid;
    /* height: 100%; */
    padding: 20px;
    
    max-width: 90%;

`;

export const BlockContainer = styled.div`
    flex-wrap: wrap;
    padding: 5px;
    display: flex;
    justify-content: space-between;
`;

export const Block = styled.div`
    background: var(--light-gray);
    width: 130px;
    height: 7vh;
    border-radius: 5px;
    margin: 5px;
    display: flex;
    flex-wrap: no-wrap;
    font-size: 12px;
    color: var(--light-black);
    font-weight:bold ;
    box-shadow: 1px 7px 5px rgb(0, 0, 0, 0.3);
    

    :hover {
    transition: all 0.3s;
    
    transform: scale(1.03);
    }

`;

export const CompanyContainer = styled.div`
    display: grid;
    
    padding: 20px;
    
`;

export const Company = styled.img`
    width: inherit;
    max-width: 100%;
    min-width: 100px;
`;

export const ObsContainer = styled.div`
    margin-top: 50px;
    color: black;
    text-align: justify;
    font-size: 14px;
    font-weight: bold;
`;

export const BudgetTitle = styled.div`
    text-align: right;
    margin-bottom: 50px;
    font-size: 30px;
`;

export const SocialMediaContainer = styled.div`
    align-self: center;
    width: 30%;
    display: flex;
    justify-content: space-evenly;

    > a {
        margin: 5px;
    }
`;