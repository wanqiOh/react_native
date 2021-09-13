import React, { useEffect, useState } from 'react';  
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import filter from 'lodash.filter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState();
      console.log(data);
    
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    
      return (
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <Text>Loading...</Text> : 
          (<View style={styles.container}>
            <FlatList style={styles.list}
              data={data}
              keyExtractor={({ id }, index) => id}
              ItemSeparatorComponent={() => {
                return (
                  <View style={styles.separator}/>
                )
              }}
              renderItem={({item}) => {
                return (
                  <View style={styles.card}>
                    <Text style={styles.title}>  {item.id}</Text>
                    <View style={styles.cardHeader}>
                      <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.body}</Text>
                        <View style={styles.timeContainer}>
                          <Image style={styles.iconData} source={{uri: 'https://img.icons8.com/color/96/3498db/calendar.png'}}/>
                          <Text style={styles.time}>posted by user {item.userId}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.cardFooter}>
                      <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton} onPress = {() => navigation.navigate('Details', {post_ID: item.id})}>
                            <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios-glyphs/75/2ecc71/comments.png'}}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                )
              }}/>
          </View>
          )}
        </View>
      );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor:"#EEEEEE",
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  icon: {
    width:25,
    height:25,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

function DetailsScreen({ route, navigation }) {
  const { post_ID } = route.params;

  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [data, setData] = useState();
  console.log(data);
    
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/{post_id}/comments'.replace('{post_id}', JSON.stringify({post_ID}.post_ID)))
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
          
    }, []);

    const handleSearch = text => {
      const formattedQuery = text.toLowerCase();
      const filteredData = filter(data, user => {
        return contains(user, formattedQuery);
      });
      setData(filteredData);
      setQuery(text);
    };
    
    const contains = ({ name, email, body, id, postId }, query) => {
    
      if (name.includes(query) || body.includes(query) || email.includes(query)) {
        return true;
      }
    
      return false;
    };

  return (
    <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <Text>Loading...</Text> : 
          (<View style={styles.container}>
            <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
    <FlatList
      style={styles.root}
      data={data}
      ItemSeparatorComponent={() => {
        return (
          <View style={styles.separator}/>
        )
      }}
      keyExtractor={({ id }, index) => id}
      renderItem={({item}) => {
        return(
          <View style={stylesSecond.container}>
            <View style={stylesSecond.content}>
              <View style={stylesSecond.contentHeader}>
                <Text  style={stylesSecond.name}>Post {item.postId}.{item.id}   {item.name}</Text>
                <Text style={stylesSecond.time}>{item.email}</Text>
              </View>
              <Text rkType='primary3 mediumLine'>{item.body}</Text>
            </View>
          </View>
        );
      }}/>
      </View>
          )}
      </View>
  );
}

const stylesSecond = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    marginTop:10,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:20
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
}); 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
