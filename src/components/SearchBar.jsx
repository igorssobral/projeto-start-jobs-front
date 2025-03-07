import { MapPin, Search } from 'lucide-react';
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [remote, setRemote] = useState('no');
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    if (remote || keyword || location) {
      onSearch({ remote, location, keyword });
    } else {
      alert('Por favor, preencha todos os filtros antes de buscar.');
    }
  };

  return (
    <div className={` my-1 px-10 flex flex-col items-center gap-4`}>
    <div className='w-full  flex flex-col lg:flex-row justify-center gap-5'>
      <div className='relative flex w-full  lg:w-max'>
          <input
            type='text'
            className='w-full h-12 xl:w-[300px] py-3 pl-8 bg-gray-50 dark:bg-[#151419] dark:text-white border border-zinc-400 text-gray-900 font-semibold rounded-lg focus:ring-4 focus:ring-blue-300 transition-colors duration-200 '
            placeholder='Cargo, palavras-chave ou empresa'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            aria-label='Palavra-chave'
          />
          <Search className='absolute left-2 top-3 text-zinc-400' />
        </div>

        <div className='relative flex w-full lg:w-max'>
          <input
            type='text'
            className='w-full h-12 xl:w-[260px] py-3 pl-8 bg-gray-50 dark:bg-[#151419] dark:text-white border border-zinc-400 text-gray-900 font-semibold rounded-lg focus:ring-4 focus:ring-blue-300 transition-colors duration-200 '
            placeholder='Cidade, estado'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-label='Palavra-chave'
          />
          <MapPin className='absolute left-2 top-3 text-zinc-400' />
        </div>

    

        <label className='flex h-12 items-center space-x-2 bg-gray-50 dark:bg-[#151419] px-4 rounded-md border border-zinc-400'>
          <input
            type='checkbox'
            className='w-4 h-4 bg-gray-50 dark:bg-[#151419] dark:text-white border border-zinc-400 text-gray-900 rounded-lg focus:ring-4 focus:ring-blue-300 transition-colors duration-200 cursor-pointer'
            checked={remote === 'yes'}
            onChange={(e) => setRemote(e.target.checked ? 'yes' : 'no')}
            aria-label='Remoto'
          />
          <span className='text-zinc-400 dark:text-white text-sm font-semibold'>
            Remoto
          </span>
        </label>
        <button
          className='w-full sm:w-40 bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:ring-4 focus:ring-blue-300'
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
