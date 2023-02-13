import { ReactNode } from "react";

import { Container, IconWrap } from "./styles";

import { Text } from "../../../../../components/Text";

type Props = {
  label: string;
  icon: ReactNode;
}
export function ProductButton({ icon, label }: Props) {
  return (
    <Container>
      <IconWrap>
        {icon}
      </IconWrap>

      <Text size={14}>{label}</Text>
    </Container>
  )
}
