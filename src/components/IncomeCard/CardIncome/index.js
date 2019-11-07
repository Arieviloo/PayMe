import React, { useState } from 'react';
import './style.css';
import { Progress } from 'antd';
import accounting from 'accounting';
import database from '../../../services/database';
import ModalPay from '../../ModalPay/index';

export default function Card(props) {
  const [isOpen, setOpenModal] = useState(false);

  function editar() {
    setOpenModal(true);
  }
  const onClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="row">
        <div className="card">
          <div className="card-icon">
            <i className="fas fa-pen" onClick={() => editar()} />
            <i
              className="fas fa-times"
              onClick={() => database.deleteIncome(props.id)}
            />
          </div>

          <div className="card-content">
            <Progress
              type="circle"
              width={177}
              className="progress"
              percent={100}
              strokeWidth={6}
              strokeColor="#00AA00"
              format={() =>
                accounting.formatMoney(props.valor, 'R$ ', 2, '.', ',')
              }
            />

            <div className="card-footer" style={{ fontSize: 20 }}>
              <span style={{ fontWeight: 'bold', color: '#7159c1' }}>
                {props.descricao}
              </span>
            </div>
          </div>
        </div>
      </div>
      <ModalPay visivel={isOpen} onClose={onClose} isEdit obj={props.el} />
    </>
  );
}
