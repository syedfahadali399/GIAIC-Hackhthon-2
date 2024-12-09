import Image from "next/image";
import { Poppins } from "next/font/google";

const fontPoppins = Poppins({ subsets: ['latin'],
  weight: ['700']
})

export default function Home() {
  return (
    <div>
      {/* Landing Page 1*/}
      <div className={fontPoppins.className}>
        <section className="w-full h-[716.83px] bg-[url('/landingimg.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="w-full flex flex-row items-center justify-end h-[716.83px] ">
            <div className="w-[643px] h-[463px] bg-[#FFF3E3] flex justify-center items-center max-xl:w-[600px] max-xl:h-[400px] mr-[128px] max-2xl:mr-[82px] max-xl:mr-[54px]">
              <div className="w-[561px] h-[364px] flex flex-col gap-[12px]">
                <div className="w-[123px] h-[24px]">
                  <h1 className="w-[123px] h-[24px] font-semibold text-[16px] text-[#333333] max-lg:h-[125px]">New Arrival</h1>
                </div>
                <p className="w-[447px] h-[142px] font-bold text-[52px] text-[#B88E2F] max-lg:text-[42px]">Discover Our New Collection</p>
                <p className="w-[546px] h-[52px] font-medium text-[18px] text-[#333333]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <div className="w-[200px] h-[74px] mt-[42px] max-lg:mt-[24px] bg-[#B88E2F] flex items-center cursor-pointer justify-center p-[20px]">
                  <button className="w-[100px] h-[24px] font-bold text-[16px] text-[#FFFF]">BUY NOW</button>
                </div>
             </div>
           </div>
         </div>
       </section>
      </div>
      {/* Landing Page 2*/}
      <div className={fontPoppins.className}>
        <section className="w-full h-[725px] flex flex-col gap-[64px] items-center text-center mt-[72px] max-xl:h-[650px]">
          <div className="w-[575px] h-[99.7px] flex flex-col gap-[24px] text-center items-center">
            <h2 className="w-[300px] h-[48px] text-[32px] font-bold text-[#333333]">Browse The Range</h2>
            <p className="w-[589px] h-[28px] text-[20px] font-normal text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="w-full flex flex-row justify-center gap-[64px] h-[550px] max-xl:gap-[42px]">
            <div className="w-[381px] h-[550px] flex flex-col text-center gap-[24px] items-center max-2xl:w-[325px] max-2xl:h-[475px] max-xl:w-[285px] max-xl:h-[425px]">
              <img src="/landingpageone/picone.png" alt="picone" />
              <p className="w-[125px] h-[36px] font-bold text-[24px] text-[#333333]">Dinning</p>
            </div>
            <div className="w-[381px] h-[550px] flex flex-col text-center gap-[24px] items-center max-2xl:w-[325px] max-2xl:h-[475px] max-xl:w-[285px] max-xl:h-[425px]">
              <img src="/landingpageone/pictwo.png" alt="pictwo" />
              <p className="w-[125px] h-[36px] font-bold text-[24px] text-[#333333]">Living</p>
            </div>
            <div className="w-[381px] h-[550px] flex flex-col text-center gap-[24px] items-center max-2xl:w-[325px] max-2xl:h-[475px] max-xl:w-[285px] max-xl:h-[425px]">
              <img src="/landingpageone/picthree.png" alt="picthree" />
              <p className="w-[125px] h-[36px] font-bold text-[24px] text-[#333333]">Bedroom</p>
            </div>
          </div>
        </section>
      </div>
      {/* Landing Page 3*/}
      <div className={fontPoppins.className}>
        <section className="w-full h-[1300px] flex flex-col gap-[64px] mt-[64px] max-xl:h-[1800px]">

          <div className="w-full h-[48px] text-center flex flex-row items-center justify-center justify-items-center">
            <h1 className="w-[269px] h-[48px] text-[40px] text-[#3A3A3A] font-bold">Our Products</h1>
          </div>

          <div className="grid grid-cols-4 gap-[32px] justify-items-center max-xl:grid-cols-3">
            
            <div className="w-[285px] h-[486px] flex flex-col max-2xl:w-[265px]">
              <div className="flex flex-row relative">
                <div className="w-[45px] h-[48px] flex items-center absolute left-56 top-6 border border-[#E97171] rounded-[50%] bg-[#E97171] max-2xl:left-52">
                  <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">-30%</div>
                </div>
                <img className="w-[285px] h-[301px] max-2xl:w-[265px]" src="/landingpagetwo/imgone.png" alt="Imageone" />
              </div>
              <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-2xl:w-[265px]">
                <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                  <h1 className="font-semibold text-[24px] text-[#3A3A3A] w-[123px] h-[29px]">Syltherine</h1>
                  <p className="w-[138px] h-[24px] text-[16px] font-medium text-[#898989]">Stylish cafe chair</p>
                </div>
                <div className="w-[265px] h-[30px] flex flex-row gap-[12px] items-center max-2xl:w-[250px] max-2xl:gap-[8px]">
                  <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-2xl:text-[18px]">Rp 2.500.000</p>
                  <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through max-2xl:text-[14px]">Rp 3.500.000</p>
                </div>
              </div>
            </div>

            <div className="w-[285px] h-[486px] flex flex-col max-2xl:w-[265px]">
              <img className="w-[285px] h-[301px] max-2xl:w-[265px]" src="/landingpagetwo/imgtwo.png" alt="Imagetwo" />
              <div className="w-[285px] h-[145px] max-2xl:w-[265px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
                <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                  <h1 className="w-[92px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">Leviosa</h1>
                  <p className="w-[138px] h-[24px] text-[16px] font-medium text-[#898989]">Stylish cafe chair</p>
                </div>
                  <div className="w-[265px] h-[30px] max-2xl:w-[250px]">
                  <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-2xl:text-[18px]">Rp 2.500.000</p>
                </div>
              </div>
            </div>

            <div className="w-[285px] h-[486px] flex flex-col max-2xl:w-[265px]">
              <div className="flex flex-row relative">
                <div className="w-[45px] h-[48px] flex items-center absolute left-56 top-6 border border-[#E97171] rounded-[50%] bg-[#E97171] max-2xl:left-52">
                  <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">-50%</div>
                </div>
                <img className="w-[285px] h-[301px] max-2xl:w-[265px]" src="/landingpagetwo/imgthree.png" alt="Imagethree" />
              </div>
              <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-2xl:w-[265px]">
                <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                  <h1 className="w-[85px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">lolitho</h1>
                  <p className="w-[121px] h-[24px] text-[16px] font-medium text-[#898989]">Luxury big sofa</p>
                </div>
                <div className="w-[265px] h-[30px] flex flex-row gap-[12px] items-center max-2xl:w-[250px] max-2xl:gap-[8px]">
                  <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-2xl:text-[18px]">Rp 7.000.000</p>
                  <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through max-2xl:text-[14px]">Rp 14.000.000</p>
                </div>
              </div>
            </div>

            <div className="w-[285px] h-[486px] flex flex-col max-2xl:w-[265px]">
              <div className="flex flex-row relative justify-center">
                <div className="w-[45px] h-[48px] flex items-center text-center absolute left-56 top-6 border border-[#2EC1AC] rounded-[50%] bg-[#2EC1AC] max-2xl:left-52">
                  <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">New</div>
                </div>
                <img className="w-[285px] h-[301px] max-2xl:w-[265px]" src="/landingpagetwo/imgfour.jpg" alt="Imagefour" />
              </div>
              <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-2xl:w-[265px]">
                <div className="w-[235px] h-[61px] flex flex-col gap-[12px]">
                  <h1 className=" w-[123px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">Respira</h1>
                  <p className="w-[235px] h-[24px] text-[16px] font-medium text-[#898989]">Outdoor bar table and stool</p>
                </div>
                <div className="w-[265px] h-[30px] max-2xl:w-[250px]">
                  <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-2xl:text-[18px]">Rp 500.000</p>
                </div>
              </div>
            </div>

            <div className="w-[285px] h-[486px] flex flex-col max-2xl:w-[265px]">
              <img className="w-[285px] h-[301px] max-2xl:w-[265px]" src="/landingpagetwo/imgfive.png" alt="Imagefive" />
              <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-2xl:w-[265px]">
                <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                  <h1 className="w-[59px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">Grifo</h1>
                  <p className="w-[90px] h-[24px] text-[16px] font-medium text-[#898989]">Night lamp</p>
                </div>
                  <div className="w-[138px] h-[30px]">
                  <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-2xl:text-[18px]">Rp 1.500.000</p>
                </div>
              </div>
            </div>

            <div className="w-[285px] h-[486px] flex flex-col max-2xl:w-[265px]">
              <div className="flex flex-row relative justify-center">
                <div className="w-[45px] h-[48px] flex items-center text-center absolute left-56 top-6 border border-[#2EC1AC] rounded-[50%] bg-[#2EC1AC] max-2xl:left-52">
                  <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">New</div>
                </div>
                <img className="w-[285px] h-[301px] max-2xl:w-[265px]" src="/landingpagetwo/imgsix.png" alt="Imagesix" />
              </div>
              <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-2xl:w-[265px]">
                <div className="w-[138x] h-[61px] flex flex-col gap-[12px]">
                  <h1 className=" w-[86px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">Muggo</h1>
                  <p className="w-[88px] h-[24px] text-[16px] font-medium text-[#898989]">Small mug</p>
                </div>
                <div className="w-[138px] h-[30px]">
                  <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-2xl:text-[18px]">Rp 150.000</p>
                </div>
              </div>
            </div>

            <div className="w-[285px] h-[486px] flex flex-col max-2xl:w-[265px]">
              <div className="flex flex-row relative">
                <div className="w-[45px] h-[48px] flex items-center absolute left-56 top-6 border border-[#E97171] rounded-[50%] bg-[#E97171] max-2xl:left-52">
                  <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">-50%</div>
                </div>
                <img className="w-[285px] h-[301px] max-2xl:w-[265px]" src="/landingpagetwo/imgseven.jpg" alt="Imageseven" />
              </div>
              <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-2xl:w-[265px]">
                <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                  <h1 className="w-[82px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">Pingky</h1>
                  <p className="w-[103px] h-[24px] text-[16px] font-medium text-[#898989]">Cute bed set</p>
                </div>
                <div className="w-[265px] h-[30px] flex flex-row gap-[12px] items-center max-2xl:w-[250px] max-2xl:gap-[8px]">
                  <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-2xl:text-[18px]">Rp 7.000.000</p>
                  <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through max-2xl:text-[14px]">Rp 14.000.000</p>
                </div>
              </div>
            </div>

            <div className="w-[285px] h-[486px] flex flex-col max-2xl:w-[265px]">
              <div className="flex flex-row relative justify-center">
                <div className="w-[45px] h-[48px] flex items-center text-center absolute left-56 top-6 border border-[#2EC1AC] rounded-[50%] bg-[#2EC1AC] max-2xl:left-52">
                  <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">New</div>
                </div>
                <img className="w-[285px] h-[301px] max-2xl:w-[265px]" src="/landingpagetwo/imgeight.jpg" alt="Imageeight" />
              </div>
              <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px] max-2xl:w-[265px]">
                <div className="w-[235px] h-[61px] flex flex-col gap-[12px]">
                  <h1 className="w-[64px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">Potty</h1>
                  <p className="w-[168px] h-[24px] text-[16px] font-medium text-[#898989]">Minimalist flower pot</p>
                </div>
                <div className="w-[138px] h-[30px]">
                  <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A] max-2xl:text-[18px]">Rp 500.000</p>
                </div>
              </div>
            </div>
     
          </div>

          <div className="w-full flex flex-row text-center items-center justify-center justify-items-center">
            <div className="w-[245px] h-[54px] border-2 border-[#B88E2F] bg-[#FFFF] flex items-center justify-center cursor-pointer">
              <button className="w-[120px] h-[24px] font-semibold text-[18px] text-[#B88E2F]">Show More</button>
            </div>
          </div>
        </section>
      </div>

      {/* Landing Page 3*/}
      <div className={fontPoppins.className}>
        <section className="w-full h-[670px] bg-[#FCF8F3] flex flex-row items-center">
          <div className="w-full h-[670px] flex flex-row gap-[48px] items-center">
            <div className="w-full h-[202px] flex flex-col gap-[24px] pl-[72px] max-2xl:pl-[36px] max-2xl:h-[275px]">
              <h1 className="w-full h-[57px] font-bold text-[40px] text-[#3A3A3A] max-2xl:h-[120px]">50+ Beautiful rooms inspiration</h1>
              <p className="w-[368px] h-[48px] font-medium text-[16px] text-[#616161]">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
              <div className="w-[176px] h-[48px] bg-[#B88E2F] border border-[#B88E2F] flex items-center justify-center">
                <button className="w-[134px] h-[24px] font-semibold text-[16px] text-[#FFFF]">Explore More</button>
              </div>
            </div>

            <div className="w-full h-[582px] flex flex-row gap-[32px]">

              <div className="w-[404px] h-[582px] max-2xl:w-[350px]">
                <div className="w-[404px] h-[582px] max-2xl:w-[350px] bg-[url('/landingpagethree/imgone.png')] bg-cover bg-center bg-no-repeat flex flex-row items-end pl-[28px] pb-[28px]">
                  <div className="w-[217px] h-[130px] bg-[#FFFF] flex flex-col gap-[8px] items-center justify-center">

                    <div className="w-[142px] h-[24px] flex flex-row gap-[8px] items-center">
                      <p className="w-[16px] h-[24px] font-medium text-[16px] text-[#616161]">01</p>
                      <hr className="w-[27px] border border-[#616161]"/>
                      <p className="w-[83px] h-[24px] font-normal text-[16px] text-[#616161]">Bed Room</p>
                    </div>
                    <div className="w-[170px] h-[34px]">
                     <p className="w-[170px] h-[34px] font-semibold text-[28px] text-[#3A3A3A]">Inner Peace</p>
                    </div>
                  </div>
                  <div className="w-[48px] h-[48px] bg-[#B88E2F] flex items-center justify-center">
                    <img className="w-[18px] h-[12px]" src="/landingpagethree/arrowimg.png" alt="ArrowImg" />
                  </div>
                </div>
             </div>
             <div className="w-[372px] h-[524px] flex flex-col justify-between max-2xl:w-[300px] max-xl:hidden">
               <img className="w-[372px] h-[468px] max-2xl:w-[300px]" src="/landingpagethree/imgtwo.png" alt="Imgtwo" />
               <div className="w-[180px] h-[27px] flex flex-row gap-[32px] items-center">
                  <p className="w-[16px] h-[16px] rounded-[50%] bg-[#B88E2F] border-[#B88E2F]"></p>
                  <p className="w-[11px] h-[11px] rounded-[50%] bg-[#D8D8D8]"></p>
                  <p className="w-[11px] h-[11px] rounded-[50%] bg-[#D8D8D8]"></p>
                  <p className="w-[11px] h-[11px] rounded-[50%] bg-[#D8D8D8]"></p>
               </div>
             </div>

             <div className="w-[48px] h-[458px] flex items-center">
               <div className="w-[48px] h-[48px] bg-[#FFFF] rounded-[50%] border-2 border-[#B88E2F] cursor-pointer flex items-center justify-center">
                  <img className="w-[24px] h-[24px]" src="/landingpagethree/sideimg.png" alt="sideImg" />
               </div>  
             </div>
            </div>
          </div>
        </section>
      </div>

      {/* Landing Page 4*/}
      <div className={fontPoppins.className}>
        <section className="w-full h-[1200px] flex flex-col gap-[48px] mt-[64px] items-center text-cente max-xl:h-[1600px]">

          <div className="w-[356px] h-[86px] flex flex-col gap-[12px] items-center">
            <p className="w-[232px] h-[30px] font-semibold text-[20px] text-[#616161]">Share your setup with</p>
            <h1 className="w-[356px] h-[48px] font-bold text-[40px] text-[#3A3A3A]">#FuniroFurniture</h1>
          </div>

          <div className="grid grid-cols-4 gap-[24px] justify-between mt-[32px] items-center justify-items-center w-full h-[975px] max-xl:grid-cols-3 max-xl:h-[1500px]">
            <div className="w-[274px] h-[312px] max-2xl:w-[250px] max-2xl:h-[282px]"> 
              <img src="/landingpagefour/imgone.png" alt="imgone"/>
            </div>
            <div className="w-[451px] h-[227px] max-2xl:w-[325px] max-2xl:h-[165px]">
              <img src="/landingpagefour/imgtwo.png" alt="imgtwo"/>
            </div>
            <div className="w-[295px] h-[429px] max-2xl:w-[250px] max-2xl:h-[365px]">
              <img src="/landingpagefour/imgthree.png" alt="imgthree"/>
            </div>
            <div className="w-[336px] h-[225px] max-2xl:w-[275px] max-2xl:h-[185px]">
              <img src="/landingpagefour/imgfour.png" alt="imgfour"/>
            </div>
            <div className="w-[320px] h-[482px] max-2xl:w-[250px] max-2xl:h-[375px]">
              <img src="/landingpagefour/imgfive.png" alt="imgfive"/>
            </div>
            <div className="w-[344px] h-[516px] max-2xl:w-[275px] max-2xl:h-[410px]">
              <img src="/landingpagefour/imgsix.png" alt="imgsix"/>
            </div>
            <div className="w-[363px] h-[242px] max-2xl:w-[325px] max-2xl:h-[215px]">
              <img src="/landingpagefour/imgseven.png" alt="imgseven"/>
            </div>
            <div className="w-[258px] h-[387px] max-2xl:w-[225px] max-2xl:h-[340px]">
              <img src="/landingpagefour/imgeight.png" alt="imgeight"/>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}