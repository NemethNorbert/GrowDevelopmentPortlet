import React from "react";

const tagsToDisplay = 3;

class GrowCardExtendedTagList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="autofit-section">
        {this.props.articleTags.slice(0, tagsToDisplay).map((tag, index) => {
          return (
            <span key={index} className="label label-lg">
              <span className="label-info label-item label-item-expand">
                {tag}
              </span>
            </span>
          );
        })}
        <span className="label label-lg">
          <span className="label-info label-item label-item-expand">+ {(this.props.articleTags.length)- tagsToDisplay}</span>
          </span>
      </div>
    );
  }
}

export default GrowCardExtendedTagList;
