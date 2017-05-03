import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Custom from './custom-tb';
class App extends Component {
  render() {
    return (
     <Editor toolbarCustomButtons={[Custom]}/>
    );
  }
}

export default App;
