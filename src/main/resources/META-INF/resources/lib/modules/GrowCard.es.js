import React from 'react';

const GrowCard = (props) => {
    return(
        <div className="col-lg-6">
            <div className="card">
                <div className="card-body">

                <div className="autofit-row autofit-padded mb-2">
					<div className="autofit-col">
						<div className="autofit-section">
						<img alt="Author's thumbnail" className="img-fluid sticker sticker-primary sticker-xl rounded-circle" src={props.authorAvatar} />
						</div>
					</div>
                    <div className="autofit-col autofit-col-expand">
                        <div className="autofit-section">
                            <span>Author</span>
                            <br />
                            <span>Date</span>
                        </div>
                    </div>
                    <div className="autofit-col">
                        <div className="autofit-section">
                            <svg className="lexicon-icon lexicon-icon-star-o inline-item inline-item-before" focusable="false" role="presentation">
                                <use xlinkHref={props.spritemap+"/clay/icons.svg#star-o"} />
                            </svg>
                            <svg className="lexicon-icon lexicon-icon-thumbs-up" focusable="false" role="presentation">
                                <use xlinkHref={props.spritemap+"/clay/icons.svg#thumbs-up"} />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="autofit-row autofit-padded">
                    <div className="autofit-col autofit-col-expand">
                        <div className="autofit-section">
                            <h3>{props.articleTitle}</h3>
                        </div>
                    </div>
				</div>

                <div className="autofit-row autofit-padded">
                    <div className="autofit-col autofit-col-expand">
                        <div className="autofit-section">
                            <div className="text-secondary">{props.articleContent}</div>
                        </div>
                    </div>
				</div>

                <div className="autofit-row autofit-padded">
					<div className="autofit-col">
						<div className="autofit-section">
                        {props.tags.map((value, index) => {
                                    return <span className="label label-lg">
                                    <span key={index} className="label-info label-item label-item-expand">{value}</span>
                                    </span>
                                })}
						</div>
					</div>
                    <div className="autofit-col autofit-col-expand">
                        <div className="autofit-section">
                        <svg className="lexicon-icon lexicon-icon-view inline-item" focusable="false" role="presentation">
                                <use xlinkHref={props.spritemap+"/clay/icons.svg#view"} />
                            </svg>
                        </div>
                    </div>
                </div>

        </div>
        </div>
        </div>
    );
}

export default GrowCard;