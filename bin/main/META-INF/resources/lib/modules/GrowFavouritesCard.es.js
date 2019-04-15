import React from 'react';

const GrowFavouritesCard = (props) => {
    return (
        <div className="col-lg-4">
            <div className="card card-horizontal card-type-directory">
                <div className="card-body">
                    <div className="card-row">
                        <div className="flex-col">
                            <span className="sticker">
                                <span className="inline-item">
                                    <svg className="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                                        <use xlinkHref={props.spritemap+"/clay/icons.svg#folder"} />
                                    </svg>
                                </span>
                            </span>
                        </div>
                        <div className="autofit-col autofit-col-expand autofit-col-gutters">
                            <div className="card-title text-truncate" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GrowFavouritesCard;