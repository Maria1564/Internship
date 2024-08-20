import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRepositoriesGitHub, IUserInfo } from "../../interfaces";

export const fetchUserRepos = createAsyncThunk<IRepositoriesGitHub[], string, {rejectValue: string} >(
    "repositories/fetchUserRepos",
    async (username, {rejectWithValue})=>{
            const resp = await fetch(`https://api.github.com/users/${username}`);
            
            if(resp.ok === false){
                return rejectWithValue(`Не удалось получить список репозиториев пользователя ${username}`)
            }
            const infoUser: IUserInfo = await resp.json()

            const urlRepo = infoUser.repos_url;
            
            const response = await fetch(urlRepo)
            return response.json()
        
    }
)


export type repositoriesSliceState = {
    listRepos: IRepositoriesGitHub[],
    error: string | null,
    loading: boolean
}
const initialState: repositoriesSliceState = {
    listRepos: [],
    error: null,
    loading: true
}


const repositoriesSlice = createSlice({
    name: "repositories",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserRepos.pending, (state)=>{
                state.listRepos = []
                state.error = null
                state.loading = true
            })
            .addCase(fetchUserRepos.fulfilled, (state, action)=>  {
                state.listRepos = action.payload
                state.loading = false
            })
            .addCase(fetchUserRepos.rejected, (state, action)=> {
                state.error = action.payload!
                state.loading = false
            })
    }
})

export default repositoriesSlice.reducer