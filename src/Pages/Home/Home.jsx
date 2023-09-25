import { React } from "react";
import {Navbar} from "../../Components";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Areas from "../Areas/Areas";
import Team from "../Team/Team";

const Home = () => {

  return (
    <div>
      <section className="bg-no-repeat bg-cover bg-center bg-gray-900"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dz2fc3ioz/image/upload/v1695634440/akandeandakanedchambers/pexels-ekaterina-bolovtsova-6077123_uz8mpm.jpg)`,
          backgroundBlendMode: 'luminosity',
        }}>
        <Navbar />
        <Landing />
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="services">
        <Areas/>
      </section>

      <section id="team">
        <Team/>
      </section>

    </div>
  );
};

export default Home;
