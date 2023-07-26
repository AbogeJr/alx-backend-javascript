import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  return photo === {} || user === {} ? { photo: null, user: null } : { photo, user };
}
