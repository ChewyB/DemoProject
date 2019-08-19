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
    apiData: null
  };

  componentWillMount() {
    const url = "http://localhost:5000/api/values";
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ apiData: data });
        //console.log(this.state.apiData);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          {/* <p>{this.state.apiData.id}</p>
          <p>{this.state.apiData.name}</p> */}
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
