import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import Card from '../../components/Card/index';
import ModalPay from '../../components/ModalPay/index';
import NewPay from '../../components/NewPay/index';
import database from '../../services/database';
import './style.css';

const Profile = () => {
  const [visivel, setVisivel] = useState(false);
  const [cadastro, setCadastro] = useState({});
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    database.listPay().then(response => {
      setPayments(response);
    });
  });

  // const payments = [
  //   {
  //     id: 1,
  //     descricao: 'energia',
  //     salario: 900,
  //     valor: 2000,
  //     porcetagem: 1,
  //     dataResgiter: new Date().toISOString(),
  //     pago: false,
  //   },
  //   {
  //     id: 2,
  //     descricao: 'água',
  //     salario: 900,
  //     valor: 170,
  //     porcetagem: 100,
  //     dataResgiter: new Date().toISOString(),
  //     pago: false,
  //   },
  //   {
  //     id: 3,
  //     descricao: 'net',
  //     salario: 900,
  //     valor: 100,
  //     porcentagem: 100,
  //     dataResgiter: new Date().toISOString(),
  //     pago: false,
  //   },
  // ];

  const editPay = payment => {
    setCadastro(payment);
    setVisivel(true);
  };

  const closePay = async payment => {
    await database.closePay(payment.id);
    database.listPay().then(response => {
      setPayments(response);
    });
  };

  const onClose = () => {
    setVisivel(false);
    database.listPay().then(response => {
      setPayments(response);
    });
  };

  return (
    <>
      <Header />
      <div className="row">
        {payments.map(payment => (
          <Card
            key={payment.id}
            descricao={payment.descricao}
            salario={payment.salario}
            valor={payment.valor}
            dataResgiter={payment.dataResgiter}
            porcentagem={payment.porcentagem}
            editPayHandle={() => editPay(payment)}
            closePayHandle={() => closePay(payment)}
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
