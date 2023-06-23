import { Icon } from '@iconify/react';
import arrowSmallRightSolid from '@iconify/icons-heroicons/arrow-small-right-solid';
import thumbnail from '../../assets/thumbnail.jpg';
import Button from '../button/Button';
import './coursesCard.css';
const CoursesCard = () => {
  return (
    <div className="lg:w-1/3 sm:w-1/2 shadow-md rounded-lg min-w-min max-w-[364px]">
      <div className="w-fit">
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className="p-4 h-48 flex flex-col justify-between">
        <div>
          <h3 className="tracking-[0.25em] text-gray-400 text-xs pb-2 font-semibold">COURSE</h3>
          <h5 className="h-14 text-xl text-gray-900 font-semibold">The System Design Interview Prep Handbook</h5>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center mb-0">
              <span className="progressBar"></span>
              <hr className="border border-gray-200 w-1" />
              <span className="progressBar"></span>
              <hr className="border border-gray-200 w-1" />
              <span className="progressBar"></span>
            </div>
            <span className="text-xs font-semibold leading-5 m-0">Beginner</span>
          </div>
          <Button theme={'outlined'}>
            <span className="pr-2">Get Started</span>{' '}
            <Icon icon={arrowSmallRightSolid} className=" text-brands-primary font-bold text-2xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
