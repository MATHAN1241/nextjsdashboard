import React from 'react';
import Link from 'next/link';

import Breadcrumb from '../Breadcrumbs/Breadcrumb';
const Payslipcardview = () => {
  return (

<>
<Breadcrumb pageName='payslip-Months'/>
<div className="row">
  <div className="flex flex-cols-2 gap-8">
    <div className="group relative flex h-70 w-80 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl from-sky-200 via-orange-200 to-orange-700 text-center shadow-xl before:absolute before:top-0 before:h-70 before:w-80 before:rounded-t-2xl before:bg-gradient-to-bl before:transition-all before:duration-500 before:content-[''] dark:bg-boxdark">
      <div className="z-10 transition-all duration-500">
        <span className="text-2xl font-semibold dark:text-white">
          April Month PaySlip
        </span>
        <p className="dark:text-white-50 italic">Employee</p>
      </div>
      
      <Link 
  className="z-10 rounded-full bg-purple-700 px-4 py-1 text-slate-50 shadow-md transition-all duration-500 hover:scale-125 hover:bg-orange-500"
  href={'PaySlip/PayForm'}
>
  View slip
</Link>
    </div>
  
    <div className="group relative flex h-70 w-80 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl from-sky-200 via-orange-200 to-orange-700 text-center shadow-xl before:absolute before:top-0 before:h-70 before:w-80 before:rounded-t-2xl before:bg-gradient-to-bl before:transition-all before:duration-500 before:content-[''] dark:bg-boxdark">
      <div className="z-10 transition-all duration-500">
        <span className="text-2xl font-semibold dark:text-white">
          May month PaySlip
        </span>
        <p className="dark:text-white-50 italic">Employee</p>
      </div>
      
    <Link 
  className="z-10 rounded-full bg-purple-700 px-4 py-1 text-slate-50 shadow-md transition-all duration-500 hover:scale-125 hover:bg-orange-500"
  href={'PaySlip/PayForm'}
>
  View slip
</Link>

      
    </div>
  </div>
</div>




  


</>



  



          
        
    
  );
}

export default Payslipcardview;
