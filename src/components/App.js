import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state= {images:[]};

     onSearchSubmit=async(term)=>{
        //console.log(term)
        const response = await unsplash.get('/search/photos',{
            params:{query:term},
            // headers:{
            //     Authorization:'Client-ID 34e39e5c2f447ce52009a515846ca2b6ccc35552bb63de59cf4a6d06728f3f7e'
            // }
        });
        this.setState({images:response.data.results});
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;
