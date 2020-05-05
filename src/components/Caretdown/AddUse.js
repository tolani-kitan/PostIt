import React, { Component } from 'react';
import _ from 'lodash';
import faker from 'faker';
import {Search } from 'semantic-ui-react';


const data = _.times(5, () => ({
  title: faker.name.firstName(),
  image: faker.internet.avatar()
}))

class AddUse extends Component {
  state = {
    isLoading: false,
    results: [],
    value: ''
  }

  handleResultSelect = (e, { result }) => this.setState ({
    value: result.title
  })

  handleSearchChange = (e, { value }) => { 
    this.setState ({
    isLoading: true, 
    value
  })


  setTimeout(() => {
    if(this.state.value.length < 1) return this.setState(this.state)

    const re = new RegExp(_.escapeRegExp(this.state.value), "i")
    const isMatch = (result) => re.test(result.title)

    this.setState({
      isLoading: false,
      results: _.filter(data, isMatch),
    })
  }, 300);
  }

  render() {
   const { isLoading, value, results } = this.state;
    return (
          <Search 
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          />



      // <div  style={{border:"1px solid none", height:"20rem", marginTop:"10px"}} className='ui fluid category search'> 
      //   <div className='ui icon input' >
      //     <input className='prompt' type='text' placeholder='' /> <i className='search icon'></i>
      //   </div>
      //  <div className="results"></div>
      // </div>
    );
  }
}

export default AddUse;
