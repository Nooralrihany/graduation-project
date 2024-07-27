import cardone from '../assets/cardone.png'
import cardtwo from '../assets/cardtwo.png'
import cardthree from '../assets/cardthree.png'
export const Cards = () => {
    return ( 
  
<section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]  flex items-center justify-center">
   <div className="container">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
               <img
                   src="src/assets/cardone.png"
                  // src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                  // alt="image"
                  // class="w-full"
                  />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                     يهدف إلى تسهيل وتنظيم عملية صف السيارات بطريقة فعالة ومنظمة. يمكن للمستخدمين استخدام التطبيق للعثور على أماكن شاغرة لصف السيارات بسرعة، 
                     </a>
                  </h3>
                  {/* <p class="text-base text-body-color leading-relaxed mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p> */}
                  {/* <a
                     href="javascript:void(0)"
                     class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  View Details
                  </a> */}
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
               <img
                  src='src/assets/cardtwo.png'
                  // src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
                  alt="image"
                  className="w-full"
                  />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                    يمكنهم استخدام التطبيق لمعرفة المواقع التي تتوفر فيها أماكن لصف السيارات فوراً دون الحاجة للبحث بشكل عشوائي.
                     
                     </a>
                  </h3>
                  {/* <p class="text-base text-body-color leading-relaxed mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                     href="javascript:void(0)"
                     class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  View Details
                  </a> */}
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
               <img
                  // src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                  src='src/assets/cardthree.png'
                  alt="image"
                  className="w-full"
                  />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                    بشكل عام، يعد تطبيقك حلاً مبتكراً يلبي احتياجات المستخدمين فيما يتعلق بصف السيارات بطريقة فعالة ومريحة، ويساهم في تحسين تجربتهم اليومية وتقليل إزعاج البحث عن مكان لصف سياراتهم.

                     </a>
                  </h3>
                  {/* <p class="text-base text-body-color leading-relaxed mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                     href="javascript:void(0)"
                     class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  View Details
                  </a> */}
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

     );
}
 
export default Cards;