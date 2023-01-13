import React from 'react';
import { useRecoilValue } from 'recoil';
import { stateFilter } from '../selector';
import TodoItem from './TodoItem';
import type {Todo} from '../types/Todo';

const TodoList = () => {
  const todoList = useRecoilValue(stateFilter);
  return (
    <>
      {todoList.map((item: Todo) => <TodoItem key={item.id} item={item} />)}
    </>
  );
}

export default TodoList;