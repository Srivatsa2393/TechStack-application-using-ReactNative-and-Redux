import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection }  from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component{
renderDescription() {
  // const { library, selectedLibraryId } = this.props;
  // if(library.id === selectedLibraryId){
  //   return(
  //     <Text>
  //       {library.description}
  //     </Text>

    const { library, expanded } = this.props;
    if(expanded){
      <Text>{library.description}</Text>
    }
    );
  }
}

  render() {
    //console.log(this.props);
    const { id, title } = this.props.library;
    return(
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
        >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>>
    );
  }
}


const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
  //return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);
