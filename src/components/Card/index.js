import React from 'react';
// import EditIcon from '@material-ui/icons/Edit';
// import CloseIcon from '@material-ui/icons/Close';
import './style.css';
import { Progress } from 'antd';
import accounting from 'accounting';

// import { Container } from './styles';

export default function Card(props) {
  return (
    <div className="row">
      <div className="card">
        <div className="card-icon">
          <i className="fas fa-pen" onClick={props.editPayHandle} />
          <i className="fas fa-times" onClick={props.closePayHandle} />
        </div>

        <div className="card-content">
          <Progress
            type="circle"
            width={177}
            className="progress"
            percent={100}
            strokeWidth={6}
            strokeColor="#FF0000"
            status="exception"
            format={() =>
              accounting.formatMoney(props.valor, 'R$ ', 2, '.', ',')
            }
          />
          <div className="card-footer">
            <span style={{ fontWeight: 'bold', color: '#7159c1' }}>
              {props.descricao}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
