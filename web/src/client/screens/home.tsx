import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image from "../assets/5dbeda04-c471-4ff3-8c01-8e92fe1079ae.png";
import avatar1 from "../assets/avatar 1.webp";
import avatar2 from "../assets/avatar 2.png";
import avatar3 from "../assets/avatar 3.png";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const Home: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 p-9 flex flex-col items-center">
        <header className="bg-gray-800 text-white py-4 px-8 fixed top-0 left-0 w-full z-50 shadow-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wide text-white">
              LEARN <span className="font-normal text-gray-400">ACADEMY</span>
            </h1>
            <nav className="flex space-x-8 items-center">
              <a
                href="#about"
                className="text-lg hover:text-purple-600 relative group"
              >
                About Us
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#cursos"
                className="text-lg hover:text-purple-600 relative group"
              >
                Cursos Populares
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#avaliacoes"
                className="text-lg hover:text-purple-600 relative group"
              >
                Avaliações
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link to="/register">
                <a className="text-lg hover:text-purple-600 relative group">
                  Register
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Link to="/login">
                <button
                  className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-all duration-300"
                  aria-label="Login"
                >
                  Login
                </button>
              </Link>
            </nav>
          </div>
        </header>

        {/* Seção principal */}
        <div className="flex flex-col items-center mt-24 mb-16 text-center space-y-8 md:space-y-10">
          <h2 className="text-white text-4xl font-semibold">
            Learn Fast With Us
          </h2>
          <Link to="/login">
            <button className="bg-purple-700 text-white px-20 py-2 rounded-full hover:bg-indigo-700">
              Get started
            </button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section
        id="about"
        className="py-10 px-4 sm:px-6 md:py-20 bg-white text-left flex flex-col md:flex-row items-center justify-between"
      >
        <div className="max-w-xl mb-8 ml-10 md:mb-0">
          <h3 className="text-3xl font-semibold mb-4">About us</h3>
          <p className="text-gray-700 text-xl mb-5">
            Somos uma plataforma dedicada a oferecer cursos práticos e
            inovadores de fácil acesso na área de programação. Nós queremos
            capacitar estudantes e profissionais com as habilidades mais atuais
            e demandadas no mercado, através de uma experiência de aprendizado
            acessível e envolvente.
          </p>
          <Link to="/login">
            <button
              type="button"
              className="text-purple-800 hover:text-white border border-purple-900 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-800"
            >
              Learn More
            </button>
          </Link>
        </div>
        <img
          src={image}
          className="w-1/2 max-w-xs ml-10 mr-10"
          alt="Programming"
        />
      </section>

      {/* Cursos Populares - Carrossel */}
      <section id="cursos" className="bg-gray-900 text-white py-20">
        <div className="text-center">
          <h3 className="text-xl">Começa a Aprender</h3>
          <p className="text-5xl font-semibold">Cursos Populares</p>
        </div>
        <div className="text-center mt-2 mb-5">
          <Link to="/login">
            <button className="bg-purple-600 text-white px-20 py-2 rounded-full mt-4 hover:bg-indigo-700">
              Get Started
            </button>
          </Link>
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
                <img
                  src="https://img.icons8.com/color/100/html-5.png"
                  alt="HTML"
                  className="mx-auto mb-4"
                />
                <h4 className="text-2xl font-bold">HTML</h4>
                <p className="mt-2 text-base text-gray-400">
                  Aprenda a estruturar páginas web com HTML.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide CSS */}
            <SwiperSlide>
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
                <img
                  src="https://img.icons8.com/color/100/css3.png"
                  alt="CSS"
                  className="mx-auto mb-4"
                />
                <h4 className="text-2xl font-bold">CSS</h4>
                <p className="mt-2 text-base text-gray-400">
                  Dê estilo e design às suas páginas com CSS.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide JavaScript */}
            <SwiperSlide>
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
                <img
                  src="https://img.icons8.com/color/100/javascript.png"
                  alt="JavaScript"
                  className="mx-auto mb-4"
                />
                <h4 className="text-2xl font-bold">JavaScript</h4>
                <p className="mt-2 text-base text-gray-400">
                  Aprenda a linguagem de programação mais popular da web.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide React */}
            <SwiperSlide>
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
                <img
                  src="https://img.icons8.com/color/100/react-native.png"
                  alt="React"
                  className="mx-auto mb-4"
                />
                <h4 className="text-2xl font-bold">React</h4>
                <p className="mt-2 text-base text-gray-400">
                  Domine o framework mais utilizado para construir interfaces de
                  usuário.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide Swift */}
            <SwiperSlide>
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
                <img
                  src="https://img.icons8.com/color/100/swift.png"
                  alt="Swift"
                  className="mx-auto mb-4"
                />
                <h4 className="text-2xl font-bold">Swift</h4>
                <p className="mt-2 text-base text-gray-400">
                  Aprenda a criar aplicativos para iOS com Swift.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide TypeScript */}
            <SwiperSlide>
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
                <img
                  src="https://img.icons8.com/color/100/typescript.png"
                  alt="TypeScript"
                  className="mx-auto mb-4"
                />
                <h4 className="text-2xl font-bold">TypeScript</h4>
                <p className="mt-2 text-base text-gray-400">
                  Expanda seu conhecimento em JavaScript com TypeScript.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide C */}
            <SwiperSlide>
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
                <img
                  src="https://img.icons8.com/color/100/c-programming.png"
                  alt="C"
                  className="mx-auto mb-4"
                />
                <h4 className="text-2xl font-bold">C</h4>
                <p className="mt-2 text-base text-gray-400">
                  Aprenda os fundamentos da linguagem C.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide Python */}
            <SwiperSlide>
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center w-64 h-80 mx-auto">
                <img
                  src="https://img.icons8.com/color/100/python.png"
                  alt="Python"
                  className="mx-auto mb-4"
                />
                <h4 className="text-2xl font-bold">Python</h4>
                <p className="mt-2 text-base text-gray-400">
                  Desenvolva suas habilidades com Python, a linguagem versátil.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Reviews */}
      <section id="avaliacoes" className="py-20">
        <h1 className="text-4xl font-bold text-center mb-10">Avaliações</h1>
        <div className="flex justify-center space-x-8">
          {/* Avaliação 1 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-80">
            <div className="flex flex-col items-center">
              <img
                src={avatar1}
                alt="Avatar de Jéssica Tavares"
                className="w-16 h-16 rounded-full border-4 border-gray-300 mb-4"
              />
              <div className="flex items-center">
                <span className="text-yellow-300">★ ★ ★ ★ ★</span>
              </div>
            </div>
            <p className="mt-4">
              Estou extremamente satisfeito com o excelente atendimento que
              recebi. A equipe fez de tudo para atender às minhas necessidades e
              superou minhas expectativas. Recomendo fortemente seus serviços!
            </p>
            <h4 className="font-semibold mt-4">Jéssica Tavares</h4>
            <p className="text-sm text-gray-400">Product Manager</p>
          </div>

          {/* Avaliação 2 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-80">
            <div className="flex flex-col items-center">
              <img
                src={avatar2}
                alt="Avatar de Maria Rodrigues"
                className="w-16 h-16 rounded-full border-4 border-gray-300 mb-4"
              />
              <div className="flex items-center">
                <span className="text-yellow-300">★ ★ ★ ★ ★</span>
              </div>
            </div>
            <p className="mt-4">
              Agradeço a atenção que oferecem, permitindo-me ver as minhas
              dificuldades e melhorar a minha aprendizagem.
            </p>
            <h4 className="font-semibold mt-4">Maria Rodrigues</h4>
            <p className="text-sm text-gray-400">Product Designer</p>
          </div>

          {/* Avaliação 3 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-80">
            <div className="flex flex-col items-center">
              <img
                src={avatar3}
                alt="Avatar de João Pedro"
                className="w-16 h-16 rounded-full border-4 border-gray-300 mb-4"
              />
              <div className="flex items-center">
                <span className="text-yellow-300">★ ★ ★ ★ ☆</span>
              </div>
            </div>
            <p className="mt-4">
              A velocidade e eficiência do atendimento aos utilizadores são
              impressionantes. Eu fiz o curso de IA e estou muito satisfeito.
            </p>
            <h4 className="font-semibold mt-4">João Pedro</h4>
            <p className="text-sm text-gray-400">Web Development</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
