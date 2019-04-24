import React from 'react';
import ReactDOM from 'react-dom';

// import GrowList from './modules/GrowList.es';
import GrowCard from './modules/GrowCard.es';
// import GrowFavouritesCard from './modules/GrowFavouritesCard.es';
// import GrowToolbar from './modules/GrowToolbar.es';

const spritemap = Liferay.ThemeDisplay.getPathThemeImages();

const GrowCardData = {
	articleAuthor: "Gábor Ambrózy",
	authorAvatar: "/o/GrowFavouritesPortlet/images/0.jpeg",
	createDate: "01.01.2019",
	articleTitle: "Respect badge",
	articleContent: "A respect badge can be given by anyone to anyone. You can give 1 badge per month. You can use the Respect badge page to add badges. To give a respect badge, @ mention the name in the table, write your name to the From column and write the reason, why do you give it. The reason has to be for a \"superpower\", something why you respect the other person and something which you would like to learn from them. For Support Hungary 2016Q3 goals, you have to give min. 1 respect badge until Sept 30. If there will be need, we will add gamification to Grow later on.",
	tags: ["badge", "gamification", "respect", "test1"],
	readCount: "626",
	articleCategory: "Share"
};

// const GrowFavouritesCardData = {};
// const GrowListData = {};
// const GrowToolbarData = {};

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<GrowCard
					spritemap={spritemap}
					articleAuthor={GrowCardData.articleAuthor}
					articleAuthorAvatar={GrowCardData.authorAvatar}
					articleCreateDate={GrowCardData.createDate}
					articleTitle={GrowCardData.articleTitle}
					articleContent={GrowCardData.articleContent}
					articleTags={GrowCardData.tags}
					articleReadCount={GrowCardData.readCount}
					articleCategory={GrowCardData.articleCategory}
				/>
				{/* <GrowFavouritesCard spritemap={spritemap}/>
				<GrowList spritemap={spritemap}/>
				<GrowToolbar spritemap={spritemap}/> */}
			</div>
		);
	}
}

export default function(elementId) {
	ReactDOM.render(<App />, document.getElementById(elementId));
}