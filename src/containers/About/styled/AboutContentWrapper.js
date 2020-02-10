import styled from 'styled-components';

export const AboutContentWrapper = styled.div`
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
    color: #626262;
    max-width: 900px;
    margin: 100px auto;
    div {
        :first-child {
            margin: 0;
            line-height: 1.2rem;
        }
        :nth-child(3) {
            margin: 0;
        }
        :last-child{
            b {
                font-weight: 700;
                font-size: 1.3rem;
            }
        }
        b{
            font-weight: 500;
            font-style: italic;
        }
        span {
            font-weight: 700;
            font-size: 1.3rem;
            font-family: 'Poppins', sans-serif;
        }
    }
`;