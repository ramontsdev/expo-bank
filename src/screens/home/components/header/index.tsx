import { Container, DoubtButton, LeftSide, NotificationButton, RightSide, UserAvatar } from "./styles";

import DoubtIcon from '../../../../assets/icons/doubt_icon.svg';
import NotificationIcon from '../../../../assets/icons/notification_icon.svg';
import { Text } from "../../../../components/Text";

export function Header() {
  return (
    <Container>
      <LeftSide>
        <UserAvatar>
          <Text>NU</Text>
        </UserAvatar>

        <Text>Nome do usuário</Text>
      </LeftSide>

      <RightSide>
        <DoubtButton>
          <DoubtIcon />
        </DoubtButton>

        <NotificationButton>
          <NotificationIcon />
        </NotificationButton>
      </RightSide>

    </Container>
  )
}
