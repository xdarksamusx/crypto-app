import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface UserInfo {
  id: string;
  username: string;
  email: string;
  token?: string;
}

interface AuthState {
  loading: boolean;
  userInfo: UserInfo | null;
  error: string | null;
  success: boolean;
}

const initialState: AuthState = {
  loading: false,

  error: null,
  success: false,
  userInfo: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:3001/users?email=${credentials.username}&password=${credentials.password}`
      );
      const data = await response.json();

      if (data.length === 0) {
        throw new Error("Invalid credentials");
      }

      return data[0];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      (state.loading = false),
        (state.error = null),
        (state.success = false),
        (state.userInfo = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.success = true;
        console.log("Login successful:", action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.success = false;
        console.error("Login failed:", action.payload);
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
