import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import Card from '../../components/IncomeCard/CardIncome/index';
import ModalPay from '../../components/IncomeCard/ModalIncome/index';
import NewPay from '../../components/IncomeCard/NewIncome/index';
import database from '../../services/database';
import fb from '../../services/firebase';
import './style.css';

const Profile = () => {
  const [visivel, setVisivel] = useState(false);
  const [cadastro, setCadastro] = useState({});
  const [incomes, setIncomes] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fb.firestore()
      .collection('user')
      .doc(localStorage.getItem('uid'))
      .collection('receita')
      .get()
      .then(async querySnapshot => {
        const arr = [];
        let x = 0;
        await querySnapshot.forEach(doc => {
          const receita = {
            id: doc.id,
            data: doc.data(),
          };
          arr.push(receita);
          x += doc.data().valor;
        });
        setTotal(x);
        setIncomes(arr);
      });
  }, [incomes]);

  const editIncome = income => {
    setCadastro(income);
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
        {incomes.map(income => (
          <Card
            el={income}
            id={income.id}
            descricao={income.data.descricao}
            valor={income.data.valor}
            dataResgiter={income.data.dataResgiter}
            pago={income.data.pago}
            editPayHandle={() => editIncome(income)}
          />
        ))}
        <NewPay onClick={() => setVisivel(true)} total={total} />
        <ModalPay visivel={visivel} onClose={onClose} payment={cadastro} />
      </div>
    </>
  );
};

export default Profile;
