//import styled-component
import styled from "styled-components";

const StyledHero = styled.div`
    margin: 5rem auto;
    padding: 1rem;

    section {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    div {
      margin-bottom: 1rem;
    }

    h2 {
      color: #4361ee;
      margin-bottom: 1rem;
      font-size: 2.44rem;
    }

    h3 {
      color: #b5179e;
      margin-bottom: 1rem;
      font-size: 1.59rem;
    }

    p {
      color: #64748b;
      margin-bottom: 1rem;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 25px;
    }

    @media screen and (min-width: 768px) {
    /*
      * Nothing TODO Here.
      * We dont change style Hero. 
    */
    }

    /* Large Screen */
    @media screen and (min-width: 992px) {
      max-width: 1200px;
      margin: 7rem auto;
      

      section {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        margin: 0 5rem;
        font-size: 40px;
      }

      div {
        flex-basis: 40%;
      }

      .hero__right {
        flex-basis: 60%;
      }

    }
`;

export default StyledHero;