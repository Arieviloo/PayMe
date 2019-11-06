import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import Card from '../../components/Card/index';
import ModalPay from '../../components/ModalPay/index';
import NewPay from '../../components/NewPay/index';
import database from '../../services/database';
import fb from '../../services/firebase';
import './style.css';

const Profile = () => {
  const [visivel, setVisivel] = useState(false);
  const [cadastro, setCadastro] = useState({});
  const [payments, setPayments] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fb.firestore()
      .collection('user')
      .doc(localStorage.getItem('uid'))
      .collection('despesa')
      .get()
      .then(async querySnapshot => {
        const arr = [];
        let x = 0;
        await querySnapshot.forEach(doc => {
          const despesa = {
            id: doc.id,
            data: doc.data(),
          };
          arr.push(despesa);
          x += doc.data().valor;
        });
        setTotal(x);
        setPayments(arr);
      });
  }, [payments]);

  const editPay = payment => {
    setCadastro(payment);
    setVisivel(true);
  };

  const onClose = () => {
    setVisivel(false);
  };

  return (
    <>
      <Header />
      <div className="total">total: R$ {total}</div>

      <div className="row">
        {payments.map(payment => (
          <Card
            el={payment}
            id={payment.id}
            descricao={payment.data.descricao}
            valor={payment.data.valor}
            dataResgiter={payment.data.dataResgiter}
            pago={payment.data.pago}
            editPayHandle={() => editPay(payment)}
          />
        ))}
        <NewPay onClick={() => setVisivel(true)} total={total} />
        <ModalPay visivel={visivel} onClose={onClose} payment={cadastro} />
      </div>
    </>
  );
};

export default Profile;
