import React from "react";
import ClayLabel from '@clayui/label';

const GrowTagList = (props) => {
    if (props.articleTags) {
      return (
        <div className="autofit-section grow-card-label">
          {props.articleTags
            .slice(0, props.tagCount)
            .map((tag, index) => {
              return (
                <span
                  key={index}
                >
                  {tag.length <= 10 && (
                    <ClayLabel displayType="info" spritemap={props.spritemap}>{tag}</ClayLabel>
                  )}
                  {tag.length > 10 && (
                    <ClayLabel 
                      displayType="info" 
                      data-toggle="tooltip"
                      data-placement="right"
                      title={tag}
                      spritemap={props.spritemap}>
                        {tag.substring(0, 10) + "..."}
                      </ClayLabel>
                  )}
                </span>
              );
            })}
          {props.articleTags.length > props.tagCount && (
            <span
              data-toggle="tooltip"
              data-placement="right"
              title={props.articleTags.slice(
                props.tagCount,
                props.articleTags.length
              )}
              spritemap={props.spritemap}>
                + {props.articleTags.length - props.tagCount}
            </span>
          )
        }
      </div>
    );
  } else {
    return <div className="autofit-section grow-card-tag"></div>;
  }
}

GrowTagList.defaultProps = {
  tagCount: 2
};

export default GrowTagList;
