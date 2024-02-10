import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import { theme } from "../theme";
import StarIcon from "@mui/icons-material/Star";
import { STUDIES_ICONS } from "../../utils/constants";
import { ContainerHome } from "../Home/Home.styled";
import { Container } from "@mui/material";

const dataStudies = [
  {
    title: "UTN BA",
    subTitle: "En curso",
    detail: "Licenciatura en Tecnología Educativa",
    date: "2023 - Actualidad",
    icon: "school",
  },
  {
    title: "CoderHouse",
    subTitle: "Finalizada",
    detail: "Curso React JS",
    date: "12/2021 - 02/2022",
    icon: "school",
  },
  {
    title: "UTN FRGP",
    subTitle: "Finalizada",
    detail: "Tecnicatura Universitaria en Sistemas Informáticos",
    date: "2021 - 2023",
    icon: "school",
  },
  {
    title: "UTN FRGP",
    subTitle: "Finalizada",
    detail: "Tecnicatura Universitaria en Programación",
    date: "2017 - 2021",
    icon: "school",
  },
  {
    title: "Escuela Técnica N°3 Benavidez",
    subTitle: "Finalizada",
    detail: "Técnico en Informática Personal",
    date: "2010 - 2016",
    icon: "school",
  },
];

const getIcon = (icon) => {
  if (icon === STUDIES_ICONS?.school) return <SchoolIcon />;
};

export const Studies = () => {
  return (
    <ContainerHome maxWidth={"lg"}>
      <Container maxWidth={"md"}>
        <VerticalTimeline
          layout="1-column-left"
          lineColor={theme.palette.primary.main}
        >
          {dataStudies?.map(({ title, subTitle, detail, date, icon }) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                boxShadow: "-1px 0px 13px -4px rgba(0,0,0,0.75)",
                cursor: "pointer",
              }}
              // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date={date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={getIcon(icon)}
              onTimelineElementClick={() => {
                console.log(title);
              }}
            >
              <h3 className="vertical-timeline-element-title">{title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
              <p>{detail}</p>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </Container>
    </ContainerHome>
  );
};
