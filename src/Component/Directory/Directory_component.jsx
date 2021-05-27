import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectDirectorySection } from '../../redux/directory/directory_selector';
import MenuItem from '../Menu-item/menu-item_component';
import "./Directory_component_styles.scss";

const Directory = ({section}) => (
      <div className="directory-menu">
        {section.map(({id, ...otherprops}) => (
          <MenuItem key={id} {...otherprops}/>
        ))}
      </div>
      )

const mapStateToProps = createStructuredSelector({
  section : SelectDirectorySection
})

export default connect(mapStateToProps)(Directory);