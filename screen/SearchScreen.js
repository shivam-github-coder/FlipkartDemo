import { View, Text, TextInput } from "react-native";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const SearchScreen = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          alignItems: "center",
          borderBottomWidth: 2,
          borderBottomColor: "#D3D3D3",
          shadowColor: "gray",
          shadowOpacity: 0.2,
        }}
      >
        <AntDesign
          name="search1"
          size={20}
          style={{ marginRight: 20 }}
          color="black"
        />
        <TextInput
          //   style={styles.input}
          style={{ flex: 1 }}
          selectionColor="#0C73EB"
          placeholder="Search for Products,Brands and More"
          // onChangeText={onChangeText}
          // value={text}
        />
        <FontAwesome
          name="microphone"
          //   style={{ marginRight: 20 }}
          size={20}
          color="black"
        />
      </View>
    </View>
  );
};

export default SearchScreen;
