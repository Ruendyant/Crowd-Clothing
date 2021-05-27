import "./menu-item_component_styles.scss";
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
  return (
  <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
    <div className="Backgroundimage" style={{
      backgroundImage: `url(${imageUrl})`
    }} />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Others</span>
    </div>
  </div>
  )
}

export default withRouter(MenuItem);