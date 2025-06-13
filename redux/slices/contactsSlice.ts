import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Contact } from "../../api/supabase/actions/contacts";
import * as supabaseAPI from '../../api/supabase/actions/contacts'

interface ContactsState {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactsState = {
  contacts: [],
  loading: false,
  error: null,
};

// Fetch contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      return await supabaseAPI.fetchContacts();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Add contact
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact: { name: string; phone_number: string }, thunkAPI) => {
    try {
      return await supabaseAPI.addContact(newContact);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update contact
export const updateContact = createAsyncThunk<
  { id: number; updates: supabaseAPI.ContactDetail },  // Return type
  { id: number; updates: supabaseAPI.ContactDetail },  // Argument type
  { rejectValue: string }
>(
  'contacts/updateContact',
  async ({ id, updates }, thunkAPI) => {
    try {
      await supabaseAPI.updateContact(id, updates);
      return { id, updates };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
// Delete contact
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id: number, thunkAPI) => {
    try {
      await supabaseAPI.deleteContact(id);
      return id; // we return the ID so we can remove it from state
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Slice
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action: PayloadAction<Contact[]>) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Add
      .addCase(addContact.fulfilled, (state, action: PayloadAction<Contact | null>) => {
        if (action.payload) state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      // Delete
      .addCase(deleteContact.fulfilled, (state, action: PayloadAction<number>) => {
        state.contacts = state.contacts.filter(c => Number(c.id) !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default contactsSlice.reducer;