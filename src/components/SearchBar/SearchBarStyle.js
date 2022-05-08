import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Search = styled.div`
  position: relative;
  width: 360px;
  height: 48px;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  transition: all 0.3s ease;
  z-index: 0;
`;

export const SearchInput = styled.input`
  padding-left: 48px;
  border-radius: 6px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: transparent;
  outline: none;
  font-size: 16px;
  border: 1px solid ${colors.textSecondary};

  &:focus {
    border-color: ${colors.textPrimary};
  }
`;
