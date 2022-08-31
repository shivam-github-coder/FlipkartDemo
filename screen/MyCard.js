import { View, Text, Image, Button } from "react-native";
import React from "react";

const MyCard = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={{
          uri: "https://www.aswagna.co/public/frontend/images/no_cart.png",
          width: 250,
          height: 200,
        }}
      />
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Empty Card</Text>
      <Text style={{ color: "grey" }}>Simply browser, create a wishlist </Text>
      <Text style={{ color: "grey", marginBottom: 10 }}>
        or make a purchase
      </Text>
      <Button
        title="Continue Shopping"
        color="#0C73EB"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default MyCard;
