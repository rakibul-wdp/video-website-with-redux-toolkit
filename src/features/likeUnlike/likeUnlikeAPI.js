import axios from 'axios';

export const getLikeUnlike = async (id, lu, update) => {
  if (lu === 'likes') {
    const { data } = await axios.patch(
      `/videos/${id}`,
      {
        likes: update,
      },
      {
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      }
    );
    return { data, lu };
  }
  if (lu === 'unLikes') {
    const { data } = await axios.patch(
      `/videos/${id}`,
      {
        unLikes: update,
      },
      {
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      }
    );
    return { data, lu };
  }
};
