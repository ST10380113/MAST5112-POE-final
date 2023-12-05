import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, FlatList} from 'react-native';

const NewBook = () => {
  //a record of the last book and its details are saved in title, author, genre and pages
 const [lastBook, setLastBook] = useState({
    title: '',
    author: '',
    genre: '',
    pages: 0
 });

 const [totalPagesRead, setTotalPagesRead] = useState(0);
 const [numberOfBooks, setNumberOfBooks] = useState(0);

 //function that is called once the button is clicked only
 const saveBook = () => {
  //extracts input values
    const newTitle = titleInput;
    const newAuthor = authorInput;

    //inputs get converted to integers
    const newGenre = genreInput;
    const newPages = parseInt(pagesInput);

    const newBook = { title: newTitle, author: newAuthor, genre: newGenre, pages: newPages };

    //updates state variables
    setLastBook(newBook);
    setNumberOfBooks(numberOfBooks + 1);
    setTotalPagesRead(totalPagesRead + newPages);

    //input fields are cleared
    setTitleInput('');
    setAuthorInput('');
    setGenreInput('Fantasy');
    setPagesInput('');

    const genres = ['Fantasy', 'Science Fiction', 'Mystery', 'Romance', 'Thriller', 'Horror', 'Non-fiction', 'Biography', 'Other']

 };

 const [titleInput, setTitleInput] = useState('');
 const [authorInput, setAuthorInput] = useState('');
 const [genreInput, setGenreInput] = useState('Fantasy'); 
 const [pagesInput, setPagesInput] = useState('');

 const [sideNavOpen, setSideNavOpen] = useState(false);
   const toggleSideNav = () => {
   setSideNavOpen(!sideNavOpen);
  };
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
      
      <View style={styles.inputScreen}>
        <Text>Enter Book Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={titleInput}
          onChangeText={setTitleInput}
        />
        <TextInput
          style={styles.input}
          placeholder="Author"
          value={authorInput}
          onChangeText={setAuthorInput}
        />       
        <TextInput
          style={styles.input}
          placeholder="Number of Pages"
          value={pagesInput}
          onChangeText={setPagesInput}
          keyboardType="numeric"
        />
        <Button title="Save" onPress={saveBook} />
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
 },
 homeScreen: {
    alignItems: 'center',
    marginBottom: 20,
 },
 inputScreen: {
    alignItems: 'center',
 },
 input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
 },
 toggleButton:{
   width: 30, 
   height: 30, 
   resizeMode: 'contain',
   marginLeft: 10,
 },
 sideNav:{
   flex: 1,
   backgroundColor: '#F0F0F0', 
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
   paddingTop: 60, 
   paddingHorizontal: 10
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
 sideNavItem:{
   paddingVertical: 15,
   borderBottomWidth: 1,
   borderBottomColor: '#CCCCCC',
 },
 sideNavText:{
   fontSize: 18,
   color: 'black'
 }
});

export default NewBook;