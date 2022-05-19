import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const Button = styled.button`
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-size: 16px;
  width: 220px;
  background-color: ${colors.bgPrimary};
  color: ${colors.primary};
  border-radius: 30px;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  ${props => {
    let styling = "";
    props.buttonStyle &&
      props.buttonStyle.forEach(modifier => {
        if (modifier === "secondary") {
          styling += `
          background: ${colors.primary};
          color: ${colors.bgPrimary};
        `;
        }
        if (modifier === "nav") {
          styling += `
          width: 150px;
        `;
        }
        if (modifier === "outline") {
          styling += `
          border: 1px solid ${colors.primary};

          &: hover{
            background-color: ${colors.primary};
            color: ${colors.secondary};
          }

        `;
        }
        if (modifier === "heading") {
          styling += `
          width: 200px;
        `;
        }

        if (modifier === "landing") {
          styling += ` 
          width: 220px;
        `;
        }
        if (modifier === "form") {
          styling += ` 
          display:block;
          margin: 0 auto;
          width: 220px;
        `;
        }
      });
    return styling;
  }}
`;
