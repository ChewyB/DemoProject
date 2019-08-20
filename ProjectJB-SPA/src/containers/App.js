import React, { Component } from "react";
import "./App.css";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import OwnerList from "./Owner/OwnerList/OwnerList";
import NotFound from "../components/ErrorPages/NotFound/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  state = {
    id: 0,
    name: 'hello'
  };

  componentDidMount() {
    const url = "http://localhost:5000/api/values";
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ 
          id: data[0].id,
          name: data[0].name
        });
         console.log(this.state.apiData);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout name={this.state.name} id={this.state.id}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/owner-list" component={OwnerList} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
