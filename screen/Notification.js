import { View, Text, Image, Button } from "react-native";
import React from "react";

const Notification = ({ navigation }) => {
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
          uri: "https://cdn.dribbble.com/users/1373705/screenshots/6457914/no_notification_yiran.png?compress=1&resize=400x300",
          width: 250,
          height: 200,
        }}
      />
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        No notification yet
      </Text>
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

export default Notification;
