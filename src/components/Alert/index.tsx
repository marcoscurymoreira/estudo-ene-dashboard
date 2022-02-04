import React from 'react';
import { Alert } from 'antd';

const alert = () => {
  return (
    <Alert message="Sucesso" type="success" style={{width: 100, marginLeft: 15, textAlign: 'center'}}/>
  );
};

export default alert;
