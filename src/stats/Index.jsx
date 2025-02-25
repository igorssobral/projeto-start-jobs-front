import { ChartColumn, NotepadText, Package, PackagePlus,  ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";

import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";
import {
  IoIosStats,
  IoIosSettings,
  IoIosPerson,
  IoIosPersonAdd,
  IoIosEyeOff,
//   IoIosLogIn,
//   IoIosLogOut,
} from "react-icons/io";

import user01 from "../assets/user01.png";
import user02 from "../assets/user02.png";
import user03 from "../assets/user03.png";


// import React, { PureComponent } from 'react';
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import ProfileImage from "../assets/profile-image.jpg";

import Catho from "../assets/img/catho.png";
import Empregos from "../assets/img/empregos-logo.png";
import Google from "../assets/img/googleJobs.png";
import Glassdoor from "../assets/img/glassdoor.png";
import Indeed from "../assets/img/indeed-logo.png";
import InfoJobs from "../assets/img/infojobs-logo.png";
import Jooble from "../assets/img/jooble-logo.png";
import LinkedIn from "../assets/img/linkedin.png";
import TrabalhaBrasil from "../assets/img/trabalhaBrasil.png";
import Vagas from "../assets/img/vagas-com.png";


export const navbarLinks = [
    
    {
        title: "Home",
        links: [
            {
                label: "Login",
                icon: Users,
                path: "/login",
            },
            {
                label: "Registro",
                icon: UserPlus,
                path: "/new-user",
            },
            {
                label: "Comunidade",
                icon: UserCheck,
                path: "/partner",
            },
        ],
    },
    {
        title: "Oportunidades",
        links: [
            {
                label: "Vagas",
                icon: Package,
                path: "/vagas", //products
            },
            {
                label: "Candidaturas",
                icon: PackagePlus,
                path: "/candidato", //new-product
            },
            {
                label: "Entrevistas",
                icon: ShoppingBag,
                path: "/entrevista", //inventory
            },
        ],
    },
    {
        title: "Dados",
        links: [
            {
                label: "Dashboard",
                icon: ChartColumn,
                path: "/dash",
            },
            // {
            //     label: "Gráficos",
            //     icon: ChartColumn,
            //     path: "/grafics",
            // },
            {
                label: "Relatórios",
                icon: NotepadText,
                path: "/relato",
            },
        ],
    },
   
];


export const overviewData = [
    {
        name: "Jan/Fev",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Mar/Apr",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "May/Jun",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Jul/Aug",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Sep/Oct",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Nov/Dec",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
];


export const destaquesData = [
    //Top 10 destaques
    {
        id: 1,
        name: "Aesley Martin",
        email: "Aesley.martin@email.com",
        image: ProfileImage,
        pontos: 1500, //pontuação
    },
    {
        id: 2,
        name: "Juliana Mesquita",
        email: "juliana.mesq@email.com",
        image: ProfileImage,
        pontos: 2000,
    },
    {
        id: 3,
        name: "Thais Belmont",
        email: "sophia.belm@email.com",
        image: ProfileImage,
        pontos: 4000,
    },
    {
        id: 4,
        name: "Igor Sobral",
        email: "igors.obral@email.com",
        image: ProfileImage,
        pontos: 3000,
    },
    {
        id: 5,
        name: "Emma Jones",
        email: "emma.jones@email.com",
        image: ProfileImage,
        pontos: 2500,
    },
    {
        id: 6,
        name: "jeferson Jones",
        email: "jef.jones@email.com",
        image: ProfileImage,
        pontos: 4500,
    },
    {
        id: 7,
        name: "Alexandry Brito",
        email: "alex.asb@email.com",
        image: ProfileImage,
        pontos: 5300,
    },
];


// const [imgSite, setImgSite] = useState(1);
//   const data = [
//     { id: '1', image: LinkedIn },
//     { id: '2', image: Catho },
//     { id: '3', image: Empregos },
//     { id: '4', image: Google },
//     { id: '5', image: Glassdoor },
//     { id: '6', image: Indeed },
//     { id: '7', image: InfoJobs },
//     { id: '8', image: Jooble },
//     { id: '9', image: TrabalhaBrasil },
//     { id: '10', image: Vagas },
//   ];

export const topVagas = [


    {
        number: 1,
        site: "LinkedIn Jobs",
        image: LinkedIn,
        url: "https://www.linkedin.com/jobs",
        // description: "High-quality noise-canceling wireless headphones.",
        // atividade: "Programador em C#",
        // status: "Entrevista",
        classificacao: 4.5,
    },
    {
        number: 2,
        site: "Indeed",
        image: Indeed,
        url: "https://www.indeed.com/jobs",
        // description: "Latest 5G smartphone with excellent camera features.",
        // atividade: "Programador em PHP",
        // status: "Analise",
        classificacao: 4.7,
    },
    {
        number: 3,
        site: "Glassdoor",
        image: Glassdoor,
        url: "https://www.glassdoor.com/jobs",
        // description: "Powerful gaming laptop with high-end graphics.",
        // atividade: "Programador em C#",
        // status: "Analise",
        classificacao: 4.8,
    },
    {
        number: 4,
        site: "InfoJobs",
        image: InfoJobs,
        url: "https://www.infojobs.com.br",
        // description: "Stylish smartwatch with fitness tracking features.",
        // atividade: "Programador em C#",
        // status: "Contratado",
        classificacao: 4.9,
    },
    {
        number: 5,
        site: "Catho",
        image: Catho,
        url: "https://www.catho.com.br",
        // description: "Portable Bluetooth speaker with deep bass sound.",
        // atividade: "designer UI UX",
        // status: "Triagem",
        classificacao: 4.3,
    },
    {
        number: 6,
        site: "Vagas.com",
        image: Vagas,
        url: "https://www.vagas.com.br",
        // description: "Ultra HD 4K monitor with stunning color accuracy.",
        // atividade: "Programador em C#",
        // status: "Analise",
        classificacao: 4.6,
    },
    {
        number: 7,
        site: "Trabalha Brasil",
        image: TrabalhaBrasil,
        url: "https://www.trabalhabrasil.com.br",
        // description: "Mechanical keyboard with customizable RGB lighting.",
        // atividade: "Programador em Java",
        // status: "Triagem",
        classificacao: 4.7,
    },
    {
        number: 8,
        site: "Google Jobs",
        image: Google,
        url: "https://www.google.com/jobs",
        // description: "Ergonomic wireless mouse with precision tracking.",
        // atividade: "Programador em Python",
        // status: "contratado",
        classificacao: 5.0,
    },
    {
        number: 9,
        site: "Empregos.com.br",
        image: Empregos,
        url: "https://www.empregos.com.br",
        // description: "Waterproof action camera with 4K video recording.",
        // atividade: "Programador em Javascript",
        // status: "Estágio",
        classificacao: 4.8,
    },
    {
        number: 10,
        site: "Jooble",
        image: Jooble,
        url: "https://www.jooble.org",
        // description: "Portable 2TB external hard drive for data storage.",
        // atividade: "Programador em C#",
        // status: "Analise",
        classificacao: 3.5,
    },
];

//funçoes para tela graficos = profile
export const shortcutLink = [
    {
      title: "Goals",
      icon: GoGoal,
    },
    {
      title: "Plan",
      icon: GrPlan,
    },
    {
      title: "Stats",
      icon: IoIosStats,
    },
    {
      title: "Setting",
      icon: IoIosSettings,
    },
  ];

  export const users = [
    {
      name: "Robert Fox",
      country: "USA",
      role: "Python Developer",
      image: user01,
      bgColor: "bg-yellow-100",
    },
    {
      name: "Jane Doe",
      country: "UK",
      role: "Frontend Developer",
      image: user02,
      bgColor: "bg-blue-100",
    },
    {
      name: "John Smith",
      country: "Canada",
      role: "Backend Developer",
      image: user03,
      bgColor: "bg-gray-100",
    },
    {
      name: "Alice Johnson",
      country: "Australia",
      role: "Full Stack Developer",
      image: user01,
      bgColor: "bg-slate-100",
    },
  ];
  
// função para stats
export const empolyeesData = [
    {
      title: "Total Empolyees",
      icon: IoIosPerson,
      count: 200,
      bgColor: "bg-gray-100",
    },
    {
      title: "On Leave",
      icon: IoIosEyeOff,
      count: 15,
      bgColor: "bg-blue-100",
    },
    {
      title: "New Joinee",
      icon: IoIosPersonAdd,
      count: 25,
      bgColor: "bg-yellow-100",
    },
  ];
  
