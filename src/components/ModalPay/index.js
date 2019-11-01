import React from 'react';
import './style.css';
import { Modal, Button } from 'antd';

// import { Container } from './styles';

const ModalPay = props => {
  const handleCancel = () => {
    props.onClose();
  };
  const handleOk = () => {
    props.onClose();
  };
  return (
    <Modal
      title="Criar Pagametos"
      visible={props.visivel}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel} type="link">
          CANCELAR
        </Button>,
        <Button key="submit" onClick={handleOk} type="link">
          SALVAR
        </Button>,
      ]}
    />
  );
};

export default ModalPay;
