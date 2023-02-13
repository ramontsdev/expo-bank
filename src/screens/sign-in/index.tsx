import { useState } from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Button } from "../../components/button";
import { Text } from "../../components/Text";
import {
  Actions,
  Body, Container, DocumentWrap,
  Header, LogoWrap, PasswordInputWrap, TextInputWrap, WelcomeWrap
} from "./styles";

import { Input } from '../../components/input';
import { Modal } from '../../components/modal';
import { useSignIn } from './use-sign-in';

import { RFValue } from 'react-native-responsive-fontsize';
import backgroundImage from '../../assets/images/bg-onboarding.png';
import LucreeLogo from '../../assets/images/lucree_logo.svg';

export function SignInScreen() {
  const { baseColors } = useTheme()
  const [inFocus, setInFocus] = useState(false)

  const {
    documentIsValid,
    documentNumber,
    handleChangeDocumentNumber,
    handleChangePassword,
    handleSubmit,
    modalVisible,
    setModalVisible,
    errorModalMessage
  } = useSignIn()

  return (
    <Container source={backgroundImage}>
      <Modal
        message={errorModalMessage}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <Body
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
      >
        <Header>
          <LogoWrap inFocus={inFocus}>
            <LucreeLogo />
          </LogoWrap>

          <WelcomeWrap inFocus={inFocus}>
            <Text weight="bold" size={RFValue(28)}>Olá,</Text>

            <Text>Para continuar, faça seu login</Text>
          </WelcomeWrap>
        </Header>

        {!documentIsValid
          ? (
            <TextInputWrap inFocus={inFocus}>
              <Input
                error={{
                  hasError: false,
                  message: 'Insira seu CPF ou CNPJ'
                }}
                label="Insira seu CPF ou CNPJ"
                onChangeText={(text) => handleChangeDocumentNumber(text)}
                onFocus={() => {
                  setInFocus(true)
                  console.log("Focou")
                }}
                onBlur={() => {
                  setInFocus(false)
                  console.log("Desfocou!")
                }}
              />
            </TextInputWrap>
          ) : (
            <DocumentWrap>
              <Text
                weight="bold"
                size={RFValue(18)}
                color={baseColors.gray.light}
              >
                CPF ou CNPJ
              </Text>
              <Text size={RFValue(18)}>{documentNumber}</Text>
            </DocumentWrap>
          )}

        {documentIsValid && (
          <PasswordInputWrap inFocus={inFocus}>
            <Input
              error={{
                hasError: true,
                message: 'Insira sua senha'
              }}
              secureTextEntry
              autoFocus={documentIsValid}
              label="Sua senha"
              onChangeText={(text) => handleChangePassword(text)}
              onFocus={() => {
                setInFocus(true)
                console.log("Focou")
              }}
              onBlur={() => {
                setInFocus(false)
                console.log("Desfocou!")
              }}
            />
          </PasswordInputWrap>
        )}

        <Actions inFocus={inFocus}>
          <Button onPress={handleSubmit}>
            FAZER LOGIN
          </Button>

          <Button type="transparent">
            <Text weight="black" size={RFValue(18)}>
              É novo por aqui? Cadastre-se
            </Text>
          </Button>
        </Actions>
      </Body>

    </Container>
  )
}
