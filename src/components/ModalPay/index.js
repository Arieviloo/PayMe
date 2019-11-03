import React, { useState, useEffect } from 'react';
import './style.css';
import { Modal, Button, Form, Input, InputNumber, DatePicker } from 'antd';
import moment from 'moment';
import database from '../../services/database';

const ModalPay = props => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const [salario, setSalario] = useState(0);
  const [dataRegister, setDataRegister] = useState(null);

  useEffect(() => {
    setDescricao(props.payment.descricao);
    setValor(props.payment.valor);
    setSalario(props.payment.salario);
    setDataRegister(props.payment.dataRegister);
    if (props.payment.dataRegister) {
      setDataRegister(moment(props.payment.dataRegister));
    }
  }, [props.payment]);

  const handleCancel = () => {
    props.onClose();
  };
  const handleOk = async () => {
    if (props.payment.id) {
      database.editPay(props.payment.id, {
        descricao,
        valor,
        dataRegister: dataRegister ? dataRegister.toISOString() : null,
      });
    } else {
      database.addPay({
        descricao,
        valor,
        dataRegister: dataRegister ? dataRegister.toISOString() : null,
      });
    }

    props.onClose();
  };
  return (
    <Modal
      title="DESPESA"
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
        {/* <Form.Item label="SALÁRIO">
          <InputNumber
            defaultValue={0}
            formatter={value =>
              `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }
            parser={value => value.replace(/R\$\s?|(\.*)/g, '')}
            value={salario}
            onChange={value => setSalario(value)}
          />
        </Form.Item> */}
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
};

export default ModalPay;
