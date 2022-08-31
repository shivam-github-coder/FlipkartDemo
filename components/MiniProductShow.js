import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const MiniProductShow = ({
  title,
  imageShow,
  rate,
  handleSheetChangesData,
  setModalDataShow,
}) => {
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <Card.Image
        onPress={() => {
          setModalDataShow([
            {
              title,
              imageShow,
              rate,
            },
          ]),
            handleSheetChangesData(true);
        }}
        source={{
          uri: imageShow,
        }}
        style={{ width: 80, height: 100 }}
      />
      <Text
        style={{
          marginBottom: 2,
          fontStyle: "italic",
          marginTop: 10,
          fontSize: 12,
        }}
      >
        {title}
      </Text>
      <Text style={{ fontWeight: "bold" }}>{rate}</Text>
    </View>
  );
};

export default MiniProductShow;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: "white",
    padding: 10,
  },
  shadowProp: {
    elevation: 20,
    shadowColor: "#52006A",
  },
});
