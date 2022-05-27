import styled from 'styled-components'


export const FooterContainer = styled.div`
    width: 100%;
    
    height: 30vh;
    background: var(--cyan);
    position: relative;
    clear: both;
    bottom: 2px;
`;

export const SocialMediaContainer = styled.div`
    align-self: center;
    /* width: 30%; */
    display: flex;
    justify-content: space-evenly;

    > a {
        margin: 5px;
    }
`;

export const Column = styled.div`
    width: 150px;
    height: 100%;
    padding: 20px;
    color: white;
    background: var(--cyan);

    > h6 {
        font-size: 12px;
        color: white;
    }
    
`;

export const SocialColumn = styled.div`
    height: 100%;
    padding: 20px;
    color: white;
    background: var(--cyan);
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap:wrap ;
    background: var(--cyan);
`;

export const PoweredByContainer = styled.div`
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    background: var(--dark-green);
    color: white;
    height: 35px;
    line-height: 35px;
`;

export const Logo = styled.img`
    margin: 20px;
    vertical-align: middle;
    max-width: 100%;
    max-height: 100vh;
    min-width: 100px;
`;