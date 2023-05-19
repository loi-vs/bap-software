// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';


// const App = () => {
//   return (
//     <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{ color: 'red'}}>Instagram</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
// export default App;

// import React from 'react';
// import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

// const posts = [
//   {
//     id: 1,
//     username: 'john_doe',
//     imageUrl: 'https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg',
//     caption: 'Beautiful sunset!',
//   },
//   {
//     id: 2,
//     username: 'jane_smith',
//     imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg',
//     caption: 'Having a great time!',
//   },
//   // Add more posts here
// ];

// const App = () => {
//   const renderPost = ({ item }) => (
//     <View style={styles.postContainer}>
//       <View style={styles.postHeader}>
//         <Text style={styles.usernames}>{item.username}</Text>
//       </View>
//       <Image style={styles.image} source={{ uri: item.imageUrl }} />
//       <Text style={styles.caption}>{item.caption}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={posts}
//         renderItem={renderPost}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
  // postContainer: {
  //   marginBottom: 20,
  // },
  // postHeader: {
  //   padding: 10,
  // },
  // username: {
  //   fontWeight: 'bold',
  // },
  // image: {
  //   width: '100%',
  //   height: 300,
  // },
  // caption: {
  //   padding: 10,
  // },
// });

// export default App;

import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';


const NavigationHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Instagram</Text>
    </View>
  );
};

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
        <Text style={styles.usernames}>{item.username}</Text>
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

const BottomNavigation = () => {
  return (
    <View style={styles.bottomNavContainer}>
      <Text style={styles.bottomNavText}>Home</Text>
      <Text style={styles.bottomNavText}>Explore</Text>
      <Text style={styles.bottomNavText}>Profile</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationHeader />
      <Post />
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  postContainer: {
    padding: 16,
  },
  postText: {
    fontSize: 18,
  },
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    padding: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
  },
  caption: {
    padding: 10,
  },
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
  },
  bottomNavText: {
    fontSize: 16,
  },
});

export default App;
