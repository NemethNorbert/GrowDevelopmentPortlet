import React from "react";

class GrowCardSimpleTagList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="autofit-section">
        {this.props.articleTags.map((tag, index) => {
          return (
            <span key={index} className="label label-lg">
              <span className="label-info label-item label-item-expand">
                {tag}
              </span>
            </span>
          );
        })}
      </div>
    );
  }
}

export default GrowCardSimpleTagList;
