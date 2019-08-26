//Dependencies
import React, {Component} from "react";
import PropTypes from 'prop-types'

//Asset
import '../../css/App.css'

class Content extends Component{
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render(){
    const { body} = this.props;

    return (
      <div className="Content ">
        <div className="triangle col-xs-12"></div>
        <div className="padding_top_50" >
          {body}
        </div>
      </div>
    );
  }
}

export default Content;