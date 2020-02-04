import styled from 'styled-components';

export const ContentLine = styled.div`
    line-height: 2rem;
    text-align: center;
    :nth-child(3) {
        padding-bottom: 1rem;
    }
    a {
        color: #626262;
        text-decoration: none;
        padding: 5px;
        margin: 2px 0;
        font-weight: 500;
        border-radius: 5px;
        transition: all .3s ease-in-out;
        :hover {
            color: #e6bc28;
            background: rgba(92,92,92,.2);
            
        }
    }
`;