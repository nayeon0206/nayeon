// /routes/todos.router.js

import express from 'express';
import Todo from '../schemas/todo.schema.js';

const router = express.Router();

// 할일 등록 api// 
router.post('/todos', async (req, res, next) => {
  // 클라이언트에게 전달받은 value 데이터를 변수에 저장합니다.
  const { value } = req.body;

  // Todo모델을 사용해, MongoDB에서 'order' 값이 가장 높은 '해야할 일'을 찾습니다.
  const todoMaxOrder = await Todo.findOne().sort('-order').exec();

  // 'order' 값이 가장 높은 도큐멘트의 1을 추가하거나 없다면, 1을 할당합니다.
  const order = todoMaxOrder ? todoMaxOrder.order + 1 : 1;

  // Todo모델을 이용해, 새로운 '해야할 일'을 생성합니다.
  const todo = new Todo({ value, order });

  // 생성한 '해야할 일'을 MongoDB에 저장합니다.
  await todo.save();

  return res.status(201).json({ todo });
});

export default router;