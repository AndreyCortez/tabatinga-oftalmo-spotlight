// Importa a imagem principal para podermos referenciá-la aqui.
import MainPhoto from '@/assets/main_photo.png';
import DoctorLogo from '@/assets/react.svg'; 
import bgImage from '@/assets/consultorio-background.jpg';


export const navLinks = [
  { href: '#home', text: 'Home' },
  // Removido '#sobre' pois não temos essa seção ainda
  { href: '#tratamentos', text: 'Tratamentos' },
  { href: '#reviews', text: 'Reviews' }, // Adicionado um link para Reviews
  { href: '#faq', text: 'FAQ' },       // Adicionado um link para FAQ
  { href: '#contato', text: 'Contato' },
];

// Centraliza todas as informações do médico em um único objeto.
export const doctorData = {
  name: "Dr. Vinicius Tabatinga",
  logoUrl: DoctorLogo, 
  specialty: "Oftalmologia Clínica e Cirúrgica",
  location: "Vila Mariana, São Paulo - SP",
  doctorImageUrl: MainPhoto,
  tagline: "Cuidando da saúde da sua visão com tecnologia e precisão.",
  description: "Médico Oftalmologista com Fellowship em Oculoplástica pela Faculdade de Medicina do ABC e cirurgia de catarata pelo Hospital do Servidor do Estado de Sao Paulo. Atendimentos e cirurgias pautados na ciencia, individualidade e humanidade.\
                Atualmente, faz parte do corpo clínico como cirurgiao oftalmológico do Hospital Alemao Oswaldo Cruz, Hospital Beneficencia portuguesa e Rede D’or.",
  
  hero: {
    backgroundImageUrl: bgImage,
  },

  credentials: {
    crm: "123.456 SP",
    rqe: "12345",
  },

  contact: {
    whatsapp: "5511912345678", 
    instagram: "dr.viniciustabatinga",
    phone: "1134567890",
    email: "contato@tabatingaoftalmo.com.br",
  },
  
  address: {
    street: "Rua Domingos de Morais, 2781",
    city: "Vila Mariana, São Paulo - SP",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8696.69235631703!2d-46.648608643156955!3d-23.586081926903223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce590f78964cc9%3A0x2ab66881f8a3a4e9!2sDr%20Vin%C3%ADcius%20Tabatinga%20%7C%20Oftalmologista!5e0!3m2!1spt-BR!2sbr!4v1756731709529!5m2!1spt-BR!2sbr",
  },

    developer: {
    name: "Sua Agência Web",
    url: "https://www.google.com", // Coloque o link do seu site aqui
  },

    qualifications: {
    stats: [
      { value: 5, label: "Anos de Experiência" },
      { value: 200, label: "Cirurgias Realizadas" },
      { value: 100, label: "Pacientes Satisfeitos" },
      { value: 30, label: "Certificados e Congressos" },
    ],
    arguments: [
      {
        icon: "TechnologyIcon",
        title: "Tecnologia de Ponta",
        description: "Utilizamos os equipamentos mais modernos para diagnósticos precisos e cirurgias seguras, garantindo os melhores resultados.",
      },
      {
        icon: "HumanizedCareIcon",
        title: "Atendimento Humanizado",
        description: "Cada paciente é único. Oferecemos um cuidado atencioso e personalizado, focado no seu bem-estar e conforto.",
      },
      {
        icon: "ExcellenceIcon",
        title: "Formação de Excelência",
        description: "Constante atualização profissional e formação nas melhores instituições para oferecer a você o que há de mais avançado na oftalmologia.",
      },
    ],
  },
};