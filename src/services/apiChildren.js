import supabase from "./supabase";

export async function createChild(id, name, gender) {
  const { data, error } = await supabase
    .from("children")
    .insert([{ parentID: id, childName: name }]);

  if (error) throw new Error("can't add a child");

  return data;
}
