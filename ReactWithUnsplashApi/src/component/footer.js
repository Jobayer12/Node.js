import React from 'react';
import '../App.css'
class Footer extends React.Component{


    render()
    {

        return(
            
            <footer>
                <div className="container">

                    <div className="row">

                        <div className="col text-center">

                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>+8801986032312</p>
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-6 col-md-6 col-sm-12 m-auto linksocial">
                                        <a href="/">Facebook</a>
                                        <a href="/">Twitter</a>
                                        <a href="/">Youtube</a>
                                        <a href="/">Instragram</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </footer>

        );

    }

}

export default Footer;