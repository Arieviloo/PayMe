import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import Card from '../../components/ReceitaCard/Card/index';
import ModalPay from '../../components/ReceitaCard/ModalPay/index';
import NewPay from '../../components/ReceitaCard/NewPay/index';
// import database from '../../services/database';
import './style.css';

const Profile = () => {
  const [visivel, setVisivel] = useState(false);
  const [cadastro, setCadastro] = useState({});
  const [payments, setPayments] = useState([]);

  // useEffect(() => {
  //   database.listPay().then(response => {
  //     setPayments(response);
  //   });
  // });

  const editPay = payment => {
    setCadastro(payment);
    setVisivel(true);
  };
  const deletePay = () => {
    console.log('deu ruim');
  };

  // const deletePay = async payment => {
  //   await database.deletePay(payment.id);
  //   database.listPay().then(response => {
  //     setPayments(response);
  //   });
  // };

  // const onClose = () => {
  //   setVisivel(false);
  //   database.listPay().then(response => {
  //     setPayments(response);
  //   });
  // };
  const onClose = () => {
    setVisivel(false);
  };

  return (
    <>
      <Header />
      <div className="total">total:</div>

      <div className="row">
        {payments.map(payment => (
          <Card
            key={payment.id}
            descricao={payment.descricao}
            salario={payment.salario}
            valor={payment.valor}
            dataResgiter={payment.dataResgiter}
            pago={payment.pago}
            editPayHandle={() => editPay(payment)}
            deletePayHandle={() => deletePay(payment)}
          />
        ))}
        <NewPay
          onClick={() =>
            editPay({
              dataResgiter: undefined,
              valor: 0,
              descricao: '',
            })
          }
        />
        <ModalPay visivel={visivel} onClose={onClose} payment={cadastro} />
      </div>
    </>
  );
};

export default Profile;
