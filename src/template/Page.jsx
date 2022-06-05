import React from 'react';

export function Page(props) {
	const { payload } = props;

	return (
		<div className="text-center font-firamono bg-indigo-100 text-indigo-600 h-screen flex items-center justify-center px-12">
        <div>
          <div className="font-bold text-6xl text-center">
            Hey,{payload.first_name} {payload.last_name}
          </div>
          {payload.message ? (
            <div className="py-6 text-4xl border-4 border-indigo-500 rounded-full bg-white mt-12">
              {payload.message}
            </div>
          ) : null}
          <div className="pt-0 flex items-center justify-center mt-8">
            <img src="https://platform.uhuu.io/common/brand/logos/uhuu_owl.svg" />
          </div>
        </div>
      </div>
	);
}
