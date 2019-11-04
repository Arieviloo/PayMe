import React from 'react';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
          <i className="fas fa-times" onClick={props.deletePayHandle} />
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

          {/* <form noValidate>
            <TextField
              id="date"
              label="Vencimento"
              type="date"
              defaultValue={props.dataRegister}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form> */}
          {/* <Button
            variant="contained"
            color="primary"
            onClick={props.editPayHandle}
          >
            {props.descricao}
          </Button> */}
          <Button>
            <div className="card-footer">
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
