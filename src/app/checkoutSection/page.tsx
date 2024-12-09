import { Poppins } from "next/font/google";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["700"] });

let CheckOutSection = () => {
    return(
        <section className={fontPoppins.className}>
          {/* Landing Page 1 */}
          <div className="w-full h-[300px] bg-[url('/shopSection.jpg')] bg-cover bg-center bg-no-repeat opacity-[50%]">
             <div className="flex flex-col h-[300px] items-center justify-center">
                 <div className="w-[112px] h-[72px]">
                     <h1 className="w-[112px] h-[72px] font-medium text-[48px] text-[#000000] opacity-[100%]">Cart</h1>
                 </div>
                 <div className="flex flex-row gap-[8px] items-center">
                     <p className="w-[48px] h-[24px] font-medium text-[16px] text-[#000000]">Home</p>
                     <img className="w-[20px] h-[20px]" src="/shopicon/sidearrow.png" alt="sidearrow"/>
                     <p className="w-[41px] h-[20px] font-light text-[14px] text-[#000000]">Cart</p>
                 </div>
             </div>
          </div>

            {/* Landing Page 2*/}
            <section className="h-[1829px] mt-[100px]">
                <div className="h-[1829px] flex flex-row gap-[48px] justify-evenly">
                    <div className="h-[1714px] flex flex-col gap-[36px]">
                        <h1 className="w-[275px] h-[54px] text-[36px] font-semibold text-[#000000]">Billing details</h1>
                        <div className="flex flex-row gap-[48px] max-2xl:gap-[32px]">
                          <div className="h-[121px] flex flex-col gap-[8px] justify-between">
                              <p className="w-[87px] h-[24px] font-medium text-[16px] text-[#000000]">First Name</p>
                              <input className="w-[320px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" required/>
                          </div>
                          <div className="h-[121px] flex flex-col gap-[8px] justify-between">
                              <p className="w-[86px] h-[24px] font-medium text-[16px] text-[#000000]">Last Name</p>
                              <input className="w-[320px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" required/>
                          </div>
                        </div>
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between">
                          <p className="w-[223px] h-[24px] font-medium text-[16px] text-[#000000]">Company Name (Optional)</p>
                          <input className="w-[320px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" required/>
                        </div>
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between">
                          <p className="w-[137px] h-[24px] font-medium text-[16px] text-[#000000]">Country / Region</p>
                          <input className="w-[320px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" placeholder="Srilanka" required/>
                        </div>
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between">
                          <p className="w-[118px] h-[24px] font-medium text-[16px] text-[#000000]">Street address</p>
                          <input className="w-[320px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" required/>
                        </div>
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between">
                          <p className="w-[92px] h-[24px] font-medium text-[16px] text-[#000000]">Town / City</p>
                          <input className="w-[320px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" required/>
                        </div>
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between">
                          <p className="w-[70px] h-[24px] font-medium text-[16px] text-[#000000]">Province</p>
                          <input className="w-[320px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" placeholder="Western Provience" required/>                    
                        </div>
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between">
                          <p className="w-[68px] h-[24px] font-medium text-[16px] text-[#000000]">ZIP code</p>
                          <input className="w-[320px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" required/>
                        </div>
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between">
                            <p className="w-[51px] h-[24px] font-medium text-[16px] text-[#000000]">Phone</p>
                            <input  className="w-[320px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" required/>
                        </div>
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between">
                            <p className="w-[115px] h-[24px] font-medium text-[16px] text-[#000000]">Email address</p>
                            <input className="w-[320px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" required/>
                        </div>
                        <div className="h-[121px] flex flex-col gap-[8px] justify-between mt-[24px]">
                            <input className="w-[320px] h-[75px] border border-[#9F9F9F] rounded-[12px] pl-[24px]" type="text" placeholder="Additional Information" required/>                          
                        </div>
                    </div>
                    <div className="h-[789px]">
                        <div className="w-full h-[650px] flex flex-col gap-[24px]">
                            <div className="flex flex-row gap-[12px] justify-between">
                                <p className="w-[94px] h-[36px] font-medium text-[24px] text-[#000000]">Product</p>
                                <p className="w-[103px] h-[36px] font-medium text-[24px] text-[#000000]">Subtotal</p>
                            </div>
                            <div className="flex flex-row gap-[12px] justify-between">
                                <p className="w-[135px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">Asgaard sofa * 1</p>
                                <p className="w-[119px] h-[24px] font-normal text-[16px] text-[#000000]">Rs. 250,000.00</p>
                            </div>
                            <div className="flex flex-row gap-[12px] justify-between">
                                <p className="w-[68px] h-[24px] font-normal text-[16px] text-[#000000]">Subtotal</p>
                                <p className="w-[119px] h-[24px] font-normal text-[16px] text-[#000000]">Rs. 250,000.00</p>
                            </div>
                            <div className="flex flex-row gap-[12px] justify-between">
                                <p className="w-[40px] h-[24px] font-normal text-[16px] text-[#000000]">Total</p>
                                <p className="w-[178px] h-[36px] font-semibold text-[24px] text-[#B88E2F]">Rs. 250,000.00</p>
                            </div>
                            <hr className="bg-[#9F9F9F] border border-[#9F9F9F]"/>
                            <div className="flex flex-row gap-[12px] items-center">
                                <p className="w-[14px] h-[14px] rounded-[50%] bg-[#000000]"></p>
                                <p className="w-[180px] h-[24px] font-normal text-[#000000] text-[16px]">Direct Bank Transfer</p>
                            </div>
                            <p className="w-[528px] max-2xl:w-[450px] h-[72px] max-2xl:h-[96px] font-light text-[16px] text-[#9F9F9F]">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            <div className="flex flex-row gap-[12px] items-center">
                                <p className="w-[14px] h-[14px] rounded-[50%] bg-[#FFFF] border border-[#9F9F9F]"></p>
                                <p className="w-[180px] h-[24px] font-medium text-[#9F9F9F] text-[16px]">Direct Bank Transfer</p>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center">
                                <p className="w-[14px] h-[14px] rounded-[50%] bg-[#FFFF] border border-[#9F9F9F]"></p>
                                <p className="w-[180px] h-[24px] font-medium text-[#9F9F9F] text-[16px]">Cash On Delivery</p>
                            </div>
                            <p className="w-[529px] max-2xl:w-[450px] h-[72px] max-2xl:h-[96px] font-light text-[16px] text-[#000000]">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy.</span></p>
                            <div>
                            <div className="w-[250px] h-[70px] flex items-center justify-center border border-black">
                                <button className="w-[125px] h-[30px] font-normal text-[20px] text-[#000000]">Place Order</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Landing Page 3*/}
            <section className="h-[270px] bg-[#FAF3EA]">
             <div className="h-[270px] flex flex-row gap-[42px] items-center justify-center max-2xl:gap-[24px]">
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

export default CheckOutSection