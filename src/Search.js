import React from 'react'
import axios from 'axios'


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          data: []
        }
    }

    componentDidMount() {

    }

    handleSubmit() {
        let words = this.refs.searchName.value
        const _this = this
        axios.get('https://api.github.com/search/repositories?q=' + words + '&sort=stars&order=desc')
        .then(function (response) {
          _this.setState({
            data: response.data.items
          })
        })
    }


    render() {
        return(
            <div>
                <input type="text" ref="searchName" />
                <button onClick={this.handleSubmit.bind(this)}>Search</button>
                {/* {this.state.data.map(item, index) => {
                    return (
                        <div>{item}</div>
                    )
                }} */}
            </div>
        )
    }
}

export default Search