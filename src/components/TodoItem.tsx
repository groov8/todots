import { useRecoilState } from 'recoil';
import { todo } from '../atom';
import { Box, Button, Text } from '@chakra-ui/react';
import type {Todo} from '../types/Todo';

const TodoItem = (item: Todo) => {
    const [todoList, setTodoList] = useRecoilState(todo);
    const index = todoList.findIndex((target) => target.id === item.id);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        Itemstate(e.target.value);
    };

    const Itemstate = (newState: any) => {
        const newTodoList = [
            ...todoList.slice(0, index),
            { ...item, state: newState },
            ...todoList.slice(index + 1),
        ];
        setTodoList(newTodoList)
    }

    const deleteItem = () => {
        const newTodoList = [
            ...todoList.slice(0, index),
            ...todoList.slice(index + 1),
        ];
        setTodoList(newTodoList);
    };
    return (
        <Box>
            <Text as={"span"} mx={[0, 1]}>{item.title}</Text>
            <select value={item.state} onChange={handleChange}>
                <option value='not_started'>未着手</option>
                <option value='start'>着手</option>
                <option value='complete'>完了</option>
            </select>
            <Button m={[1, 0, 1, 1]} colorScheme="blue" onClick={deleteItem}>削除</Button>
        </Box>)
}

export default TodoItem;
