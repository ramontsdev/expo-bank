import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 0 ${({ theme }) => theme.padding};;
`
