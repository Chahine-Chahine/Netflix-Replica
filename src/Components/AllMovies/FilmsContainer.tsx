// FilmsContainerComponent.tsx
import style from "./CaroaselComponents.module.css";
import Carousel from "./CarouselComponents";

let moviesGenre = [
	[28, "Action"],
	[12, "Adventure"],
	[16, "Animation"],
	[37, "Western"],
	[80, "Crime"],
	[99, "Documentary"],
	[18, "Drama"],
	[10402, "Music"],
	[9648, "Mystery"],
	[10749, "Romance"],
	[10770, "TV Movie"],
	[53, "Thriller"],
	[35, "Comedy"],
	[10752, "War"],
	
];

const FilmsContainer = () => {
	return (
		<>
			<div className={style.headTextContainer}>
				<h1 className={style.headTitle}>Movies</h1>
				<p className={style.headParagraph}>
					Movies move us like nothing else can, whether they’re scary, funny,
					dramatic, romantic or anywhere in-between. So many titles, so much to
					experience.
				</p>
			</div>
			<div>
				{moviesGenre.map((genres) => {
					const genreId = genres[0] as number;
					const genreName = genres[1];
					
					return (
						<div>
							<p>{genreName}</p>
							<Carousel genre={genreId}/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default FilmsContainer;

// const filmCategories: { genre: string; films: Film[] }[] = [
// 	{
// 		genre: "Action",
// 		films: [
// 			{
// 				id: 1,
// 				title: "Nabil El Gamil Plastic Surgeon",
// 				imageUrl:
// 					"https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSpJemHfCdKRTkwQ0fWQ2WuqABwN5uOibyFBLXATx8wYep5PHkZkRNN6fQrk8rmDEDUterb7pMNBEkQlG9JuHnuLy-qTsIhHblQ.jpg?r=1de",
// 			},
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },
// 			{ id: 3, title: "Nowhere", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ_QMeYxfE-hHZ37kY1XVRgp_3-SKDn-Vkl14YbAX3Cbturp9VDEaIosA5kD6Ce3O6G2bWlXj6xExN8W759zjXyK_0XjbKkSuRQYH0vNkdbIaMNqtacvfCrnWK1XvN99qJO6.jpg?r=4f8" },
// 			{ id: 3, title: "Nowhere", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ_QMeYxfE-hHZ37kY1XVRgp_3-SKDn-Vkl14YbAX3Cbturp9VDEaIosA5kD6Ce3O6G2bWlXj6xExN8W759zjXyK_0XjbKkSuRQYH0vNkdbIaMNqtacvfCrnWK1XvN99qJO6.jpg?r=4f8" },
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },

// 		],

// 	},
// 	{
// 		genre: "Comedy",
// 		films: [
// 			{
// 				id: 1,
// 				title: "Nabil El Gamil Plastic Surgeon",
// 				imageUrl:"https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSpJemHfCdKRTkwQ0fWQ2WuqABwN5uOibyFBLXATx8wYep5PHkZkRNN6fQrk8rmDEDUterb7pMNBEkQlG9JuHnuLy-qTsIhHblQ.jpg?r=1de",
// 			},
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },
// 			{ id: 3, title: "Nowhere", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ_QMeYxfE-hHZ37kY1XVRgp_3-SKDn-Vkl14YbAX3Cbturp9VDEaIosA5kD6Ce3O6G2bWlXj6xExN8W759zjXyK_0XjbKkSuRQYH0vNkdbIaMNqtacvfCrnWK1XvN99qJO6.jpg?r=4f8" },
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },

// 		],
// 	},
// 	// Add more genres as needed
// 	{
// 		genre: "Drama",
// 		films: [
// 			{
// 				id: 1,
// 				title: "Nabil El Gamil Plastic Surgeon",
// 				imageUrl:
// 					"https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSpJemHfCdKRTkwQ0fWQ2WuqABwN5uOibyFBLXATx8wYep5PHkZkRNN6fQrk8rmDEDUterb7pMNBEkQlG9JuHnuLy-qTsIhHblQ.jpg?r=1de",
// 			},
// 			{ id: 2, title: "Another one", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1jDHkESCbHhRerVf7Db4ndcMgvmdLYygiFqPujF1mlrp7tZQRLVGD5jsnVg9UnAvXYMIiEEPC_vXruxsYkDTtR2CNBBV6xUQbZ78qtrTrzNCeHxZQvxW8AjUI-4HqEvEgNPYKqpgOsKZqFVcRAZN0MHaXKBqNC08Bk2ymZaaJqb4s6gJOOI3hFc_1L85Ki2G-6e0aF8TIgBdQ24nEUafRpxmwIWjdIazbCYdH6GMXYgCsrbVsKbVttTI0cKba8ok-rEx2f4dMDNg1X2STmJcA8qjcE.jpg?r=027" },
// 			{ id: 3, title: "Nowhere", imageUrl: "https://occ-0-3409-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ_QMeYxfE-hHZ37kY1XVRgp_3-SKDn-Vkl14YbAX3Cbturp9VDEaIosA5kD6Ce3O6G2bWlXj6xExN8W759zjXyK_0XjbKkSuRQYH0vNkdbIaMNqtacvfCrnWK1XvN99qJO6.jpg?r=4f8" },

// 		],
// 	},
// ];
