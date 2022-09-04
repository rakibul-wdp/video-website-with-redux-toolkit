import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import likeImage from '../../assets/like.svg';
import unlikeImage from '../../assets/unlike.svg';
import { fetchLikeUnlike } from '../../features/likeUnlike/likeUnlikeSlice';

const LikeUnlike = ({ id, likes, unLikes }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(likes);
  const [unLike, setUnlike] = useState(unLikes);

  const handleLike = (lu) => {
    setLike(like + 1);
    dispatch(fetchLikeUnlike({ id, lu, update: like + 1 }));
  };

  const handleUnLike = (lu) => {
    setUnlike(unLike + 1);
    dispatch(fetchLikeUnlike({ id, lu, update: unLike + 1 }));
  };

  return (
    <div className='flex gap-10 w-48'>
      <div className='flex gap-1'>
        <div onClick={() => handleLike('likes')} className='shrink-0'>
          <img className='w-5 block' src={likeImage} alt='Like' />
        </div>
        <div className='text-sm leading-[1.7142857] text-slate-600'>{like}</div>
      </div>
      <div className='flex gap-1'>
        <div onClick={() => handleUnLike('unLikes')} className='shrink-0'>
          <img className='w-5 block' src={unlikeImage} alt='Unlike' />
        </div>
        <div className='text-sm leading-[1.7142857] text-slate-600'>{unLike}</div>
      </div>
    </div>
  );
};

export default LikeUnlike;
