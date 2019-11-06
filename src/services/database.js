import * as firebase from 'firebase/app';
import 'firebase/firestore';

// const porcentagem = payment => {
//   return {
//     ...payment,
//     porcentagem: (payment.valor * 100) / payment.salario,
//   };
// };

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

export default {
  addPay,
  editPay,
  deletePay,
  listPay,
};
