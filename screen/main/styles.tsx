import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // loginContainer: {
    //   flex: 1,
    // },
    loginImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'center'
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    container: {
        height: '100%',
      },
      headerContainer: {
        height: 60,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
      },
      headerIcon: {
        flexDirection: 'row',
        alignItems: 'center',

      },
      storyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      storyCol: {
        width: 62,
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 8
      },
      storyAvata: {
        width: 56,
        paddingBottom: 10,
        borderRadius: 28,
        borderColor: '#FBAA47',
        borderWidth: 2,
        borderStyle:'dashed',
        aspectRatio: 1
      },
      storyName: {
        textAlign:'center',
        width: 50,
        color: '#262626',
        fontSize: 12,
      },

      postContainer: {
        padding: 16,
        marginBottom: 20,
      },
      postText: {
        fontSize: 18,
      },
      postHeader: {
        flexDirection: 'row',
        padding: 10,
        alignItems:'center',
      },
      avatar: {
        width:56,
        aspectRatio: 1,
        borderRadius: 28,
        marginRight: 8
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