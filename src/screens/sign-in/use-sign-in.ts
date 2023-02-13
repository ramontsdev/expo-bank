import { useNavigation } from "@react-navigation/native"
import { useRef, useState } from "react"

export function useSignIn() {
  const [documentNumber, setDocumentNumber] = useState('')
  const [password, setPassword] = useState('')
  const [documentIsValid, setDocumentIsValid] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [errorModalMessage, setErrorModalMessage] = useState('')

  const navigation = useNavigation()

  const countSubmit = useRef(0)

  function handleDocumentValidate(document: string) {
    console.log(`Validar: ${document}`)
    setDocumentIsValid(true)
  }

  function handleChangeDocumentNumber(text: string) {
    setDocumentNumber(text)
  }

  function handleChangePassword(text: string) {
    setPassword(text)
  }

  function handleSubmit() {
    if (!documentNumber) {
      setErrorModalMessage('Digite seu CPF ou CNPJ')
      setModalVisible(true)
      return;
    }

    if (countSubmit.current > 0 && !password) {
      setErrorModalMessage('Digite sua senha')
      setModalVisible(true)
    }

    if (documentNumber) {
      countSubmit.current++;
    }

    if (!documentIsValid && documentNumber && !password) {
      handleDocumentValidate(documentNumber)
    }

    if (documentIsValid && password) {
      navigation.navigate('HomeScreen');

      console.log({
        documentNumber,
        password
      })
    }
  }

  return {
    documentIsValid,
    documentNumber,
    handleChangeDocumentNumber,
    handleChangePassword,
    handleSubmit,
    modalVisible,
    setModalVisible,
    errorModalMessage
  }
}
