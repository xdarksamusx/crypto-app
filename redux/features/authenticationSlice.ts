import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AuthState {
  loading: boolean;
  userInfo: Record<string, any>;
  userToken: string | null;
  error: string | null;
  success: boolean;
}

const initialState: AuthState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      return await response.json();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.userInfo;
        state.userToken = action.payload.token;
        state.success = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.success = false;
      });
  },
});

export default authSlice.reducer;
