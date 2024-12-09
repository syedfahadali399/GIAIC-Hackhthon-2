import { Poppins } from "next/font/google";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["700"] });

let BlogSection = () => {
    return(
        <section className={fontPoppins.className}>
             {/* Landing Page 1 */}
             <div className="w-full h-[300px] bg-[url('/shopSection.jpg')] bg-cover bg-center bg-no-repeat opacity-[50%]">
              <div className="flex flex-col h-[300px] items-center justify-center">
                  <div className="w-[115px] h-[72px]">
                     <h1 className="w-[115px] h-[72px] font-medium text-[48px] text-[#000000] opacity-[100%]">Blog</h1>
                 </div>
                 <div className="flex flex-row gap-[8px] items-center">
                     <p className="w-[48px] h-[24px] font-medium text-[16px] text-[#000000]">Home</p>
                     <img className="w-[20px] h-[20px]" src="/shopicon/sidearrow.png" alt="sidearrow"/>
                     <p className="w-[42px] h-[20px] font-light text-[14px] text-[#000000]">Blog</p>
                 </div>
             </div>
           </div>

           {/* Landing Page 2 */}
           <section className="h-[3000px] mt-[100px] max-xl:h-[2800px]">
            <div className="flex flex-row gap-[32px] justify-evenly">
               <div className="flex flex-col gap-[48px]">
                   <div className="h-[885px] flex flex-col gap-[32px] max-xl:h-[775px]">
                       <div className="w-[800px] h-[517px] max-xl:w-[550px] max-xl:h-[355px]">
                         <img src="/blogimg/imgone.jpg" alt="imgone" />
                       </div>
                      <div className="h-[24px] flex flex-row gap-[16px]">
                          <div className="flex flex-row gap-[8px]">
                             <img className="w-[20px] h-[20px]" src="/blogimg/iconone.png" alt="iconone" />  
                             <p className="w-[53px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">Admin</p>  
                           </div>
                           <div className="flex flex-row gap-[8px]">
                             <img className="w-[20px] h-[20px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                             <p className="w-[96px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">14 Oct 2022</p>  
                           </div>
                           <div className="flex flex-row gap-[8px]">
                             <img className="w-[20px] h-[20px]" src="/blogimg/iconone.png" alt="iconone" />  
                             <p className="w-[47px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">Wood</p>  
                           </div>
                       </div>
                       <h1 className="h-[45px] font-medium text-[30px] text-[#000000]">Going all-in with millennial design</h1>
                       <p className="w-[750px] max-xl:w-[550px] h-[140px] max-xl:h-[188px] font-normal text-[15px] text-[#9F9F9F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                       <div className="w-[89px] h-[36px]">
                          <p className="w-[89px] h-[24px] font-normal text-[16px] text-[#000000]">Read more</p>
                          <hr className="w-[89px] border border-[#000000]"/>
                       </div>
                   </div>

                   <div className="h-[885px] flex flex-col gap-[32px] max-xl:h-[950px]">
                       <div className="w-[800px] max-xl:w-[550px] h-[517px]">
                         <img className="w-[800px] h-[517px]" src="/blogimg/imgtwo.jpg" alt="imgtwo" />
                       </div>
                      <div className="h-[24px] flex flex-row gap-[16px]">
                          <div className="flex flex-row gap-[8px]">
                             <img className="w-[20px] h-[20px]" src="/blogimg/iconone.png" alt="iconone" />  
                             <p className="w-[53px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">Admin</p>  
                           </div>
                           <div className="flex flex-row gap-[8px]">
                             <img className="w-[20px] h-[20px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                             <p className="w-[96px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">14 Oct 2022</p>  
                           </div>
                           <div className="flex flex-row gap-[8px]">
                             <img className="w-[20px] h-[20px]" src="/blogimg/iconone.png" alt="iconone" />  
                             <p className="w-[47px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">Wood</p>  
                           </div>
                       </div>
                       <h1 className="h-[45px] font-medium text-[30px] text-[#000000]">Going all-in with millennial design</h1>
                       <p className="w-[750px] max-xl:w-[550px] h-[140px] max-xl:h-[188px] font-normal text-[15px] text-[#9F9F9F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                       <div className="w-[89px] h-[36px]">
                          <p className="w-[89px] h-[24px] font-normal text-[16px] text-[#000000]">Read more</p>
                          <hr className="w-[89px] border border-[#000000]"/>
                       </div>
                   </div>

                   <div className="h-[885px] flex flex-col gap-[32px] max-xl:h-[775px]">
                       <div className="w-[800px] max-xl:w-[550px] h-[517px] max-xl:h-[355px]">
                         <img src="/blogimg/imgthree.jpg" alt="imgthree" />
                       </div>
                      <div className="h-[24px] flex flex-row gap-[16px]">
                          <div className="flex flex-row gap-[8px]">
                             <img className="w-[20px] h-[20px]" src="/blogimg/iconone.png" alt="iconone" />  
                             <p className="w-[53px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">Admin</p>  
                           </div>
                           <div className="flex flex-row gap-[8px]">
                             <img className="w-[20px] h-[20px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                             <p className="w-[96px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">14 Oct 2022</p>  
                           </div>
                           <div className="flex flex-row gap-[8px]">
                             <img className="w-[20px] h-[20px]" src="/blogimg/iconone.png" alt="iconone" />  
                             <p className="w-[47px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">Wood</p>  
                           </div>
                       </div>
                       <h1 className="h-[45px] font-medium text-[30px] text-[#000000]">Going all-in with millennial design</h1>
                       <p className="w-[750px] max-xl:w-[550px] h-[140px] max-xl:h-[188px] font-normal text-[15px] text-[#9F9F9F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                       <div className="w-[89px] h-[36px]">
                          <p className="w-[89px] h-[24px] font-normal text-[16px] text-[#000000]">Read more</p>
                          <hr className="w-[89px] border border-[#000000]"/>
                       </div>
                   </div>
               </div>  
               <div className="flex flex-col gap-[48px]">
                  <div className="w-[360px] h-[537px] flex flex-col gap-[16px] items-center">
                    <div className="w-[320px] h-[52px] border border-[#9F9F9F] rounded-[12px] p-[14px]">
                        <input type="text" placeholder="Sreach Here" required/>
                    </div>
                    <div className="w-[320px] h-[353px] flex flex-col gap-[32px] mt-[32px]">
                        <h2 className="w-[134px] h-[36px] font-medium text-[24px] text-[#000000]">Categories</h2>
                        <div className="w-[300px] h-[28px] flex flex-row justify-between">
                            <p className="w-[49px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">Crafts</p>
                            <p className="w-[10px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">2</p>
                        </div>
                        <div className="w-[300px] h-[28px] flex flex-row justify-between">
                            <p className="w-[55px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">Design</p>
                            <p className="w-[10px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">8</p>
                        </div>
                        <div className="w-[300px] h-[28px] flex flex-row justify-between">
                            <p className="w-[91px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">Handmade</p>
                            <p className="w-[10px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">7</p>
                        </div>
                        <div className="w-[300px] h-[28px] flex flex-row justify-between">
                            <p className="w-[57px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">Interior</p>
                            <p className="w-[10px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">1</p>
                        </div>
                        <div className="w-[300px] h-[28px] flex flex-row justify-between">
                            <p className="w-[47px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">Wood</p>
                            <p className="w-[10px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">6</p>
                        </div>
                    </div>
                  </div>
                  
                  <div className="w-[360px] h-[650px] flex flex-col gap-[32px] ">
                    <h2 className="w-[174px] h-[36px] font-medium text-[24px] text-[#000000]">Recent Posts</h2>
                    <div className="flex flex-row gap-4 items-center">
                      <img className="w-[80px] h-[80px] rounded-[12px]" src="/blogimg/smimgone.jpg" alt="iconthree" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[129px] h-[42px] font-normal text-[14px] text-[#000000]">Going all-in with millennial design</h2>
                         <p className="w-[119px] h-[18px] font-normal text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
                      </div>  
                    </div>
                    <div className="flex flex-row gap-4 items-center rounded-[12px]">
                      <img className="w-[80px] h-[80px] rounded-[12px]" src="/blogimg/smimgtwo.jpg" alt="iconthree" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[149px] h-[42px] font-normal text-[14px] text-[#000000]">Exploring new ways of decorating</h2>
                         <p className="w-[119px] h-[18px] font-normal text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
                      </div>  
                    </div>
                    <div className="flex flex-row gap-4 items-center rounded-[12px]">
                      <img className="w-[80px] h-[80px] rounded-[12px]" src="/blogimg/smimgthree.jpg" alt="iconthree" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[162px] h-[42px] font-normal text-[14px] text-[#000000]">Handmade pieces that took time to make</h2>
                         <p className="w-[119px] h-[18px] font-normal text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
                      </div>  
                    </div>
                    <div className="flex flex-row gap-4 items-center rounded-[12px]">
                      <img className="w-[80px] h-[80px] rounded-[12px]" src="/blogimg/smimgfour.jpg" alt="iconfour" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[119px] h-[42px] font-normal text-[14px] text-[#000000]">Modern home in Milan</h2>
                         <p className="w-[119px] h-[18px] font-normal text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
                      </div>  
                    </div>
                    <div className="flex flex-row gap-4 items-center rounded-[12px]">
                      <img className="w-[80px] h-[80px] rounded-[12px]" src="/blogimg/smimgfive.jpg" alt="iconfive" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[119px] h-[42px] font-normal text-[14px] text-[#000000]">Colorful office redesign</h2>
                         <p className="w-[119px] h-[18px] font-normal text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
                      </div>  
                    </div>
                  </div>
               </div>
            </div>
            <div className="w-full h-[90px] flex flex-row items-center justify-center gap-[24px] mt-[48px]">
          <div className="w-[60px] h-[60px] flex flex-col items-center justify-center bg-[#B88E2F]">
            <p className="w-[7px] h-[30px] text-[#FFFF]">1</p>
          </div>
          <div className="w-[60px] h-[60px] flex flex-col items-center justify-center bg-[#F9F1E7]">
            <p className="w-[7px] h-[30px] font-semibold text-[#000000]">2</p>
          </div>
          <div className="w-[60px] h-[60px] flex flex-col items-center justify-center bg-[#F9F1E7]">
            <p className="w-[7px] h-[30px] text-[#000000]">3</p>
          </div>
          <div className="w-[98px] h-[60px] flex flex-col items-center justify-center bg-[#F9F1E7]">
            <p className="w-[43px] h-[30px] text-[20px] font-light text-[#000000]">
              Next
            </p>
          </div>
        </div>
           </section>

            {/* Landing Page 3*/}
            <section className="h-[270px] bg-[#FAF3EA]">
             <div className="h-[270px] flex flex-row gap-[42px] items-center justify-center max-2xl:gap-[24px] max-xl:grid max-xl:grid-cols-2">
                 <div className="h-[70px] gap-[10px] flex flex-row items-center">
                      <img className="w-[60px] h-[60px]" src="/shopicon/imagefour.png" alt="imgfour" />
                      <div className="w-full h-[70px] flex flex-col gap-[2px]">
                          <p className="w-[187px] h-[38px] font-semibold text-[25px] text-[#242424]">High Quality</p>
                          <p className="w-[275px] h-[30px] font-medium text-[20px] text-[#898989]">crafted from top materials</p>
                     </div>
                 </div>
                 <div className="h-[70px] gap-[10px] flex flex-row items-center">
                      <img className="w-[60px] h-[60px]" src="/shopicon/imagefive.png" alt="imgfive" />
                      <div className="h-[70px] flex flex-col gap-[2px]">
                          <p className="w-[278px] h-[38px] font-semibold text-[25px] text-[#242424]">Warranty Protection</p>
                          <p className="w-[126px] h-[30px] font-medium text-[20px] text-[#898989]">Over 2 years</p>
                      </div>
                 </div>
                 <div className="h-[70px] gap-[10px] flex flex-row items-center">
                      <img className="w-[60px] h-[60px]" src="/shopicon/imagesix.png" alt="imgsix" />
                      <div className="w-full h-[70px] flex flex-col gap-[2px]">
                          <p className="w-[180px] h-[38px] font-semibold text-[25px] text-[#242424]">Free Shipping</p>
                          <p className="w-[163px] h-[30px] font-medium text-[20px] text-[#898989]">Order over 150 $</p>
                     </div>
                 </div>
                 <div className="h-[70px] gap-[10px] flex flex-row items-center">
                     <img className="w-[60px] h-[60px]" src="/shopicon/imageseven.png" alt="imgseven" />
                     <div className="h-[70px] flex flex-col gap-[2px]">
                         <p className="w-[187px] h-[38px] font-semibold text-[25px] text-[#242424]">24 / 7 Support</p>
                         <p className="w-[189px] h-[30px] font-medium text-[20px] text-[#898989]">Dedicated support</p>
                     </div>
                 </div>
             </div>
          </section>
        </section>
    )
}

export default BlogSection