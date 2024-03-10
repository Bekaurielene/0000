import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  handleClick = () => {
    this.showAlert('Hello, World!');
  };

  showAlert(message) {
    window.alert(message);
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.handleClick}>Click me!</button>
        <Footer />
      </div>
    );
  }
}

export default App;