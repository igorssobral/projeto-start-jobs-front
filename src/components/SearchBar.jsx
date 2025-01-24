
function SearchBar() {
  return (
    <div className="flex flex-wrap gap-4 my-10 justify-center px-10">
      {/* Seletor de Atividade de Trabalho */}
      <select className="w-full sm:w-64 py-3 pl-4 bg-gray-50 dark:bg-[#151419] dark:text-white border border-zinc-400 text-gray-900 font-semibold rounded-lg focus:ring-4 focus:ring-blue-300 transition-colors duration-200 cursor-pointer">
        <option value="" disabled hidden>
          Atividade de Trabalho
        </option>
        <option value="ios-developer">iOS Developer</option>
        <option value="frontend-developer">Front-end Developer</option>
        <option value="backend-developer">Back-end Developer</option>
        <option value="android-developer">Android Developer</option>
        <option value="developer-advocate">Developer Advocate</option>
      </select>

      {/* Seletor de Carga Horária */}
      <select className="w-full sm:w-64 py-3 pl-4 bg-gray-50 dark:bg-[#151419] dark:text-white border border-zinc-400 text-gray-900 font-semibold rounded-lg focus:ring-4 focus:ring-blue-300 transition-colors duration-200 cursor-pointer">
        <option value="" disabled hidden>
          Carga horária
        </option>
        <option value="full-time">Tempo Integral</option>
        <option value="part-time">Tempo Parcial</option>
        <option value="contract">Contrato PJ</option>
      </select>

      {/* Seletor de Local */}
      <select className="w-full sm:w-64 py-3 pl-4 bg-gray-50 dark:bg-[#151419] dark:text-white border border-zinc-400 text-gray-900 font-semibold rounded-lg focus:ring-4 focus:ring-blue-300 transition-colors duration-200 cursor-pointer">
        <option value="" disabled hidden>
          Local
        </option>
        <option value="remote">Remoto</option>
        <option value="in-office">Presencial</option>
        <option value="hybrid">Híbrido</option>
      </select>

      {/* Seletor de Experiência */}
      <select className="w-full sm:w-64 py-3 pl-4 bg-gray-50 dark:bg-[#151419] dark:text-white border border-zinc-400 text-gray-900 font-semibold rounded-lg focus:ring-4 focus:ring-blue-300 transition-colors duration-200 cursor-pointer">
        <option value="" disabled hidden>
          Experiência
        </option>
        <option value="fresher">Sem Experiência</option>
        <option value="junior-level">Nível Junior</option>
        <option value="mid-level">Nível Intermediário</option>
        <option value="senior-level">Nível Senior</option>
      </select>

      {/* Botão de Buscar */}
      <button className="w-full sm:w-64 bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:ring-4 focus:ring-blue-300">
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
