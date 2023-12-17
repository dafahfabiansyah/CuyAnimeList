import React from 'react';

const loading = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col ">
        {/* <h3 className="text-color-accent text-2xl font-bold animate-pulse">Loading</h3> */}
        <h3 className="loading" />
      </div>
    </div>
  );
};

export default loading;
