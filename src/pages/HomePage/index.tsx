import logo from "../../assets/images/logo.svg";
import { Header, Navbar, Logo, ListItens } from "./styles";
import { Link } from "react-router-dom";
import { Button, ButtonPrimary, ButtonCircle } from "../../styles/Button";
import { Row } from "../../styles/Aling";
import { BiCheck, BiPlay, BiRightArrowAlt } from "react-icons/bi";

function HomePage() {
  return (
    <>
      <div className="App">
        <Header>
          <Logo>
            <img src={logo} className="App-logo" alt="logo" />
            <strong>myEdLink</strong>
          </Logo>
          <Navbar>
            <ul>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li className="active">
                <Link to="/">Dekungan</Link>
              </li>
              <li>
                <Link to="/">Cara Bergabung </Link>
              </li>
              <li>
                <Link to="/">Cerita Sobat EdLink</Link>
              </li>
            </ul>
          </Navbar>
          <div>
            <Button>Masuk</Button>
            <ButtonPrimary>Mendaftar</ButtonPrimary>
          </div>
        </Header>
        <main>
          <section>
            <span>Solusi Pembelajaran #1 di Indonesia</span>
            <h1>Kuliah semakin mudah tanpa terkendala jarak dan waktu.</h1>
            <h6>
              Solusi platform Pembelajaran Jarak Jauh (PJJ) lengkap dengan video
              conference, kuis interaktif, serta terintegrasi oleh SIAKAD.
            </h6>
            <ListItens>
              <li>
                <span>
                  <BiCheck color="#1A21BC" />
                </span>
                <Link to="/">Untuk Tenaga Pendidik</Link>
              </li>
              <li>
                <Link to="/">Untuk Mahasiswa</Link>
              </li>
              <li>
                <Link to="/">Untuk Orang Tua</Link>
              </li>
            </ListItens>
            <Row>
              <ButtonPrimary>
                Coba gratis! <BiRightArrowAlt />
              </ButtonPrimary>
            </Row>
          </section>
        </main>
      </div>
    </>
  );
}

export default HomePage;
