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
  Tooltip as ToolTip,
  XAxis,
  YAxis,
  ComposedChart,
  Legend,
  Area,
  Line,
  Scatter,
} from 'recharts';

import { topVagas } from '../stats/Index';

import { ApiCandidatura } from '../services/candidaturaService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip';

const Dashboard = ({ showMenu }) => {
  const [totalCandidaturas, setTotalCandidaturas] = useState([]);
  const [crescimentoCandidaturas, setCrescimentoCandidaturas] = useState(0);
  const [candCrescimentoAndamento, setCandCrescimentoAndamento] = useState(0);
  const [totalRecusasCrescimento, setTotalRecusasCrescimento] = useState(0);
  const [totalEntrevistasCrescimento, setTotalEntrevistasCrescimento] = useState(0);

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

    setCandCrescimentoAndamento(
      calcularCrescimento(vagasEmAndamento, mesAtual)
    );

    setTotalRecusasCrescimento(calcularCrescimento(recusadasTotal, mesAtual));

    setTotalEntrevistasCrescimento(calcularCrescimento(emEntrevista, mesAtual))
    console.log(calcularCrescimento(emEntrevista, mesAtual))
  }, [totalCandidaturas]);

  const mesAtual = new Date().getMonth() + 1;

  const vagasEmAndamento =
    totalCandidaturas.length > 0 &&
    totalCandidaturas?.filter((e) => {
      return e.statusCandidatura.some(
        (status) => status.rejected === false && status.approved === false
      );
    });

  const emEntrevista = vagasEmAndamento.length > 0 && vagasEmAndamento?.filter((candidatura) => {
    const etapaAtual = candidatura.statusCandidatura.find((status) =>
      !status.approved && !status.rejected
    );

    if (etapaAtual && etapaAtual.label.toLowerCase().includes('entrevista')) {
      return true;
    }

    return false;
  });





  const recusadasTotal =
    totalCandidaturas.length > 0 &&
    totalCandidaturas?.filter((e) => {
      return e.statusCandidatura.some((status) => {
        return status.rejected === true;
      });
    });


  const recusadasMesAtual =
    totalCandidaturas.length > 0 &&
    totalCandidaturas?.filter((e) => {
      const date = new Date().getMonth() + 1;
      return (
        e.dataCandidatura[1] === date &&
        e.statusCandidatura.some((status) => {
          return status.rejected === true;
        })
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
    let dadosMesAnterior = 0;
    let dadosMesReferencia = 0;
    if (dados.length > 0) {
      dadosMesAnterior = dados?.filter((dado) => {
        const data = new Date(formateDate(dado.dataCandidatura));
        return (
          data.getFullYear() === anoReferencia &&
          data.getMonth() === mesReferencia - 2
        ); // Mes anterior
      });

      // Filtra os dados para o mês de referência
      dadosMesReferencia = dados?.filter((dado) => {
        const data = new Date(formateDate(dado.dataCandidatura));
        return (
          data.getFullYear() === anoReferencia &&
          data.getMonth() === mesReferencia - 1
        ); // Mes de referencia
      });
    }

    // Verifica se há dados para os meses especificados
    if (dadosMesAnterior.length >= 0 && dadosMesReferencia.length > 0) {
      let valorAnterior = dadosMesAnterior.length;
      let valorAtual = dadosMesReferencia.length;

      // Verifica se o valor do mês anterior é 0 para evitar divisão por zero
      if (valorAnterior === 0) {
        return 100;
      }

      // Calculando o crescimento
      let crescimento = (
        ((valorAtual - valorAnterior) / valorAnterior) *
        100
      ).toFixed(0);

      // Verifica se o valor do crescimento é válido

      //quando usa tofixed a cor mostra errada
      return Number(crescimento);
    } else {
      return 0; // Caso não haja dados para os meses, retorna 0
    }
  }
  function pegarTotalCandidaturas(dados, mesReferencia) {
    const anoAtual = new Date().getFullYear();

    // Filtra os dados para o mês anterior
    let dadosMesAtual = [];

    if (dados.length > 0) {
      // Filtra os dados para o mês de referência
      dadosMesAtual = dados?.filter((dado) => {
        return (
          dado.dataCandidatura[0] === anoAtual &&
          dado.dataCandidatura[1] === mesReferencia
        ); // Mes de referencia
      });

      return dadosMesAtual.length;
    } else {
      return 0;
    }
  }
  function pegarTotalRecusas(dados, mesReferencia) {
    const anoAtual = new Date().getFullYear();

    let dadosMesAtual = [];
    if (dados.length > 0) {
      // Filtra os dados para o mês de referência
      dadosMesAtual = dados?.filter((dado) => {
        return (
          dado.dataCandidatura[1] === mesReferencia &&
          dado.statusCandidatura.some((status) => {
            return (
              dado.dataCandidatura[0] === anoAtual &&
              dado.dataCandidatura[1] === mesReferencia &&
              status.rejected === true
            );
          })
        );
      });

      return dadosMesAtual.length;
    } else {
      return 0;
    }
  }

  const data = [
    {
      name: 'Janeiro',
      TotalRecusas: pegarTotalRecusas(totalCandidaturas, 1),
      TotalCandidaturas: pegarTotalCandidaturas(totalCandidaturas, 1),
    },
    {
      name: 'Fevereiro',
      TotalRecusas: pegarTotalRecusas(totalCandidaturas, 2),
      TotalCandidaturas: pegarTotalCandidaturas(totalCandidaturas, 2),
    },
    {
      name: 'Março',
      TotalRecusas: pegarTotalRecusas(totalCandidaturas, 3),
      TotalCandidaturas: pegarTotalCandidaturas(totalCandidaturas, 3),
    },
    {
      name: 'Abril',
      TotalRecusas: pegarTotalRecusas(totalCandidaturas, 4),
      TotalCandidaturas: pegarTotalCandidaturas(totalCandidaturas, 4),
    },
    {
      name: 'Maio',
      TotalRecusas: pegarTotalRecusas(totalCandidaturas, 5),
      TotalCandidaturas: pegarTotalCandidaturas(totalCandidaturas, 5),
    },
    {
      name: 'Junho',
      TotalRecusas: pegarTotalRecusas(totalCandidaturas, 6),
      TotalCandidaturas: pegarTotalCandidaturas(totalCandidaturas, 6),
    },
    {
      name: 'Julho',
      TotalRecusas: pegarTotalRecusas(totalCandidaturas, 7),
      TotalCandidaturas: pegarTotalCandidaturas(totalCandidaturas, 7),
    },
    {
      name: 'Agosto',
      TotalRecusas: pegarTotalRecusas(totalCandidaturas, 8),
      TotalCandidaturas: pegarTotalCandidaturas(totalCandidaturas, 8),
    },
    {
      name: 'Setembro',
      TotalRecusas: pegarTotalRecusas(totalCandidaturas, 9),
      TotalCandidaturas: pegarTotalCandidaturas(totalCandidaturas, 9),
    },
    {
      name: 'Outubro',
      TotalRecusas: pegarTotalRecusas(totalCandidaturas, 10),
      TotalCandidaturas: pegarTotalCandidaturas(totalCandidaturas, 10),
    },
    {
      name: 'Novembro',
      TotalRecusas: pegarTotalRecusas(totalCandidaturas, 11),
      TotalCandidaturas: pegarTotalCandidaturas(totalCandidaturas, 11),
    },
    {
      name: 'Dezembro',
      TotalRecusas: pegarTotalRecusas(totalCandidaturas, 12),
      TotalCandidaturas: pegarTotalCandidaturas(totalCandidaturas, 12),
    },
  ];

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

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span
                          className={`flex w-fit items-center gap-x-2 rounded-full border cursor-default ${crescimentoCandidaturas > 0
                            ? 'text-blue-500 border-blue-500 dark:border-blue-600 dark:text-blue-600'
                            : crescimentoCandidaturas === 0
                              ? 'text-zinc-400 border-zinc-400'
                              : 'text-red-500 dark:border-red-600 dark:text-red-500 border-red-500'
                            } px-2 py-1 font-medium`}
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
                      </TooltipTrigger>

                      <TooltipContent
                        side='bottom'
                        className='bg-blue-100 px-2 text-black font-semibold'
                      >
                        <p>Em relação ao mês anterior</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span
                          className={`flex w-fit items-center gap-x-2 rounded-full border  cursor-default ${candCrescimentoAndamento > 0
                            ? 'text-blue-500 border-blue-500 dark:border-blue-600 dark:text-blue-600'
                            : candCrescimentoAndamento === 0
                              ? 'text-zinc-400 border-zinc-400'
                              : 'text-red-500 dark:border-red-600 dark:text-red-500 border-red-500'
                            }  px-2 py-1 font-medium `}
                        >
                          {candCrescimentoAndamento > 0 ? (
                            <TrendingUp size={18} />
                          ) : candCrescimentoAndamento === 0 ? (
                            <Minus size={18} className='text-zinc-400' />
                          ) : (
                            <TrendingDown size={18} className='text-red-500' />
                          )}
                          {candCrescimentoAndamento}%
                        </span>
                      </TooltipTrigger>

                      <TooltipContent
                        side='bottom'
                        className='bg-blue-100 px-2 text-black font-semibold'
                      >
                        <p>Em relação ao mês anterior</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
                    {emEntrevista.length}
                  </p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span
                          className={`flex w-fit items-center gap-x-2 rounded-full border  cursor-default ${totalEntrevistasCrescimento > 0
                            ? 'text-blue-500 border-blue-500 dark:border-blue-600 dark:text-blue-600'
                            : totalEntrevistasCrescimento === 0
                              ? 'text-zinc-400 border-zinc-400'
                              : 'text-red-500 dark:border-red-600 dark:text-red-500 border-red-500'
                            }  px-2 py-1 font-medium `}
                        >
                          {totalEntrevistasCrescimento > 0 ? (
                            <TrendingUp size={18} />
                          ) : totalEntrevistasCrescimento === 0 ? (
                            <Minus size={18} className='text-zinc-400' />
                          ) : (
                            <TrendingDown size={18} className='text-red-500' />
                          )}
                          {totalEntrevistasCrescimento}%
                        </span>
                      </TooltipTrigger>

                      <TooltipContent
                        side='bottom'
                        className='bg-blue-100 px-2 text-black font-semibold'
                      >
                        <p>Em relação ao mês anterior</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
                    {recusadasMesAtual.length}
                  </p>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span
                          className={`flex w-fit items-center gap-x-2 rounded-full border  cursor-default ${totalRecusasCrescimento > 0
                            ? 'text-blue-500 border-blue-500 dark:border-blue-600 dark:text-blue-600'
                            : totalRecusasCrescimento === 0
                              ? 'text-zinc-400 border-zinc-400'
                              : 'text-red-500 dark:border-red-600 dark:text-red-500 border-red-500'
                            }  px-2 py-1 font-medium `}
                        >
                          {totalRecusasCrescimento > 0 ? (
                            <TrendingUp size={18} />
                          ) : totalRecusasCrescimento === 0 ? (
                            <Minus size={18} className='text-zinc-400' />
                          ) : (
                            <TrendingDown size={18} className='text-red-500' />
                          )}
                          {totalRecusasCrescimento}%
                        </span>
                      </TooltipTrigger>

                      <TooltipContent
                        side='bottom'
                        className='bg-blue-100 px-2 text-black font-semibold'
                      >
                        <p>Em relação ao mês anterior</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              <div className='card col-span-1 md:col-span-2 lg:col-span-4 dark:bg-[#0e0d11]'>
                <div className='card-header'>
                  <p className='card-title'>Análises</p>
                </div>

                <div className='card-body p-0'>
                  <ResponsiveContainer width={'100%'} height={500}>
                    {/* Slice pra mostrar de janeiro até o atual */}
                    <ComposedChart data={data.slice(0, mesAtual)}>
                      <CartesianGrid

                        strokeDasharray='18 4' // Linhas mais longas e espaçadas
                        strokeWidth={1} // Linhas mais finas
                        opacity={0.2}
                        stroke='#7f7f7f'
                      />

                      <XAxis dataKey='name' scale='auto' />
                      <YAxis
                        tickCount={20}
                        domain={[0, 20]}
                        allowDataOverflow={true}
                      />
                      <ToolTip />
                      <Legend />

                      <Bar
                        dataKey='TotalCandidaturas'
                        name='Total Candidaturas'
                        barSize={30}
                        fill='#413ea0'
                      />

                      <Line
                        type='linear'
                        dataKey='TotalRecusas'
                        name='Recusas'
                        stroke='#ef0000'
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
