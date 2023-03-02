import React from 'react';
import IMGUSER from '../Imgs/ImgUser2.jpg'
import './Perfil.css'

class Perfil extends React.Component{
  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
      funcion: props.funcion,
      users: [],
      messages: [],
      loggedIn: false,
      name: props.login[0].name + " " + props.login[0].lastname,
      messageId: 0,
      userId: 0,
      username: props.login[0].email,
    };
    this.login = this.handleLogin.bind(this);
  }
  //login(name) {
  handleLogin(name) {
      this.setState({ ...this.state, loggedIn: true });
  }
  logout() {
    this.setState({ loggedIn: false, name: '' });
  }
  /* NB: Moved to constructor, so that self reference can be used instead of this
  sendMessage(name, message) {
    this.props.sock.send(JSON.stringify({name: name, message: message}));
  } */
  getMessageId() {
    var id = this.state.messageId - 1;
    this.setState({ ...this.state, messageId: id });
    return id;
  }
  addMessage(payload) {
    var message = payload !== undefined ? (payload.body !== undefined ? JSON.parse(payload.body) : {}) : {};
    message.id = message.id || this.getMessageId();
    this.setState({ ...this.state, messages: this.state.messages.concat(message) });
    this.addUser(message.sender);
  }
  getUserId() {
    var id = this.state.userId - 1;
    this.setState({userId: id});
    return id;
  }
  addUser(name) {
    if(name !== undefined && !this.state.users.some(function(user) { return user.name === name; }))
      this.setState({ users: this.state.users.concat({ id: this.getUserId(), name: name }) });
    // else console.log('User already exists: ' + name);
  }
  sendMessage = function(name, message) {
    this.stompClient.send("/app/chat.register",
    {},
    JSON.stringify({sender: name, content: message, type: "CHAT"})
)
  };
componentDidMount() {
    var self = this;
  }
  render() {
    return (
    <div className='container-fluid h-100'>
      
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-6 animate__animated animate__zoomIn ">
        <div className="card text-white" id="content">
          <div className="card-body text-center">
            <img src={IMGUSER} alt="" className='img-fluid ' id='imgUser'/>
            <div className="mb-md-5 mt-md-4 ">
              
              <h2 className="pb-5 text-uppercase">{this.state.name}</h2>

              <div className='text-start mt-5'>
                <p className='fs-4 mb-3'>Email: <span className='text-secondary'>{this.state.username}</span> </p>
                <p className='fs-4'>Grupo: <span className='text-secondary'>LMAD</span> </p>
              </div>
              

             
            </div>
           

          </div>
        </div>
      </div>
    </div>
      
    </div>
        )
  }
}

export default Perfil;