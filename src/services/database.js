import * as firebase from 'firebase/app';
import 'firebase/firestore';

// Despesa

const addPay = (id, payment) => {
  const db = firebase.firestore();
  return db
    .collection('user')
    .doc(id)
    .collection('despesa')
    .add(payment);
};

const editPay = (id, payment) => {
  const db = firebase.firestore();
  return db
    .collection('user')
    .doc(localStorage.getItem('uid'))
    .collection('despesa')
    .doc(id)
    .update(payment);
};

const deletePay = id => {
  const db = firebase.firestore();
  return db
    .collection('user')
    .doc(localStorage.getItem('uid'))
    .collection('despesa')
    .doc(id)
    .delete();
};

const listPay = async () => {
  const db = firebase.firestore();
  const response = await db.collection('user').get();
  return response.docs.map(i => {
    return {
      id: i.id,
      ...i.data(),
    };
  });
};

// Receita

const addIncome = (id, income) => {
  const db = firebase.firestore();
  return db
    .collection('user')
    .doc(id)
    .collection('receita')
    .add(income);
};

const editIncome = (id, income) => {
  const db = firebase.firestore();
  return db
    .collection('user')
    .doc(localStorage.getItem('uid'))
    .collection('receita')
    .doc(id)
    .update(income);
};

const deleteIncome = id => {
  const db = firebase.firestore();
  return db
    .collection('user')
    .doc(localStorage.getItem('uid'))
    .collection('receita')
    .doc(id)
    .delete();
};

const listIncome = async () => {
  const db = firebase.firestore();
  const response = await db.collection('user').get();
  return response.docs.map(i => {
    return {
      id: i.id,
      ...i.data(),
    };
  });
};

export default {
  addPay,
  editPay,
  deletePay,
  listPay,
  addIncome,
  editIncome,
  deleteIncome,
  listIncome,
};
