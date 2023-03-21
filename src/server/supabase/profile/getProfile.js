import supabase from "..";


export const getProfile = async (id) => {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', id)
  return { data, error };
};
