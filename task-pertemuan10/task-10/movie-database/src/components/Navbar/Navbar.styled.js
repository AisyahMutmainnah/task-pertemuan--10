// import styled-components
import styled from "styled-components";

const StyledNavbar = styled.div`
    background-color: #4361ee;
    padding: 1rem;
    color: #fff;

    nav {
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-size: 2.4rem;
      margin-bottom: 1rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
    }

    li {
      margin-bottom: 1rem;
    }

    .link {
      text-decoration: none;
      color: #fff;
    }

    @media screen and (min-width: 768px){
      flex-basis: 50%;
      
      nav {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      h1 {
        margin-bottom: 0;
      }

      ul {
        flex-direction: row;
      }

      li {
        margin: 0 1rem;
      }

    @media screen and (min-width: 992px) {
      flex-basis: 25%;
      padding: 1rem;
    }
      
    }
`;

export default StyledNavbar;