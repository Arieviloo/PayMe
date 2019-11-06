import React from 'react';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import EditIcon from '@material-ui/icons/Edit';
// import CloseIcon from '@material-ui/icons/Close';
import './style.css';
import { Progress } from 'antd';
import accounting from 'accounting';
import database from '../../services/database';

// import { Container } from './styles';

export default function Card(props) {
  function editar(id) {
    // fb.firestore()
    //   .collection('user')
    //   .doc(localStorage.getItem('uid'))
    //   .collection('despesa')
    //   .doc(id)
    //   .update({
    //     valor: 55,
    //   });
  }

  function del(id) {
    // fb.firestore()
    //   .collection('user')
    //   .doc(localStorage.getItem('uid'))
    //   .collection('despesa')
    //   .doc(id)
    //   .delete();
  }

  return (
    <div className="row">
      <div className="card">
        <div className="card-icon">
          <i className="fas fa-pen" onClick={() => props.editPayHandle()} />
          <i
            className="fas fa-times"
            onClick={() => database.deletePay(props.id)}
          />
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
          <Button size="small">
            <div className="card-footer" style={{ fontSize: 20 }}>
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
