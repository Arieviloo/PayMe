import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import './style.css';

// import { Container } from './styles';

export default function NewPay(props) {
  return (
    <div className="row" style={{ cursor: 'pointer' }} onClick={props.onClick}>
      <div className="card">
        <div className="card-content">
          <div
            style={{
              margin: 'auto',
              marginTop: '5px',
              width: '150px',
              height: '150px',
              border: '2px dashed #333',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            onClick={props.onClick}
          >
            <i
              style={{
                color: '#333',
                fontSize: '80px',
                padding: '32px',
              }}
              className="fas fa-plus"
            />
          </div>
        </div>
        <div className="card-footer">
          <span style={{ fontWeight: 'bold', color: '#333' }}>
            Novo Pagamento
          </span>
        </div>
      </div>
    </div>
  );
}
