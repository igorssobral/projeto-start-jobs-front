import Header from '../components/Header';
import {
  ArrowUpNarrowWide,
  Expand,
  MenuIcon,
  Package,
  TrendingUp,
  Users,
  Star,
  PencilLine,
  Trash,
  TrendingDown,
  Minus,
} from 'lucide-react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
  ComposedChart,
  Legend,
  Area,
  Line,
  Scatter,
} from 'recharts';

import { overviewData, topVagas } from '../stats/Index';

import { ApiCandidatura } from '../services/candidaturaService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ showMenu }) => {
  const [totalCandidaturas, setTotalCandidaturas] = useState([]);
  const [crescimentoCandidaturas, setCrescimentoCandidaturas] = useState(0);
  const { getCandidaturas } = ApiCandidatura();

  useEffect(() => {
    async function getTotalCandidaturas() {
      const response = await getCandidaturas();

      setTotalCandidaturas(response);
    }

    getTotalCandidaturas();
  }, []);

  useEffect(() => {
    setCrescimentoCandidaturas(
      calcularCrescimento(totalCandidaturas, mesAtual)
    );
  }, [totalCandidaturas]);

  const mesAtual = new Date().getMonth() + 1;

  const vagasEmAndamento = totalCandidaturas?.filter((e) => {
    return e.statusCandidatura.some(
      (status) => status.rejected === false && status.approved === false
    );
  });
  const vagasEmAndamentoMesAtual = totalCandidaturas?.filter((e) => {
    return e.statusCandidatura.some(
      (status) =>
        e.dataCandidatura[1] >= new Date().getMonth() &&
        status.rejected === false &&
        status.approved === false
    );
  });

  function formateDate(candidatura) {
    let dataFormatada = new Date(
      candidatura[0], // Ano
      candidatura[1] - 1, // Mês (lembre-se que o mês começa do 0 em JavaScript)
      candidatura[2] // Dia
    );

    // Formatando a data no formato desejado (ex: "2025-02-24")
    return dataFormatada.toISOString().replace('T', ' ').slice(0, 10);
  }

  function calcularCrescimento(dados, mesReferencia) {
    const anoReferencia = new Date().getFullYear();

    // Filtra os dados para o mês anterior
    let dadosMesAnterior = dados.filter((dado) => {
      const data = new Date(formateDate(dado.dataCandidatura));
      return (
        data.getFullYear() === anoReferencia &&
        data.getMonth() === mesReferencia - 2
      ); // Mes anterior
    });
    console.log(
      '🚀 ~ dadosMesAnterior ~ dadosMesAnterior:',
      dadosMesAnterior.length
    );

    // Filtra os dados para o mês de referência
    let dadosMesReferencia = dados.filter((dado) => {
      const data = new Date(formateDate(dado.dataCandidatura));
      return (
        data.getFullYear() === anoReferencia &&
        data.getMonth() === mesReferencia - 1
      ); // Mes de referencia
    });
    console.log(
      '🚀 ~ dadosMesReferencia ~ dadosMesReferencia:',
      dadosMesReferencia.length
    );

    // Verifica se há dados para os meses especificados
    if (dadosMesAnterior.length > 0 && dadosMesReferencia.length > 0) {
      let valorAnterior = dadosMesAnterior.length;
      let valorAtual = dadosMesReferencia.length;

      // Verifica se o valor do mês anterior é 0 para evitar divisão por zero
      if (valorAnterior === 0) {
        return 0;
      }

      // Calculando o crescimento
      let crescimento = ((valorAtual - valorAnterior) / valorAnterior) * 100;

      // Verifica se o valor do crescimento é válido

      //quando usa tofixed a cor mostra errada
      return crescimento.toFixed(0);
    } else {
      console.log(
        'Não foi possível calcular o crescimento. Verifique se há dados para os meses especificados.'
      );
      return 0; // Caso não haja dados para os meses, retorna 0
    }
  }

  const data = [
    {
      name: 'Janeiro',
      uv: 590,
      TotalCandidaturas: 800,
      cnt: 490,
    },
    {
      name: 'Fevereiro',
      uv: 868,
      TotalCandidaturas: 967,
      cnt: 590,
    },
    {
      name: 'Março',
      uv: 1397,
      TotalCandidaturas: 1098,
      cnt: 350,
    },
    {
      name: 'Abril',
      uv: 1480,
      TotalCandidaturas: 1200,
      cnt: 480,
    },
    {
      name: 'Maio',
      uv: 1520,
      TotalCandidaturas: 1108,
      cnt: 460,
    },
    {
      name: 'Junho',
      uv: 1400,
      TotalCandidaturas: 680,
      cnt: 380,
    },
    {
      name: 'Julho',
      uv: 1100,
      TotalCandidaturas: 850,
      cnt: 500,
    },
    {
      name: 'Agosto',
      uv: 1300,
      TotalCandidaturas: 910,
      cnt: 520,
    },
    {
      name: 'Setembro',
      uv: 1200,
      TotalCandidaturas: 950,
      cnt: 530,
    },
    {
      name: 'Outubro',
      uv: 1350,
      TotalCandidaturas: 980,
      cnt: 540,
    },
    {
      name: 'Novembro',
      uv: 1450,
      TotalCandidaturas: 1010,
      cnt: 550,
    },
    {
      name: 'Dezembro',
      uv: 1500,
      TotalCandidaturas: 1050,
      cnt: 560,
    },
  ];

  // calcularCrescimento(mesAtual, 2025);

  function handleOpenMenu() {
    showMenu();
  }
  return (
    <div className='min-h-screen bg-slate-100 transition-colors dark:bg-[#1F1E25]'>
      <div className='ml-0 md:ml-64 p-6'>
        <button
          onClick={handleOpenMenu}
          className='md:hidden dark:text-zinc-50'
        >
          <MenuIcon />
        </button>
        <Header
          title={'Dashboard'}
          description={' Acompanhe seus processos.'}
        />

        <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />
      </div>

      <div className='ml-10 mb-6 md:ml-64 px-10'>
        <main>
          <div className='flex flex-col gap-y-3'>
            {/* <h1 className="title text-2xl text-">Dashboard</h1> */}
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
              <div className='card dark:bg-[#0e0d11]'>
                <div className='card-header '>
                  <div className='w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-[#151419] dark:text-blue-600'>
                    <Package size={26} />
                  </div>
                  <p className='card-title'>Candidaturas</p>
                </div>
                <div className='card-body rounded-lg p-6 bg-slate-100 transition-colors dark:bg-[#151419]'>
                  <p className='text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50'>
                    {totalCandidaturas.length}
                  </p>
                  <span
                    className={`flex w-fit items-center gap-x-2 rounded-full border ${
                      crescimentoCandidaturas > 0
                        ? 'text-blue-500 border-blue-500 dark:border-blue-600 dark:text-blue-600'
                        : crescimentoCandidaturas === 0
                        ? 'text-zinc-400 border-zinc-400'
                        : 'text-red-500 dark:border-red-600 dark:text-red-500 border-red-500'
                    }  px-2 py-1 font-medium `}
                  >
                    {crescimentoCandidaturas > 0 ? (
                      <TrendingUp size={18} />
                    ) : crescimentoCandidaturas === 0 ? (
                      <Minus size={18} className='text-zinc-400' />
                    ) : (
                      <TrendingDown size={18} className='text-red-500' />
                    )}
                    {crescimentoCandidaturas}%
                  </span>
                </div>
              </div>
              <div className='card dark:bg-[#0e0d11]'>
                <div className='card-header '>
                  <div className='w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-[#151419] dark:text-blue-600'>
                    <Expand size={26} />
                  </div>
                  <p className='card-title'>Em Andamento</p>
                </div>
                <div className='card-body rounded-lg p-6 bg-slate-100 transition-colors dark:bg-[#151419]'>
                  <p className='text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50'>
                    {vagasEmAndamento.length}
                  </p>

                  {/* lembrar de refatorar pra remover a chamada repetitiva da função*/}
                  <span
                    className={`flex w-fit items-center gap-x-2 rounded-full border  ${
                      calcularCrescimento(vagasEmAndamento, mesAtual) > 0
                        ? 'text-blue-500 border-blue-500 dark:border-blue-600 dark:text-blue-600'
                        : calcularCrescimento(vagasEmAndamento, mesAtual) === 0
                        ? 'text-zinc-400 border-zinc-400'
                        : 'text-red-500 dark:border-red-600 dark:text-red-500 border-red-500'
                    }  px-2 py-1 font-medium `}
                  >
                    {calcularCrescimento(vagasEmAndamento, mesAtual) > 0 ? (
                      <TrendingUp size={18} />
                    ) : calcularCrescimento(vagasEmAndamento, mesAtual) ===
                      0 ? (
                      <Minus size={18} className='text-zinc-400' />
                    ) : (
                      <TrendingDown size={18} className='text-red-500' />
                    )}
                    {calcularCrescimento(vagasEmAndamento, mesAtual)}%
                  </span>
                </div>
              </div>
              <div className='card dark:bg-[#0e0d11]'>
                <div className='card-header '>
                  <div className='w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-[#151419] dark:text-blue-600'>
                    <Users size={26} />
                  </div>
                  <p className='card-title'>Entrevistas</p>
                </div>
                <div className='card-body rounded-lg p-6 bg-slate-100 transition-colors dark:bg-[#151419]'>
                  <p className='text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50'>
                    15
                  </p>
                  <span className='flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600'>
                    <TrendingUp size={18} />
                    15%
                  </span>
                </div>
              </div>
              <div className='card dark:bg-[#0e0d11]'>
                <div className='card-header '>
                  <div className='w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-[#151419] dark:text-blue-600'>
                    <ArrowUpNarrowWide size={26} />
                  </div>
                  <p className='card-title'>Recusas</p>
                </div>
                <div className='card-body rounded-lg p-6 bg-slate-100 transition-colors dark:bg-[#151419]'>
                  <p className='text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50'>
                    1500
                  </p>
                  <span className='flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600'>
                    <TrendingUp size={18} />
                    500%
                  </span>
                </div>
              </div>
            </div>

            {/* ******************************** */}

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              <div className='card col-span-1 md:col-span-2 lg:col-span-4 dark:bg-[#0e0d11]'>
                <div className='card-header'>
                  <p className='card-title'>Análises</p>
                </div>
                {/* Idéia 1: Pegar o total das candidaturas do mes atual e mes anterior e colocar em verde
                 o total de todas e em vermelho o total de rejeitadas*/}

                {/* Idéia 2: Criar um grafico de barras separado por mês e um grafico de linha mostrando o numero 
                de candidaturas rejeitas que o usuario teve no mês*/}

                {/* Complemento(Opcional): Atraves da url pegar nome da plataforma da vaga( Candidaturas/Plataforma)*/}

                <div className='card-body p-0'>
                  <ResponsiveContainer width={'100%'} height={300}>
                    <ComposedChart
                      data={data}
                      margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                      }}
                    >
                      <CartesianGrid stroke='#f5f5f5' />
                      <XAxis dataKey='name' scale='auto' />
                      <YAxis />
                      <Tooltip />
                      <Legend />

                      <Bar
                        dataKey='TotalCandidaturas'
                        name='Total Candidaturas'
                        barSize={20}
                        fill='#413ea0'
                      />
                      <Line
                        type='bumpX'
                        dataKey='cnt'
                        name='Aguardando'
                        stroke='#bd5704'
                      />
                      <Line
                        type='bumpX'
                        dataKey='uv'
                        name='Recusas'
                        stroke='#ef0000'
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
              {/* ***************************** */}

              {/* <div className='card col-span-1 md:col-span-2 lg:col-span-3 dark:bg-[#0e0d11]'>
                <div className='card-header'>
                  <p className='card-title'>Top 10 Destaques</p>
                </div>
                <div className='card-body h-[300px] overflow-auto p-0'>
                  {destaquesData.map((destaque) => (
                    <div
                      key={destaque.id}
                      className='flex items-center justify-between gap-x-4 py-2 pr-2'
                    >
                      <div className='flex items-center gap-x-4'>
                        <img
                          src={destaque.image}
                          alt={destaque.name}
                          className='size-10 flex-shrink-0 rounded-full object-cover'
                        />
                        <div className='flex flex-col gap-y-2'>
                          <p className='font-medium text-slate-900 dark:text-slate-50'>
                            {destaque.name}
                          </p>
                          <p className='text-sm text-slate-600 dark:text-slate-400'>
                            {destaque.email}
                          </p>
                        </div>
                      </div>
                      <p className='font-medium text-slate-900 dark:text-slate-50'>
                        {destaque.pontos}
                      </p>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
            <div className='card dark:bg-[#0e0d11]'>
              <div className='card-header'>
                <p className='card-title'>
                  Top 10 sites de empregos mais procurados na internet
                </p>
              </div>
              <div className='card-body p-0'></div>
              <div className='relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]'>
                <table className='table'>
                  <thead className='table-header dark:bg-[#1F1E25]'>
                    <tr className='table-row'>
                      <th className='table-head'>#</th>
                      <th className='table-head'>Plataforma</th>
                      <th className='table-head'>Link do Site</th>
                    </tr>
                  </thead>
                  <tbody className='table-body'>
                    {topVagas.map((vagas) => (
                      <tr key={vagas.number} className='table-row'>
                        <td className='table-cell'>{vagas.number}</td>
                        <td className='table-cell'>
                          <div className='flex w-max gap-x-4 items-center'>
                            <img
                              src={vagas.image}
                              alt={vagas.site}
                              className='size-14 rounded-lg object-contain'
                            />
                            <div className='flex flex-col'>
                              <p>{vagas.site}</p>
                              <p className='font-normal text-slate-600 dark:text-slate-400'></p>
                            </div>
                          </div>
                        </td>
                        <td className='table-cell hover:underline'>
                          {' '}
                          <Link to={vagas.url} target='_blank'>
                            {vagas.url}
                          </Link>
                        </td>

                        {/* <td className='table-cell'>{vagas.status}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
        {/* <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />
      <Footer /> */}
      </div>
    </div>
  );
};

export default Dashboard;
