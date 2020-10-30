import React, { Component } from 'react';
import FeatureItem from './FeatureItem';

class FeatureForm extends Component {

    getFeatureItemList = () => {
        return Object.keys(this.props.features).map((feature, idx) => {

            const hashFeature = feature + '-' + idx;
        
            return (
              <FeatureItem 
                key={hashFeature}
                hashFeature={hashFeature}
                name={feature}
                options={this.props.features[feature]}
                updateFeature={this.props.updateFeature}
                selected={this.props.selected}
              />
            );
        
          });
    }

    render( ) {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {this.getFeatureItemList()}
            </form> 
        )
    }
}

export default FeatureForm;