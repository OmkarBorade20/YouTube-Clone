// const GOOGLE_API_KEY = "AIzaSyAtIibgU4boIyzkgbabBCe8BJJsBSfNlWA";

const GOOGLE_API_KEY="AIzaSyBj2lHoShR8KLlodE5Q-FrZJZN8VNrpXuw" 

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults={limit}&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";