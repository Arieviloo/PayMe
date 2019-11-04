import React from 'react';
import './style.css';
import { Progress } from 'antd';
import accounting from 'accounting';
import Button from '@material-ui/core/Button';

export default function CardIncome(props) {
  return (
    <div className="row-income">
      <div className="card-income">
        <div className="card-icon-income">
          <i className="fas fa-pen" onClick={props.editIncomeHandle} />
          <i className="fas fa-times" onClick={props.deleteIncomeHandle} />
        </div>
        <div className="card-content-income">
          <Progress
            type="circle"
            width={177}
            className="progress"
            percent={100}
            strokeWidth={6}
            strokeColor="#00aa00"
            format={() =>
              accounting.formatMoney(props.valor, 'R$ ', 2, '.', ',')
            }
          />
          <Button size="small">
            <div className="card-footer-income" style={{ fontSize: 20 }}>
              <span style={{ fontWeight: 'bold', color: '#7159c1' }}>
                {props.descricao}
              </span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
