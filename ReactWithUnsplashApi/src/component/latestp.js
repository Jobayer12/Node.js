import React from 'react';
import '../App.css';
import Axios from 'axios';
import { Button, Form, FormControl } from 'react-bootstrap';


class LatestP extends React.Component {


    state = {
        photos: [],
        pages: 1,
        search: 1,
        loading: true,
        searching_query: '',
        SearchIng: false,
        
    }

    componentDidMount() {

        Axios.get('https://api.unsplash.com/photos/?client_id=1393fbdf968cf2c6d9570b8af6a2a6f6c8895f9f28394034ee5aa25fffb9bbc2&per_page=30&page=' + this.state.pages).then(
            res => this.setState({
                photos: res.data,
                pages: this.state.pages + 1,
                loading: false
            })
        )


    }

    loadNext = (e) => {


        Axios.get('https://api.unsplash.com/photos/?client_id=1393fbdf968cf2c6d9570b8af6a2a6f6c8895f9f28394034ee5aa25fffb9bbc2&per_page=30&page=' + this.state.pages).then(
            res => this.setState({
                photos: res.data,
                pages: this.state.pages + 1,
                loading: false
            })
        )
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }

    searchQuery = (e) => {
        this.setState({
            searching_query: e.target.value

        })
    }

    SearchTigger = (e) => {

        Axios.get('https://api.unsplash.com/search/photos/?client_id=1393fbdf968cf2c6d9570b8af6a2a6f6c8895f9f28394034ee5aa25fffb9bbc2&query=' + this.state.searching_query + '&per_page=30&page=' + this.state.search).then(
            res => this.setState({
                photos: res.data.results,
                search: this.state.search + 1,
                loading: false,
                SearchIng: true
            })
        )

        e.preventDefault();


    }


    loadNextSearchPage = (e) => {

        Axios.get('https://api.unsplash.com/search/photos/?client_id=1393fbdf968cf2c6d9570b8af6a2a6f6c8895f9f28394034ee5aa25fffb9bbc2&query=' + this.state.searching_query + '&per_page=30&page=' + this.state.search).then(
            res => this.setState({
                photos: res.data.results,
                search: this.state.search + 1,
                loading: false,
                SearchIng: true
            })
        )


        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })


    }

    


    render() {

        
        var searchHeader = '';
        var searchMarkUp = '';
        if (this.state.SearchIng === true) {
            searchHeader = <h2>You searched {this.state.searching_query}</h2>
            searchMarkUp = <Button variant="primary m-auto" onClick={this.loadNextSearchPage}>Search Page {this.state.search}</Button>;

        }
        else {
            searchHeader = <h2>Latest Photos</h2>;
            searchMarkUp = <Button variant="primary m-auto"   onClick={this.loadNext}>Load Page {this.state.pages}</Button>;
        }

        if (this.state.loading === true) {
            return (
                <div className="row">
                    <div className="col">
                        Loading
                    </div>
                </div>
            );
        }


        
        return (



            <React.Fragment>
                <div className="container top-heading">
                    <div className="row">


                        <div className="col-lg-4 col-md-4 col-sm-12">
                            {searchHeader}
                        </div>
                        <div className="col-lg-8  col-md-8 col-sm-12">


                            <div className="d-flex justify-content-end">
                                <Form inline onSubmit={this.SearchTigger}>
                                    <FormControl type="text" value={this.state.searching_query} onChange={this.searchQuery} placeholder="Search Category" />
                                    <Button variant="outline-success bg-dark text-light">Search</Button>
                                </Form>

                            </div>
                        </div>



                    </div>
                </div>

                <div>
                    <div className="row">
                        {

                            this.state.photos.map((photo) => (

                                <div key={photo.id} className="col-lg-4">

                                    <div className="single-photo-item">

                                    {/* href={'photo?id='+photo.id} */}
                                        <a href="/" className="d-block">

                                            <div className="photo_wrapper">
                                                <img  className="img-responsive"  src={photo.urls.small} alt="" />
                                            </div>


                                        </a>

                                    </div>

                                </div>

                            ))
                        }
                    </div>
                </div>

                {searchMarkUp}



            </React.Fragment>

        )




    }

}

export default LatestP;



