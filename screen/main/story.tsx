import React from "react";
import styles from "./styles";
import { View, Image, Text, FlatList } from "react-native";

const storys = [
    {
      name: "Bernadette Orn",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1199.jpg",
      id: "1"
    },
    {
      name: "Edmond Zulauf",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/548.jpg",
      id: "2"
    },
    {
      name: "Miss Regina Zulauf",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/204.jpg",
      id: "3"
    },
    {
      name: "Donald Cassin Jr.",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/838.jpg",
      id: "4"
    },
    {
      name: "Nelson Stokes",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/871.jpg",
      id: "5"
    },
    {
      name: "Alexis Littel",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/949.jpg",
      id: "6"
    },
    {
      name: "Timmy Kuhlman",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/963.jpg",
      id: "7"
    },
    {
      name: "Grady Harvey",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/728.jpg",
      id: "8"
    },
    {
      name: "Nina Williamson Jr.",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/747.jpg",
      id: "9"
    },
    {
      name: "Gary Wisozk",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1172.jpg",
      id: "10"
    }
  ];
  
const Story = () => {
    const renderStory = ({ item }) => (
        <View style={styles.storyContainer}>
            <View style={styles.storyCol}>
                <Image style={styles.storyAvata} source={{ uri: item.avatar}}/>
                <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                 style={styles.storyName}>{item.name}</Text>
            </View>
        </View>
    );
    return (
        <View>
            <FlatList
            horizontal= {true}
                data={storys}
                renderItem={renderStory}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default Story