import { createSlice } from '@reduxjs/toolkit'
import { getHomePageVideos } from '../../Store/reducers/getHomePageVideos';
import { getSearchPageVideos } from '../../Store/reducers/getSearchPageVideos';
import { getVideoDetails } from '../../Store/reducers/getVideoDetails';
import {getRecommendedVideos} from '../../Store/reducers/getRecommandedVideos';
const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm:"",
    searchResults:[],
    nextPageToken:null,
    recommendedVideo:[]
};
const youtubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{
        clearVideos:(state)=>{
            state.videos = [];
            state.nextPageToken = null;
        },
        changeSearchTerm:(state,action)=>{
            state.searchTerm = action.payload;
        },
        clearSearchTerm:(state)=>{
            state.searchTerm = "";
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })

        
        builder.addCase(getSearchPageVideos.fulfilled,(state,action)=> {
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
        
        builder.addCase(getRecommendedVideos.fulfilled,(state,action)=> {
            if(action.payload && action.payload.parsedData){
                state.recommendedVideo = action.payload.parsedData;
            }
        })
        builder.addCase(getVideoDetails.fulfilled,(state,action)=> {
                state.currentPlaying = action.payload;
        })
                
    }
}
)
export const {clearVideos,changeSearchTerm,clearSearchTerm} = youtubeSlice.actions;
export default youtubeSlice.reducer;