import styled from 'styled-components';

export const ExampleTitleWrapper = styled.div`
    margin: 5rem 0 0 2rem;
    font-size: 2rem;
    div {
    :nth-child(2) {
        padding-top: 8rem;
    }}
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;