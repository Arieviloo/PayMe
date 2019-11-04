import React, { useState } from 'react';
import Header from '../../components/Header/index';
import CardIncome from '../../components/IncomeCard/CardIncome/index';
import ModalIncome from '../../components/IncomeCard/ModalIncome/index';
import NewIncome from '../../components/IncomeCard/NewIncome/index';
import './style.css';

export default function Income() {
  const [visivel, setVisivel] = useState(false);
  const [incomeSelect, setIncomeSelect] = useState({});

  const incomes = [
    {
      id: 1,
      descricao: 'Salário',
      valor: 900,
      dataRegister: new Date().toISOString(),
      recebido: true,
    },
    {
      id: 2,
      descricao: 'Decimo',
      valor: 500,
      dataRegister: new Date().toISOString(),
      recebido: true,
    },
    {
      id: 3,
      descricao: 'Gorgeta',
      valor: 150,
      dataRegister: new Date().toISOString(),
      recebido: true,
    },
  ];

  const editIncome = income => {
    setIncomeSelect(income);
    setVisivel(true);
  };
  const deleIncome = async income => {
    console.log(`excluir ${income.id}`);
  };

  const onClose = () => {
    setVisivel(false);
  };

  return (
    <>
      <Header />
      <div className="total">total:</div>
      {/* CARD GRAFICO */}
      <div className="row-income">
        {incomes.map(income => (
          <CardIncome
            key={income.id}
            descricao={income.descricao}
            valor={income.valor}
            dataRegister={income.dataRegister}
            recebido={income.recebido}
            editIncomeHandle={() => editIncome(income)}
            deleteIncomeHandle={() => deleIncome(income)}
          />
        ))}
        <NewIncome
          onClick={() =>
            editIncome({
              dataRegister: undefined,
              valorAtual: 0,
            })
          }
        />
      </div>

      <ModalIncome visivel={visivel} onClose={onClose} income={incomeSelect} />
    </>
  );
}
