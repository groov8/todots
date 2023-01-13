import { useRecoilState } from 'recoil';
import { filter } from '../atom';

const DisplaySelector = () => {
  const [Filter, setFilter] = useRecoilState(filter);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = {...Filter, state: e.target.value};
    setFilter(newFilter);
  };
  return (
    <div>
      <select value={Filter.state} onChange={handleChange}>
        <option value='all'>すべて</option>
        <option value='not_started'>未着手</option>
        <option value='start'>着手</option>
        <option value='complete'>完了</option>
      </select>
    </div>
  );
}

export default DisplaySelector;