import React from 'react';
import ReactDOM from 'react-dom';

import GrowList from './modules/GrowList.es';
import GrowCard from './modules/GrowCard.es';
import GrowFavouritesCard from './modules/GrowFavouritesCard.es';
import GrowToolbar from './modules/GrowToolbar.es';

const spritemap = Liferay.ThemeDisplay.getPathThemeImages();

const GrowCardData = {
	articleTitle : "Title",
	articleContent: "content...",
	tags: "tag1"
};

const GrowFavouritesCardData = {};
const GrowListData = {};
const GrowToolbarData = {};

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<GrowCard
					spritemap={spritemap}
					articleTitle={GrowCardData.articleTitle}
				/>
				<GrowFavouritesCard spritemap={spritemap}/>
				<GrowList spritemap={spritemap}/>
				<GrowToolbar spritemap={spritemap}/>
			</div>
		);
	}
}

export default function(elementId) {
	ReactDOM.render(<App />, document.getElementById(elementId));
}