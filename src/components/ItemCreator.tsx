import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todo } from '../atom';
import { Input, Button } from '@chakra-ui/react';

let id = 0;
const ItemCreator = () => {
  const [title, setTitle] = useState('');
  const setTodoList = useSetRecoilState(todo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: id++,
        title: title,
        state: 'not_started',
        term: '',
      },
    ]);
    setTitle('');
  };

  return (
    <div>
      <Input h={8} w={52} border={"2px"} placeholder={"Todo"} type="text" value={title} onChange={handleChange} />
      <Button colorScheme="blue" onClick={addItem}>追加</Button>
    </div>
  );
}

export default ItemCreator;