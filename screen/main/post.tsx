import React from "react";
import styles from "./styles";
import { View, Text, Image, FlatList } from "react-native";

const posts = [
    {
      id: 1,
      username: 'john_doe',
      imageUrl: 'https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg',
      caption: 'Beautiful sunset!',
    },
    {
      id: 2,
      username: 'jane_smith',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg',
      caption: 'Having a great time!',
    },
    {
      id: 3,
      username: 'jane_smith',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg',
      caption: 'Having a great time!',
    },
    {
      id: 4,
      username: 'jane_smith',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg',
      caption: 'Having a great time!',
    },
    {
      id: 5,
      username: 'jane_smith',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg',
      caption: 'Having a great time!',
    },
    // Add more posts here
  ];

const Post = () => {
    const renderPost = ({ item }) => (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
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