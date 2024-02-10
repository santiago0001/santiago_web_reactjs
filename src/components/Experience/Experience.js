import { Box, Container } from "@mui/material";
import { ContainerHome } from "../Home/Home.styled";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  const experienceData = [
    {
      title: "Desarrollador Frontend ARSAT",
      description:
        "Diciembre 2021 - <b>Actualidad</b> <br><br> Comencé desempeñándome como “programador training”. Con el tiempo, mi <b>compromiso con la mejora</b> continua se reflejó en la adquisición de nuevas habilidades mediante lecturas, cursos y prácticas, lo que me <b>permitió asumir mayores responsabilidades</b>. Mi evolución incluyó una participación más activa en la planificación de sprints, la estimación de tareas y la gestión total del frontend en algunos proyectos cuando mis superiores estaban de vacaciones. <br> <br>A lo largo de mi trayectoria en la empresa, tuve la oportunidad de enfrentarme a tecnologías novedosas como<b> ReactJS, NextJS y Electron</b>, ampliando así mi conocimiento técnico. Además, perfeccioné mis habilidades en lenguajes que ya dominaba, tales como<b> Javascript, HTML y CSS</b>. <br><br>La diversidad de proyectos también me llevó a trabajar con diversas librerías, lo que contribuyó significativamente a mejorar mi comprensión lectora en inglés y a desarrollar la capacidad de leer eficientemente la documentación asociada a estas tecnologías. Tambien me brindaron la <b> capacidad de  adaptarme con facilidad a cambios y desafíos inesperados </b>. Este proceso fortaleció mi habilidad para trabajar eficientemente en entornos dinámicos y complejos. ",
    },
    {
      title: "Desarrollos durante mis estudios universitarios",
      description:
        "A lo largo de mi trayectoria académica en la Universidad Tecnológica Nacional, he llevado a cabo diversos proyectos que abarcan distintas tecnologías y lenguajes de programación. Inicialmente, adquirí una sólida experiencia práctica en la creación de Diagramas de Flujo de Datos, lo que sentó las bases para posteriormente desarrollar dos aplicaciones utilizando C++..<br/>.<br/> Posteriormente, amplié mis habilidades al realizar una aplicación web mediante ASP.NET y C#, donde también implementamos bases de datos SQL, incluyendo TRIGGERS y PROCEDURES. Avanzamos en nuestra exploración tecnológica al trabajar con bases de datos NoSQL, utilizando Mongo DB para realizar consultas y actualizaciones. .<br/>.<br/> Continuando con mi formación, participé en el desarrollo de una aplicación web utilizando Java. Además, tuve la oportunidad de crear una aplicación para Android mediante Android Studio y Java, la cual se conectaba con una base de datos en Firebase y tenía funcionalidades de envío de correos electrónicos.<br/>.<br/> Estas experiencias no solo me proporcionaron un conocimiento profundo de diversas tecnologías y herramientas, sino que también fortalecieron mi <b>capacidad para abordar proyectos complejos y adaptarme a diferentes entornos de desarrollo </b>.",
    },
  ];
  return (
    <ContainerHome maxWidth={"lg"}>
      <Container maxWidth={"md"}>
        <Box pb={5} pt={5}>
          {experienceData?.map((item) => (
            <ExperienceItem item={item} />
          ))}
        </Box>
      </Container>
    </ContainerHome>
  );
};
