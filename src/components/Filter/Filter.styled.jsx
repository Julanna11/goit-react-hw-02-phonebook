import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

export const Input = styled.input`
  margin-bottom: 30px;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
  color: #333;

  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  border-radius: 0.1rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 65%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 5px;
`;
