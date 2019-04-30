import React from "react";

const tagsToDisplay = 3;
let remainingTags = [];

class GrowCardExtendedTagList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="autofit-section">
        {this.props.articleTags.slice(0, tagsToDisplay).map((tag, index) => {
          return (
            <span key={index} className="label label-lg text-uppercase">
              <span className="label-info label-item label-item-expand">
                {tag}
              </span>
            </span>
          );
        })}
        {this.props.articleTags.slice(tagsToDisplay).forEach(function(item) {
          remainingTags.push(" " + item);
        })}
        <span
          className="label label-lg text-uppercase label-remaining-tags"
          data-toggle="tooltip"
          data-placement="right"
          title={remainingTags}
        >
          <span className="label-info label-item label-item-expand">
            + {this.props.articleTags.length - tagsToDisplay}
          </span>
        </span>
      </div>
    );
  }
}

export default GrowCardExtendedTagList;
