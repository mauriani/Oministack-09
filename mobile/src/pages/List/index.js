import React, { useState, useEffect } from "react";
import { AsyncStorage, ScrollView } from "react-native";

import logo from "../../assets/logo.png";
import SpotList from "../../components/SpotList";

import { Container, ImageLogo } from "./styles";

const List = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("techs").then((storagedTechs) => {
      const techsArray = storagedTechs.split(",").map((tech) => tech.trim());
      setTechs(techsArray);
    });
  }, []);
  return (
    <Container>
      <ImageLogo source={logo} />
      <ScrollView>
        {techs.map((tech) => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default List;
