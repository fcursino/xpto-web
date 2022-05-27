import styled from 'styled-components';


export const ContactContainer = styled.div`
    height: 100vh;
    

`;

export const LeftSide = styled.div`
    width: 50%;
    height: 50vh;

    @media (max-width: 700px){
        width: 100%;
    }
`;


export const RightSide = styled.div`
    width: 50%;
    height: 50vh;

    @media (max-width: 700px){
        width: 100%;
    }
`;

export const SocialMediaContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: flex-start;

    td {
        width: 50px;
    }

    tr {
        :hover {
        transition: all 0.3s;
        transform: scale(1.07);
    }
    }

    > a {
        margin: 5px;
    }
`;

export const Map = styled.div`

`;

export const Content = styled.div`
    align-items: center;
    align-content: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    padding: 40px;
    background: var(--light-grey);
    width: 90%;

    > h4 {
        color: var(--dark-green);
        font-size: 15px;
    }
`;

export const ContactChannels = styled.div`

    
    width: 30%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;


    > a {
        margin: 5px;
        
    }

    td {
        width: 50px;
    }

    tr {
        :hover {
        transition: all 0.3s;
        transform: scale(1.07);
    }
    }
`;

