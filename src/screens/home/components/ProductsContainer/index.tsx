import { ReactNode } from "react";
import { Container } from "./styles";

type Props = {
  children: ReactNode;
}
export function ProductsContainer({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}
