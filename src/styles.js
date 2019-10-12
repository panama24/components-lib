import styled from 'styled-components';

const Item = styled.p`
  margin: 0 0 6px 0;
  color: #707070;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    color: green;
  }
`;

const Section = styled.div`
  padding: 18px;
  border-left: 1px solid #ccc;
  min-width: 300px;

  &:first-of-type {
    border-left: 0;
  }
`;

const SectionTitle = styled.p`
  margin: 0 0 12px 0;
  font-weight: bold;
  text-transform: capitalize;
`;

export {
  Item,
  Section,
  SectionTitle,
}