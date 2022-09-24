import styled from '../styled';

export const Input = styled.input`
  width: 300px;
  height: 44px;
  padding: 0 11px;
  border-radius: 5px;
  border: 1px solid ${(t) => t.theme.border};
  outline: none;
  background-color: ${(t) => t.theme.textInputBackground};
  font-size: 13px;
  line-height: 100%;
  color: ${(t) => t.theme.text};

  &::placeholder {
    color: ${(t) => t.theme.textlight};
  }

  &:hover {
    border-color: ${(t) => t.theme.borderHover};
  }

  &:focus {
    border-color: ${(t) => t.theme.borderFocus};
  }

  &:disabled {
    border: none;
  }
`;
