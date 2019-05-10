import React from 'react';
import GrowIcon from "./GrowIcon.es";
import GrowCardCategoryFooter from "./GrowCardCategoryFooter.es";

class GrowFavouritesCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-lg-6">
        <div
            className={"card card-" + this.props.articleCategory.toLowerCase()}
          >
          <div className="card-body">
            <div className="autofit-row autofit-padded mb-2">
              <div className="autofit-col">
                <div className="autofit-section">
                  <img className="img-fluid sticker sticker-primary sticker-xl rounded-circle"
                        src={this.props.articleAuthorAvatar} />
                </div>
              </div>
            
              <div className="autofit-col autofit-col-expand">
                <div className="autofit-section text-secondary">
                  <strong>{this.props.articleAuthor}</strong>
                  <br />
                  <span>{this.props.articleCreateDate}</span>
                </div>
              </div>
              <div className="autofit-section">
                <button className="btn btn-outline-secondary btn-outline-borderless" type="button">{
                      <GrowIcon
                        spritemap={this.props.spritemap}
                        classes="lexicon-icon inline-item"
                        iconName="star"
                      />
                    }
                </button>
                <button className="btn btn-outline-secondary btn-outline-borderless" type="button">
                    <GrowIcon
                        spritemap={this.props.spritemap}
                        classes="lexicon-icon inline-item"
                        iconName="user"
                      />
                </button>
              </div>
            </div>

            <div className="autofit-row autofit-padded">
              <div className="autofit-col autofit-col-expand">
              <div className="autofit-section">
                  <h2>{this.props.articleTitle}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}



// const GrowFavouritesCard = (props) => {
//     return (
//         <div className="col-lg-4">
//             <div className="card card-horizontal card-type-directory">
//                 <div className="card-body">
//                     <div className="card-row">
//                         <div className="flex-col">
//                             <span className="sticker">
//                                 <span className="inline-item">
//                                     <svg className="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
//                                         <use xlinkHref={props.spritemap+"/clay/icons.svg#folder"} />
//                                     </svg>
//                                 </span>
//                             </span>
//                         </div>
//                         <div className="autofit-col autofit-col-expand autofit-col-gutters">
//                             <div className="card-title text-truncate">{this.props.articleAuthor}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default GrowFavouritesCard;