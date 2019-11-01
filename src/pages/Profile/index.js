import React, { useState } from 'react';
import Header from '../../components/Header/index';
import Card from '../../components/Card/index';
import ModalPay from '../../components/ModalPay/index';
import NewPay from '../../components/NewPay/index';
import './style.css';
// import { Container } from './styles';

const Profile = () => {
  const [visivel, setVisivel] = useState(false);
  const [cadastro, setCadastro] = useState({});

  const payments = [
    {
      id: 1,
      descricao: 'energia',
      valor: 200,
      porcetagem: 90,
      dataResgiter: new Date().toISOString(),
      pago: false,
    },
    {
      id: 2,
      descricao: 'água',
      valor: 170,
      porcetagem: 60,
      dataResgiter: new Date().toISOString(),
      pago: false,
    },
    {
      id: 3,
      descricao: 'net',
      valor: 100,
      porcetagem: 50,
      dataResgiter: new Date().toISOString(),
      pago: false,
    },
  ];

  const editPay = pay => {
    setCadastro(pay);
    setVisivel(true);
  };

  const closePay = async pay => console.log(`fechando o pagamento${pay.id}`);

  const onClose = () => {
    setVisivel(false);
  };

  return (
    <>
      <Header />
      <div className="row">
        {payments.map(payment => (
          <Card
            key={payment.id}
            nome={payment.descricao}
            valor={payment.valor}
            porcetagem={payment.porcetagem}
            editPayHandle={() => editPay(payment)}
            closePayHandle={() => closePay(payment)}
          />
        ))}
        <NewPay onClick={() => editPay({})} />
        <ModalPay visivel={visivel} onClose={onClose} pay={cadastro} />
      </div>
    </>
  );
};

export default Profile;
