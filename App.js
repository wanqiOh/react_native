// Combine all the screen for posts

// import React, { useEffect, useState } from 'react';
// import { Avatar } from "react-native-elements";
// import { 
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   TextInput,
//   FlatList,
// } from 'react-native';
// import filter from 'lodash.filter';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// function HomeScreen({ navigation }) {
//   const [isLoading, setLoading] = useState(true);
//       const [data, setData] = useState();
//       console.log(data);
    
//       useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//           .then((response) => response.json())
//           .then((json) => setData(json))
//           .catch((error) => console.error(error))
//           .finally(() => setLoading(false));
//       }, []);
    
//       return (
//         <View style={{ flex: 1}}>
//           {isLoading ? <Text>Loading...</Text> : 
//           (<View style={styles.container}>
//             <FlatList style={styles.list}
//               data={data}
//               keyExtractor={({ id }, index) => id}
//               // ItemSeparatorComponent={() => {
//               //   return (
//               //     <View style={styles.separator}/>
//               //   )
//               // }}
//               renderItem={({item}) => {
//                 return (
//                   <View style={styles.card}>
//                     <View>
//                       <Image style={styles.cardImage} source={{uri: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}}/>
//                     </View>
//                     <View style={styles.cardHeader}>
//                       <Text style={styles.title}>{item.title}</Text>
//                       <Avatar source={{uri: detectUser(item.userId)}} size='small' style={styles.cardAvatar}/>
//                     </View>
//                     <Text style={styles.id}>{item.id}</Text>
//                     <View style={styles.cardContent}>
//                       <Text style={styles.description}>{item.body}</Text>
//                       {/* <View style={styles.timeContainer}>
//                         <Text style={styles.time}>posted by </Text>
//                         <Image style={styles.iconData} source={{uri: 'https://img.icons8.com/color/96/3498db/user.png'}}/>
//                         <Text style={styles.time}>{item.userId}</Text>
//                       </View> */}
//                         <View style={styles.cardFooter}>
//                         <View style={styles.socialBarContainer}>
//                           <View style={styles.socialBarSection}>
//                             <TouchableOpacity style={styles.socialBarButton} onPress = {() => navigation.navigate('Comments', {post_ID: item.id})}>
//                               <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios-glyphs/75/2ecc71/comments.png'}}/>
//                             </TouchableOpacity>
//                           </View>
//                         </View>
//                       </View>
//                     </View>
//                   </View>
//                 )
//               }}/>
//           </View>
//           )}
//         </View>
//       );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     padding:8,
//   },
//   list: {
//     paddingHorizontal: 5,
//     backgroundColor:"#E6E6E6",
//   },
//   separator: {
//     borderWidth: 0.25,
//   },
//   /******** card **************/
//   card:{
//     shadowColor: '#00000021',
//     shadowOffset: {
//       width: 2
//     },
//     shadowOpacity: 0.5,
//     shadowRadius: 4,
//     marginVertical: 8,
//     backgroundColor:"white"
//   },
//   cardHeader: {
//     paddingVertical: 17,
//     paddingHorizontal: 16,
//     borderTopLeftRadius: 1,
//     borderTopRightRadius: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   cardContent: {
//     paddingVertical: 12.5,
//     paddingHorizontal: 16,

//     //overlay efect
//     flex: 1,
//     height: 200,
//     width: null,
//     position: 'absolute',
//     zIndex: 100,
//     left: 0,
//     right: 0,
//     backgroundColor: 'transparent'
//   },
//   cardAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     overflow:'hidden'
//   },
//   cardFooter:{
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingTop: 12.5,
//     paddingBottom: 25,
//     borderBottomLeftRadius: 1,
//     borderBottomRightRadius: 1,
//   },
//   cardImage:{
//     flex: 1,
//     height: 150,
//     width: null,
//   },
//   /******** card components **************/
//   title:{
//     fontSize:18,
//     fontWeight:'bold',
//     flex:1,
//     flexDirection:'row'
//   }, 
//   description:{
//     fontSize:12,
//     color: "#ffffff",
//     marginTop:5,
//     marginBottom:5,
//   },
//   icon: {
//     width:25,
//     height:25,
//   },
//   iconData:{
//     width:15,
//     height:15,
//     marginTop:5,
//     marginRight:5
//   },
//   timeContainer:{
//     flexDirection:'row'
//   },
//   id:{
//     paddingHorizontal: 8,
//     paddingVertical: 8,
//     alignSelf:'flex-end',
//   },
//   /******** social bar ******************/
//   socialBarContainer: {
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     flexDirection: 'row',
//     flex: 1
//   },
//   socialBarSection: {
//     justifyContent: 'flex-start',
//     flexDirection: 'row',
//     flex: 1,
//   },
//   socialBarlabel: {
//     marginLeft: 8,
//     alignSelf: 'flex-start',
//     justifyContent: 'center',
//     color: "#ffffff",
//   },
//   socialBarButton:{
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// });

// function detectUser(user){

//   switch(user){
//     case 1: return 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'; break;
//     case 2: return 'https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg'; break;
//     case 3: return 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'; break;
//     case 4: return 'data:image/jpeg;base64,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'; break;
//     case 5: return 'https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg'; break;
//     case 6: return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU'; break;
//     case 7: return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbCHBytowb0SiotsKsEzRFiJ37uH8GqkA-A&usqp=CAU'; break;
//     case 8: return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRD6CxEI8JXAf8SW1Usip9Nk5pzT9TzNDYg&usqp=CAU'; break;
//     case 9: return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gzNFmRFuxntdr0Myw9rEPbgV2PHZwPBTxg&usqp=CAU'; break;
//     case 10: return 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'; break;
//   }

// }

// function DetailsScreen({ route, navigation }) {
//   const { post_ID } = route.params;

//   const [isLoading, setLoading] = useState(true);
//   const [query, setQuery] = useState('');
//   const [data, setData] = useState();
//   console.log(data);
    
//     useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/posts/{post_id}/comments'.replace('{post_id}', JSON.stringify({post_ID}.post_ID)))
//         .then((response) => response.json())
//         .then((json) => setData(json))
//         .catch((error) => console.error(error))
//         .finally(() => setLoading(false));
          
//     }, []);

//     const handleSearch = text => {
//       const formattedQuery = text.toLowerCase();
//       const filteredData = filter(data, user => {
//         return contains(user, formattedQuery);
//       });
//       setData(filteredData);
//       setQuery(text);
//     };
    
//     const contains = ({ name, email, body, id, postId }, query) => {
    
//       if (name.includes(query) || body.includes(query) || email.includes(query)) {
//         return true;
//       }
    
//       return false;
//     };

//   return (
//     <View style={{ flex: 1}}>
//           {isLoading ? <Text>Loading...</Text> : 
//           (<View style={styles.container}>
//             <TextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           clearButtonMode="always"
//           value={query}
//           onChangeText={queryText => handleSearch(queryText)}
//           placeholder="Search"
//           style={{ backgroundColor: '#fff', paddingHorizontal: 20 , paddingVertical:5}}
//         />
//     <FlatList
//       style={styles.root}
//       data={data}
//       ItemSeparatorComponent={() => {
//         return (
//           <View style={styles.separator}/>
//         )
//       }}
//       keyExtractor={({ id }, index) => id}
//       renderItem={({item}) => {
//         return(
//             <View style={stylesSecond.container}>
//               <View style={stylesSecond.content}>
//                 <View style={stylesSecond.contentHeader}>
//                   <Image style={stylesSecond.image} source={{uri: detectUser(item.id)}}/>
//                   <View style={stylesSecond.contentText}>
//                     <Text  style={stylesSecond.name}>{item.name}</Text>
//                     <Text style={stylesSecond.time}>{item.email}</Text>
//                   </View>
//                 </View>
//                 <Text rkType='primary3 mediumLine'>{item.body}</Text>
//               </View>
//             </View>
//         );
//       }}/>
//       </View>
//           )}
//       </View>
//   );
// }

// const stylesSecond = StyleSheet.create({
//   root: {
//     backgroundColor: "#ffffff",
//     marginTop:10,
//   },
//   container: {
//     paddingVertical: 12,
//     flexDirection: 'row',
//     alignItems: 'flex-start'
//   },
//   content: {
//     marginLeft: 16,
//     flex: 1,
//   },
//   contentHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 6,
//   },
//   contentText:{
//     flex: 2,
//     flexDirection: 'column',
//     marginLeft:20
//   },
//   separator: {
//     height: 1,
//     backgroundColor: "#CCCCCC"
//   },
//   image:{
//     width:45,
//     height:45,
//     borderRadius:20,
//   },
//   time:{
//     fontSize:11,
//     color:"#808080",
//   },
//   name:{
//     fontSize:16,
//     fontWeight:"bold",
//   },
// }); 

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Posts" component={HomeScreen} options={{
//             title: 'Posts',
            
//             // Center the header title on Android
//             headerTitleAlign: 'center',
//           }}/>
//         <Stack.Screen name="Comments" component={DetailsScreen}
//         options={{
//           title: 'Comments',
          
//           // Center the header title on Android
//           headerTitleAlign: 'center',
//         }}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


//--------------------------------------------------------------------------------------------------------------
// Separated screen

import React from 'react';
import firstScreen from './src/firstScreen';
import secondScreen from './src/secondScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="first">
        <Stack.Screen name="first" component={firstScreen}/>
        <Stack.Screen name="second" component={secondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
