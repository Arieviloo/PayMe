import React from 'react';
import Header from '../../components/Header/index';
import Card from '../../components/Card/index';
import './style.css';
// import { Container } from './styles';

export default function Profile() {
  const payments = [
    {
      id: 1,
      descricao: 'energia',
      valor: 200,
      dataResgiter: new Date().toISOString(),
      pago: false,
    },
    {
      id: 2,
      descricao: 'água',
      valor: 200,
      dataResgiter: new Date().toISOString(),
      pago: false,
    },
    {
      id: 3,
      descricao: 'net',
      valor: 200,
      dataResgiter: new Date().toISOString(),
      pago: false,
    },
  ];

  const editPay = pay => console.log(`editando o pagamento${pay.id}`);
  const closePay = async pay => console.log(`fechando o pagamento${pay.id}`);

  return (
    <>
      <Header />
      <div className="row">
        {payments.map(payment => (
          <Card
            key={payment.id}
            nome={payment.descricao}
            valor={payment.valor}
            editPayHandle={() => editPay(payment)}
            closePayHandle={() => closePay(payment)}
          />
        ))}
      </div>
    </>
  );
}
