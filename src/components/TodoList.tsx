import { useRecoilValue } from 'recoil';
import { stateFilter } from '../selector';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useRecoilValue(stateFilter);
  return (
    <>
      {todoList.map((item) => <TodoItem key={item.id} item={item} />)}
    </>
  );
}

export default TodoList;