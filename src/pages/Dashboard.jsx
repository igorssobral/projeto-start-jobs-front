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
} from "lucide-react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { overviewData, destaquesData, topVagas } from "../stats/Index";

import { Footer } from "../components/Footer";

const Dashboard = ({ showMenu }) => {
  function handleOpenMenu() {
    showMenu();
  }
  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-[#1F1E25]">
      <div className="ml-0 md:ml-64 p-6">

        <button
          onClick={handleOpenMenu}
          className="md:hidden dark:text-zinc-50"
        >
          <MenuIcon />
        </button>
        <Header title={"Dashboard"} description={" Acompanhe seus processos."}/>
       
        <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />
        
      </div>

      <div  className="ml-10 mb-6 md:ml-64 px-10">
      <main>
        <div className="flex flex-col gap-y-3">
          {/* <h1 className="title text-2xl text-">Dashboard</h1> */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <div className="card dark:bg-[#0e0d11]">
              <div className="card-header ">
                <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-[#151419] dark:text-blue-600">
                  <Package size={26} />
                </div>
                <p className="card-title">Candidaturas</p>
              </div>
              <div className="card-body rounded-lg p-6 bg-slate-100 transition-colors dark:bg-[#151419]">
                <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                  25
                </p>
                <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                  <TrendingUp size={18} />
                  25%
                </span>
              </div>
            </div>
            <div className="card dark:bg-[#0e0d11]">
              <div className="card-header ">
                <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-[#151419] dark:text-blue-600">
                  <Expand size={26} />
                </div>
                <p className="card-title">Vagas Abertas</p>
              </div>
              <div className="card-body rounded-lg p-6 bg-slate-100 transition-colors dark:bg-[#151419]">
                <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                  16
                </p>
                <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                  <TrendingUp size={18} />
                  12%
                </span>
              </div>
            </div>
            <div className="card dark:bg-[#0e0d11]">
              <div className="card-header ">
                <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-[#151419] dark:text-blue-600">
                  <Users size={26} />
                </div>
                <p className="card-title">Entrevistas</p>
              </div>
              <div className="card-body rounded-lg p-6 bg-slate-100 transition-colors dark:bg-[#151419]">
                <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                  15
                </p>
                <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                  <TrendingUp size={18} />
                  15%
                </span>
              </div>
            </div>
            <div className="card dark:bg-[#0e0d11]">
              <div className="card-header ">
                <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-[#151419] dark:text-blue-600">
                  <ArrowUpNarrowWide size={26} />
                </div>
                <p className="card-title">Classificação</p>
              </div>
              <div className="card-body rounded-lg p-6 bg-slate-100 transition-colors dark:bg-[#151419]">
                <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                  12
                </p>
                <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                  <TrendingUp size={18} />
                  19%
                </span>
              </div>
            </div>
          </div>

          {/* ******************************** */}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="card col-span-1 md:col-span-2 lg:col-span-4 dark:bg-[#0e0d11]">
              <div className="card-header">
                <p className="card-title">Análises</p>
              </div>

              <div className="card-body p-0 ">
                <ResponsiveContainer width={"100%"} height={300}>
                  <BarChart
                    data={overviewData}
                    margin={{
                      top: 0,
                      right: 0,
                      left: -5,
                      bottom: 2,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="uv"
                      fill="#B3CDAD"
                      activeBar={<Rectangle fill="pink" stroke="blue" />}
                    />
                    <Bar
                      dataKey="pv"
                      fill="#FF5F5E"
                      activeBar={<Rectangle fill="gold" stroke="purple" />}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* ***************************** */}

            <div className="card col-span-1 md:col-span-2 lg:col-span-3 dark:bg-[#0e0d11]">
              <div className="card-header">
                <p className="card-title">Top 10 Destaques</p>
              </div>
              <div className="card-body h-[300px] overflow-auto p-0">
                {destaquesData.map((destaque) => (
                  <div
                    key={destaque.id}
                    className="flex items-center justify-between gap-x-4 py-2 pr-2"
                  >
                    <div className="flex items-center gap-x-4">
                      <img
                        src={destaque.image}
                        alt={destaque.name}
                        className="size-10 flex-shrink-0 rounded-full object-cover"
                      />
                      <div className="flex flex-col gap-y-2">
                        <p className="font-medium text-slate-900 dark:text-slate-50">
                          {destaque.name}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {destaque.email}
                        </p>
                      </div>
                    </div>
                    <p className="font-medium text-slate-900 dark:text-slate-50">
                      {destaque.pontos}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="card dark:bg-[#0e0d11]">
            <div className="card-header">
              <p className="card-title">Oportunidades</p>
            </div>
            <div className="card-body p-0"></div>
            <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
              <table className="table">
                <thead className="table-header dark:bg-[#1F1E25]">
                  <tr className="table-row">
                    <th className="table-head">#</th>
                    <th className="table-head">Empresas</th>
                    <th className="table-head">Descrição da vaga</th>
                    <th className="table-head">Status</th>
                    <th className="table-head">Classificação</th>
                    <th className="table-head">Acões</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {topVagas.map((vagas) => (
                    <tr key={vagas.number} className="table-row">
                      <td className="table-cell">{vagas.number}</td>
                      <td className="table-cell">
                        <div className="flex w-max gap-x-4">
                          <img
                            src={vagas.image}
                            alt={vagas.empresa}
                            className="size-14 rounded-lg object-cover"
                          />
                          <div className="flex flex-col">
                            <p>{vagas.empresa}</p>
                            <p className="font-normal text-slate-600 dark:text-slate-400"></p>
                          </div>
                        </div>
                      </td>
                      <td className="table-cell">{vagas.atividade}</td>
                      <td className="table-cell">{vagas.status}</td>
                      <td className="table-cell">
                        <div className="flex items-center gap-x-2">
                          <Star
                            size={18}
                            className="fill-yellow-400 stroke-yellow-500"
                          />
                          {vagas.classificacao}
                        </div>
                      </td>
                      <td className="table-cell">
                        <div className="flex items-center gap-x-4">
                          <button className="text-blue-500 dark:text-blue-600">
                            <PencilLine size={20} />
                          </button>
                          <button className="text-red-500">
                            <Trash size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />
      <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
