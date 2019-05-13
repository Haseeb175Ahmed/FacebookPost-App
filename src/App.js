import React, { Component } from 'react';
import FbImageLibrary from 'react-fb-image-grid'
import Post from './Components/FBpost.js'

import './App.css'




class App extends Component {

  constructor() {
    super();

    this.state = {
      data : {
        createdBy: 'HAseeb',
        avatar: 'https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.0-1/p160x160/50488608_2475393532746725_335947780637851648_n.jpg?_nc_cat=110&_nc_ht=scontent.fkhi10-1.fna&oh=411675435c3aa09fd572fd0e3806367f&oe=5D29ED5F',
        description: "My New Latest Car Collection It Amazing Audi Collection",
        images:  ["https://media.publika.md/en/image/201608/w720/c0bcfb9fd43356ce51f3b16b0b5f5bb4_85322500.jpg" ,"http://starkovtattoo.spb.ru/images/000/DSC100032423.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsAa3o5OAh-MCXhi1Jv3WRHEC0_aAf5FB_ibDT79l0m2QiUeN","https://img.etimg.com/thumb/msid-67366684,width-643,imgsize-681072,resizemode-4/now-audi-cars-will-come-with-powerful-samsung-chip.jpg","http://starkovtattoo.spb.ru/images/000/DSC100032423.jpg","http://starkovtattoo.spb.ru/images/000/DSC100032423.jpg"] ,
        createdAt: Date.now(),
        likes: ['HAseeb','Ali','Usman','Ahmed','Raraz']
}
      }
      
     ;
      

    }
  




  render() {

    const{data} = this.state;
    



    return (

      <div className="App">
        <header className="App-header">

        </header>

       
        <Post object = {data}/>
        </div>

        
    );
  }
}

export default App;
