import React, { useState, useEffect } from 'react';
import './style.css';
import { Modal, Button, Form, Input, InputNumber, DatePicker } from 'antd';
import moment from 'moment';

export default function ModalIncome(props) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const [dataRegister, setDataRegister] = useState(null);

  useEffect(() => {
    setDescricao(props.income.descricao);
    setValor(props.income.valor);
    setDataRegister(null);
    if (props.income.dataRegister) {
      setDataRegister(moment(props.income.dataRegister));
    }
  }, [props.income]);

  const handleCancel = () => {
    props.onClose();
  };

  const handleSalve = () => {
    props.onClose();
  };
  return (
    <Modal
      title="RECEITA"
      visible={props.visivel}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel} type="link">
          CANCELAR
        </Button>,
        <Button key="submit" onClick={handleSalve} type="link">
          SALVAR
        </Button>,
      ]}
    >
      <Form layout="vertical">
        <Form.Item label="DESCRIÇÃO">
          <Input
            value={descricao}
            onChange={event => setDescricao(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="VALOR">
          <InputNumber
            defaultValue={0}
            formatter={value =>
              `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }
            parser={value => value.replace(/R\$\s?|(\.*)/g, '')}
            value={valor}
            onChange={value => setValor(value)}
          />
        </Form.Item>

        <Form.Item label="DATA DO VENCIMENTO">
          <DatePicker
            format="DD-MM-YYYY"
            placeholder="Data de vencimento"
            value={dataRegister}
            onChange={value => setDataRegister(value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
