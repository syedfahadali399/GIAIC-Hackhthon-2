import { Poppins } from "next/font/google";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["700"] });

let ContactSection = () => {
    return(
        <section className={fontPoppins.className}>
            {/* Landing Page 1 */}
            <div className="w-full h-[300px] bg-[url('/shopSection.jpg')] bg-cover bg-center bg-no-repeat opacity-[50%]">
              <div className="flex flex-col h-[300px] items-center justify-center">
                  <div className="w-[202px] h-[72px]">
                     <h1 className="w-[202px] h-[72px] font-medium text-[48px] text-[#000000] opacity-[100%]">Contact</h1>
                 </div>
                 <div className="flex flex-row gap-[8px] items-center">
                     <p className="w-[48px] h-[24px] font-medium text-[16px] text-[#000000]">Home</p>
                     <img className="w-[20px] h-[20px]" src="/shopicon/sidearrow.png" alt="sidearrow"/>
                     <p className="w-[62px] h-[24px] font-light text-[14px] text-[#000000]">Contact</p>
                 </div>
             </div>
           </div>

           {/* Landing Page 2 */}
           <section className="w-full">
              <div className="h-[82px] flex flex-col gap-[16px] text-center justify-center items-center mt-[64px]">
                <h1 className="w-[340px] h-[54px] font-semibold text-[32px] text-[#000000]">Get In Touch With Us</h1>
                <p className="w-[644px] h-[48px] font-normal text-[16px] text-[#9F9F9F]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
              </div>
              <div className="h-[823px] flex flex-row gap-[42px] bg-[#FFFF] justify-evenly mt-[100px]">

                <div className="h-[537px] flex flex-col gap-[48px] justify-center">

                    <div className="flex flex-row gap-8 items-center">
                      <img className="w-[28px] h-[32px]" src="/contacticon/iconone.png" alt="iconone" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[99px] h-[36px] font-medium text-[24px] text-[#000000]">Address</h2>
                         <p className="w-[212px] h-[72px] font-normal text-[16px] text-[#000000]">236 5th SE Avenue, New York NY10000, United States</p>
                      </div>  
                    </div>

                    <div className="flex flex-row gap-8 items-center">
                      <img className="w-[28px] h-[32px]" src="/contacticon/icontwo.png" alt="icontwo" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[76px] h-[36px] font-medium text-[24px] text-[#000000]">Phone</h2>
                         <p className="w-[212px] h-[48px] font-normal text-[16px] text-[#000000]">Mobile: +(84) 546-6789
                         Hotline: +(84) 456-6789</p>
                      </div>  
                    </div>

                    <div className="flex flex-row gap-8 items-center">
                      <img className="w-[32px] h-[32px]" src="/contacticon/iconthree.png" alt="iconthree" />
                      <div className="flex flex-col gap-2">
                         <h2 className="w-[166px] h-[36px] font-medium text-[24px] text-[#000000]">Working Time</h2>
                         <p className="w-[212px] h-[96px] font-normal text-[16px] text-[#000000]">Monday-Friday: 9:00 - 22:00
                          Saturday-Sunday: 9:00 - 21:00</p>
                      </div>  
                    </div>
                </div>
                <div className="h-[923px]">
                    <div className="h-[741px] flex flex-col gap-[24px]">
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between">
                          <p className="w-[111px] h-[24px] font-semibold text-[16px] text-[#000000]">Address</p>
                          <input className="w-[340px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" placeholder="Abc" required/>
                        </div>
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between">
                          <p className="w-[143px] h-[24px] font-semibold text-[16px] text-[#000000]">Email address</p>
                          <input className="w-[340px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" placeholder="AAbc@gmail.com" required/>
                        </div>
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between">
                          <p className="w-[75px] h-[24px] font-semibold text-[16px] text-[#000000]">Subject</p>
                          <input className="w-[340px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" placeholder="This is an optional" required/>
                        </div>
                        <div className="h-[155px] flex flex-col gap-[8px] justify-between">
                          <p className="w-[76px] h-[24px] font-semibold text-[16px] text-[#000000]">Message</p>
                          <textarea className="w-[340px] h-[105px] border border-[#9F9F9F] rounded-[12px] p-[24px]" placeholder="Hi! i’d like to ask about" required></textarea>
                        </div>
                        <div className="w-[320px] mt-[32px]">
                          <div className="w-[265px] h-[64px] border-2 border-[#B88E2F] bg-[#B88E2F] flex items-center justify-center cursor-pointer">
                              <button className="w-[120px] h-[24px] font-semibold text-[18px] text-[#FFFF]">Submit</button>
                          </div>
                       </div>
                    </div>
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

export default ContactSection