import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

const HomeScreen = () => {

 const [lastBook, setLastBook] = useState({
  title: '',
  author: '',
  genre: '',
  pages: 0
 });
 const [totalPagesRead, setTotalPagesRead] = useState(0);
 const [numberOfBooks, setNumberOfBooks] = useState(0);

 const [titleInput, setTitleInput] = useState('');
 const [authorInput, setAuthorInput] = useState('');
 const [genreInput, setGenreInput] = useState('Fantasy'); 
 const [pagesInput, setPagesInput] = useState('');

  const [sideNavOpen, setSideNavOpen] = useState(false);
  const toggleSideNav = () => {
   setSideNavOpen(!sideNavOpen);
  };

 const [isButtonClicked, setIsButtonClicked] = useState(false);

 return (
  <View style={styles.container}>

    <TouchableOpacity onPress={toggleSideNav}>
      <Image source={sideNavOpen ? require('./x.png') : require('./NAV.png')} style={styles.toggleButton} />
    </TouchableOpacity>

    <View style={[styles.sideNav, { display: sideNavOpen ? 'flex' : 'none' }]}>
    <View style={styles.sideNav}>

      <Image source={require('./navilogo.jpg')} style={styles.sideNavImage}/>

      <Text style={styles.sideNavTitle}>Books4U</Text>

      <TouchableOpacity style={styles.sideNavItem}>
        <Text style={styles.sideNavText}>Home</Text>
      </TouchableOpacity>
       
      <TouchableOpacity style={styles.sideNavItem} >
        <Text style={styles.sideNavText}>New Book</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sideNavItem} >
        <Text style={styles.sideNavText}>Book History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sideNavItem} >
        <Text style={styles.sideNavText}>Genre Tracker</Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.content}>
    <ImageBackground source={require('./openbook.jpg')} style={styles.backgroundImage} imageStyle={styles.backgroundImageStyle}>
      <View style={styles.centeredContent}>
        <Text style={styles.title}>Books4U</Text>
        <Text style={styles.subtitle}>Total pages read</Text>
      </View>
    </ImageBackground>
      <View style={styles.contentContainer}>
        <View style={styles.ImageAndTitleContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>The Title</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image source={require('./placeholder.jpg')}  style={styles.image}/>
          </View>
        </View>
        <View style={styles.AuthorContainer}>
          <TouchableOpacity style={styles.AuthorButton} onPress={() => setIsButtonClicked(!isButtonClicked)}>
            <Text style={styles.AuthorButtonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.AuthorText}>Author</Text>
        </View>
        {isButtonClicked && (
          <TouchableOpacity style={styles.AuthorButton}>
            <Text style={styles.AuthorButtonText}>-</Text>
          </TouchableOpacity>
        )}
        <View style={styles.AuthorContainer}>
          <TouchableOpacity style={styles.AuthorButton}>
            <Text style={styles.AuthorButtonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.AuthorText}>Genre</Text>
        </View>
        {isButtonClicked && (
          <TouchableOpacity style={styles.AuthorButton}>
            <Text style={styles.AuthorButtonText}>-</Text>
          </TouchableOpacity>
        )}
        <View style={styles.PagesContainer}>
          <TouchableOpacity style={styles.AuthorButton}>
            <Text style={styles.AuthorButtonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.AuthorText}>Number of pages</Text>
        </View>
        {isButtonClicked && (
          <TouchableOpacity style={styles.AuthorButton}>
            <Text style={styles.AuthorButtonText}>-</Text>
          </TouchableOpacity>
        )}
      </View>  
    </View>
  </View>
 );
};

const styles = StyleSheet.create({
   container:{
      flex:1,
      flexDirection: 'row'
    },
    content:{
      flex:3,
    },
    backgroundImage:{
      flex:0.5,
    },
    backgroundImageStyle:{
      resizeMode:'cover',
    },
    centeredContent:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'rgba(0,0,0,0.5)',
    },
    title:{
      fontSize:38,
      fontWeight:'bold',
      color:'#fff',
    },
    subtitle:{
      fontSize:32,
      color:'#fff',
    },
    contentContainer:{
      flex:0.5,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
    },
    imageContainer:{
      alignItems:'center',
      marginRight:80,
    },
    image:{
      width:150,
      height:150,
      resizeMode:'cover',
    },
    PagesContainer:{
      flexDirection:'row',
      marginTop:30,
      marginRight:250,
    },
    AuthorContainer:{
      flexDirection:'row',
      marginTop:30,
      marginRight:335,
    },
    AuthorText:{
      fontSize:18,
      color:'black',
    },
    AuthorButton:{
      backgroundColor:'black',
      padding:5,
      borderRadius:5,
      marginLeft:10,
    },
    AuthorButtonText:{
      fontSize:18,
      color:'#fff',
    },
    buttonContainer:{
      marginTop:20,
      backgroundColor:'grey',
      padding:10,
    },
    buttonText:{
      fontSize:18,
      color:'black',
    },
    ImageAndTitleContainer:{
      flexDirection:'row',
      alignItems:'center',
    },
    titleContainer:{
      flex:1,
      marginLeft:90,
      color:'black',
    },
    imageTitle:{
      fontSize:30,
      color:'black',
    },
    menuIcon:{
      width: 30,
      height: 30,
      resizeMode: 'contain',
      padding: 10,
    },
    sideNav:{
      flex: 1,
      backgroundColor: '#F0F0F0', 
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop: 60, 
      paddingHorizontal: 10
    },
    sideNavItem:{
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#CCCCCC',
    },
    sideNavText:{
      fontSize: 18,
      color: 'black'
    },
    sideNavImage:{
      width: '103%', 
      height: 150,
      resizeMode: 'cover',
      marginBottom: 30, 
    },
    sideNavTitle:{
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    toggleButton:{
      width: 30, 
      height: 30, 
      resizeMode: 'contain',
      marginLeft: 10,
    },
});

export default HomeScreen;