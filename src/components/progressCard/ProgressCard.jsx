import { Icon } from '@iconify/react';
import arrowSmallRightSolid from '@iconify/icons-heroicons/arrow-small-right-solid';
import thumbnail from '../../assets/thumbnail.jpg';
import Button from '../button/Button';

const ProgressCard = () => {
  return (
    <div className="shadow-md rounded-lg min-w-min max-w-[784px] w-full p-4">
      <div className="flex mb-4">
        <div className="object-cover w-40 lg:w-52">
          <img src={thumbnail} alt="thumbnail" />
        </div>
        <div className="pl-4">
          <h3 className="tracking-[0.25em] text-gray-400 text-xs font-semibold">COURSE</h3>
          <h5 className="h-14 text-xl text-gray-900 font-semibold">The System Design Interview Prep Handbook</h5>
        </div>
      </div>

      <div className="border-t border-gray-200"></div>
      <div className="flex justify-between items-center p-1 pt-4">
        <div>
          <h3 className="tracking-[0.25em] mb-1 text-gray-500 text-sm font-semibold">2. HOW TO USE EDUCATIVE ANSWERS</h3>
          <h4 className="capitalize text-sm font-medium  text-gray-700">Lesson 1: How to get Started</h4>
        </div>

        <Button theme={'secondary'}>
          <span className="pr-2">Continue Learning</span>{' '}
          <Icon icon={arrowSmallRightSolid} className=" text-white font-bold text-2xl" />
        </Button>
      </div>
    </div>
  );
};

export default ProgressCard;
