'use server'
import { redirect } from 'next/navigation'
 
export async function saveTeam(formData: FormData) {
  const teamName = formData.get('teamname');

  console.log("Team name saved: " + teamName);
//   redirect(`/hunt?teamname=${teamName}`);
}