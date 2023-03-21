import supabase from '..';

export const updateProfile = async (updates, id) => {
  const { error } = await supabase
    .from('profiles')
    .insert(updates, { returning: 'minimal' }).eq('id', id);
  return { error };
};
