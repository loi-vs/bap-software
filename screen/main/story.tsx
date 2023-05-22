import React from "react";
import styles from "./styles";
import { View, Image, Text, FlatList } from "react-native";

const storys = [
    {
     "name": "Elsie Fritsch",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1022.jpg",
     "id": "1"
    },
    {
     "name": "Jody Wuckert",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/683.jpg",
     "id": "2"
    },
    {
     "name": "Phil Kohler",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/133.jpg",
     "id": "3"
    },
    {
     "name": "Salvatore Williamson",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/226.jpg",
     "id": "4"
    },
    {
     "name": "Mrs. Albert Jacobson",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/642.jpg",
     "id": "5"
    },
    {
     "name": "Meghan Block",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/544.jpg",
     "id": "6"
    },
    {
     "name": "Dr. Traci VonRueden",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1028.jpg",
     "id": "7"
    },
    {
     "name": "Blake Nicolas",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/991.jpg",
     "id": "8"
    },
    {
     "name": "Susie Goldner",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/976.jpg",
     "id": "9"
    },
    {
     "name": "Ginger Ratke",
     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1119.jpg",
     "id": "10"
    }
   ]
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