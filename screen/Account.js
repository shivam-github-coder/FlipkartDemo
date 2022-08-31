import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { Avatar, Card } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

const Account = () => {
  const dataSource = [
    {
      title: "Flipkart Plus",
      des: "N/a",
      methord: "N/a",
      data: "VIEW PLUS ZONE",
    },
    { title: "My Orders", des: "N/a", methord: "N/a", data: "VIEW ALL ORDERS" },
    {
      title: "Choose Language",
      des: "N/a",
      methord: "English",
      data: "Choose Language",
    },
    {
      title: "My Wishlist",
      des: "N/a",
      methord: "N/a",
      data: "VIEW YOUR Wishlist",
    },
    {
      title: "Flipkart Axix Bank Credit Card",
      des: "N/a",
      methord: "N/a",
      data: "APPLICATION IN PROGRESS ",
    },
  ];

  return (
    <View style={{ marginBottom: 10 }}>
      <ScrollView>
        <View style={{ backgroundColor: "#0C73EB" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              margin: 20,
            }}
          >
            <Avatar
              rounded
              size="large"
              source={{
                uri: "https://s3.amazonaws.com/oodles-technologies1/profile-images/903ea419-0fbe-4d76-adb3-5b5d33c328d9.jpeg",
              }}
            />
            <Text style={{ padding: 10, color: "white" }}>or</Text>
            <Avatar
              rounded
              size="large"
              icon={{ name: "user", type: "font-awesome" }}
              source={{
                uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              }}
            />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TextInput
              placeholder="Enter Your name"
              placeholderTextColor={"#D3D3D3"}
              style={{
                borderBottomWidth: 2,
                width: 250,
                textAlign: "center",
                borderColor: "#D3D3D3",
                fontSize: 20,
                marginBottom: 10,
              }}
            />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "white", marginBottom: 5 }}>
              +919808900925
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <Text></Text>
            <Text style={{ color: "white" }}>shiva2641998@gmail.com</Text>
            <Entypo name="edit" size={18} color="#D3D3D3" />
          </View>
        </View>

        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <Card>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{item.title}</Text>
                <Text> {item.methord == "N/a" ? "" : item.methord}</Text>
              </View>
              <Text
                style={{
                  fontSize: 12,
                }}
              >
                {item.des == "N/a" ? "" : item.des}
              </Text>
              <Card.Divider />
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <Text style={{ marginBottom: 0, color: "#0C73EB" }}>
                  {item.data}
                </Text>
              </View>
            </Card>
          )}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  HeaderData: {},
});
