import React from "react";
import styles from "./styles";
import { View, Text, Image, FlatList } from "react-native";

const posts = [
  {
    "username": "Miss Eunice Keebler",
    "caption": "Have nice day",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1195.jpg",
    "imageUrl": "https://loremflickr.com/640/480/transport",
    "id": "1"
  },
  {
    "username": "Leon Fahey",
    "caption": "Have nice day",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1185.jpg",
    "imageUrl": "https://loremflickr.com/640/480/transport",
    "id": "2"
  },
  {
    "username": "Shelley King",
    "caption": "Have nice day",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/387.jpg",
    "imageUrl": "https://loremflickr.com/640/480/transport",
    "id": "3"
  },
  {
    "username": "Willie Toy",
    "caption": "Have nice day",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/823.jpg",
    "imageUrl": "https://loremflickr.com/640/480/transport",
    "id": "4"
  },
  {
    "username": "Wayne Lindgren",
    "caption": "Have nice day",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/241.jpg",
    "imageUrl": "https://loremflickr.com/640/480/transport",
    "id": "5"
  },
  {
    "username": "Jacqueline Braun",
    "caption": "Have nice day",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/885.jpg",
    "imageUrl": "https://loremflickr.com/640/480/transport",
    "id": "6"
  },
  {
    "username": "Glenn D'Amore DVM",
    "caption": "Have nice day",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/588.jpg",
    "imageUrl": "https://loremflickr.com/640/480/transport",
    "id": "7"
  },
  {
    "username": "Mrs. Pete Wuckert",
    "caption": "Have nice day",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/263.jpg",
    "imageUrl": "https://loremflickr.com/640/480/transport",
    "id": "8"
  },
  {
    "username": "Travis Roob",
    "caption": "Have nice day",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1195.jpg",
    "imageUrl": "https://loremflickr.com/640/480/transport",
    "id": "9"
  },
  {
    "username": "Nina Medhurst",
    "caption": "Have nice day",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1097.jpg",
    "imageUrl": "https://loremflickr.com/640/480/transport",
    "id": "10"
  }
];

const Post = () => {
    const renderPost = ({ item }) => (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image style={styles.avatar}  source={{ uri: item.avatar}}/>
          <Text style={styles.username}>{item.username}</Text>
        </View>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
        <Text style={styles.caption}>{item.caption}</Text>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };

  export default Post