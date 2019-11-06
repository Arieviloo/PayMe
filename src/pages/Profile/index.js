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
          console.log(doc.id, ' => ', doc.data());
          arr.push(doc.data());
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

  const deletePay = async payment => {
    await database.deletePay(payment.localStorage.getItem('uid'));
    database.listPay().then(response => {
      setPayments(response);
    });
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
        <NewPay onClick={() => setVisivel(true)} total={total} />
        <ModalPay visivel={visivel} onClose={onClose} payment={cadastro} />
      </div>
    </>
  );
};

export default Profile;
