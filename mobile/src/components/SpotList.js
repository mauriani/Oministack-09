import React, { useState, useEffect } from "react";
import { withNavigation } from "@react-navigation/compat";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import api from "../services/api";
import { ScrollView } from "react-native-gesture-handler";

const SpotList = ({ tech, navigation }) => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get("/spots", {
        params: { tech },
      });
      //salvando minha lista
      setSpots(response.data);
    }
    loadSpots();
  }, []);

  function handleNavigate(id) {
    navigation.navigate("Book", { id });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Empresas que usam <Text style={styles.bold}>{tech}</Text>
      </Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 16 }}
      >
        {spots.map((item) => (
          <View style={styles.listItem}>
            <Image
              style={styles.image}
              source={{
                uri: item.thumbnail_url,
              }}
            />
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.price}>
              {item.price ? `R$ ${item.price} / dia` : "GRATUITO"}
            </Text>
            <TouchableOpacity
              onPress={() => handleNavigate(item._id)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Solicitar Reserva</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 30 },

  title: {
    fontSize: 18,
    paddingHorizontal: 20,
    color: "#14213d",
    marginBottom: 15,
    fontFamily: "Roboto_400Regular",
  },
  bold: {
    fontWeight: "bold",
  },

  listItem: {
    marginRight: 15,
    padding: 16,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: "cover",
    borderRadius: 5,
  },
  company: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  price: {
    fontSize: 15,
    color: "#999",
    marginTop: 5,
  },
  button: {
    height: 32,
    backgroundColor: "#e63946",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f1faee",
    fontFamily: "Roboto_400Regular",
  },
});

export default withNavigation(SpotList);
