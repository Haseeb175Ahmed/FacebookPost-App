import React, { Component } from 'react';
import FbImageLibrary from 'react-fb-image-grid'
import ButtonAppBar from './AppBar'

import '../profile.css'
import moment from 'moment'






class Post extends Component {

  constructor() {
    super();

    this.state = {
      

      

    }
    
  }


  FaceBook()
    {
      console.log(this.props.object);
      
        return (
          <div className="container">
              	<div className="col-md-5">
                   <div className="panel panel-default">
                     <div className="panel-body">
                     <section className="post-heading">
                        <div className="row">
                            <div className="col-md-11">
                            <br/>
                              <div className="media">
                               <div className="media-left">
                               <a href="#">
                                  <img className="media-object photo-profile" src={this.props.object.avatar} width="70" height="60" alt="...">
                                  </img>
                                </a>
                               </div>
                               <div className="media-body">
                                <a href="#" className="anchor-username"><h4 className="media-heading">{this.props.object.createdBy}</h4></a> 
                                <a href="#" className="anchor-time">{moment(moment(this.props.object.createdAt).format('YYYYMMDD'), "YYYYMMDD").fromNow()}</a>
                              </div>
                    </div>

                </div>
                <div className="col-md-1">
                             <a href="#"><i className="glyphicon glyphicon-chevron-down"></i></a>
                         </div>

          </div>
          </section>
          <section className="post-body">
                   <p>{this.props.object.description}</p>
               </section>
               <FbImageLibrary images={this.props.object.images}/>
               <br/>

               <section className="post-footer">
                  
                   <div className="post-footer-option container">
                        <ul className="list-unstyled">
                            <li><a href="#"><i className="glyphicon glyphicon-thumbs-up"></i> Like</a></li>
                            <li><a href="#"><i className="glyphicon glyphicon-comment"></i> Comment</a></li>
                            <li><a href="#"><i className="glyphicon glyphicon-share-alt"></i> Share</a></li>
                        </ul>
                   </div>
                   <div className="post-footer-comment-wrapper">
                       <div className="comment-form">
                           
                       </div>
                       <div className="comment">
                            <div className="media">
                             
                             
                            </div>
                       </div>
                   </div>
               </section>
                     </div>
                    </div>

                </div>

          </div>



        )
    }

  render() {

    //const{images} = this.state;
//console.log(images);



    return (

      <div className="App">
        <header className="App-header">
        <ButtonAppBar/>
        </header>

        <div >
          <br/>
       <div className = "Main">
       {this.FaceBook()}
       </div>


        {/* <ImageAvatars/> */}
        {/* <FbImageLibrary images={images}/> */}

       
       
        </div>
        </div>

        
    );
  }
}

export default Post;
