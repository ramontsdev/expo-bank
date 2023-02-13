import { Modal as BaseModal } from 'react-native';
import { CloseButton, IconWrap, ModalBody, ModalContainer, ModalContent, TopBar, Wrapper } from './styles';

import { Text } from '../Text';

import HelpIcon from './help_icon.svg';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  message: string;
}

export function Modal({ visible, message, onClose }: ModalProps) {

  return (
    <BaseModal
      animationType='fade'
      visible={visible}
      transparent
      onRequestClose={onClose}
    >
      <ModalContainer activeOpacity={1} onPress={onClose}>
      </ModalContainer>

      <Wrapper>
        <CloseButton onPress={onClose}>
          <Text size={18} weight='bold' color='#fff'>
            X Fechar
          </Text>
        </CloseButton>

        <ModalBody>
          <TopBar />

          <ModalContent>
            <IconWrap>
              <HelpIcon />
            </IconWrap>

            <Text size={32} weight='bold'>Atenção</Text>
            <Text size={24}>{message}</Text>
          </ModalContent>
        </ModalBody>
      </Wrapper>
    </BaseModal>
  )
}
