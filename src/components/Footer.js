import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faSearch} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (

   <div class=" bg-grey-lighter lg:pl-64 lg:pr-64 pb-16 p-8 m-auto bg-black ">
   <div class="sm:flex sm:justify-center sm:items-center bg-black w-full text-white">
 <div class="sm:w-1/4 h-auto md:mr-16">
     <div class="text-orange mb-2">Orange</div>
     <ul class="list-reset leading-normal">
         <li class="hover:text-orange text-grey-darker">One</li>
         <li class="hover:text-orange text-grey-darker">Two</li>
         <li class="hover:text-orange text-grey-darker">Three</li>
         <li class="hover:text-orange text-grey-darker">Four</li>
         <li class="hover:text-orange text-grey-darker">Five</li>
         <li class="hover:text-orange text-grey-darker">Six</li>
         <li class="hover:text-orange text-grey-darker">Seven</li>
         <li class="hover:text-orange text-grey-darker">Eight</li>
     </ul>
 </div>
 <div class="sm:w-1/4 h-auto sm:mt-0 mt-8 md:mr-16">
     <div class="text-blue mb-2">Blue</div>
     <ul class="list-reset leading-normal">
         <li class="hover:text-blue text-grey-darker">One</li>
         <li class="hover:text-blue text-grey-darker">Two</li>
         <li class="hover:text-blue text-grey-darker">Three</li>
     </ul>


 </div>
 <div class="sm:w-1/4 h-auto sm:mt-0 mt-8 md:mr-16">
           <div class="text-green-dark mb-2">Green-dark</div>
     <ul class="list-reset leading-normal">
         <li class="hover:text-green-dark text-grey-darker">One</li>
         <li class="hover:text-green-dark text-grey-darker">Two</li>
         <li class="hover:text-green-dark text-grey-darker">Three</li>
     </ul>

 </div>


</div>
   </div>
  );
};
export default Footer;
