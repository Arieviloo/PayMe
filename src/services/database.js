import * as firebase from 'firebase/app';
import 'firebase/firestore';

const porcentagem = payment => {
  return {
    ...payment,
    porcentagem: (payment.valor * 100) / payment.salario,
  };
};

const addPay = payment => {
  const db = firebase.firestore();
  return db.collection('payments').add(porcentagem(payment));
};

const editPay = (id, payment) => {
  const db = firebase.firestore();
  return db
    .collection('payments')
    .doc(id)
    .set(porcentagem(payment));
};

const deletePay = id => {
  const db = firebase.firestore();
  return db
    .collection('payments')
    .doc(id)
    .delete();
};

const listPay = async () => {
  const db = firebase.firestore();
  const response = await db.collection('payments').get();
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
};
