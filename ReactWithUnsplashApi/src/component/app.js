import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './header';
import LatestPhotos from './latestp';



class App extends React.Component{

    render()
    {

        return (
            <Router>
            <div className="App container">

                <Header/>

                <div className="content-block">

                    <div className="container">
                        <div className="row">

                            <div className="col">
                               

                                <div className="row">

                                    <Route 
                                        exact path="/" render={ props =>(

                                            <LatestPhotos/>
                                            
                                        )}
                                    />

                                   

                                </div>

                               


                            </div>
                            
                        </div>

                    </div>


                </div>

               

            </div>
            </Router>
        );
    }
}

export default App;