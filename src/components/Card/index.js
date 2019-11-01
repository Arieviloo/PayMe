import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import './style.css';

// import { Container } from './styles';

export default function Card(props) {
  return (
    <div className="row">
      <div className="card">
        <div className="card-icon">
          <i className="icon-edit">
            <EditIcon
              style={{ color: '#7159c1' }}
              onClick={props.editPayHandle}
            />
          </i>
          <i className="icon-close">
            <CloseIcon
              style={{ color: '#7159c1' }}
              onClick={props.closePayHandle}
            />
          </i>
        </div>

        <div className="card-content">test</div>
        <div className="card-footer">
          <span style={{ fontWeight: 'bold', color: '#7159c1' }}>
            {props.nome}
          </span>
        </div>
      </div>
    </div>
  );
}
