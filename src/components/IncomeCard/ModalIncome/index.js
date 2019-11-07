import React, { useState, useEffect } from 'react';
import './style.css';
import { Modal, Button, Form, Input, InputNumber, DatePicker } from 'antd';
import moment from 'moment';
import database from '../../../services/database';

const ModalPay = props => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const [dataRegister, setDataRegister] = useState(null);
  const [recebido, setRecebido] = useState(true);

  useEffect(() => {
    if (props.obj !== undefined) {
      setValor(props.obj.data.valor);
      setDescricao(props.obj.data.descricao);
      // setDataRegister(null);
      // if (props.income.dataRegister) {
      //   setDataRegister(moment(props.income.dataRegister));
      // }
    }
  }, []);

  const handleCancel = () => {
    props.onClose();
  };
  const handleOk = async () => {
    const json = {
      descricao,
      valor,
      // dataRegister,
      recebido,
    };
    database.addIncome(localStorage.getItem('uid'), json);

    props.onClose();
  };

  const submit = () => {
    const data = {
      descricao,
      valor,
      // dataRegister,
    };
    database.editIncome(props.obj.id, data);
    props.onClose();
  };

  if (props.isEdit) {
    return (
      <Modal
        title="DESPESA"
        visible={props.visivel}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={() => props.onClose()} type="link">
            CANCELAR
          </Button>,
          <Button key="submit" onClick={() => submit()} type="link">
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
              // value={dataRegister}
              onChange={value => setDataRegister(value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
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
