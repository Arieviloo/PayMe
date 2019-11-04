import React from 'react';
import './style.css';

// import { Container } from './styles';

export default function NewIncome(props) {
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
              border: '2px dashed #7159C1',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          >
            <i
              style={{
                color: '#7159C1',
                fontSize: '80px',
                padding: '32px',
              }}
              className="fas fa-plus"
            />
          </div>
        </div>
        <div className="card-footer">
          <span style={{ fontWeight: 'bold', color: '#7159C1' }}>
            Nova Receita
          </span>
        </div>
      </div>
    </div>
  );
}
