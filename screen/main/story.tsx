import React from "react";
import styles from "./styles";
import { Post } from "../data/data-type";
import { View, Image, Text, FlatList } from "react-native";


const Story = ({data}:{data: Post[]}) => {
    const renderStory = ({item}:{item: Post}) => (
        <View style={styles.storyContainer}>
            <View style={styles.storyCol}>
                <Image style={styles.storyAvata} source={{ uri: item.avatar}}/>
                <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                 style={styles.storyName}>{item.username}</Text>
            </View>
        </View>
    );


    return (
        <View>
            <FlatList
            horizontal= {true}
                data={data}
                renderItem={renderStory}
                // keyExtractor={(item) => item.id.toString()}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Story