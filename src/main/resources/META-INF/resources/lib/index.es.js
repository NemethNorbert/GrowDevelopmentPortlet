import React from "react";
import ReactDOM from "react-dom";

import GrowCard from "./modules/GrowCard.es";
import GrowToolbar from './modules/GrowToolbar.es'; 
import GrowList from './modules/GrowList.es';
import GrowFavouritesCard from './modules/GrowFavouritesCard.es';


const spritemap = Liferay.ThemeDisplay.getPathThemeImages();

const GrowCardData = {
	articleAuthor: "Gábor Ambrózy",
	authorAvatar: "/o/GrowFavouritesPortlet/images/0.jpeg",
	createDate: "01.01.2019",
	articleTitle: "Respect badge",
	articleContent:
		'A respect badge can be given by anyone to anyone. You can give 1 badge per month. You can use the Respect badge page to add badges. To give a respect badge, @ mention the name in the table, write your name to the From column and write the reason, why do you give it. The reason has to be for a "superpower", something why you respect the other person and something which you would like to learn from them. For Support Hungary 2016Q3 goals, you have to give min. 1 respect badge until Sept 30. If there will be need, we will add gamification to Grow later on.',
	tags: ["badge", "gamification", "respect", "test1", "test2"],
	readCount: "626",
	articleCategory: "Share"
};

const GrowListData = {
	articleAuthor: "Gábor Ambrózy",
	authorAvatar: "/o/GrowFavouritesPortlet/images/0.jpeg",
	createDate: "01.01.2019",
	articleTitle: "Respect badge",
	articleContent:
		'A respect badge can be given by anyone to anyone. You can give 1 badge per month. You can use the Respect badge page to add badges. To give a respect badge, @ mention the name in the table, write your name to the From column and write the reason, why do you give it. The reason has to be for a "superpower", something why you respect the other person and something which you would like to learn from them. For Support Hungary 2016Q3 goals, you have to give min. 1 respect badge until Sept 30. If there will be need, we will add gamification to Grow later on.',
	tags: ["badge", "gamification", "respect", "test1", "test2"],
	articleCategory: "Share"
};

const GrowToolbarData = {
	searchActionURL: "http://localhost:8080",
	searchFormMethod: "POST",
	searchFormName: "grow-search",
	searchFilter: [{label: "Content Type", 
						items: [
							{id: "contenttype-all", name: "filter-contenttype", label: "All", type: "radio", checked: true},
							{id: "contenttype-wikis", name: "filter-contenttype", label: "Wikis", type: "radio"},
							{id: "contenttype-files", name: "filter-contenttype", label: "Files", type: "radio"},
							{id: "contenttype-discussions", name: "filter-contenttype", label: "Discussions", type: "radio"}
					]},
					{label: "Date",
						items: [
							{id: "date-all", name: "filter-date", label: "Anytime", type: "radio", checked: true},
							{id: "date-lasthour", name: "filter-date", label: "Last Hour", type: "radio"},
							{id: "date-last24hours", name: "filter-date", label: "Last 24 Hours", type: "radio"},
							{id: "date-lastweek", name: "filter-date", label: "Last Week", type: "radio"},
							{id: "date-lastmonth", name: "filter-date", label: "Last Month", type: "radio"},
							{id: "date-lastyear", name: "filter-date", label: "Last Year", type: "radio"}
					]}]
};

const GrowTitle = "Explore Articles";

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<GrowCard
							spritemap={spritemap}
							articleAuthor={GrowCardData.articleAuthor}
							articleAuthorAvatar={GrowCardData.authorAvatar}
							articleCreateDate={GrowCardData.createDate}
							articleTitle={GrowCardData.articleTitle}
							articleContent={GrowCardData.articleContent}
							articleTags={GrowCardData.tags}
							articleReadCount={GrowCardData.readCount}
							articleCategory="Learn"
						/>
					</div>
					<div className="col-lg-4">
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
					</div>
					<div className="col-lg-4">
						<GrowCard
							spritemap={spritemap}
							articleAuthor={GrowCardData.articleAuthor}
							articleAuthorAvatar={GrowCardData.authorAvatar}
							articleCreateDate={GrowCardData.createDate}
							articleTitle={GrowCardData.articleTitle}
							articleContent={GrowCardData.articleContent}
							articleTags={GrowCardData.tags}
							articleReadCount={GrowCardData.readCount}
							articleCategory="Excellence"
						/>
					</div>
				</div>
				<div className="col-lg-8">
					<GrowCard
						spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
						articleCategory="People"
					/>
				</div>
				<GrowFavouritesCard
					spritemap={spritemap}
					articleAuthor={GrowCardData.articleAuthor}
					articleAuthorAvatar={GrowCardData.authorAvatar}
					articleCreateDate={GrowCardData.createDate}
					articleTitle={GrowCardData.articleTitle}
					articleCategory={GrowCardData.articleCategory}
				/>

				{/* <GrowList spritemap={spritemap}/> */}

				<GrowToolbar 
					spritemap={spritemap}
					searchActionURL={GrowToolbarData.searchActionURL}
					searchFormMethod={GrowToolbarData.searchFormMethod}
					searchFormName={GrowToolbarData.searchFormName}
					searchFilter={GrowToolbarData.searchFilter}
				/>

				<div className="col-lg-12">
					<GrowList 
						spritemap={spritemap}
						articleCategory={GrowListData.articleCategory}
						articleAuthorAvatar={GrowListData.authorAvatar}
						articleAuthor={GrowListData.articleAuthor}
						articleCreateDate={GrowListData.createDate}
						articleTitle={GrowListData.articleTitle}
						articleContent={GrowListData.articleContent}
						articleTags={GrowListData.tags}
					/>
				</div>
			</div>
		);
	}
}

export default function(elementId) {
	ReactDOM.render(<App />, document.getElementById(elementId));
}
