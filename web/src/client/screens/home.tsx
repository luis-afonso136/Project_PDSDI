import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image from '../assets/5dbeda04-c471-4ff3-8c01-8e92fe1079ae.png';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export const Home: React.FC = () => {
  return (
    <>
      {/* Página com Navbar e seção principal */}
<div className="bg-gray-900 min-h-screen flex flex-col items-center">
  {/* Navbar */}
  <header className="bg-white text-black rounded-full py-3 px-8 flex flex-wrap justify-between items-center max-w-5xl w-full mt-6 mx-auto">
  <h1 className="text-xl font-bold">
    LEARN <span className="font-normal">ACADEMY</span>
  </h1>
  <nav className="flex space-x-6">
    <a href="#" className="hover:text-gray-500">About Us</a>
    <a href="#" className="hover:text-gray-500">Curso Populares</a>
    <a href="#" className="hover:text-gray-500">Avaliações</a>
    <a href="#" className="hover:text-gray-500">Register</a>
    <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800" aria-label="Login">
    Login
    </button>
  </nav>
</header>

{/* Seção principal */}
<div className="flex flex-col items-center mt-10 text-center space-y-8 md:space-y-10">
  <h2 className="text-white text-4xl font-semibold">Learn Fast With Us</h2>
  <button className="bg-purple-700 text-white text-sm font-semibold px-14 py-3 rounded-full hover:bg-indigo-700">
    Get started
  </button>
</div>

</div>

      {/* About Section */}
      <section className="py-10 px-4 sm:px-6 md:py-20 bg-white text-left flex flex-col md:flex-row items-center justify-between">
  <div className="max-w-xl mb-8 md:mb-0">
    <h3 className="text-3xl font-semibold mb-4">About us</h3>
    <p className="text-gray-700 text-xl mb-5">
      Somos uma plataforma dedicada a oferecer cursos práticos
      e inovadores de fácil acesso nas áreas de programação, inteligência 
      artificial e muito mais. Nós queremos capacitar estudantes e profissionais 
      com as habilidades mais atuais e demandadas no mercado, através de uma 
      experiência de aprendizado acessível e envolvente.
    </p>
    <button type="button" className="text-purple-800 hover:text-white border border-purple-900 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-800">
      Learn More
    </button>
  </div>
  <img
    src={image}
    className="w-1/2 max-w-xs ml-10"
    alt="Programming"
  />
</section>

{/* Cursos Populares - Carrossel */}
<section className="bg-gray-900 text-white py-20">
        <div className="text-center">
          <h3 className="text-xl">Começa a Aprender</h3>
          <p className="text-5xl font-semibold">Cursos Populares</p>
        </div>
        <div className="text-center mt-2 mb-5">
          <button className="bg-purple-600 text-white px-20 py-2 rounded-full mt-4">Get Started</button>
        </div>
        
        <div className="mt-10">
        <Swiper
              spaceBetween={10}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000, 
                disableOnInteraction: false, 
              }}
              modules={[Navigation, Pagination, Autoplay]} 
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="swiper-container"
            >
            {/* Slide HTML */}
      <SwiperSlide>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
          <img src="https://img.icons8.com/color/100/html-5.png" alt="HTML" className="mx-auto mb-4" />
          <h4 className="text-2xl font-bold">HTML</h4>
          <p className="mt-2 text-sm text-gray-400">Aprenda a estruturar páginas web com HTML.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full mt-4">Saber Mais</button>
        </div>
      </SwiperSlide>

      {/* Slide CSS */}
      <SwiperSlide>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
          <img src="https://img.icons8.com/color/100/css3.png" alt="CSS" className="mx-auto mb-4" />
          <h4 className="text-2xl font-bold">CSS</h4>
          <p className="mt-2 text-sm text-gray-400">Dê estilo e design às suas páginas com CSS.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full mt-4">Saber Mais</button>
        </div>
      </SwiperSlide>

            {/* Slide JavaScript */}
      <SwiperSlide>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
          <img src="https://img.icons8.com/color/100/javascript.png" alt="JavaScript" className="mx-auto mb-4" />
          <h4 className="text-2xl font-bold">JavaScript</h4>
          <p className="mt-2 text-sm text-gray-400">Aprenda a linguagem de programação mais popular da web.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full mt-4">Saber Mais</button>
        </div>
      </SwiperSlide>

      {/* Slide React */}
      <SwiperSlide>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
          <img src="https://img.icons8.com/color/100/react-native.png" alt="React" className="mx-auto mb-4" />
          <h4 className="text-2xl font-bold">React</h4>
          <p className="mt-2 text-sm text-gray-400">Domine o framework mais utilizado para construir interfaces de usuário.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full mt-4">Saber Mais</button>
        </div>
      </SwiperSlide>

      {/* Slide Swift */}
      <SwiperSlide>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
          <img src="https://img.icons8.com/color/100/swift.png" alt="Swift" className="mx-auto mb-4" />
          <h4 className="text-2xl font-bold">Swift</h4>
          <p className="mt-2 text-sm text-gray-400">Aprenda a criar aplicativos para iOS com Swift.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full mt-4">Saber Mais</button>
        </div>
      </SwiperSlide>

      {/* Slide TypeScript */}
      <SwiperSlide>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
          <img src="https://img.icons8.com/color/100/typescript.png" alt="TypeScript" className="mx-auto mb-4" />
          <h4 className="text-2xl font-bold">TypeScript</h4>
          <p className="mt-2 text-sm text-gray-400">Expanda seu conhecimento em JavaScript com TypeScript.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full mt-4">Saber Mais</button>
        </div>
      </SwiperSlide>

      {/* Slide C */}
      <SwiperSlide>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
          <img src="https://img.icons8.com/color/100/c-programming.png" alt="C" className="mx-auto mb-4" />
          <h4 className="text-2xl font-bold">C</h4>
          <p className="mt-2 text-sm text-gray-400">Aprenda os fundamentos da linguagem C.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full mt-4">Saber Mais</button>
        </div>
      </SwiperSlide>

      {/* Slide Python */}
      <SwiperSlide>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
          <img src="https://img.icons8.com/color/100/python.png" alt="Python" className="mx-auto mb-4" />
          <h4 className="text-2xl font-bold">Python</h4>
          <p className="mt-2 text-sm text-gray-400">Desenvolva suas habilidades com Python, a linguagem versátil.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full mt-4">Saber Mais</button>
        </div>
      </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Avaliações */}
      <section className="py-20 bg-white text-leaft px-4">
        <h3 className="text-3xl font-semibold text-center mb-8">Avaliações</h3>
        <div className="flex justify-center space-x-8">
          <div className="bg-gray-100 p-6 rounded shadow-md w-80">
              <div className="flex items-center mb-3">
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
             </div>
                  <p className="text-gray-700 mb-4">Estou extremamente satisfeito com o excelente atendimento que recebi. A equipe fez de tudo para atender às minhas necessidades e superou minhas expectativas. Recomendo fortemente seus serviços!</p>
                  <h4 className="font-semibold">Jéssica Tavares</h4>
                  <p className="text-gray-500 text-sm">Product Manager</p>
            </div>
       <div className="bg-gray-100 p-6 rounded shadow-md w-80">
        <div className="flex items-center mb-3">
            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
            <p className="text-gray-700 mb-16">Agradeço a atenção que oferecem, permitindo-me ver as minhas dificuldades e melhorar minha aprendizagem.</p>
            <h4 className="font-semibold">Maria Rodrigues</h4>
            <p className="text-gray-500 text-sm">Product Designer</p>
       </div>
        <div className="bg-gray-100 p-6 rounded shadow-md w-80">
          <div className="flex items-center mb-3">
              <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
          </div>
            <p className="text-gray-700 mb-16">A velocidade e eficiência do atendimento aos utilizadores são impressionantes. Eu fiz o curso de IA e estou muito satisfeito.</p>
            <h4 className="font-semibold">João Pedro</h4>
            <p className="text-gray-500 text-sm">Web Development</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
