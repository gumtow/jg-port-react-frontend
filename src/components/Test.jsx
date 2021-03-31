import React, { Component } from 'react';
import axios from 'axios';

export class SlugTest extends Component {
    state = {
        mySLug: [],
        isLoaded: false
    }
  componentDidMount () {
    axios.get('http://134.209.114.110/wp-json/wp/v2/mySlug')
        .then(res => this.setState({
            mySLug: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err))
    }
    render() {
       console.log(this.state);
       const {mySLug, isLoaded} = this.state;
        return (
            <div>
                {mySLug.map(slug =>
                    <div>{ slug.content.rendered }</div>
                    )}
               
            </div>
        )
    }
 }
 export default SlugTest