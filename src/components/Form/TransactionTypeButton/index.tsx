import React from "react";
import { Container, Title, Icon, Button} from "./styles";
import {RectButtonProps} from "react-native-gesture-handler"

interface Props extends RectButtonProps {
  title: string,
  type: 'up' | 'down';
  isActive: boolean;
}

const icons ={
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}
export function TransactionTypeButton({title, type, isActive,...rest}:Props){
  return (
    <Container isActive={isActive} type={type}>
      <Button
        {...rest} 
      >
        <Icon type={type} name={icons[type]}/>
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}