import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Project () {
   return (
     <div>
        <div className="pt-5 pb-2">
              <p className='uppercase font-bold flex justify-center tracking-widest text-gray-600'>
                MyProjects
              </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map(project => (
               <PortfolioItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
               />
            ))}
           </div>
        </div>
      </div>
   )
}

export default Project;