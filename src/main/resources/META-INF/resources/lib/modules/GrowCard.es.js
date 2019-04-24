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
                        <div className="autofit-section text-secondary">
                            <strong>{props.articleAuthor}</strong>
                            <br />
                            <span>{props.createDate}</span>
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
					<div className="autofit-col autofit-col-expand">
						<div className="autofit-section">
                        {props.articletags.map((tag, index) => {
                                    return <span key={index} className="label label-lg">
                                    <span className="label-info label-item label-item-expand">{tag}</span>
                                    </span>
                                })}
						</div>
					</div>
                    <div className="autofit-col">
                        <div className="autofit-section">
                        <svg className="lexicon-icon lexicon-icon-view inline-item inline-item-before" focusable="false" role="presentation">
                                <use xlinkHref={props.spritemap+"/clay/icons.svg#view"} />
                        </svg>
                        <span>{props.readCount}</span>
                        </div>
                    </div>
                </div>

                <div className="autofit-row autofit-padded text-center">
                    <div className="autofit-col autofit-col-expand">
                        <div className="autofit-section">
                        <svg className="lexicon-icon lexicon-icon-share inline-item inline-item-before" focusable="false" role="presentation">
                                <use xlinkHref={props.spritemap+"/clay/icons.svg#share"} />
                        </svg>
                        <span>{props.articleCategory}</span>
                        </div>
                    </div>
				</div>

        </div>
        </div>
        </div>
    );
}

export default GrowCard;