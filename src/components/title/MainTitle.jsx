import React from 'react';

const MainTitle = (title) => {
    return (
      <div className="flex flex-col items-center pb-8 pt-16 px-6">
        <h1 className="text-[36px] font-bold text-[#00A5AF] pb-2 text-center">{title.main}</h1>
        <div className='w-[145px]'>
        <hr className="border-[2px] border-[#00A5AF]"/>
        </div>

      </div>
    );
  };
  
  export default MainTitle;