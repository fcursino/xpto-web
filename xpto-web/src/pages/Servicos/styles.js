import styled from 'styled-components'


export const ServicesContainer = styled.div`
    height: 110vh;
`;

export const Content = styled.div`
    margin: 20px;
    background: var(--light-gray);
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const ServiceSection = styled.div`
    margin: 5px;
    width: 300px;

    :hover {
    transition: all 0.3s;
    background: var(--light-gray);
    transform: scale(1.07);
    }
    > hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 5px solid var(--dark-green);
    }

    > h3 {
        color: var(--dark-green);
        height: 50px;
    }
`;

export const ServiceText = styled.div`
    text-indent: 50px;
    text-align: justify;
    width: 95%;
`;

export const TitleContainer = styled.div`
    width: 90%;
    text-align: center;
    margin: 10px;
`;

export const Title = styled.label`
    color: var(--whatsapp-green);
    font-size: 25px;
`;


