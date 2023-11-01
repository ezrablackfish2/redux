import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://imdb-top-60-video-games-ezra.onrender.com/";


const initialState = {
	gameItems: [],
	amount: 1,
	total: 0,
	isLoading: true
}

export const getGameItems = createAsyncThunk('game/getGameItems',
	async (name, thunkAPI) => {
		try {
			console.log("ID", name);
			console.log("thunkAPI", thunkAPI.getState());
			const resp = await axios(url);
			return resp.data
		} catch (error) {
			return thunkAPI.rejectWithValue("there's seems to be an error");
		}
	}
);

const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		clearGame:(state)=> {
			state.gameItems = [];
			state.amount = 0;
		},
		removeItem: (state, action) => {
			console.log("game action", action);
			const itemId = action.payload
			state.gameItems = state.gameItems.filter(
				(item) => item.id !== itemId
			);
		},
		increase: (state, action) => {
			const gameItem = state.gameItems.find((item) => item.id === action.payload)
			gameItem.metascore = gameItem.metascore + 1
		},
		decrease: (state, action) => {
			const gameItem = state.gameItems.find((item) => item.id === action.payload)
			gameItem.metascore = gameItem.metascore - 1
		},
	},
	extraReducers:{
		[getGameItems.pending] : (state) => {
			state.isLoading = true;
		},
		[getGameItems.fulfilled] : (state, action) => {
			console.log("aczian", action);
			state.isLoading = false;
			state.gameItems = action.payload;
			console.log("gameItems = ", state.gameItems);
		},
		[getGameItems.rejected] : (state, action) => {
			console.log("error action", action);
			state.isLoading = false;
		},


	},

})

console.log("gameSlice", gameSlice);

export const { clearGame, removeItem, increase, decrease } = gameSlice.actions;
export default gameSlice.reducer;
