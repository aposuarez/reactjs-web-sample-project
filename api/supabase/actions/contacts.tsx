import { supabase } from ".."
import { TableKey } from "../../../constants/strings"

const table = "contacts"

export type Contact = {
  id: string,
  createdAt: string,
  name: string
  phone_number: string
}

export type ContactDetail = {
  name: string
  phone_number: string
}

export const addContact = async (newContact: ContactDetail): Promise<Contact | null> => {
  const { data, error } = await supabase
    .from(table)
    .insert([newContact])
    .select()
    .single()

  if (error) throw new Error(error.message)
  return data
}


export const fetchContacts = async (): Promise<Contact[]> => {
  const { data, error } = await supabase.from(table).select(TableKey.ALL)
  if (error) throw new Error(error.message)
  return data || []
}


export const updateContact = async (id: number, updates: ContactDetail) => {
  const { error } = await supabase
    .from(table)
    .update(updates)
    .eq(TableKey.ID, id)
    .select()

  if (error) throw new Error(error.message)
}


export const deleteContact = async (id: number) => {
  const { error } = await supabase
    .from(table)
    .delete()
    .eq(TableKey.ID, id)

  if (error) throw new Error(error.message)
}