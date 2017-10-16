import React, {Component} from 'react' ;

class Header extends Component {
  render(){
    return(
      <header className="masthead bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Blog Template</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header ;
