// import styled
import styled from "styled-components";
import { css } from "styled-components";

/**
 * sm: font-size: 0.8rem, padding: 0.2rem 0.5rem.
 * md (default): font-size: 1rem, padding: 0.5rem 1rem.
 * lg: font-size: 1.3rem, padding: 0.5rem 1rem;

 */

// buat component button
const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    

    // mengakses props variant
    background-color: ${({ variant, theme }) => 
        theme.colors[variant] || theme.colors.primary};
        
       
    


    // Props Full
    ${(props) => 
        props.full && 
        css`
            display: block;
            width: 100%
    `}
`;

//export button
export default Button;