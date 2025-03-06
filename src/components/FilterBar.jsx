import { FilterX, Locate, MapPin, Search } from 'lucide-react';
import { useState } from 'react';
import { GoLocation } from 'react-icons/go';

function FilterBar({ onSearch, visible }) {
  const [remote, setRemote] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    onSearch({ remote, search });
  };

  return (
    <div
      className={` my-1 px-10 flex flex-col items-center gap-4 max-md:${
        visible ? 'hidden' : 'visible'
      }`}
    >
      <div className='w-full  flex flex-col lg:flex-row gap-5'>
        <div className='relative flex w-full  lg:w-max'>
          <input
            type='text'
            className='w-full placeholder:text-[13px] truncate xl:w-[300px] py-3 pl-10 bg-gray-50 dark:bg-[#151419] dark:text-white border border-zinc-400 text-gray-900 font-semibold rounded-lg focus:ring-4 focus:ring-blue-300 transition-colors duration-200 '
            placeholder='Cargo, palavras-chave ou empresa'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label='Palavra-chave'
          />
          <Search className='absolute left-4 top-4  text-zinc-400 size-[20px] lg:size-[25]' />
        </div>

        <label className='flex h-12 items-center space-x-2 bg-gray-50 dark:bg-[#151419] px-4 rounded-md border border-zinc-400'>
          <input
            type='checkbox'
            className='w-4 h-4 bg-gray-50 dark:bg-[#151419] dark:text-white border border-zinc-400 text-gray-900 rounded-lg focus:ring-4 focus:ring-blue-300 transition-colors duration-200 cursor-pointer'
            checked={remote === true}
            onChange={(e) => setRemote(e.target.checked ? true : false)}
            aria-label='Remoto'
          />
          <span className='text-zinc-400 dark:text-white text-sm font-semibold'>
            Remoto
          </span>
        </label>
        <button
          className='w-full lg:w-40 bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:ring-4 focus:ring-blue-300'
          onClick={handleSearch}
        >
          Filtrar
        </button>
        <button className='w-full lg:w-40 bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 focus:ring-4 '>
          Limpar filtros
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
