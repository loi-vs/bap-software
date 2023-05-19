import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 0,
      },
      headerContainer: {
        height: 60,
        flexDirection: 'row',
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
        marginBottom: 20,
      },
      postText: {
        fontSize: 18,
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
})
export default styles