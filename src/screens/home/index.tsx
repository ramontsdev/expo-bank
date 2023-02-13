
import { Carousel } from "./components/carousel";
import { Header } from "./components/header";
import { ProductsContainer } from "./components/ProductsContainer";
import { ProductButton } from "./components/ProductsContainer/ProductButton";
import { Container } from "./styles";

import CardMachineIcon from '../../assets/icons/card_machine_icon.svg';
import ClockCashIcon from '../../assets/icons/clock_cash_icon.svg';
import HandCashIcon from '../../assets/icons/hand_cash_icon.svg';
import HelpIcon from '../../assets/icons/help_icon.svg';
import ProfileAccountIcon from '../../assets/icons/profile_account_icon.svg';
import ShieldInsuranceIcon from '../../assets/icons/shield_insurance_icon.svg';

export function HomeScreen() {
  return (
    <Container>
      <Header />
      <Carousel />

      <ProductsContainer>
        <ProductButton
          icon={<CardMachineIcon />}
          label={'Soluções de Pagamento e Vendas'}
        />
        <ProductButton
          icon={<HandCashIcon />}
          label={'Crédito'}
        />
        <ProductButton
          icon={<ShieldInsuranceIcon />}
          label='Seguros'
        />
        <ProductButton
          icon={<ClockCashIcon />}
          label='Financiamento'
        />
        <ProductButton
          icon={<HelpIcon />}
          label='Ajuda'
        />
        <ProductButton
          icon={<ProfileAccountIcon />}
          label='Conta Digital'
        />
      </ProductsContainer>
    </Container>
  )
}
