import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = process.env.APP_API_KEY;
console.log(API_KEY);

export const getHomePageVideos = createAsyncThunk(
  "youtube/App/getHomePageVideos", // Ensure the action type is correctly named
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos = [] },
    } = getState();

    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="armwrestling"&key=${API_KEY}&part=snippet&type=video&${
        isNext ? "pageToken=${nextPageTokenFromState} " : ""
      }`
    );

    const items = response.data.items;
    const nextPageToken = response.data.nextPageToken; // Extract the nextPageToken from the response
    const parsedData = await parseData(items);

    return {
      parsedData: [...videos, ...parsedData],
      nextPageToken, // Return the correct nextPageToken
    };
  }
);
