import React from 'react';
import { Button } from 'antd';

const button = () => {
  return (
    <Button
      type="default"
      shape='round'
      size='large'
      style={{color: 'red', borderColor: 'red', marginTop: 30, marginLeft: 25, marginBottom: 50}}>
    Botão</Button>
  )
};

export default button;
