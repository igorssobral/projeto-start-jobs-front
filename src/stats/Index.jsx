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
import ProductImage from "../assets/product-image.jpg";


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


export const topVagas = [
    {
        number: 1,
        empresa: "Stock Headquarters",
        image: ProductImage,
        description: "High-quality noise-canceling wireless headphones.",
        atividade: "Programador em C#",
        status: "Entrevista",
        classificacao: 4.5,
    },
    {
        number: 2,
        empresa: "Smartphone House",
        image: ProductImage,
        description: "Latest 5G smartphone with excellent camera features.",
        atividade: "Programador em PHP",
        status: "Analise",
        classificacao: 4.7,
    },
    {
        number: 3,
        empresa: "Gaming Store",
        image: ProductImage,
        description: "Powerful gaming laptop with high-end graphics.",
        atividade: "Programador em C#",
        status: "Analise",
        classificacao: 4.8,
    },
    {
        number: 4,
        empresa: "Smartwatch",
        image: ProductImage,
        description: "Stylish smartwatch with fitness tracking features.",
        atividade: "Programador em C#",
        status: "Contratado",
        classificacao: 4.9,
    },
    {
        number: 5,
        empresa: "Bluetooth Speaker",
        image: ProductImage,
        description: "Portable Bluetooth speaker with deep bass sound.",
        atividade: "designer UI UX",
        status: "Triagem",
        classificacao: 4.3,
    },
    {
        number: 6,
        empresa: "4K Enterprise",
        image: ProductImage,
        description: "Ultra HD 4K monitor with stunning color accuracy.",
        atividade: "Programador em C#",
        status: "Analise",
        classificacao: 4.6,
    },
    {
        number: 7,
        empresa: "Mechanical Cloud",
        image: ProductImage,
        description: "Mechanical keyboard with customizable RGB lighting.",
        atividade: "Programador em Java",
        status: "Triagem",
        classificacao: 4.7,
    },
    {
        number: 8,
        empresa: "Wireless Mouse",
        image: ProductImage,
        description: "Ergonomic wireless mouse with precision tracking.",
        atividade: "Programador em Python",
        status: "contratado",
        classificacao: 5.0,
    },
    {
        number: 9,
        empresa: "Action Camera",
        image: ProductImage,
        description: "Waterproof action camera with 4K video recording.",
        atividade: "Programador em Javascript",
        status: "Estágio",
        classificacao: 4.8,
    },
    {
        number: 10,
        empresa: "External Hard Drive",
        image: ProductImage,
        description: "Portable 2TB external hard drive for data storage.",
        atividade: "Programador em C#",
        status: "Analise",
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
  
