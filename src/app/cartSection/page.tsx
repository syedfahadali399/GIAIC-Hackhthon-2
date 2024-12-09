import { Poppins } from "next/font/google";
import Link from "next/link";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["700"] });

let CartSection = () => {
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
            <p className="w-[41px] h-[24px] font-light text-[14px] text-[#000000]">Cart</p>
          </div>
        </div>
      </div>
      {/* Landing Page 2 */}
      <section className="h-[525px] w-full flex items-center justify-evenly">
        <div className="h-[390px] flex flex-row gap-[64px] justify-around max-xl:gap-[32px]">
          <div className="h-[215px] flex flex-col gap-[48px] justify-evenly">
            <div className="h-[55px] bg-[#F9F1E7] flex flex-row gap-[32px] justify-evenly items-center">
              <p className="w-[63px] h-[24px] font-semibold text-[16px]">Product</p>
              <p className="w-[63px] h-[24px] font-semibold text-[16px]">Price</p>
              <p className="w-[63px] h-[24px] font-semibold text-[16px]">Qauntity</p>
              <p className="w-[63px] h-[24px] font-semibold text-[16px]">Subtotal</p>
            </div>
            <div className="flex flex-row gap-[32px] items-center">
              <div className="w-[108px] h-[105px]">
                <img src="/cartsectionicon/imageone.png" alt="imgone" />
              </div>
              <p className="h-[24px] font-normal text-[16px] text-[#9F9F9F]">Asgaard sofa</p>
              <p className="h-[24px] font-normal text-[16px] text-[#9F9F9F]">Rs. 250,000.00</p>
              <div className="w-[32px] h-[32px] border border-black rounded-[2px] flex flex-col items-center justify-center">
                <p>1</p>
              </div>
              <p className="h-[24px] font-normal text-[16px] text-[#000000]">Rs. 250,000.00</p>
              <div className="w-[28px] h-[28px]">
                <img src="/cartsectionicon/imagetwo.png" alt="imgtwo" />
              </div>
            </div>
          </div>
          <div className="w-[390px] h-[390px] flex flex-col bg-[#F9F1E7] justify-evenly items-center max-xl:w-[320px]">
             <h1 className="w-[186px] h-[48px] font-semibold text-[32px] text-[#000000]">Cart Totals</h1>
             <div className="flex flex-row gap-[32px] items-center">
                <p className="w-[69px] h-[24px] font-medium text-[16px] text-[#000000]">Subtotal</p>
                <p className="w-[125px] h-[24px] font-normal text-[16px] text-[#9F9F9F]">Rs. 250,000.00</p>
             </div>
             <div className="flex flex-row gap-[32px] items-center">
                <p className="w-[41px] h-[24px] font-medium text-[16px] text-[#0000000]">Total</p>
                <p className="w-[155px] h-[30px] font-normal text-[20px] text-[#B88E2F]">Rs. 250,000.00</p>
             </div>
             <div className="w-[222px] h-[60px] rounded-[15px] flex items-center justify-center border border-black">
              <Link href={`checkoutSection`}><button className="w-[125px] h-[30px] font-normal text-[20px] text-[#000000]">Check Out</button></Link>
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

export default CartSection