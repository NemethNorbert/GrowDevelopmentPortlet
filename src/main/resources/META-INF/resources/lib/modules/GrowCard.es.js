import React from 'react';

const GrowCard = (props) => {
    return(
        <div className="col-lg-6">
            <div className="card">
                <div className="card-body">

                <div className="autofit-row autofit-padded">
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
                        <svg className="lexicon-icon lexicon-icon-star-o" focusable="false" role="presentation">
                            <use xlinkHref={props.spritemap+"/clay/icons.svg#star-o"} />
                        </svg>
                        <svg className="lexicon-icon lexicon-icon-thumbs-up" focusable="false" role="presentation">
                            <use xlinkHref={props.spritemap+"/clay/icons.svg#thumbs-up"} />
                        </svg>
					</div>
				</div>
		</div>

                        {/* <div className="autofit-row autofit-padded">

                            <div className="autofit-col autofit-col-expand">
                                <div className="autofit-section">
                                <img alt="Author's thumbnail" className="img-fluid sticker sticker-primary rounded-circle" src={props.authorAvatar} />
                                </div>

                                <div className="autofit-col autofit-col-expand">
                                <div className="autofit-section">
                                    <h6>Author-date</h6>
                                    </div>
                                </div>

                                <div className="autofit-col autofit-col-expand">
                                    <div className="autofit-section">
                                        <h6>star - like</h6>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                </div>
            </div>
        </div>
    );
}

export default GrowCard;